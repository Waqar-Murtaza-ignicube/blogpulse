import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <nav className="flex justify-between items-center pb-4 p-8">
            <div className="text-3xl font-medium">
                <Link to="/">BlogPulse</Link>
            </div>
            <ul className="flex justify-between gap-4 items-center">
                <li><Link to="/blogs">Blogs</Link></li>
                <li><Link to="/authors">Authors</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link className="border border-gray-300 p-2 rounded-md" to="/sign-in">Log In</Link></li>
                <li><Link className="border text-white bg-[#333] p-2 rounded-md hover:bg-black" to="/sign-up">Sign Up</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar