const express = require('express');
const router = express.Router();
const Authentitcator = require('./../domain/jwt/Authenticator');
const User = require("./../model/user/UserSchema");

let authenticator = new Authentitcator();

router.use(function (req, res, next) {
  authenticator.authenticate(req, res, next);
});

//############################
//######### User
//############################

/* GET all users. */
router.get('/users', (req, res) => {
  let errs = [];

  User.find((err, users) => {
    if (err) errs.push(err.message);
    if (errs.length != 0) res.json({"errors": errs});
    res.json({"users": users});
  })
});

/* GET user by id */
router.get('/user/:id', (req, res) => {
  let id = req.params.id;
  User.findById(id, (err, user) => {
    if (err) return res.json({
      "success": false,
      "error":err.message
    });
    res.json({
      "success": true,
      "user": user
    });
  });
});

/* PUT update user information */
router.put('/user/:id', (req, res) => {
  //TODO implements this route
});

// /* DELETE delete user by id */
// router.delete('/user/:id', (req, res) => {
//   //TODO implements this route
// });

module.exports = router;
