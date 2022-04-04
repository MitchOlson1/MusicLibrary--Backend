//Imports
const express = require("express");
const context = require("./repository/repository-wrapper")
const app = express();
const cors = require("cors");
const songValidation = require("./validation")


//Middle
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());


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

//POST = http://localhost:5005/api/songs/
app.post("/api/songs", [songValidation],(req, res) => {
    const newSong = req.body;
    const addedSong = context.songs.createSong(newSong);
    return res.send(addedSong);
});

//Put = http://localhost:5005/api/songs/
app.put("/api/songs/:id", [songValidation], (req, res) => {
    const id = req.params.id;
    const songPropertiesToModify = req.body;
    const songToUpdate = context.songs.updateSong(id, songPropertiesToModify);
    return res.send(songToUpdate);
});

//DELETE =  http://localhost:5005/api/songs/
app.delete("/api/songs/:id", (req,res) => {
    const id = req.params.id;
    const deletedSong = context.songs.deleteSong(id);
    return res.send(deletedSong);
});

//Starting a Server
const PORT = process.env.PORT || 5005;

app.listen(PORT, () => {
    console.log(`Server Running On PORT: ${PORT}`);
});