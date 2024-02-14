// import './SignupForm.css';
import LoginFormField from "../FormFields/LoginFormField";
import TextOnlyButton from "../Buttons/TextOnlyButton";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signUp } from '../../services/users';

const SignupForm = (updateUser) => {
    const navigate = useNavigate();

    const [form, setForm] = useState({
        username: "",
        password: "",
        email: "",
        first_name: "",
        last_name: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prevForm) => ({
            ...prevForm,
            [name]: value,
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log('submitted');
        try {
            const userData = await signUp(form);
                // return userData;
            updateUser(userData);

            navigate("/login");
        } catch (error) {
            console.error(error);
            setForm((prevForm) => ({
                username: prevForm.username,
                password: prevForm.password,
                email: prevForm.email,
                first_name: prevForm.first_name,
                last_name: prevForm.last_name,
            }));
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className='flex flex-col items-end justify-center gap-4'>
                <LoginFormField
                    name="username"
                    value={form.username}
                    labelText="Username"
                    TWFieldWidth='w-3/6'
                    handleChange={handleChange}
                    form={form}
                />
                <LoginFormField
                    name="email"
                    value={form.email}
                    labelText="Email"
                    TWFieldWidth='w-3/6'
                    handleChange={handleChange}
                    form={form}
                />
                <LoginFormField
                    name='first_name'
                    value={form.first_name}
                    labelText="First Name"
                    TWFieldWidth='w-3/6'
                    handleChange={handleChange}
                    form={form}
                />
                <LoginFormField
                    name='last_name'
                    value={form.last_name}
                    labelText="lastName"
                    TWFieldWidth='w-4/6'
                    handleChange={handleChange}
                    form={form}
                />
                <LoginFormField
                    name='password'
                    value={form.password}
                    labelText="Password"
                    TWFieldWidth='w-5/6'
                    handleChange={handleChange}
                    form={form}
                />
                {/* <LoginFormField
                    name='retypePassword'
					value={form.retypePassword}
                    labelText="Retype Password" 
                    TWFieldWidth='w-5/6'
                    handleChange={handleChange}
                    form={form}
                /> */}
                <TextOnlyButton text="Sign Up" />
            </div>
        </form>
    );
};

export default SignupForm;
