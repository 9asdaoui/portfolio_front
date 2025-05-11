import React, { useState, useEffect } from "react";
import axios from "axios";
import { 
  motion,
  AnimatePresence 
} from "framer-motion";

const Profile = () => {
  const [profile, setProfile] = useState({
    first_name: "",
    last_name: "",
    email: "",
    profile_image: "",
    bio: "",
  });

  const [userTools, setUserTools] = useState([]);
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

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 }
    },
  };

  const socialIconVariants = {
    hover: { scale: 1.2, rotate: 5, color: "#22d3ee" },
  };

  if (loading) {
    return (
      <section id="profile" className="py-20 bg-black text-white min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="flex justify-center mb-4">
            <div className="relative w-20 h-20">
              <div className="absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-r from-purple-600 to-cyan-400 rounded-full opacity-75 animate-ping"></div>
              <div className="relative bg-gradient-to-r from-purple-600 to-cyan-400 rounded-full w-20 h-20 flex items-center justify-center">
                <svg className="animate-spin h-8 w-8 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              </div>
            </div>
          </div>
          <p className="text-lg text-gray-400 animate-pulse">Loading profile information...</p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <motion.section 
        id="profile" 
        className="py-20 bg-black text-white min-h-screen flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div 
            className="bg-gray-900 p-8 rounded-lg border border-red-500/30 shadow-lg shadow-red-500/10"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-red-500 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            <p className="text-xl text-red-400 font-medium">{error}</p>
            <p className="mt-4 text-gray-400">Please try again later or contact support</p>
          </motion.div>
        </div>
      </motion.section>
    );
  }

  return (
    <motion.section 
      id="Profile" 
      className="py-40 bg-black text-white p-20"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <motion.div className="lg:col-span-4 text-center lg:text-left" variants={itemVariants}>
            <motion.div 
              className="mb-8 relative mx-auto lg:mx-0 w-48 h-48"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 10 }}
            >
              {profile.profile_image ? (
                <motion.img
                  src={profile.profile_image}
                  alt={`${profile.first_name} ${profile.last_name}`}
                  className="rounded-full w-full h-full object-cover border-4 border-purple-600 shadow-lg "
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                />
              ) : (
                <motion.div 
                  className="rounded-full w-full h-full bg-gradient-to-r from-purple-600 to-cyan-400 flex items-center justify-center border-4 border-gray-800 shadow-lg shadow-purple-500/40"
                  animate={{ 
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{ 
                    duration: 10, 
                    ease: "linear", 
                    repeat: Infinity,
                    backgroundSize: "400% 400%"
                  }}
                >
                  <span className="text-white text-4xl font-bold">
                    {profile.first_name?.charAt(0)}
                    {profile.last_name?.charAt(0)}
                  </span>
                </motion.div>
              )}
              <motion.div 
                className="absolute inset-0 rounded-full from-purple-600 to-cyan-400 opacity-30"
                animate={{ 
                  scale: [1, 1.05, 1],
                  opacity: [0.3, 0.2, 0.3]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              />
            </motion.div>

            <motion.h1 
              className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-cyan-400 mb-4"
              variants={itemVariants}
              animate={{ 
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{ 
                duration: 8, 
                ease: "linear", 
                repeat: Infinity,
                backgroundSize: "200% 200%"
              }}
            >
              {profile.first_name} {profile.last_name}
            </motion.h1>

            <motion.div 
              className="flex justify-center lg:justify-start space-x-5 mt-6 mb-8"
              variants={itemVariants}
            >
              <motion.a
                href="https://github.com/9asdaoui"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
                variants={socialIconVariants}
                whileHover="hover"
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
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/oussama-qasdaoui-692164287/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
                variants={socialIconVariants}
                whileHover="hover"
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
              </motion.a>
              <motion.a
                href={`mailto:${profile.email}`}
                className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
                variants={socialIconVariants}
                whileHover="hover"
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
              </motion.a>
            </motion.div>

            <motion.div 
              className="bg-gray-900 p-5 rounded-lg shadow-sm border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300"
              variants={itemVariants}
              whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(168, 85, 247, 0.4)" }}
            >
              <motion.div 
                className="flex items-center mb-3"
                whileHover={{ x: 3 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}  
              >
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
              </motion.div>
              <motion.div 
                className="flex items-center"
                whileHover={{ x: 3 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
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
              </motion.div>
            </motion.div>
          </motion.div>

          <div className="lg:col-span-8">
            <motion.div 
              className="mb-10"
              variants={itemVariants}
            >
              <motion.h2 
                className="text-2xl font-bold text-white mb-4 flex items-center"
                variants={itemVariants}
                whileInView={{ 
                  textShadow: ["0 0 0px rgba(168, 85, 247, 0)", "0 0 10px rgba(168, 85, 247, 0.5)", "0 0 0px rgba(168, 85, 247, 0)"],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <motion.div 
                  className="h-6 w-1.5 bg-purple-600 rounded-full mr-3"
                  animate={{ height: ["24px", "16px", "24px"] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                ></motion.div>
                About Me
              </motion.h2>
              <motion.div 
                className="bg-gray-900 p-6 rounded-lg shadow-sm border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300"
                variants={itemVariants}
                whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(168, 85, 247, 0.4)" }}
              >
                <motion.p 
                  className="text-gray-300 whitespace-pre-line leading-relaxed"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                >
                  {profile.bio || "No bio information available yet."}
                </motion.p>
              </motion.div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <motion.h2 
                className="text-2xl font-bold text-white mb-4 flex items-center"
                variants={itemVariants}
                whileInView={{ 
                  textShadow: ["0 0 0px rgba(168, 85, 247, 0)", "0 0 10px rgba(168, 85, 247, 0.5)", "0 0 0px rgba(168, 85, 247, 0)"],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <motion.div 
                  className="h-6 w-1.5 bg-purple-600 rounded-full mr-3"
                  animate={{ height: ["24px", "16px", "24px"] }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}
                ></motion.div>
                Skills & Expertise
              </motion.h2>
              <motion.div 
                className="bg-gray-900 p-5 rounded-lg shadow-sm border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300"
                variants={itemVariants}
                whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(168, 85, 247, 0.4)" }}
              >
                <motion.h3 
                  className="font-semibold text-white mb-3"
                  variants={itemVariants}
                >
                  Tools & Frameworks
                </motion.h3>
                <motion.div 
                  className="flex flex-wrap gap-2"
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  {Array.isArray(userTools) && userTools.length > 0 ? (
                    userTools.map((tool, index) => (
                      <motion.span
                        key={index}
                        className="bg-gray-800 text-cyan-400 px-3 py-1 rounded-full text-sm flex items-center border border-purple-500/30 hover:border-purple-500/70 transition-all duration-300"
                        variants={itemVariants}
                        whileHover={{ 
                          scale: 1.05, 
                          backgroundColor: "rgba(17, 24, 39, 1)",
                          boxShadow: "0 4px 10px -1px rgba(34, 211, 238, 0.3)"
                        }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ 
                          opacity: 1, 
                          y: 0,
                          transition: { delay: index * 0.1 } 
                        }}
                      >
                        {tool.name}
                        {tool.image_url && (
                          <motion.img
                            src={tool.image_url}
                            alt={tool.name}
                            className="inline-block h-4 w-4 ml-1"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 + index * 0.05 }}
                          />
                        )}
                      </motion.span>
                    ))
                  ) : (
                    <motion.span 
                      className="text-gray-400"
                      variants={itemVariants}
                    >
                      No tools specified yet
                    </motion.span>
                  )}
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Profile;