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
    new JwtStrategy(options, async (jwt_payload, done) => {
      const user = await usersService.getById(jwt_payload.sub);
      if (!user) {
        const error = new Error('User not found');
        error.status = 404;
        return done(error, false);
      }

      if (user.status === 'blocked') {
        const error = new Error('User is blocked');
        error.status = 403;
        return done(error, false);
      }
      return done(null, user || false);
    })
  );
};
