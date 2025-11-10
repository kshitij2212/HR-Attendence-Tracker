import express from "express";
import authRoute from "./routes/auth.route.js";

const app = express();
const port = 3000;

app.use(express.json())

app.use("/auth", authRoute);



app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});
