import { Link } from "react-router-dom"
import { LogoBlock, NavBlock, NavLinks } from "./styles"

const Navbar = () => {
    return (
        <NavBlock>
            <LogoBlock>
                <Link to="/">BlogPulse</Link>
            </LogoBlock>
            <NavLinks>
                <li>
                    <Link to="/articles">Articles</Link>
                </li>
                <li>
                    <Link to="/authors">Authors</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
                <li>
                    <Link
                        className="border border-gray-300 p-2 rounded-md"
                        to="/sign-in"
                    >
                        Log In
                    </Link>
                </li>
                <li>
                    <Link
                        className="border text-white bg-[#333] p-2 rounded-md hover:bg-black"
                        to="/sign-up"
                    >
                        Sign Up
                    </Link>
                </li>
            </NavLinks>
        </NavBlock>
    )
}

export default Navbar