const express = require("express");
const app = express();
const path = require("path");

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Mock Data
const comments = [
    {
        id:1,
        username: "mahjesitc",
        comment: "booo, you suck!"
    },
    {
        id:2,
        username: "elsagpts",
        comment: "you're doing great sweaty!"
    },
    {
        id:3,
        username: "pumpkinator",
        comment: "mmmh, lotion!"
    },
    {
        id:4,
        username: "Ivy333",
        comment: "I'm cuter"
    }
];
//Displays all comments
app.get("/comments", (req,res) => {
    res.render("comments/index", { comments });
});
//Form to create new comment
app.get("/comments/new", (req, res) => {
    res.render("comments/new", { comments });
});
//Creates new comment on server
app.post("/comments", (req, res) =>{
    const {username, comment} = req.body;
    comments.push({username, comment});
    res.redirect("/comments");
    res.send("comment submitted");
})
//Shows
app.get("/comments/:id", (req, res) => {
    const {id} = req.params;
    const comment = comments.find(c => c.id === parseInt(id));
    res.render("comments/show", {comment});
})

app.listen(5000, () => {
    console.log("Now listening on port 5000");
});
