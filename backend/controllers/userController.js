const bcrypt = require('bcryptjs');
const auth = require('../auth');
const db = require('../db/connect');
const cookie = require('cookie');


const register = async (req, response) => {
    const { username, email, password } = req.body;
    const hashedPassword = bcrypt.hashSync(password, 10);
   db.promise().query("select * from users where email = '" + email + "'").then(async (result) => {
      if (result[0][0]) {
        response.status(401).json({ message: 'Email already exists' });
      } else {
        await db.promise().query("CALL addUser('" + username + "','" + email + "','" + hashedPassword + "',@o_user_id);").then(async (result) => {
          await db.promise().query("select @o_user_id").then((res) => {
            const userId = res[0][0]['@o_user_id'];
            const token = auth.getToken(userId);
            response.set('Access-Control-Allow-Credentials', 'true');
            response.set('Access-Control-Expose-Headers', 'date, etag, access-control-allow-origin, access-control-allow-credentials');

            response.setHeader('Set-Cookie', cookie.serialize('token', token, {
              httpOnly: true,
              maxAge: 60 * 60 * 24 * 7,
              sameSite: 'none',
              secure: true,
              path: '/'
            }));
            response.append('Set-Cookie', cookie.serialize('userId',userId, {
              httpOnly: true,
              secure: true,
              path: '/'
            }));
            response.append('Set-Cookie', cookie.serialize('user_name', username, {
              httpOnly: true,
              secure: true,
              path: '/'
            }));
            response.append('Set-Cookie', cookie.serialize('email', email, {
              httpOnly: true,
              secure: true,
              path: '/'
            }));
  
            response.status(201).json({ message: 'User registered successfully'});
          });
          
        });
      }
    });
};

const login = async (req, response) => {
  // code to pull info from cookies.
    const cookies = req.headers.cookie;
    if (cookies) {
          const cookiearr = cookie.parse(cookies);
          console.log(cookiearr.email);
    }

    const email = req.body.email;
    const password = req.body.password;
    response.setHeader('Access-Control-Allow-Credentials', 'true');
    response.setHeader('Access-Control-Expose-Headers', 'date, etag, access-control-allow-credentials');

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
              response.setHeader('Set-Cookie', cookie.serialize('token', token, {
                httpOnly: true,
                maxAge: 60 * 60 * 24 * 7,
                sameSite: 'none',
                secure: true,
                path: '/'
              }));
              response.append('Set-Cookie', cookie.serialize('userId', userdetails.user_id, {
                httpOnly: true,
                secure: true,
                path: '/'
              }));
              response.append('Set-Cookie', cookie.serialize('user_name', userdetails.user_name, {
                httpOnly: true,
                secure: true,
                path: '/'
              }));
              response.append('Set-Cookie', cookie.serialize('email', userdetails.email, {
                httpOnly: true,
                secure: true,
                path: '/'
              }));
              response.status(200).json({ message: 'User login successfully' });
            });
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


