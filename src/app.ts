import express from "express";

const app = express();

app.get("/", (req,res) => {
    res.send("app is running")
})

export default app;