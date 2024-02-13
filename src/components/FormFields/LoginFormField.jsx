// import './LoginForm.css';



const LoginFormField = (props) => {
	
	const { labelText, TWFieldWidth, TWPaddingRight, TWMarginRight } = props;
  
	return (
		<>
      <label name={labelText} className={`flex flex-row gap-2 justify-between items-center ${TWFieldWidth} ${TWPaddingRight} ${TWMarginRight} h-10 bg-blue rounded-l-md ml-2`}>
		  <p className="ml-5 text-white">{labelText}</p><input className="focus:outline-none h-full rounded-lg border-blue-900 border w-1/2" name="my-input"/>
      </label>
		</>
	);
};

LoginFormField.defaultProps = {
  TWPaddingRight: "pr-5",
  TWFieldWidth: "w-wlv",
  TWMarginRight: ''
};

export default LoginFormField;
