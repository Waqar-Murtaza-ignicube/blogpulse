import Authors from "./components/Authors"
import Articles from "./components/Articles"
import Header from "./components/Header"
import Sidebar from "./components/Sidebar"

const Home = () => {
  return (
    <div className="p-8 space-y-12">
      <Header />
      <div className="flex gap-10 justify-between mb-36">
        <Articles />
        <Sidebar />
      </div>
      <div className="py-32">
        <Authors />
      </div>
    </div>
  )
}

export default Home