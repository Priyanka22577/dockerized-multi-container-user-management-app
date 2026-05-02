const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

mongoose.connect("mongodb://mongo:27017/mydb")
.then(() => {
    console.log("MongoDB Connected");
})
.catch((err) => {
    console.log("MongoDB Error:", err);
});

const User = mongoose.model("User", {
    name: String,
    age: Number
});

app.get("/", (req, res) => {
    res.send("API is running 🚀");
});

app.post("/user", async (req, res) => {
    const user = new User(req.body);
    await user.save();
    res.send(user);
});

app.get("/users", async (req, res) => {
    const users = await User.find();
    res.send(users);
});

app.listen(3007, () => {
    console.log("Server running on port 3007");
});