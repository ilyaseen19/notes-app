const usersBaseUrl = process.env.USERS_ENDPOINT || "https://note-taking-api.onrender.com/users/";
const notesBaseUrl = process.env.NOTES_ENDPOINT || "https://note-taking-api.onrender.com/notes/";

module.exports = { usersBaseUrl, notesBaseUrl };
