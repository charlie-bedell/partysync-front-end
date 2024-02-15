// import './LoginForm.css';
import TextOnlyButton from "../Buttons/TextOnlyButton";
import LoginFormField from "../FormFields/LoginFormField";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signIn } from '../../services/users';


const LoginForm = ({updateUser}) => {
	const navigate = useNavigate();
	const [message, setMessage] = useState(null);
	const [form, setForm] = useState({
        username: "",
		password: "",
	});
  
	const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prevForm) => ({
            ...prevForm,
            [name]: value,
        }));
        console.log("form", form); // Added log 
	};
  
	const handleSubmit = async (event) => {
	  event.preventDefault();
		console.log('submitted');
	  try {
		const userData = await signIn(form);
		updateUser(userData);
		navigate("/user/profile");
	  } catch (error) {
		console.error(error);
		setMessage(error.response.data.error);
		setForm((prevForm) => ({
		  username: prevForm.username,
		  password: prevForm.password,
		}));
		setTimeout(() => {
			setMessage(null);
			}, 3000);}
	};

	return (
        <form onSubmit={handleSubmit} 
			Style={'margin-top:360px'}
		>
            <div className="flex flex-col items-end justify-center gap-4 mt-[361px]">
                <LoginFormField
                    labelText="Username"
                    TWFieldWidth='w-4/6'
                    name="username"
                    value={form.username}
                    handleChange={handleChange}
                />
                <LoginFormField
                    labelText="Password"
                    TWFieldWidth='w-3/6'
                    name="password"
                    value={form.password}
                    handleChange={handleChange}
                />

                {message && <p>{message}</p>}

                <button className='bg-blue text-white h-12 mx-2 transition duration-150 ease-in-out rounded-lg hover:rounded-full active:border-black undefined' type='submit'>
                    Login
                </button>

                <p className='text-blue cursor-pointer' onClick={() => navigate("/user/signup")}
				Style={'margin-right:30px'}
				>
                    Sign Up
                </p>
            </div>
        </form>
    );
};;

export default LoginForm;
