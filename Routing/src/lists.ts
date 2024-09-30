import express, { Router } from "express";

const listRoutes  = express.Router();

listRoutes.get("/home", (req, res)=> {
    res.status(200).json({
        message: "home"
    })
});

listRoutes.get("/page", (req, res)=> {
    res.status(200).json({
        message: "page"
    })
});

listRoutes.get("/dashboard", (req, res)=> {
    res.status(200).json({
        message: "dashboard"
    })
});

export default listRoutes;