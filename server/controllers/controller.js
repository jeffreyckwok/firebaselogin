var mongoose = require('mongoose');

var User = mongoose.model('User');

var Place = mongoose.model('Place');

var Review = mongoose.model('Review');

module.exports = {

  loginReg: (req, res) => {
    User.findOne({name: req.body.name}, (err, user)=> {
      if(user == null) {
        let newUser = new User(req.body);
        newUser.save( (err, savedUser) => {
          if(err) {
            console.log(err);
            return res.sendStatus(500);
          } else {
            req.session.user = savedUser;
            return res.json(savedUser);
          }
        })
      } else {
        req.session.user = user;
        return res.json(user)
      }
    })
  },

  current: (req, res) => {
    if(!req.session.user) {
      return res.status(401).send("nice try")
    } else {
      return res.json(req.session.user);
    }
  },

  logout: (req, res) => {
    req.session.destroy();
    res.redirect('/');
  },

  savePlace: (req, res) => {
    if(!req.session.user) {
      return res.sendStatus(401)
    } else {
      User.findOne({_id: req.params.user_id}, (err, user) => {
        if(err) {
          console.log(err);
          return res.sendStatus(500);
        } else {
          let place = new Place(req.body);
          place.user = req.session.user._id;
          if(err) {
            console.log(err);
            return;
          } else {
            place.save( (err, savedPlace) => {
              if(err) {
                console.log(err);
                return
              } else {
                return res.json(savedPlace);
              }
            })
          }
        }
      })
    }
  },

  getAllPlaces: (req, res) => {
    if(!req.session.user) {
      return res.sendStatus(401)
    }else {
      Place.find({user: req.session.user._id}, (err, place_id) => {
        if(err) {
          console.log(err);
          return res.sendStatus(500)
        } else {
          return res.json(place_id);
        }
      })

    }
  },



}
