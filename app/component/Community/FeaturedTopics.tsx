import Image from "next/image";
import Link from "next/link";

const  FeaturedTopics = () => {
  const topics = [
    {
      id: 1,
      title: "Real Analysis I - Algebraic Expression",
      description: "Join the discussion on essential JavaScript Real Analysis I.",
      image: "/images/js-basics.jpg",
      link: "/community/topics/js-basics",
    },
    {
      id: 2,
      title: "Algorithm and Data Structures II - Trees and Graphs",
      description: "Explore trending technologies and frameworks for web development.",
      image: "/images/web-dev.jpg",
      link: "/community/topics/web-development",
    },
    {
      id: 3,
      title: "How to Succeed in Online Learning",
      description: "Tips and tricks to make the most out of your e-learning journey.",
      image: "/images/online-learning.jpg",
      link: "/community/topics/online-learning",
    },
  ];

  return (
    <section className="py-16 px-4 lg:px-10 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">
          Featured Topics
        </h2>
        <p className="text-gray-600 mb-10">
          Stay engaged with the latest discussions and resources curated for you.
        </p>

        {/* Topics Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {topics.map((topic) => (
            <div
              key={topic.id}
              className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition duration-300"
            >
              {/* Image */}
              <div className="relative w-full h-48">
                <Image
                  src={topic.image}
                  alt={topic.title}
                  layout="fill"
                  objectFit="cover"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {topic.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {topic.description}
                </p>
                <Link
                  href={topic.link}
                  className="text-orange-500 font-medium hover:underline"
                >
                  Learn More →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedTopics;