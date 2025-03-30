import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();


const app = express();
app.use(express.json());

const PORT = process.env.PORT || 5000;
const mongoURI = process.env.MONGO_URI;

mongoose.connect(mongoURI)
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.error("MongoDB connection error:", err));


app.get('/', (req, res) => {
  res.send('Hello World!'); 
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
}   );
