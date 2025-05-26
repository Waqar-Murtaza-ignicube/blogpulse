import Articles from "./components/Articles"
import Header from "./components/Header"
import Sidebar from "./components/Sidebar"

const Home = () => {
  return (
    <div className="p-8 space-y-12">
      <Header />
      <div className="flex gap-10 justify-between">
        <Articles />
        <Sidebar />
      </div>
    </div>
  )
}

export default Home