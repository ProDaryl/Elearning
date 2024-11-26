import { client } from "@/sanity/lib/client"
import { urlFor } from "@/sanity/lib/image"
import Link from "next/link"

interface Props {
    
}
const getCourses = async () =>{
    const res:{
        _id:string,
        images:{
            asset:{
                _ref:string,
            }  
        }[]
        title:string,
        description:string,
        topics:{
            title:string,
        }[]
    }[] = await client.fetch(`*[_type=="course"]{
        _id,
        description,
        images,
        title,
        topics[]->{
            title,
        },
    }`).catch(err => {return []})
    return res
}
const Courses = async (props: Props) => {
    const courses = await getCourses() 
    console.log(courses)
    return (
        <div className="w-full h-full text-gray-15 pt-[130px] px-1 md:px-[60px]">
            <div className="w-full  flex flex-col md:flex-row justify-between md:items-start md:px-20  ">
                <h1 className="text-[26px] text-gray-15 md:w-[50%]  font-semibold">
                    Online Courses on Design and Development
                </h1>
                <h2 className="text-[14px] md:w-[50%] text-gray-35">
                Welcome to our online course page, where you can enhance your skills in design and development. Choose from our carefully curated selection of 10 courses designed to provide you with comprehensive knowledge and practical experience. Explore the courses below and find the perfect fit for your learning journey.
                </h2>
                
            </div>
            <div className="w-full px-4 flex justify-center md:px-24 my-5 md:mt-8 md:mb-6">
                <div className="w-[80%] h-[3px] bg-white-90"></div>
            </div>
            {
                courses.map((course,i)=>(
                    <div key={i.toString()+course.title} className="w-full bg-white-99 mb-6 p-5 rounded-md">
               
               <div className="flex flex-col md:gap-6 md:flex-row">
                    <div className="flex flex-col">
                        <h1 className="text-[18px] text-gray-15 mb-1  font-semibold">{course.title}</h1>
                        <p className="text-[14px] text-gray-35">{course.description}</p>
                    </div>
                    <Link href={`courses/${course.title.replaceAll(" ","-").toLowerCase()}`} className="my-3 font-medium text-[14px] text-gray-15 px-4 w-fit min-w-fit rounded-md py-[14px] bg-white-95">View Courses</Link>
                </div>
                <div className="w-full">
                    <div className="w-full h-full justify-center  grid grid-cols-3 grid-rows-1 gap-[10px]">
                        <img src={urlFor(course.images[0]).url()} className="size-full min-h-[100px] max-h-[312px]"  alt="" />
                        <img src={urlFor(course.images[1]).url()} className="size-full min-h-[100px] max-h-[312px]" alt="" />
                        <img src={urlFor(course.images[2]).url()} className="size-full min-h-[100px] max-h-[312px]" alt="" />
                    </div>
                </div>
                <div className="w-full mt-2 flex flex-col gap-4 md:gap-0 md:flex-row md:justify-between">
                    {/* <div className="w-fit flex items-center gap-4  h-fit">
                        <button className="w-fit px-3 py-2 rounded-md ring-1 ring-white-95 ">4 Weeks</button>
                        <button className="w-fit px-3 py-2 rounded-md ring-1 ring-white-95 ">Beginner</button>
                    </div> */}
                    {/* <h1 className="text-[16px] font-medium text-gray-15">By John Smith</h1> */}
                </div>
                    <div className="ring-1 ring-white-95 mt-3 rounded-md">
                        <div className="w-full border-b-[1px] md:py-3 font-semibold text-gray-15 text-[16px] border-white-95 px-5">
                            Curricuium
                        </div>
                        <div className="flex flex-col md:py-[30px] px-[20px] gap-[4px]  md:flex-row ">
                            
                            {
                                course.topics.slice(0,5).map((topic,i)=>(
                                    <>
                                        <div key={topic+i.toString()} className="w-full py-4">
                                <h1 className="text-[30px] font-extrabold text-gray-15">0{i+1}</h1>
                                <h1 className="text-[14px] font-meduim text-gray-15">{topic.title}</h1>
                            </div>
                            <div className="w-full px-4 md:px-0 md:py-[4px]">
                                <div className="w-full h-[2px] bg-white-95 md:h-full md:w-[3px]"></div>
                            </div>
                                    </>
                                ))
                            }
                        </div>
                    </div>
            </div>
                ))
            }
            
        </div>
    )
}

export default Courses
