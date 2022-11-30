module.exports = {
  database:
    process.env.MONGO_URI ||
    "mongodb+srv://ilyaseen19:Rafail19@assets-reg-1.t8uk3.mongodb.net/notes_app?retryWrites=true&w=majority",
  server: {
    port: process.env.PORT || 7000,
  },

  //reduse expiry time
  jwt: {
    secret: "djkfsnf63",
    expiresIn: "365d",
  },
};
