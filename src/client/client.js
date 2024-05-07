import axios from 'axios';

const myForm = document.getElementById('form-data')


if (myForm) {
    myForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const dataForm = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            message: document.getElementById('message').value
        }

        console.log('Form Data:', dataForm);

        try {
            const response = await axios.post('http://localhost:5000/submit-form', dataForm)
            console.log('Server Response:', response.data);
        } catch (error) {
            console.error("Error submitting the error", error.message)
        }
    })
}
else {
    console.error("The form is not found")
}


