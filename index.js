//Imports
const express = require("express");
const app = express();

//Middle
app.use(express.json());

//Starting a Server
const PORT = process.env.PORT || 5005;

app.listen(PORT, () => {
    console.log(`Server Running On PORT: ${PORT}`);
});