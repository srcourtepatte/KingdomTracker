const bcrypt = require('bcryptjs');
const auth = require('../auth');
const db = require('../db/connect');

const register = async (req, res) => {
    const { username, email, password } = req.body;
    const hashedPassword = bcrypt.hashSync(password, 10);
  
    db.promise().query("select * from users where email = '" + email + "'").then((result) => {
      if (result[0][0]) {
        res.status(401).json({ message: 'Email already exists' });
      } else {
        db.promise().query("CALL addUser('" + username + "','" + email + "','" + hashedPassword + "');").then((result) => {
          res.status(201).json({ message: 'User registered successfully' });
        });
      }
    });
  
};

const login = async (req, response) => {
    const email = req.body.body.email;
    const password = req.body.body.password;
  
    await db.promise().query("CALL Login('" + email + "',@o_user_id, @hashedPassword)").then(async (result) => {
  
      await db.promise().query("select @hashedPassword, @o_user_id").then((res) => {
        if (res[0][0]['@o_user_id'] == null) {
          response.status(401).json({ message: 'email not found' });
        }
        else {
          if (bcrypt.compareSync(password, res[0][0]['@hashedPassword'])) {
            let userdetails = {};
            db.promise().query("select user_id, user_name, email from users where user_id = @o_user_id").then((r) => {
              userdetails = r[0][0];
              const token = auth.getToken(userdetails.user_id);
              response.status(200).json({ message: 'User login successfully', data: { userDetails: userdetails, accessToken: token } });
            })
          } else {
            response.status(401).json({ message: 'Invalid username or password' });
          }
        }
  
      });
    });
  };

module.exports = {
    register, login
};