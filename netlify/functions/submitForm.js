import mongoose from "mongoose";
import dotenv from "dotenv";
import FormSubmission from "./formSubmission.js";

dotenv.config();

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.error("MongoDB connection error:", err));

const handler = async (event, context) => {
    // Check if the request method is POST
    if (event.httpMethod !== "POST") {
        return {
            statusCode: 405,
            body: "Method not allowed"
        };
    }

    try {
        // Parse the body of the request
        const { name, email, message } = JSON.parse(event.body);

        // Create a new form submission document
        const newFormSubmission = new FormSubmission({
            formData: { name, email, message }
        });

        // Save the new form submission document to the database
        await newFormSubmission.save();

        // Return a successful response
        return {
            statusCode: 200,
            body: JSON.stringify({ message: "Form submitted successfully" })
        };
    } catch (error) {
        console.error("Error submitting the form:", error);

        // Return an error response
        return {
            statusCode: 500,
            body: JSON.stringify({ error: "Error submitting the form", details: error.message })
        };
    }
};

export { handler };
