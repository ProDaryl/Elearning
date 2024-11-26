import Benefit from "./component/Benefits"
import Hero from "./component/Hero"


const Home = () => {
  return (
    <div className="bg-background relative w-full h-full">
      <Hero/>
      <Benefit/> 
    </div>
  )
}

export default Home