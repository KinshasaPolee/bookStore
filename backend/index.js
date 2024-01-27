import express from "express";
import { PORT, mongoDbUrl } from "./config.js";
import mongoose from "mongoose";
import { Book } from "./collections/search.js";
import bookRoute from "./Routes/bookRoute.js";
import cors from "cors";

const app = express();

// Middleware
app.use(express.json());

app.use(cors());

// app.use(
//     cors({
//         origin: "http://localhost:3000",
//         methods: ["GET", "POST", "PUT", "DELETE"],
//         allowedHeaders: ["Content-Type"],
//     })
// );

app.get("/", (request, response) => {
    console.log(request)
    return response.status(234).send("Hello Everyone");
});

mongoose
    .connect(mongoDbUrl)
    .then(() => {
        console.log("App connected to database");
        app.listen(PORT, () => {
            console.log(`App is listening to port: ${PORT}`)
        });
    })
    .catch((error) => {
        console.log(error);
    });