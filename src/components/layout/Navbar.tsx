import { Link } from "react-router-dom"
import { LogoBlock, NavBlock, NavLinks } from "./styles"
import { LinkButton } from "@/components/ui"

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
                    <LinkButton variant="light" to="/">
                        Log in
                    </LinkButton>
                </li>
                <li>
                    <LinkButton variant="dark" to="/">
                        Sign up
                    </LinkButton>
                </li>
            </NavLinks>
        </NavBlock>
    )
}

export default Navbar