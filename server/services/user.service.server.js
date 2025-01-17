module.exports = function(app) {
    const userModel = require("../models/user/user.model.server");
    // const pictureModel = require("../models/picture/picture.model.server");
  
    // var fs = require("fs");
  
    const passport = require("passport");
    const LocalStrategy = require("passport-local").Strategy;
    const LinkedInStrategy = require("passport-linkedin-oauth2").Strategy;
  
    passport.serializeUser(serializeUser);
    passport.deserializeUser(deserializeUser);
  
    
  
    app.post("/api/user", createUser);
    app.get("/api/user", findUsers);
    app.get("/api/user/:uid", findUserById);
    // app.post("/api/user/:uid/upload", upload.single("image"), uploadImage);
    app.post("/api/login", passport.authenticate("local"), login);
    app.post("/api/logout", logout);
    app.post("/api/loggedIn", loggedIn);
    app.put("/api/user/:uid", updateUser);
    app.delete("/api/user/:uid", deleteUser);
    // app.get("/api/user/:uid/picture", downloadPic);
  
    app.get("/auth/linkedin", (req, res, next) => {
      passport.authenticate("linkedin")(req, res, next);
    });
  
    // Call back from LinkedIn
    app.get("/auth/linkedin/callback", (req, res, next) => {
      passport.authenticate("linkedin")(req, res, next);
      req.login(req.user, err => {
        res.redirect("/");
      });
    });
  
    // Local Strategy
    passport.use(
      new LocalStrategy(
        {
          usernameField: "email"
        },
        function(username, password, done) {
          userModel.findUserByCredentials(username, password).then(user => {
            if (user) {
              return done(null, user);
            } else {
              return done(null, false);
            }
          });
        }
      )
    );
  
    // Linked Strategy
    passport.use(
      new LinkedInStrategy(
        {
          clientID: process.env.CLIENT_ID || "test", // should be replaced with process.env.CLIENT_ID in a real application
          clientSecret: process.env.CLEINT_SECRET || "test", // should be replaced with process.env.CLIENT_SECRET in a real application
          callbackURL: "/auth/linkedin/callback",
          scope: ["r_emailaddress", "r_basicprofile"],
          state: true,
          passReqToCallback: true
        },
        function(req, accessToken, refreshToken, profile, done) {
          // asynchronous verification, for effect...
          process.nextTick(function() {
            const user = req.user;
            // console.log(profile._json);
            user.firstName = profile._json.firstName;
            user.lastName = profile._json.lastName;
            user.image = profile._json.pictureUrls.values[0];
            user.linkedin = profile._json.publicProfileUrl;
            user.bio = profile._json.summary;
            user.icon = profile._json.pictureUrl;
            userModel.updateUser(user._id, user).then(() => {
              // console.log(profile._json.pictureUrls.values[0]);
              return done(null, profile);
            });
          });
        }
      )
    );
  
   
  
    function loggedIn(req, res) {
      if (req.isAuthenticated()) {
        res.json(req.user);
      } else {
        res.send("0");
      }
    }
  
    function login(req, res) {
      res.json(req.user);
    }
  
    function logout(req, res) {
      req.logOut();
      res.sendStatus(200);
    }
  
    function serializeUser(user, done) {
      done(null, user);
    }
  
    function deserializeUser(user, done) {
      userModel.findUserById(user._id).then(
        user => {
          done(null, user);
        },
        err => {
          done(err, null);
        }
      );
    }
  
    function createUser(req, res) {
      const newUser = req.body;
      userModel
        .createUser(newUser)
        .then(user => {
          res.json(user);
        })
        .catch(err => {
          console.log(err);
        });
    }
  
    function findUsers(req, res) {
      const username = req.query["username"];
      const password = req.query["password"];
      if (username && password) {
        userModel.findUserByCredentials(username, password).then(user => {
          res.json(user);
        });
        return;
      } else if (username) {
        userModel.findUserByUsername(username).then(user => {
          res.json(user);
        });
        return;
      }
      userModel.findUsers().then(users => {
        res.json(users);
      });
    }
  
    function findUserById(req, res) {
      const uid = req.params["uid"];
      userModel.findUserById(uid).then(user => {
        res.json(user);
      });
    }
  
  
    function updateUser(req, res) {
      const uid = req.params["uid"];
      const user = req.body;
      userModel.updateUser(uid, user).then(data => {
        res.json(user);
      });
    }
  
    function deleteUser(req, res) {
      const uid = req.params["uid"];
      userModel.deleteUser(uid).then(data => {
        res.send(data);
      });
    }
  };
  