require('dotenv').config();
const passport = require('passport');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwT = require('passport-jwt').ExtractJwt;
const LocalStrategy = require('passport-local').Strategy;
const jwt = require('jsonwebtoken');
const cookie = require('cookie');

const SECRET_KEY = process.env.SECRET_KEY;

const getToken = (user_id) => {
    return jwt.sign({user_id}, SECRET_KEY, {expiresIn: 3600});
};

const verifyToken = (token) =>{
    return jwt.verify(token, SECRET_KEY);
};

const authMiddleware = (req, res, next) => {
    const cookies = req.headers.cookie;
    const cookieArr = cookie.parse(cookies);
    const token = cookieArr.token;
    if (!token) {
      return res.status(401).send("Access denied");
    }
  
    try {
      const decoded = verifyToken(token);
      req.user_id = decoded.user_id;
      next();
    } catch (err) {
      res.status(401).send("Invalid token" + err);
    }
  };

module.exports = {
    getToken,
    verifyToken,
    authMiddleware
};