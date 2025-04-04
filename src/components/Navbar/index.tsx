import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <nav className="flex justify-between">
            <div>
                <Link to="/">BlogPulse</Link>
            </div>
            <ul className="flex justify-between gap-4">
                <li><Link to="/blogs">Blogs</Link></li>
                <li><Link to="/authors">Authors</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>

            <div className="flex justify-between gap-4">
                <Link to="/sign-in">Log In</Link>
                <Link to="/sign-up">Sign Up</Link>
            </div>
        </nav>
    )
}

export default Navbar