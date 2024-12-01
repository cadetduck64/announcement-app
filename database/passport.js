const session = require('express-session');
app.use(session({ secret: 'password', resave: false, saveUninitialized: false}));
const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy

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
    const loggedUserData = await database.loginUser(username, password);
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
  done(null, user);
  });
  
passport.deserializeUser(async (id, done) => {
  console.log('deserialized')
  // const data = await pool.query('select * from users where id = $1', [id])
  // console.log(data)
  done(null, id)
});

module.exports = passportFunc