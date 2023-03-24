const GithubStrategy = require("passport-github2");

module.exports = ({ env }) => ({
  auth: {
    secret: env("ADMIN_JWT_SECRET"),
    providers: [
      {
        uid: "github",
        displayName: "Github",
        icon: "http://localhost:1337/uploads/github_logo_vector_4744e8d8a7.png",
        createStrategy: (strapi) =>
          new GithubStrategy(
            {
              clientID: env("GITHUB_CLIENT_ID"),
              clientSecret: env("GITHUB_CLIENT_SECRET"),
              scope: ["user:email"],
              callbackURL:
                strapi.admin.services.passport.getStrategyCallbackURL("github"),
            },
            (accessToken, refreshToken, profile, done) => {
              done(null, {
                email: profile.emails[0].value,
                username: profile.username,
              });
            }
          ),
      },
    ],
  },
  apiToken: {
    salt: env("API_TOKEN_SALT"),
  },
  transfer: {
    token: {
      salt: env("TRANSFER_TOKEN_SALT"),
    },
  },
});
