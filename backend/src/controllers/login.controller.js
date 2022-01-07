const db = require("../models");
const User = db.users;
const Op = db.Sequelize.Op;

app.get('/login', (req, res) => {
    res.sendFile(__dirname + '/static/login.html'); //promijeniti za React
  });

app.get('/dashboard', connectEnsureLogin.ensureLoggedIn(), (req, res) => {
  res.send(`Hello ${req.user.username}. Your session ID is ${req.sessionID} 
   and your session expires in ${req.session.cookie.maxAge} 
   milliseconds.<br><br>
   <a href="/logout">Log Out</a><br><br>
   `);
});

app.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/login');
  });

app.post('/login', passport.authenticate('local', { failureRedirect: '/' }),  function(req, res) {
	console.log(req.user)
	res.redirect('/dashboard');
});