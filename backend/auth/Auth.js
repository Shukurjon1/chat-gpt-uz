const User = require("../models/User")
const jwt = require('jsonwebtoken')
const jwtSecret = '4715aed3c945f7b0a38e6b534a9583628d84e96d10fbc03700770d572af3dce43625dd'
const nodemailer = require('nodemailer');
const { validate } = require('deep-email-validator');

exports.login = async (req, res, next) => {
  const { email, password } = req.body

  if (!email || !password) {
    return res.status(400).json({
      message: "Email or Password not present",
    });
  }

  try {
    const user = await User.findOne({ email, password })
    const googleUser = await User.findOne({ email })
    if (!user && googleUser) {
      res.status(401).json({
        message: "Kod noto'g'ri. Agar ro'yhatdan o'tish paytida Google'dan foydalangan bo'lsangiz, unda kirish uchun ham Google'dan foydalanishingiz kerak.",
        error: "Wrong Sign-in Strategy"
      });
    } else if (!user) {
      res.status(401).json({
        message: "Bunday foydalanuvchi mavjud emas.",
        error: "User Not Found",
      })
    } else {
      const maxAge = 3 * 60 * 60;
      const token = jwt.sign(
        { id: user._id, email, verified: user.verified },
        jwtSecret,
        {
          expiresIn: maxAge, // 3hrs in sec
        }
      );

      res.cookie("jwt", token, {
        httpOnly: true,
        maxAge: maxAge * 1000, // 3hrs in ms
      });

      res.status(200).json({
        message: "Login muvaffaqiyatli amalga oshirildi",
        user,
      });
    }
  } catch (error) {
    res.status(400).json({
      message: "Serverda xatolik, iltimos keyinroq urinib ko'ring.",
      error: error.message,
    })
  }
}

exports.register = async (req, res, next) => {
  const { email, password, name } = req.body
  if (!password || !name || !email) {
    return res.status(400).json({
      message: "Iltimos, barcha majburiy bo'limlarni to'ldiring",
    })
  }
  const validated = await validate(email);
  if (!validated.valid) {
    return res.status(400).json({
      message: "E-mail mavjud emas."
    });
  }
  if (password.length < 6) {
    return res.status(400).json({ message: "Kod 6ta belgidan yuqori bo'lishi zarur" })
  }
  if (name.length < 2) {
    return res.status(400).json({ message: "Ism juda qisqa" })
  }
  try {
    const user = await User.create({
      name,
      email,
      password,
      ip: req.socket.remoteAddress || "NULL",
      createdAt: Date.now()
    });
    const maxAge = 10 * 60 * 60;

    const token = jwt.sign(
      { id: user._id, name, verified: user.verified, email: user.email, password: user.password },
      jwtSecret,
      {
        expiresIn: maxAge, // 3hrs in sec
      }
    );

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "chatgpt.uz.web@gmail.com",
        pass: "ysulpebyosbfrhmp",
      },
    });

    const verificationLink = "/user-route/" + token;

    const template = ` <!DOCTYPE html><html xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office" lang="en"><head><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet"> <title>Chat-GPT - E-mail Tasdiqlash</title> <meta http-equiv="Content-Type" content="text/html; charset=us-ascii"> <meta name="viewport" content="width=device-width,initial-scale=1"><!--[if mso ]><xml ><o:OfficeDocumentSettings ><o:PixelsPerInch>96</o:PixelsPerInch ><o:AllowPNG /></o:OfficeDocumentSettings></xml ><![endif]--> <!--[if !mso]><!--> <style> * { box-sizing: border-box; font-family: Poppins, Roboto, sans-serif; } body { margin: 0; padding: 0; } a[x-apple-data-detectors] { color: inherit !important; text-decoration: inherit !important; } #MessageViewBody a { color: inherit; text-decoration: none; } p { line-height: inherit; } .desktop_hide, .desktop_hide table { mso-hide: all; display: none; max-height: 0; overflow: hidden; } @media (max-width: 660px) { .row-content { width: 100% !important; } .mobile_hide { display: none; } .stack .column { width: 100%; display: block; } .mobile_hide { min-height: 0; max-height: 0; max-width: 0; overflow: hidden; font-size: 0; } .desktop_hide, .desktop_hide table { display: table !important; max-height: none !important; } } </style></head><body style="background-color: #c5c4cf; margin: 0; padding: 0; -webkit-text-size-adjust: none; text-size-adjust: none;"> <table class="row row-2" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0; mso-table-rspace: 0"> <tbody> <tr> <td> <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0; mso-table-rspace: 0; background-color: #fff; color: #000; width: 640px;" width="640"> <tbody> <tr> <td class="column column-1" width="100%" style="mso-table-lspace: 0; mso-table-rspace: 0; font-weight: 400; text-align: left; padding-left: 10px; padding-right: 10px; vertical-align: top; padding-top: 5px; padding-bottom: 5px; border-top: 0; border-right: 0; border-bottom: 0; border-left: 0;"> <table class="image_block block-2" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0; mso-table-rspace: 0;"> <tr> <td class="pad" style="padding-bottom: 10px; padding-left: 10px; padding-right: 10px; padding-top: 70px; width: 100%;"> <div class="alignment" align="center" style="line-height: 10px;"><img src="https://user-images.githubusercontent.com/87017227/216854788-950b2b22-feb4-4a63-971e-f5cc71fc76df.jpg" style="display: block; border-radius: 10px; height: auto; border: 0; width: 186px; max-width: 100%;" width="186" alt="216854788-950b2b22-feb4-4a63-971e-f5cc71fc76df"></div> </td> </tr> </table> <table class="heading_block block-3" width="100%" border="0" cellpadding="5" cellspacing="0" role="presentation" style="mso-table-lspace: 0; mso-table-rspace: 0;"> <tr> <td class="pad"> <h1 style="margin: 0; color: #555; direction: ltr; font-family: Poppins, Helvetica Neue, Helvetica, Arial, sans-serif; font-size: 35px; font-weight: 700; letter-spacing: normal; line-height: 120%; text-align: center; margin-top: 0; margin-bottom: 0;"><span class="tinyMce-placeholder">Chat-GPT UZ</span></h1> </td> </tr> </table> <table class="button_block block-4" width="100%" border="0" cellpadding="10" cellspacing="0" role="presentation" style="mso-table-lspace: 0; mso-table-rspace: 0;"> <tr> <td class="pad"> <div class="alignment" align="center"> <!--[if mso]><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="https://chat-gpt.uz/user-route/" style="height:44px;width:128px;v-text-anchor:middle;" arcsize="12%" strokeweight="1.5pt" strokecolor="#0471a6" fillcolor="#1483b7"><w:anchorlock/><v:textbox inset="0px,0px,0px,0px"><center style="color:#ffffff; font-family: Poppins,Tahoma, Verdana, sans-serif; font-size:15px"><![endif]--> <a href="${verificationLink}" target="_blank" style="text-decoration: none; display: inline-block; color: #ffffff; background-color: #1483b7; border-radius: 5px; width: auto; border-top: 2px solid #0471a6; font-weight: 400; border-right: 2px solid #0471a6; border-bottom: 2px solid #0471a6; border-left: 2px solid #0471a6; padding-top: 5px; padding-bottom: 5px; font-family: Poppins, 'Roboto', Tahoma, Verdana, Segoe, sans-serif; font-size: 15px; text-align: center; mso-border-alt: none; word-break: keep-all;"><span style="padding-left: 20px; padding-right: 20px; font-size: 15px; display: inline-block; letter-spacing: normal;"><span dir="ltr" style="word-break: break-word; line-height: 30px;">Tasdiqlash!</span></span></a> <!--[if mso]></center></v:textbox></v:roundrect><![endif]--> </div> </td> </tr> </table> </td> </tr> </tbody> </table> </td> </tr> </tbody> </table> <table class="row row-3" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0; mso-table-rspace: 0"> <tbody> <tr> <td> <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0; mso-table-rspace: 0; background-color: #fff; color: #000; width: 640px;" width="640"> <tbody> <tr> <td class="column column-1" width="100%" style="mso-table-lspace: 0; mso-table-rspace: 0; font-weight: 400; text-align: left; padding-left: 10px; padding-right: 10px; vertical-align: top; padding-top: 5px; padding-bottom: 5px; border-top: 0; border-right: 0; border-bottom: 0; border-left: 0;"> <table class="paragraph_block block-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0; mso-table-rspace: 0; word-break: break-word;"> <tr> <td class="pad" style="padding-bottom: 70px; padding-left: 45px; padding-right: 45px; padding-top: 10px;"> <div style="color: #777; direction: ltr; font-family: Poppins, Helvetica Neue, Helvetica, Arial, sans-serif; font-size: 15px; font-weight: 400; letter-spacing: 0; line-height: 120%; text-align: left; mso-line-height-alt: 18px;"> <p style="margin: 0; margin-bottom: 16px;">${name}, &nbsp;<strong>Chat-GPT</strong>'ga xush kelibsiz! 🎉</p> <p style="margin: 0; margin-bottom: 16px;">iltimos, akkountingizni faollashtirish uchun yuqoridagi tugma ustiga bosing. Diqqat, agar siz ro'yhatdan o'tmagan bo'lsangiz, ushbu xabarni e'tiborsiz qoldirishingiz mumkin.&nbsp;</p> <p style="margin: 0; margin-bottom: 16px;">Xurmat bilan,&nbsp;</p> <p style="margin: 0;">Chat-GPT Adminstratori, Humoyun &nbsp;</p> </div> </td> </tr> </table> </td> </tr> </tbody> </table> </td> </tr> </tbody> </table> <table class="row row-4" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0; mso-table-rspace: 0"> <tbody> <tr> <td> <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0; mso-table-rspace: 0; background-color: #e0e2e9; color: #000; width: 640px;" width="640"> <tbody> <tr> <td class="column column-1" width="33.333333333333336%" style="mso-table-lspace: 0; mso-table-rspace: 0; font-weight: 400; text-align: left; vertical-align: top; border-top: 0; border-right: 0; border-bottom: 0; border-left: 0;"> <table class="text_block block-2" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0; mso-table-rspace: 0; word-break: break-word;"> <tr> <td class="pad" style="padding-bottom: 15px; padding-left: 10px; padding-right: 10px; padding-top: 15px;"> <div style="font-family: Poppins, sans-serif;"> <div class="" style="font-size: 14px; mso-line-height-alt: 16.8px; color: #9393a0; line-height: 1.2; font-family: Poppins, Helvetica Neue, Helvetica, Arial, sans-serif;"> <a href="https://chat-gpt.uz/contact" style="margin: 0; font-size: 14px; color: #555; text-align: center; mso-line-height-alt: 16.8px;">Bog'lanish</a> </div> </div> </td> </tr> </table> </td> <td class="column column-2" width="33.333333333333336%" style="mso-table-lspace: 0; mso-table-rspace: 0; font-weight: 400; text-align: left; vertical-align: top; border-top: 0; border-right: 0; border-bottom: 0; border-left: 0;"> <table class="text_block block-2" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0; mso-table-rspace: 0; word-break: break-word;"> <tr> <td class="pad" style="padding-bottom: 15px; padding-left: 10px; padding-right: 10px; padding-top: 15px;"> <div style="font-family: Poppins, sans-serif;"> <div class="" style="font-size: 14px; mso-line-height-alt: 16.8px; color: #9393a0; line-height: 1.2; font-family: Poppins, Helvetica Neue, Helvetica, Arial, sans-serif;"> <a href="https://chat-gpt.uz/privacy-policy" style="margin: 0; font-size: 14px; text-align: center; color: #555; mso-line-height-alt: 16.8px;">Maxfiylik Siyosati</a> </div> </div> </td> </tr> </table> </td> <td class="column column-3" width="33.333333333333336%" style="mso-table-lspace: 0; mso-table-rspace: 0; font-weight: 400; text-align: left; vertical-align: top; border-top: 0; border-right: 0; border-bottom: 0; border-left: 0;"> <table class="text_block block-2" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0; mso-table-rspace: 0; word-break: break-word;"> <tr> <td class="pad" style="padding-bottom: 15px; padding-left: 10px; padding-right: 10px; padding-top: 15px;"> <div style="font-family: Poppins, sans-serif;"> <div class="" style="font-size: 14px; mso-line-height-alt: 16.8px; color: #9393a0; line-height: 1.2; font-family: Poppins, Helvetica Neue, Helvetica, Arial, sans-serif;"> <a href="https://chat-gpt.uz/about" style="margin: 0; color: #555; font-size: 14px; text-align: center; mso-line-height-alt: 16.8px;">Haqida</a> </div> </div> </td> </tr> </table> </td> </tr> </tbody> </table> </td> </tr> </tbody> </table> </td> </tr> </tbody> </table><!-- End --></body></html>`

    await transporter.sendMail({
      from: 'chatgpt.uz.web@gmail.com',
      to: user.email,
      subject: "Chat-GPT Uz",
      html: template
    });

    res.cookie("jwt", token, {
      httpOnly: true,
      maxAge: maxAge * 1000, // 3hrs in ms
    });

    res.status(200).json({
      message: "Muvaffaqiyatli ro'yhatdan o'tdingiz!",
      user,
    })
  } catch (err) {
    res.status(401).json({
      message: "foydalanuvchi avval ro'yhatdan o'tgan.",
      error: err.mesage,
    })
  }
}

