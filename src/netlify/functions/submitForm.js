import mongoose from "mongoose";
import dotenv from "dotenv";
import FormSubmission from "../model/formSubmission.js";

dotenv.config();

//Connecting to mongo db
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });


exports.handler = async (e, context) => {
    if (e.method !== "POST") {
        return{
            statusCode: 405,
            body: "Method not allowed"
        }
    }
}

const {name,email,message} = JSON.parse(e.body)

try{
    const newFormSubmission = await new FormSubmission({formData:{name,email,message}})
    await newFormSubmission.save()
    return {
        statusCode: 200,
        body: "Form submitted successfully"
    }
} catch(error){
    console.log("Error submitting the error", error.message)
    return {
        statusCode: 500,
        body: "Error submitting the form"
    }
}