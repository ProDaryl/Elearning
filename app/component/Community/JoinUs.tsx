const JoinUs = () => {
    return (
      <section className="py-16 px-4 lg:px-10 bg-gradient-to-r from-orange-400 to-orange-500 text-white">
        <div className="max-w-6xl mx-auto text-center">
          {/* Title and Description */}
          <h2 className="text-3xl font-bold mb-6">Join Our Community</h2>
          <p className="text-lg mb-8">
            Be part of a thriving community of learners, developers, and industry
            experts. Share knowledge, collaborate on projects, and grow together.
          </p>
  
          {/* Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-white text-orange-500 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20 21v-2a4 4 0 00-3-3.87m-7 3.87V21m-4-4a4 4 0 01-3-3.87V7a4 4 0 014-4h10a4 4 0 014 4v7a4 4 0 01-3 3.87M8 11h.01M16 11h.01"
                  />
                </svg>
              </div>
              <p className="text-white">
                Connect with <strong>like-minded individuals</strong>.
              </p>
            </div>
            <div className="flex items-center gap-4">
              <div className="p-3 bg-white text-orange-500 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 16l-4-4m0 0l4-4m-4 4h16"
                  />
                </svg>
              </div>
              <p className="text-white">
                Access <strong>exclusive resources and events</strong>.
              </p>
            </div>
            <div className="flex items-center gap-4">
              <div className="p-3 bg-white text-orange-500 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14.752 11.168l-3.197-2.132a4 4 0 10-5.832 4.924l2.134 3.196M4.056 15.292a4 4 0 105.832-4.924m4.832 3.196l-2.132 3.197a4 4 0 104.924-5.832m-2.132-3.196L14.752 11.17"
                  />
                </svg>
              </div>
              <p className="text-white">
                Collaborate on <strong>exciting projects</strong>.
              </p>
            </div>
          </div>
  
          {/* Call-to-Action */}
          <div>
            <button className="py-3 px-6 bg-white text-orange-500 rounded-lg font-semibold shadow-lg hover:bg-gray-100 transition duration-300">
              Join Now
            </button>
          </div>
        </div>
      </section>
    );
  };
  
  export default JoinUs;