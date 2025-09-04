import { Link } from "react-router";

function Header(){
    return (
        <div className="flex justify-between items-center px-20 py-6">
            <Link to="/notes">
            <h1 className="text-4xl font-semibold text-gray-500
            border-2 py-1 px-1 hover:bg-gray-300 hover:shadow-2xl"> Notes </h1>
            </Link>
            <Link to="/new-note">
            <h1 className=" text-2xl font-semibold text-green-900 py-1 px-1
            border-2 hover:border-green-700 hover:text-white hover:bg-green-900 hover:shadow-2xl">Add Note</h1>
            </Link>
        </div>
    )
}
export default Header;