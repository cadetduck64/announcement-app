//to do
//make existing users able to become members (dont have to be a member from the jump)
//make become a member view and logic

//boilerplate
const express = require('express');
const app = express();
const path = require('node:path')
require('dotenv').config()
const bcrypt = require('bcryptjs')

//database
const database = require('./database/queries')
const pool = require('./database/pool.js');

//passport boilerplate
const session = require('express-session');
app.use(session({ secret: 'password', resave: false, saveUninitialized: false}));
const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy

//view engine
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

//static assets
const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));
app.use(express.urlencoded({extended: true}))

//passport
app.use(session({
  secret: 'cat',
  resave: false,
  saveUninitialized: false,
  cookie: {secure: true}
}))
app.use(passport.session());
app.use(passport.initialize())
app.use(express.urlencoded({extended: false}))


passport.use(
  new LocalStrategy({      
    //custom name options
    usernameField: 'userNameLogin',
    passwordField: 'passwordLogin',
  },
  async (username, password, done) => {
      try {
      const loggedUserData = await database.loginUser(username);
      const loggedUser = loggedUserData.rows[0]
      console.log('logged user: ' + loggedUser)
      if(loggedUser == undefined)
      {return done(null, false, console.log('incorrect credentials'))}
      if(!loggedUser.username) {
        return done(null, false, console.log('no user'))
      }
      const match = await bcrypt.compare(password, loggedUser.password);
      if(!match) {
        return done(null, false, console.log('incorrect Password'))
      }
      return done(null, loggedUser)
      } catch(err) {
        return done(err)
      }
    }
    )
  )
  
//passport
  passport.serializeUser(async (user, done) => {
    console.log('serialized')
    // console.log(user)
    done(null, user);
    });
    
  passport.deserializeUser(async (user, done) => {
    console.log('deserialized')
    // console.log(user)
    done(null, user)
  });

//route imports
const indexRoute = require('./routes/indexRoute')
const signupRoute = require('./routes/signupRoute')
const loginRoute = require('./routes/loginRoute');
const logoutRoute = require('./routes/logoutRoute.js')
const becomeMemberRoute = require('./routes/becomememberRoute.js')
const newMessageRoute = require('./routes/newMessageRoute.js')
const adminControlsRoute = require('./routes/adminControls.js')

//routes
app.use('/', indexRoute)
app.use('/signup', signupRoute)
app.use('/login', loginRoute)
app.use('/logout', logoutRoute)
app.use('/become-a-member', becomeMemberRoute)
app.use('/newmessage', newMessageRoute)
app.use('/admincontrols', adminControlsRoute)


const PORT = 3000;
app.listen(PORT, () => {console.log(`running on port ${PORT}`)})