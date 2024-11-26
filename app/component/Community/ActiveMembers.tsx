import Image from "next/image";
import Link from "next/link";

const ActiveMembers = () => {
  const members = [
    {
      id: 1,
      name: "Jane Doe",
      role: "Moderator",
      avatar: "/images/avatar-jane.jpg",
      badge: "Top Contributor",
    },
    {
      id: 2,
      name: "John Smith",
      role: "Mentor",
      avatar: "/images/avatar-john.jpg",
      badge: "Most Helpful",
    },
    {
      id: 3,
      name: "Alice Brown",
      role: "Member",
      avatar: "/images/avatar-alice.jpg",
      badge: "Community Star",
    },
  ];

  return (
    <section className="py-16 px-4 lg:px-10 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">
          Active Members
        </h2>
        <p className="text-gray-600 mb-10">
          Meet the people who make this community vibrant and engaging.
        </p>

        {/* Members Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {members.map((member) => (
            <div
              key={member.id}
              className="flex flex-col items-center bg-gray-50 shadow-md rounded-lg p-6 hover:shadow-lg transition duration-300"
            >
              {/* Avatar */}
              <div className="relative w-24 h-24 rounded-full overflow-hidden mb-4">
                <Image
                  src={member.avatar}
                  alt={member.name}
                  layout="fill"
                  objectFit="cover"
                />
              </div>

              {/* Name and Role */}
              <h3 className="text-lg font-semibold text-gray-800">
                {member.name}
              </h3>
              <p className="text-gray-500 text-sm mb-2">{member.role}</p>

              {/* Badge */}
              <span className="text-xs bg-orange-100 text-orange-600 font-medium py-1 px-3 rounded-full">
                {member.badge}
              </span>
            </div>
          ))}
        </div>

        {/* View All Members */}
        <div className="mt-8">
          <Link
            href="/community/members"
            className="py-2 px-6 bg-orange-400 text-white rounded-md hover:bg-orange-500 transition duration-300"
          >
            View All Members
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ActiveMembers;