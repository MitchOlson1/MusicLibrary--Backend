//Imports
const express = require("express");
const context = require("./repository/repository-wrapper")
const app = express();

//Middle
app.use(express.json());


//Endpoints
//GET = http://localhost:5005/api/songs
app.get("/api/songs", (req, res) => {
   const songs = context.songs.findAllSongs();
    return res.send(songs);
});

//GET ID = http://localhost:5005/api/songs/:id
app.get("/api/songs/:id", (req, res) => {
    const id = req.params.id;
    const song = context.songs.findSongById(id);
    return res.send(song);
});

//Starting a Server
const PORT = process.env.PORT || 5005;

app.listen(PORT, () => {
    console.log(`Server Running On PORT: ${PORT}`);
});