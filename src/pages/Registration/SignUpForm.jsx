import { useState } from "react";
import {axios} from "axios";

function SignUpForm() {

    const [formData, setFormData] = useState({});

    const handleChange = (e) => {

        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });

    }

    const handleSubmit = (e) => {

        e.preventDefault();

    }
    
    return ( 

        <form className = 'registration-form' name='signUpFrom' onSubmit={handleSubmit}>

            <label htmlFor="firstName">First Name</label> <br />
            <input type="text" name="firstName" id="firstName" required onChange={handleChange}/> <br />

            <label htmlFor='email'>Email</label> <br />
            <input type="email" name="email" id="email" required onChange={handleChange}/> <br />

            <label htmlFor="birthDate">Birth Date</label> <br />
            <input type="date" name="birthDate" id="birthDate" required onChange={handleChange}/> <br />

            <label htmlFor='password'>Password</label> <br />
            <input type="password" name="password" id="password" required onChange={handleChange}/> <br />

            <label htmlFor='confirmPassword'>Confirm Password</label> <br />
            <input type="password" name="confirmPassword" id="confirmPassword" required/> <br />

            <input type='submit' value='Sign Up' /> <br />

            <p><a href="/login"> Already have an account? Log In</a></p>

        </form>

     );
}

export default SignUpForm;