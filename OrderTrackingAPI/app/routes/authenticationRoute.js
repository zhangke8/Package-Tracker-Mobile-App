const express = require('express');
const router = express.Router();
const passport = require('passport');
const User = require('../../model/user')

router.route('/register')
    .get( function(req, res){
        console.log("register get get ");
        res.send('hey hey');
    })
    .post(function(req, res) {
        console.log('inside the loop');
        const newUser = new User();
        newUser.name = req.body.name;
        newUser.email = req.body.email;
        newUser.setPassword(req.body.password);
        newUser.save( function(err){
            const token = newUser.generateJwt();
            res.status(200);
            res.json({
                "token": token
            });
        });
    });
router.route('/login')
    .get( function(req, res){
        res.send('login page');
    })
    .post( function(req, res){
        passport.authenticate('local', function(err, user, info){

            if (err) {
              res.status(404).json(err);
              return;
            }
        
            if(user){
              const token = user.generateJwt();
              res.status(200);
              res.json({
                "token" : token
              });
            } else {
              res.status(401).json(info);
            }
          })(req, res);
    }
);
module.exports = router;