import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
import Layout from "./layout";
import Authors from "./pages/Authors";
import Articles from "./pages/Articles";
import Contact from "./pages/Contact";
import Home from "./pages/Home";

const App = () => {

  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/articles" element={<Articles />} />
            <Route path="/authors" element={<Authors />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  )
}

export default App;
