const router = require("express").Router();
const passport = require("passport");
const User = require("../models/User");

const CLIENT_URL = "/";

router.get("/login/success", async (req, res) => {
  if (req.user) {
    try {
      const email = req.user.emails[0].value;
      const password = "qidhwhd2"
      const name = req.user.displayName;
      const photo = req.user.photos[0].value;
      await User.create({
        email, password, name, photo, verified: true, createdAt: Date.now(), ip: req.socket.remoteAddress || "NULL",
      })
    } catch (_error) {}
    res.status(200).json({
      success: true,
      message: "successfull",
      user: req.user,
      //   cookies: req.cookies
    });
  }
});

router.get("/login/failed", (req, res) => {
  res.status(401).json({
    success: false,
    message: "failure",
  });
});

router.get("/logout", (req, res) => {
  req.logout();
  res.redirect(CLIENT_URL);
});

router.get("/google", passport.authenticate("google", { scope: ["profile", "email"] }));

router.get(
  "/google/callback",
  passport.authenticate("google", {
    successRedirect: CLIENT_URL,
    failureRedirect: "/login/failed",
  })
);


module.exports = router