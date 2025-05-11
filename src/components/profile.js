import React, { useState, useEffect } from "react";
import axios from "axios";

const Profile = () => {
  const [profile, setProfile] = useState({
    first_name: "",
    last_name: "",
    email: "",
    profile_image: "",
    bio: "",
  });

  const [userTools, setUserTools] = useState({
    name: "",
    image_url: "",
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch profile data when component mounts
    axios
      .get("https://oussamaapi.azizbenmallouk.com/api/profile")
      .then((response) => {
        const userData = response.data["users"][0];
        const userToolData = response.data["tools"];

        console.log("Profile data:", userToolData);

        setProfile(userData);
        setUserTools(userToolData);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching profile data:", error);
        setError("Failed to load profile information");
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <section id="profile" className="py-20 bg-black text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-lg text-gray-400">
            Loading profile information...
          </p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="profile" className="py-20 bg-black text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-lg text-red-600">{error}</p>
        </div>
      </section>
    );
  }

  return (
    <section id="Profile" className="py-40 bg-black text-white p-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4 text-center lg:text-left">
            <div className="mb-8 relative mx-auto lg:mx-0 w-48 h-48">
              {profile.profile_image ? (
                <img
                  src={profile.profile_image}
                  alt={`${profile.first_name} ${profile.last_name}`}
                  className="rounded-full w-full h-full object-cover border-4 border-purple-600 shadow-lg shadow-purple-500/20"
                />
              ) : (
                <div className="rounded-full w-full h-full bg-gradient-to-r from-purple-600 to-cyan-400 flex items-center justify-center border-4 border-gray-800 shadow-lg shadow-purple-500/20">
                  <span className="text-white text-4xl font-bold">
                    {profile.first_name?.charAt(0)}
                    {profile.last_name?.charAt(0)}
                  </span>
                </div>
              )}
            </div>

            <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-cyan-400 mb-4">
              {profile.first_name} {profile.last_name}
            </h1>

            <div className="flex justify-center lg:justify-start space-x-5 mt-6 mb-8">
              <a
                href="https://github.com/9asdaoui"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-6 w-6"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/oussama-qasdaoui-692164287/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-6 w-6"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
              >
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
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </a>
            </div>

            <div className="bg-gray-900 p-5 rounded-lg shadow-sm border border-purple-500/20">
              <div className="flex items-center mb-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-cyan-400 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span className="text-gray-300">{profile.email}</span>
              </div>
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-cyan-400 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span className="text-gray-300">Software Developer</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-8">
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                <div className="h-6 w-1.5 bg-purple-600 rounded-full mr-3"></div>
                About Me
              </h2>
              <div className="bg-gray-900 p-6 rounded-lg shadow-sm border border-purple-500/20">
                <p className="text-gray-300 whitespace-pre-line leading-relaxed">
                  {profile.bio || "No bio information available yet."}
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                <div className="h-6 w-1.5 bg-purple-600 rounded-full mr-3"></div>
                Skills & Expertise
              </h2>
              <div className="bg-gray-900 p-5 rounded-lg shadow-sm border border-purple-500/20">
                <h3 className="font-semibold text-white mb-3">
                  Tools & Frameworks
                </h3>
                <div className="flex flex-wrap gap-2">
                  {Array.isArray(userTools) && userTools.length > 0 ? (
                    userTools.map((tool, index) => (
                      <span
                        key={index}
                        className="bg-gray-800 text-cyan-400 px-3 py-1 rounded-full text-sm flex items-center border border-purple-500/30"
                      >
                        {tool.name}
                        {tool.image_url && (
                          <img
                            src={tool.image_url}
                            alt={tool.name}
                            className="inline-block h-4 w-4 ml-1"
                          />
                        )}
                      </span>
                    ))
                  ) : (
                    <span className="text-gray-400">
                      No tools specified yet
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
