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
	  }
	};

	return (
		<form onSubmit={handleSubmit} >
			<div className='flex flex-col items-end justify-center gap-4'>
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

				<TextOnlyButton type='submit' text="Login" />
			</div>
		</form>
	);
};

export default LoginForm;
