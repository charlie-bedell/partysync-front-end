import {HomeIcon, ChatBubbleOvalLeftIcon, PlusCircleIcon, UserIcon} from '@heroicons/react/24/outline';

const NavButton = (props) => {

  // use buttonIcon name to match an icon
	const { text } = props;

  // manage styles here
  const tailwindIconStyles = 'h-5 w-5';
  const tailwindTextStyles = 'font-bold';

  const icons = {
    "Home": <HomeIcon className={tailwindIconStyles}/>,
    "Messages": <ChatBubbleOvalLeftIcon className={tailwindIconStyles} />,
    "New": <PlusCircleIcon className={tailwindIconStyles} />,
    "Profile": <UserIcon className={tailwindIconStyles} />,
  };
 
	return (
		<div className='flex flex-col items-center text-white'>
			{icons[text]}
      <p className={tailwindTextStyles}>{text}</p>
		</div>
	);
};

export default NavButton;
