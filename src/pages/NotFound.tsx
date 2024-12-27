import { Link as RouterLink } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className="flex items-center justify-center flex-col w-full min-h-screen container">
      <h1 className=" mt-[60px] text-4xl font-bold">404</h1>
      <p className="text-gray-500 mt-2 text-lg">Oops! The page you're looking for doesn't exist.</p>
      <RouterLink
        to="/"
        className="mt-5 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-200"
      >
        Go back to Home
      </RouterLink>
    </div>
  );
};

export default NotFound;
