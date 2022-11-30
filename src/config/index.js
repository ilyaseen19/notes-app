module.exports = {
  database: process.env.MONGO_URI || "",
  server: {
    port: process.env.PORT || 7000,
  },

  //reduse expiry time
  jwt: {
    secret: "djkfsnf63",
    expiresIn: "365d",
  },
};
