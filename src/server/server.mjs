import express from "express";
import dotenv from 'dotenv';
import connectDB from "../db/userDb.js";
import FormSubmission from "../model/formSubmission.js";
import cors from 'cors';
dotenv.config();


//Connect to DB
const app = express();
connectDB()


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors())

//route for submitting te form
app.post("/submit-form", async (req, res) => {
    try {
        console.log("Form Data:", req.body)
        const { name, email, message } = await req.body
        const newFormSubmission = await new FormSubmission({ formData: { name, email, message } })
        await newFormSubmission.save()
        res.status(200).send("Form submitted successfully")
    } catch (error) {
        console.log("Error submitting the error", error.message)
        res.status(500).send("Error submitting the form")
    }
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))