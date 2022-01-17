const models = require("../models");
const db = require("../models");
const uuidv4 = require("uuid");
const bcrypt = require("bcryptjs");
const User = db.users;
const sessionBL = require("./session");

const saltRounds = 6;

async function Login(username, password) {
  const user = await models.user.findOne({
    where: { username: username }
  });

  const isPasswordCorrect = await bcrypt.compare(password, user.pass);
  if (!isPasswordCorrect) {
    throw new Error("Password not correct");
  }

  const sessionId = await sessionBL.Add(user.id);

  return { sessionId: sessionId, userName: user.username };
}

async function Add(username, password, email, name, surname, role) {
  const passHash = await bcrypt.hash(password, saltRounds);

  await User.create({
    id: uuidv4(),
    username: username,
    password: passHash,
    email: email,
    name: name,
    surname: surname,
    role: role
  });
}

module.exports = {
  Login: Login,
  Add: Add
};
