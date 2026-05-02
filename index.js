// Import
const express = require('express');
const app = express();
const port = 8080;
const path = require('path');
const { v4: uuidv4 } = require('uuid');
const methodOverride = require('method-override');


app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "view"));
app.use(express.static(path.join(__dirname, "public")))


let posts = [
    {
        id: uuidv4(),
        username: "Anil Gorade",
        content: "I love coding"
    },
    {
        id: uuidv4(),
        username: "Ram Kumar",
        content: "I love DSA"
    },
    {
        id: uuidv4(),
        username: "Rom",
        content: "I love Gaming"
    },
    {
        id: uuidv4(),
        username: "Priya Sharma",
        content: "Learning JavaScript every day"
    },
    {
        id: uuidv4(),
        username: "Rahul Patil",
        content: "Web development is fun"
    },
    {
        id: uuidv4(),
        username: "Sneha Joshi",
        content: "Practicing Python programs"
    },
    {
        id: uuidv4(),
        username: "Amit Verma",
        content: "I enjoy solving coding challenges"
    },
    {
        id: uuidv4(),
        username: "Karan Singh",
        content: "Node.js makes backend easy"
    },
    {
        id: uuidv4(),
        username: "Pooja Deshmukh",
        content: "Frontend design is creative"
    },
    {
        id: uuidv4(),
        username: "Vikas Yadav",
        content: "I love learning new technologies"
    },
    {
        id: uuidv4(),
        username: "Neha Kulkarni",
        content: "Debugging improves programming skills"
    },
    {
        id: uuidv4(),
        username: "Rohit Sharma",
        content: "Databases are interesting"
    },
    {
        id: uuidv4(),
        username: "Samarth Shinde",
        content: "Hackathons are exciting"
    },
    {
        id: uuidv4(),
        username: "Pranav Shinde",
        content: "Building projects with friends"
    },
    {
        id: uuidv4(),
        username: "Shubham Wadinkar",
        content: "Coding late night is enjoyable"
    }
];


app.get("/posts", (req, res) => {
    res.render("index.ejs", { posts: posts })
})


app.get("/posts/new", (req, res) => {
    res.render("new.ejs")
})


app.post("/posts", (req, res) => {
    let { username, content } = req.body
    let id = uuidv4();
    posts.push({ id, username, content })
    res.redirect("/posts")
})


app.get("/posts/:id", (req, res) => {
    let { id } = req.params;
    let post = posts.find((p) => id === p.id);
    if (post) {
        res.render("show.ejs", { post });
    } else {
        res.status(404).send("Post not found");
    }
});


app.patch("/posts/:id", (req, res) => {
    let { id } = req.params
    let new_content = req.body.content;
    let post = posts.find((p) => id === p.id);
    post.content = new_content;
    res.redirect("/posts")

})

app.get("/posts/:id/edit", (req, res) => {
    let { id } = req.params
    let post = posts.find((p) => id === p.id);
    res.render("edit.ejs", { post })
})


app.delete("/posts/:id", (req, res) => {
    let { id } = req.params;
    posts = posts.filter((p) => id !== p.id);
    res.redirect("/posts");
});


app.listen(port, () => {
    console.log(`Port run on ${port}`)
})