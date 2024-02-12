// import './LoginForm.css';



const LoginFormField = (props) => {
	
	const { labelText, TWFieldWidth, TWPaddingRight } = props;
  
	return (
		<>
    <label className={`flex flex-row gap-2 justify-between items-center ${TWFieldWidth} ${TWPaddingRight} h-10 bg-blue rounded-md mx-2`}>
		  <p className="ml-5 text-white">{labelText}</p><input className="focus:outline-none h-full rounded-md border-blue-900 border w-1/2" name="my-input"/>
      </label>
		</>
	);
};

LoginFormField.defaultProps = {
  TWPaddingRight: "pr-5",
  TWFieldWidth: "w-wlv"
};

export default LoginFormField;
