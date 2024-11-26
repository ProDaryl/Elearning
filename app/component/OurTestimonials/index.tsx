import Card from "./Card";
import person1Image from '../../../public/person.png';

function OurTestimonials() {
  return (
    <div className='w-[80%] flex flex-col align-center justify-center mx-auto my-10 gap-4 bg-background'>
      <div className="mb-10">
        <h1 className='font-bold text-xl py-4'>Our Testimonials</h1>
        <div className='flex justify-betwee relative'>
          <p className='flex-2 w-[80%]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure ratione placeat commodi, nihil eum, iste enim sint aliquid hic deleniti incidunt nemo quaerat! Eligendi, eius quisquam? Doloribus odio ipsam blanditiis?</p>
          <button className='flex border rounded-md flex-1 p-2 mx-auto absolute right-10' type="button">View All →</button>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 w-[96%]">
        <Card personImage={person1Image.src} personName={"John Smith"} description="The web design course provided a solid foundation for me. The instructors were knowledgeable and supportive, and the interractive learning environment was engaging. I highly recommend it" />
        <Card personImage={person1Image.src} personName={"John Smith"} description="The web design course provided a solid foundation for me. The instructors were knowledgeable and supportive, and the interractive learning environment was engaging. I highly recommend it" />
      </div>
      <div>

      </div>
    </div>
  )
}

export default OurTestimonials;
