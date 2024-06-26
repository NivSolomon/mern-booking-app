import express, { Request, Response } from 'express';
import cors from 'cors';
import "dotenv/config";
import mongoose from 'mongoose';
import userRoutes from './routes/users';
import authRoutes from './routes/auth';
import cookieParser from "cookie-parser"
import path from 'path';

const PORT = process.env.PORT || 7000;


mongoose.connect(process.env.MONGODB_CONNECTION_STRING as string);

const app = express();
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors({
    origin:"mern-booking-app-61bg.vercel.app",
    credentials: true
}));

app.use(express.static(path.join(__dirname, "../../client/dist"))); // enable to run the server&client from the server!

// why are they endpoints ?
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);

app.listen(PORT, ()=> {
    console.log("Express server running on localhost: ", PORT);
})

export default app;
