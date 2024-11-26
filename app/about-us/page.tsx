import DefendFlash from "../component/DefendFlash"
import EtiquetIcon from "../component/EtiquetIcon"
import FaceMask from "../component/FaceMask"
import MedalIcon from "../component/MedalIcon"
import TroneIcon from "../component/TroneIcon"
import AlarmIcon from "../component/alarmIcon"
import BookIcon from '../component/bookIcon';
import IronIcon from '../component/ironIcon';

const page = () => {
    const achievements = [
        {
            icon: <TroneIcon />,
            title: "Trusted by Thousands of Students",
            text: "We have successfully served thousands of students, helping them unlock their potential and achieve their career goals.",
        },
        {
            icon: <MedalIcon />,
            title: "Certified Instructors",
            text: "Our instructors are experts in their respective fields, ensuring that our courses provide the highest quality education and practical experience.",
        },
        {
            icon: <FaceMask />,
            title: "Positive Student Feedback",
            text: "We value our students' feedback and continuously work to improve our courses and platform to meet their needs.",
        },
        {
            icon: <DefendFlash />,
            title: "Flexible Learning Options",
            text: "We offer flexible learning options, such as online and in-person courses, to fit your schedule and learning style.",
        }
    ]
    const OurGoals = [
        {
            icon: <EtiquetIcon />,
            title: "Provide Practical Skills",
            text: "We focus on delivering practical skills that are relevant to the current industry demands. Our courses are designed to equip learners with the knowledge and tools needed to excel in their chosen field.",
        },
        {
            icon: <BookIcon />,
            title: "Faster Creative Problem-Solving",
            text: "We encourage creative and problem-solving abilities allowing our student to tracked real-world challenges with confidence and innovation",
        },
        {
            icon: <IronIcon />,
            title: "Promote Collaboration and Community",
            text: "We believe in fostering a collaborative environment, where learners can connect with peers, share knowledge, and work together to solve complex challenges.",
        },
        {
            icon: <AlarmIcon />,
            title: "Stay Ahead of the Curve",
            text: "The digital landscape is constantly evolving, and we strive to stay at the forefront of industry trends. We regularly update our course content to ensure our students receive the latest knowledge and skills."
        }

    ]
    return (
        <div className="w-full h-full text-gray-15 pt-[130px] px-1 md:px-[60px]">
            <div className="w-full  flex flex-col md:flex-row justify-between md:items-start md:px-20  ">
                <h1 className="text-[28px] text-gray-15 md:w-[50%]  font-semibold">
                    About Skillbridge
                </h1>
                <h2 className="text-[14px] md:w-[50%] text-gray-35">
                    Welcome to our platform, where we are passionate about empowering individuals to master the world of design and development. We offer a wide range of online courses designed to equip learners with the skills and knowledge needed to succeed in the ever-evolving digital landscape.
                </h2>

            </div>
            <div className="w-full px-4 flex justify-center md:px-24 my-5 md:mt-8 md:mb-6">
                <div className="w-[80%] h-[3px] bg-white-90"></div>
            </div>
            {/* Achievemet */}
            <div className="my-6 md:my-9">
                <h1 className="text-[24px] text-gray-15 font-meduim">Achievement</h1>
                <p className="text-[14px] text-gray-35">Our commitment to excellence has led us to achieve significant milestones along our journey. Here are some of our notable achievements</p>
            </div>
            <div className="w-full grid grid-cols-1 md:grid-cols-2  gap-2">
                {
                    achievements.map((item, index) => {
                        return (
                            <div key={index.toString() + item.title} className="bg-white rounded-md p-[30px] md:p-[40px]">
                                <div className="w-full h-full flex flex-col gap-[24px]">
                                    <div className="rounded-md p-1 bg-orange-97 ring-1 w-fit  ring-orange-90 ">{item.icon}</div>
                                    <div className="w-full h-full flex flex-col gap-1">
                                        <h2 className="text-[18px] font-medium text-gray-15">
                                            {item.title}
                                        </h2>
                                        <p className="text-[14px] text-gray-35">
                                            {item.text}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            {/* Achievemet */}
            {/* Our goals */}
            <div className="my-6 md:my-9">
                <h1 className="text-[24px] text-gray-15 font-meduim">Our Goals</h1>
                <p className="text-[14px] text-gray-35">At SkillBridge, our goal is to empower individuals from all backgrounds to thrive in the world of design and development. We believe that education should be accessible and transformative, enabling learners to pursue their passions and make a meaningful impact.
                    Through our carefully crafted courses, we aim to</p>
            </div>
            <div className="w-full grid grid-cols-1 md:grid-cols-2  gap-2">
                {
                    OurGoals.map((item, index) => {
                        return (
                            <div key={index.toString() + item.title} className="bg-white rounded-md p-[30px] md:p-[40px]">
                                <div className="w-full h-full flex flex-col gap-[24px]">
                                    <div className="rounded-md p-1 bg-orange-97 ring-1 w-fit  ring-orange-90 ">{item.icon}</div>
                                    <div className="w-full h-full flex flex-col gap-1">
                                        <h2 className="text-[18px] font-medium text-gray-15">
                                            {item.title}
                                        </h2>
                                        <p className="text-[14px] text-gray-35">
                                            {item.text}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            {/* Our goals */}
        </div>
    )
}

export default page