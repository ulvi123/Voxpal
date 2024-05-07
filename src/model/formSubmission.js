import mongoose from "mongoose";

const formSubmissionSchema = new mongoose.Schema({
    formData: {
        name:{type:String},
        email:{type:String},  
        message:{type:String},
    }
})

const FormSubmission = mongoose.model("FormSubmission", formSubmissionSchema);

export default FormSubmission