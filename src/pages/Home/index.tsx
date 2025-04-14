import Articles from "../../components/HomePage/Articles"
import Header from "../../components/HomePage/Header"
import Sidebar from "../../components/HomePage/Sidebar"

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