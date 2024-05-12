import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
const app = express();
dotenv.config();
import authRoutes from './routes/auth.routes.js'
import messageRoutes from './routes/message.routes.js'
import userRoutes from './routes/user.routes.js'
import connectToMongoDB from './db/connectToMongoDB.js';
app.use(express.json()) //to parse the incoming requests with JSON payloads(from body of request)
app.use(cookieParser()); // to parse through cookies

app.get("/",(req,res)=>{
    res.send("hello");
})

app.use('/api/auth',authRoutes);
app.use('/api/messages',messageRoutes);
app.use('/api/users',userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT,()=>{
    connectToMongoDB();
    console.log(`server running at ${PORT}`);
})