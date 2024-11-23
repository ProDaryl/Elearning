import clsx from "clsx"
import { ArrowLeftRight, ArrowRight } from "lucide-react"

const Benefit = () => {
        const bebefits = [
            {
                title:"Flexile Learning Schedule",
                text: "Fit your coursework around your existing commitment and obligation"
            },
            {
                title:"Expert Instruction",
                text: "Learn from industry experts who have hands-on experience in design and development."
            },
            {
                title:"Diverse Course Offerings",
                text: "Explore a wide range of design and development courses covering various topics."
            },
            {
                title:"Updated Curriculum",
                text: "Access courses with up-to-date content reflecting the latest trends and industry practices."
            },
            {
                title:"Practical Projects and Assignments",
                text: "Develop a portfolio showcasing your skills and abilities to potential employers."
            },
        
            {
                title:"Interactive Learning Environment",
                text: "Collaborate with fellow learners, exchanging ideas and feedback to enhance your understanding."
            },
        ]
  return (
    <div className="my-3 md:m-0 relative h-screen w-full px-3">
      <div className="">
        <h1 className="text-[28px] font-semibold text-gray-15">Benefits</h1>
        <div className="text-[14px] w-[60%]">
            Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in.
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:w-full gap-3 mt-4 md:grid-cols-3">

        {
            bebefits.map((item,index)=>(
                <div key={index.toString() + item.title} className={clsx("flex flex-col items-end py-3 mt-2  gap-[30px] px-3 rounded-md bg-white",{'hidden md:flex':index == 4 || index == 5})}>
                <h1 className="text-[50px] font-bold text-gray-15">0{index+1}</h1>
                <div className="w-full flex items-center flex-col">
                    <div className="w-[80%]">
                    <h3 className="text-[20px] w-full text-center font-semibold leading-[-0.6%]">{item.title}</h3>
                    <p className="text-center w-full">{item.text}</p>
                    </div>
                </div>
                <div className="ring-1 ring-white-95 cursor-pointer bg-background">
                <ArrowRight size={30} className="p-1  -rotate-45 text-orange-50  "/>
                </div>
        </div>
            ))
        }
      </div>
    </div>
  )
}

export default Benefit
