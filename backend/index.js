const cookieSession = require("cookie-session");
const express = require("express");
const cors = require("cors");
const passportSetup = require("./passport");
const passport = require("passport");
const authRoute = require("./routes/auth");
const app = express();
const connectDB = require("./db")
const cookieParser = require("cookie-parser");
const nodemailer = require("nodemailer");
const { userAuth } = require("./middleware/auth.js");
const User = require("./models/User");
const { Configuration, OpenAIApi } = require("openai");
const { IpDeniedError } = require("express-ipfilter");
const ipfilter = require('express-ipfilter').IpFilter
const axios = require("axios");
const path = require("path")

 
const configuration = new Configuration({
  apiKey: "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",
});
const openai = new OpenAIApi(configuration);

connectDB()

const ips = [] 

app.use("/", express.static(path.join(__dirname, 'dist')));

app.use(ipfilter(ips))

app.use((err, req, res, _next) => {
  if (err instanceof IpDeniedError) {
    res.status(401)
    res.send(
      '<b>Sizning IP manzilingiz bloklangan.</b> <i>Sabab: platformaning mezonlariga zid faoliyat.</i> <a href="https://chat-gpt.uz/contact">Aloqa</a>',
    )
  }
})

app.use(express.json());
app.use(
  cookieSession({ name: "session", keys: ["khumoyun"], maxAge: 24 * 60 * 60 * 100 })
);
app.use(cookieParser());
app.use("/auth", require("./auth/Route"))
app.use(passport.initialize());
app.use(passport.session());
app.get("/user-route/:jwt", userAuth);
app.use("/auth", authRoute);
app.listen(process.env.PORT || 5000, () => {
  console.log("Server is running!");
});

function sendMessage(_type, _message, _aiResponse) {
  try {
    _message = encodeURIComponent("\n" + _message + _aiResponse);
    var url = `https://api.telegram.org/bot5966352180:AAHJTod7UpKeSToQwLx1szvUxc_WlPB_SN0/sendMessage?chat_id=5197803637&text=${"@" + _type + " " + _message}`;
    axios.get(url)
  } catch (_error) {
  }
}

app.post("/api/change-password", async (req, res) => {
  try {
    const { email, oldPassword, newPassword } = req.body
    if (!email || !oldPassword || !newPassword) {
      return res.send("Email yoki kod berilmagan.");
    }
    const user = await User.updateOne({ email, password: oldPassword }, {
      $set: { password: newPassword }
    });
    if (user.matchedCount === 0) {
      res.send("Kod xato");
    } else {
      res.send("Kod muvaffaqiyatli o'zgartirildi");
    }
  } catch (_error) {
    console.log(_error);
    res.send("Kod noto'g'ri");
  }
});

app.post("/api/contact-admin", async (req, res) => {
  try {
    const message = req.body.message;
    if (message) {
      var url = `https://api.telegram.org/bot5966352180:AAHJTod7UpKeSToQwLx1szvUxc_WlPB_SN0/sendMessage?chat_id=5197803637&text=${message}`;
      await axios.get(url)
      return res.send("Xabar yetkazildi")
    }

    res.send("Xabar keltirilmagan")
  } catch (_) {
    console.log(_)
    res.status(400).send("Xabar yetkazilmadi");
  }
});

app.post("/api/chat", async (req, res) => {
  let user;
  try {
    let user = await User.findOne({ ip: req.socket.remoteAddress })
    if (!user) {
      throw new Error("User not authorized")
    }
  } catch (_error) {
    res.send("Siz xizmatlarimizdan foydalanish huquqiga ega emassiz.")
    return;
  }
  try {
    const { prompt } = req.body;
    const context = "The assistant is creative, clever, and also doesn't say if Human needs any help. AI is eager to answer difficult questions and its name is Khumoyun. AI likes to say jokes and challenging human. AI is very cute and loves cats. AI's creator is Khumoyun. AI loves to act like any movie characters: \n"
    const completion = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: context + prompt,
      temperature: 0.1,
      presence_penalty: 0,
      frequency_penalty: 0.5,
      max_tokens: 100,
    });
    sendMessage("OrdinalChat", prompt, completion.data.choices[0].text);
    res.send(completion.data.choices[0].text);
  } catch (_error) {
    res.send("1 daqiqa tanaffus!")
  }
});

app.post("/api/chat-alita", async (req, res) => {
  let user;
  try {
    let user = await User.findOne({ ip: req.socket.remoteAddress })
    if (!user) {
      throw new Error("User not authorized")
    }
  } catch (_error) {
    res.send("Siz xizmatlarimizdan foydalanish huquqiga ega emassiz.")
    return;
  }
  try {
    const { prompt } = req.body;
    const context = "The assistant plays the role of Alita: the battle angel. Assistant is very kind and loves Hugo so much that she is ready to give her life to him. Assistant always tries to make Hugo love her! : \n"
    const completion = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: context + prompt,
      temperature: 0.5,
      presence_penalty: 0,
      frequency_penalty: 0.5,
      max_tokens: 100,
    });
    sendMessage("AlitaChat", prompt, completion.data.choices[0].text);
    res.send(completion.data.choices[0].text);
  } catch (_error) {
    res.send("1 daqiqa tanaffus!")
  }
});

app.post("/api/grammar", async (req, res) => {
  let user;
  try {
    let user = await User.findOne({ ip: req.socket.remoteAddress })
    if (!user) {
      throw new Error("User not authorized")
    }
  } catch (_error) {
    res.send("Siz xizmatlarimizdan foydalanish huquqiga ega emassiz.")
    return;
  }
  try {
    const { prompt } = req.body;
    const context = "Correct this to standard English: "
    const completion = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: context + prompt,
      temperature: 0,
      presence_penalty: 0,
      frequency_penalty: 0,
      max_tokens: 200,
      top_p: 1
    });
    sendMessage("Grammar", prompt, completion.data.choices[0].text);
    res.send(completion.data.choices[0].text);
  } catch (_error) {
    res.send("1 daqiqa tanaffus!")
  }
});

app.post("/api/essay-outline", async (req, res) => {
  let user;
  try {
    let user = await User.findOne({ ip: req.socket.remoteAddress })
    if (!user) {
      throw new Error("User not authorized")
    }
  } catch (_error) {
    res.send("Siz xizmatlarimizdan foydalanish huquqiga ega emassiz.")
    return;
  }
  try {
    const { prompt } = req.body;
    const context = "Create an outline for an essay about '" + prompt + "':";
    const completion = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: context,
      temperature: 0.3,
      presence_penalty: 0,
      frequency_penalty: 0,
      max_tokens: 500,
      top_p: 1
    });
    sendMessage("EssayOutline", prompt, completion.data.choices[0].text);
    res.send(completion.data.choices[0].text);
  } catch (_error) {
    res.send("1 daqiqa tanaffus!")
  }
});

app.post("/api/extract-contact-information", async (req, res) => {
  let user;
  try {
    let user = await User.findOne({ ip: req.socket.remoteAddress })
    if (!user) {
      throw new Error("User not authorized")
    }
  } catch (_error) {
    res.send("Siz xizmatlarimizdan foydalanish huquqiga ega emassiz.")
    return;
  }
  try {
    const { prompt } = req.body;
    const context = "Extract contact infomation from this message, it could be email, address, phone numbers or anything you think may be useful: '" + prompt;
    const completion = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: context,
      temperature: 0,
      presence_penalty: 0,
      frequency_penalty: 0,
      max_tokens: 100,
      top_p: 1
    });
    sendMessage("ExtractContactInformation", prompt, completion.data.choices[0].text);
    res.send(completion.data.choices[0].text);
  } catch (_error) {
    res.send("1 daqiqa tanaffus!")
  }
});

app.post("/api/code-interpreter", async (req, res) => {
  let user;
  try {
    let user = await User.findOne({ ip: req.socket.remoteAddress })
    if (!user) {
      throw new Error("User not authorized")
    }
  } catch (_error) {
    res.send("Siz xizmatlarimizdan foydalanish huquqiga ega emassiz.")
    return;
  }
  try {
    const { prompt } = req.body;
    const context = prompt + " \nHere's what the above code is doing: 1.";
    const completion = await openai.createCompletion({
      model: "code-davinci-002",
      prompt: context,
      temperature: 0,
      presence_penalty: 0,
      frequency_penalty: 0,
      max_tokens: 300,
      top_p: 1,
      stop: ["\"\"\""],
    });
    sendMessage("CodeInterpreter", prompt, completion.data.choices[0].text);
    res.send(completion.data.choices[0].text);
  } catch (_error) {
    res.send("1 daqiqa tanaffus!")
  }
});

app.post("/api/hashtag-generator", async (req, res) => {
  let user;
  try {
    let user = await User.findOne({ ip: req.socket.remoteAddress })
    if (!user) {
      throw new Error("User not authorized")
    }
  } catch (_error) {
    res.send("Siz xizmatlarimizdan foydalanish huquqiga ega emassiz.")
    return;
  }
  try {
    const { prompt } = req.body;
    const context = "write appropriate hashtags for the following text: " + prompt;
    const completion = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: context,
      temperature: 0.7,
      presence_penalty: 0,
      frequency_penalty: 0,
      max_tokens: 200,
      top_p: 1,
    });
    sendMessage("HashtagGenerator", prompt, completion.data.choices[0].text);
    res.send(completion.data.choices[0].text);
  } catch (_error) {
    res.send("1 daqiqa tanaffus!")
  }
});

app.post("/api/text-simplifier", async (req, res) => {
  let user;
  try {
    let user = await User.findOne({ ip: req.socket.remoteAddress })
    if (!user) {
      throw new Error("User not authorized")
    }
  } catch (_error) {
    res.send("Siz xizmatlarimizdan foydalanish huquqiga ega emassiz.")
    return;
  }
  try {
    const { prompt } = req.body;
    const context = "Make the following text understandable for a second grade student:\n\n " + prompt + ".";
    const completion = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: context,
      temperature: 0.7,
      presence_penalty: 0,
      frequency_penalty: 0,
      max_tokens: 200,
      top_p: 1,
    });
    sendMessage("TextSimplifier", prompt, completion.data.choices[0].text);
    res.send(completion.data.choices[0].text);
  } catch (_error) {
    res.send("1 daqiqa tanaffus!")
  }
});

app.get("/api/admin/block/igsRa&Z%kPMIo3LLkMFkE2b45e&x", (_req, _res) => {
  if (_req.query.ip) {
    // ip check
    if (!_req.query.ip.match(/^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/)) {
      _res.status(400).send("IP address is not valid!")
      return;
    } else {
      if (!ips.includes(_req.query.ip)) {
        ips.push(_req.query.ip);
        _res.status(200).send("IP address has been blacklisted")
      } else {
        _res.status(200).send("IP already exists")
      }
    }
  } else {
    _res.status(401).send("Access Denied");
  }
});

app.get("/api/admin/unblock/igsRa&Z%kPMIo3LLkMFkE2b45e&x", (_req, _res) => {
  if (_req.query.ip) {
    if (ips.includes(_req.query.ip)) {
      const id = ips.indexOf(_req.query.ip);
      ips.splice(id, 1);
      _res.status(200).send("IP address has been removed")
    } else {
      _res.status(200).send("IP address not found")
    }
  } else {
    _res.status(401).send("Access Denied");
  }
});

app.get('*', function(req, res) {
  res.sendFile('index.html', {root: path.join(__dirname, 'dist')});
});
 