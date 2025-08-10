    import { Link } from "react-router-dom";

    import logo from '../assets/Images/logo.png';

    export default function Header() {
        return(
            <div className="bg-gray-300 shadow-md">
                <div className="max-w-full h-30 mx-auto flex items-center justify-between px-6 py-3">
                    <div>
                    <img src={logo} alt="Logo" className="h-20" />
                    </div>
                    <div className="space-x-6">
                    <a href="#" className="text-gray-800 font-medium hover:text-blue-600">Litmus Results</a>
                    <a href="#" className="text-gray-800 font-medium hover:text-blue-600">MBA Entrance Courses</a>
                    <a href="#" className="text-gray-800 font-medium hover:text-blue-600">Profile Building</a>
                    <a href="#" className="text-gray-800 font-medium hover:text-blue-600">Internships & Placements</a>
                    <a href="#" className="text-gray-800 font-medium hover:text-blue-600">DPPs</a>
                    <a href="#" className="text-gray-800 font-medium hover:text-blue-600">Litmus Blogs</a>                
                    <a href="#" className="text-gray-800 font-medium hover:text-blue-600">Contact Us</a>
                    </div>
                    <div className="space-x-4">
                    <Link
                        to="/signup"
                        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-900 transition inline-block text-center"
                        >
                        Register As Student
                    </Link>
                    <Link
                        to="/login"
                        className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900 transition inline-block text-center"
                        >
                        Login
                    </Link>
                    </div>
                </div>
            </div>

        );
    };