import Benefit from "./component/Benefits"
import Hero from "./component/Hero"
import OurCourses from "./component/OurCourses"
import OurTestimonials from "./component/OurTestimonials"

const Home = () => {
  return (
    <div className="bg-background relative w-full h-full">
      <Hero/>
      <Benefit/>
      <OurCourses/>
      <OurTestimonials/>
    </div>
  )
}

export default Home