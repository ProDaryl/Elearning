import Card from './Card';
import courseImage from '../../../public/image.jpg'

const OurCourses = () => {
  return (
    <div className="w-[96%] flex flex-col align-center justify-center pt-[10em] bg-[#f7f7f8]">
      <div className='w-[85%] mx-auto'>
        <h1 className='text-xl font-bold py-4'> Recommended courses </h1>
        <div className='flex justify-betwee relative'>
          <p className='flex-2 w-[80%]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure ratione placeat commodi, nihil eum, iste enim sint aliquid hic deleniti incidunt nemo quaerat! Eligendi, eius quisquam? Doloribus odio ipsam blanditiis?</p>
          <button className='flex border rounded-md flex-1 p-2 mx-auto absolute right-0' type="button">View All →</button>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 bg-white my-6 max-sm:block">
          <Card title={"Web development Fudamentals"} duration={"4 weeks"} author={"John Smith"} img={courseImage.src} description="Learn the fundamentals of web design, including HTML, CSS, and responsive design principles. Develop the skills to create visually appealing and user-friendly websites." level={"Beginner"} />

          <Card title={"Web development Fudamentals"} duration={"4 weeks"} author={"John Smith"} img={courseImage.src} description="Learn the fundamentals of web design, including HTML, CSS, and responsive design principles. Develop the skills to create visually appealing and user-friendly websites." level={"Beginner"} />

          <Card title={"Web development Fudamentals"} duration={"4 weeks"} author={"John Smith"} img={courseImage.src} description="Learn the fundamentals of web design, including HTML, CSS, and responsive design principles. Develop the skills to create visually appealing and user-friendly websites." level={"Beginner"} />

          <Card title={"Web development Fudamentals"} duration={"4 weeks"} author={"John Smith"} img={courseImage.src} description="Learn the fundamentals of web design, including HTML, CSS, and responsive design principles. Develop the skills to create visually appealing and user-friendly websites." level={"Beginner"} />
      </div>
    </div>
  )
}

export default OurCourses;
