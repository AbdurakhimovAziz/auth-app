const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const usersService = require('../services/UserService');

const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.JWT_SECRET,
  passRequestCallback: true,
};

module.exports = (passport) => {
  passport.use(
    new JwtStrategy(options, async function (jwt_payload, done) {
      const user = await usersService.getById(jwt_payload.sub);
      if (user.status === 'blocked')
        return done(null, false, { message: 'User is blocked' });
      return done(null, user || false);
    })
  );
};
