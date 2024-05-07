import { useNavigate } from 'react-router-dom';

const SignOutButton = () => {
  const navigate = useNavigate();

  const handleSignOut = () => {
    // Perform sign-out logic here
    // For example, clear authentication state or tokens
    // After sign-out, navigate to the authentication page or home page
    navigate('/auth'); // Navigate to the authentication page
  };

  return (
   <div className='absolute md:left-[92%] left-[85%] top-4 z-10'>
     <button onClick={handleSignOut} className=" text-red bg-white border font-semibold  p-2 rounded-full w-full flex flex-row">
     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9" />
</svg>

    </button>
   </div>
  );
};

export default SignOutButton;
