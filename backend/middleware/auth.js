const jwt = require('jsonwebtoken')
const jwtSecret = '4715aed3c945f7b0a38e6b534a9583628d84e96d10fbc03700770d572af3dce43625dd'
const User = require("../models/User")

exports.userAuth = (req, res, next) => {
  const token = req.cookies.jwt
  const jtoken = req.params.jwt
  if (token) {
    jwt.verify(token, jwtSecret, async (err, decodedToken) => {
      if (err) {
        return res.status(401).json({ message: "Serverda xatolik, keyinroq urinib ko'ring." })
      } else {
        if (decodedToken.verified !== true) {
          if (jtoken == token) {
            try {
              const user = await User.findOne({ email: decodedToken.email, password: decodedToken.password })
              if (user) {
                const maxAge = 3 * 60 * 60;
                const token = jwt.sign(
                  { id: user._id, email: user.email, verified: true },
                  jwtSecret,
                  {
                    expiresIn: maxAge, // 3hrs in sec
                  }
                );
                const filter = { email: user.email, password: user.password };
                const update = { verified: true, updatedAt: Date.now() };

                await User.findOneAndUpdate(filter, update);

                res.cookie("jwt", token, {
                  httpOnly: true,
                  maxAge: maxAge * 1000, // 3hrs in ms
                });
                res.redirect("/")

              } else {
                return res.status(401).send({ message: "Akkount tasdiqlanmadi, iltimos keyinroq urinib ko'ring." });
              }
            } catch (_err) {
              return res.status(401).json({ message: "Akkount tasdiqlanmadi" });
            }
          } else {
            return res.status(404).json({ message: "sahifa topilmadi :(" })
          }
        } else return res.status(401).json({ message: "Akkount tasdiqlangan!" })
      }
    })
  } else {
    return res
      .status(401)
      .json({ message: "404 - sahifa mavjud emas" })
  }
}