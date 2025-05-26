import { Link } from "react-router-dom"
import Ticker from "./Ticker"
import { footerTickers } from "../../../utils/ticker"

const Footer = () => {
  return (
    <footer className="footer p-8 bg-black text-white flex flex-col gap-10">

      <Ticker tickers={footerTickers} />

      <div className="flex items-center justify-between">
        <h2 className="text-6xl font-bold">DESIGN NEWS TO <br />YOUR INBOX</h2>

        <form action="" className="flex gap-2">
          <input className="px-2 py-2" type="email" placeholder="Email"/>
          <button className="px-4 py-2 bg-white text-black text-[14px] font-medium" type="submit">SIGN UP</button>
        </form>
      </div>

      <div className="flex justify-start space-x-72">
        <Link className="font-bold text-2xl" to="/">BlogPulse</Link>

        <ul className="flex flex-col justify-between gap-4 items-start text-gray-400">
          <li><Link to="/articles">Articles</Link></li>
          <li><Link to="/authors">Authors</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
        <ul className="flex flex-col justify-between gap-4 items-start text-gray-400">
          <li><Link to="/articles">Articles</Link></li>
          <li><Link to="/authors">Authors</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
        <ul className="flex flex-col justify-between gap-4 items-start text-gray-400">
          <li><Link to="/articles">Articles</Link></li>
          <li><Link to="/authors">Authors</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>

      
      <div className="flex justify-between">
        
        <p className="text-gray-400">© 2025 BlogPulse. All rights reserved.</p>
        <ul className="flex justify-between gap-4">
          <li><Link className="border border-white px-4 py-2 rounded-md" to="/sign-in">Log In</Link></li>
          <li><Link className="bg-white text-black px-4 py-2 rounded-md" to="/sign-up">Sign Up</Link></li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer