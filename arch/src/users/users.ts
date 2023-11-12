import express from 'express';

const userRouter = express.Router();

userRouter.use((req, res, next) => {
    console.log("Обработчик users");
    next();    
});

userRouter.post("/login", (req, res) => {
    res.send("login")   
});

userRouter.post("/rigister", (req, res) => {
    res.send("rigister");
});

export { userRouter }