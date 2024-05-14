import mongoose from 'mongoose';

const formSubmissionSchema = new mongoose.Schema({
  formData: {
    name: { type: String, required: true },
    email: { type: String, required: true },
    message: { type: String, required: true },
  },
});

const FormSubmission = mongoose.model('FormSubmission', formSubmissionSchema);

export default FormSubmission;
