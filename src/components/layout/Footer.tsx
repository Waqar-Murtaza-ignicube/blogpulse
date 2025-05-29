import { Link } from "react-router-dom"
import { Ticker } from "@/components/ui"
import { footerTickers } from "@/utils/ticker"
import {
  FooterBelowListWrapper,
  FooterBelowWrapper,
  FooterLinksListWrapper,
  FooterLinksWrapper,
  FooterWrapper,
  FormHeading,
  FormWrapper
} from "./styles"
import { LinkButton } from "../ui"

const Footer = () => {
  return (
    <FooterWrapper>

      <Ticker tickers={footerTickers} />

      <FormWrapper>
        <FormHeading>DESIGN NEWS TO <br />YOUR INBOX</FormHeading>

        <form className="flex gap-2">
          <input
            className="px-2 py-2"
            type="email"
            placeholder="Email"
          />
          <LinkButton
            to="/"
            variant="light"
            className="py-2.5 border-white"
          >
            Sign up
          </LinkButton>
        </form>
      </FormWrapper>

      <FooterLinksWrapper>
        <Link
          className="font-bold text-3xl"
          to="/"
        >
          BlogPulse
        </Link>

        <FooterLinksListWrapper>
          <li>
            <Link to="/articles">Articles</Link>
          </li>
          <li>
            <Link to="/authors">Authors</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </FooterLinksListWrapper>
        <FooterLinksListWrapper>
          <li>
            <Link to="/articles">Art</Link>
          </li>
          <li>
            <Link to="/authors">Strret Art</Link>
          </li>
          <li>
            <Link to="/contact">Sculptures</Link>
          </li>
        </FooterLinksListWrapper>
        <FooterLinksListWrapper>
          <li>
            <Link to="/articles">LinkedIn</Link>
          </li>
          <li>
            <Link to="/authors">Instagram</Link>
          </li>
          <li>
            <Link to="/contact">Twitter</Link>
          </li>
        </FooterLinksListWrapper>
      </FooterLinksWrapper>
      
      <FooterBelowWrapper>
        <p className="text-gray-400">© 2025 BlogPulse. All rights reserved.</p>
        <FooterBelowListWrapper>
          <li>
            <LinkButton
              to='/'
              variant="dark"
              className="border-white"
            >
              Log in
            </LinkButton>
          </li>
          <li>
            <LinkButton
              to='/'
              variant="light"
              className="border-white"
            >
              Sign up
            </LinkButton>
          </li>
        </FooterBelowListWrapper>
      </FooterBelowWrapper>
    </FooterWrapper>
  )
}

export default Footer