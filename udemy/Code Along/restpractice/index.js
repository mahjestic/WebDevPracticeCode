const express = require("express");
const app = express();
const path = require("path");
const {v4: uuid} = require("uuid");
const methodOverride = require("method-override");


app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(methodOverride("_method"));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Mock Data
let comments = [
    {
        id: uuid(),
        username: "mahjesitc",
        comment: "booo, you suck!"
    },
    {
        id:uuid(),
        username: "elsagpts",
        comment: "you're doing great sweaty!"
    },
    {
        id:uuid(),
        username: "pumpkinator",
        comment: "mmmh, lotion!"
    },
    {
        id:uuid(),
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
    comments.push({username, comment, id: uuid()});
    res.redirect("/comments");
    res.send("comment submitted");
});
//Shows specific comment from id
app.get("/comments/:id", (req, res) => {
    const {id} = req.params;
    const comment = comments.find(c => c.id === id);
    res.render("comments/show", {comment});
});
//Form to edit comment
app.get("/comments/:id/edit", (req,res) => {
    const {id} = req.params;
    const comment = comments.find(c => c.id === id);
    res.render("comments/edit", {comment});
});
//Method override to update comment
app.patch("/comments/:id", (req,res) => {
    const {id} = req.params;
    const newComment = req.body.comment;
    const foundComment = comments.find(c => c.id ===id);
    foundComment.comment = newComment;
});
//Deleting comment
app.delete("/comments/:id", (req, res) => {
    const {id} = req.params;
    comments = comments.filter(c => c.id !== id);
    res.redirect("/comments");

});
app.listen(5000, () => {
    console.log("Now listening on port 5000");
});
