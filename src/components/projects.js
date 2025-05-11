import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';

const Projects = () => {
    const [projects, setProjects] = useState([]);
    const [isError, setIsError] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    
    useEffect(() => {
        const fetchProjects = async () => {
            setIsLoading(true);
            try {
                const response = await axios.get('https://oussamaapi.azizbenmallouk.com/api/projects');
                setProjects(response.data);
            } catch (error) {
                console.error("Error fetching projects:", error);
                setIsError(true);
            } finally {
                setIsLoading(false);
            }
        };

        fetchProjects();
    }, []);

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };
    
    const cardVariants = {
        hidden: { y: 50, opacity: 0 },
        visible: { 
            y: 0, 
            opacity: 1,
            transition: { duration: 0.5 }
        }
    };

    // Loading animation
    const LoadingSpinner = () => (
        <div className="flex justify-center items-center py-20">
            <div className="relative w-24 h-24">
                <div className="absolute top-0 left-0 right-0 bottom-0 rounded-full border-4 border-t-purple-600 border-r-cyan-400 border-b-purple-600 border-l-cyan-400 animate-spin"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-purple-500 font-medium">Loading</div>
            </div>
        </div>
    );

    return (
        <section id="projects" className="py-32 bg-black text-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                <motion.div 
                    className="text-center mb-20"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-cyan-400 tracking-tight">
                        My Projects
                    </h2>
                    <div className="mt-3 w-32 h-1.5 bg-gradient-to-r from-purple-600 to-cyan-400 mx-auto rounded-full"></div>
                    <p className="mt-6 text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
                        Explore my complete portfolio of work
                    </p>
                </motion.div>

                {isLoading && <LoadingSpinner />}

                {isError && !isLoading && (
                    <motion.div 
                        className="flex items-center bg-gray-900/80 backdrop-blur-sm border-l-4 border-cyan-400 text-gray-300 p-5 mb-10 rounded-r shadow-lg"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4 }}
                    >
                        <svg className="w-6 h-6 mr-3 text-cyan-400" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                        Error loading projects. Displaying sample data instead.
                    </motion.div>
                )}

                {!isLoading && (
                    <motion.div 
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        {projects.map((project) => (
                            <motion.div 
                                key={project.id} 
                                className="group bg-gradient-to-br from-gray-900 to-gray-950 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl shadow-purple-500/10 hover:shadow-purple-500/30 border border-purple-500/10 transition-all duration-500 transform hover:-translate-y-1 flex flex-col h-full"
                                variants={cardVariants}
                            >
                                <div className="h-56 relative overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent z-10 opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
                                    <img
                                        src={project.image_url || "https://via.placeholder.com/300"}
                                        alt={project.title}
                                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-in-out"
                                        onError={(e) => { e.target.src = "https://via.placeholder.com/300"; }}
                                    />
                                </div>
                                
                                <div className="p-6 flex-grow">
                                    <div className="flex flex-wrap justify-between items-start gap-3 mb-4">
                                        <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400">{project.title}</h3>
                                        <span className="bg-gray-800/70 backdrop-blur-sm text-cyan-400 px-3 py-1 rounded-full text-xs font-medium border border-purple-500/40 shadow-inner shadow-purple-500/10">
                                            {project.type}
                                        </span>
                                    </div>
                                    
                                    <p className="text-gray-300 mb-5 text-sm leading-relaxed line-clamp-3">{project.description}</p>
                                    
                                    <div className="mb-5">
                                        <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2 flex items-center">
                                            <span className="mr-2">Technologies</span>
                                            <div className="h-[1px] flex-grow bg-gradient-to-r from-purple-500/30 to-transparent"></div>
                                        </h4>
                                        <div className="flex flex-wrap gap-2">
                                            {project.tools && project.tools.map((tool) => (
                                                <div key={tool.id} className="flex items-center bg-gray-800/50 backdrop-blur-sm border border-purple-500/30 px-2 py-1 rounded-lg hover:bg-gray-800 transition-colors">
                                                    <img
                                                        src={tool.image_url}
                                                        alt={tool.name}
                                                        className="w-4 h-4 mr-1.5"
                                                        onError={(e) => { e.target.src = "https://via.placeholder.com/20"; }}
                                                    />
                                                    <span className="text-cyan-400 text-xs">{tool.name}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="p-4 mt-auto">
                                    <a
                                        href={project.project_url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex w-full items-center justify-center px-4 py-2 bg-gradient-to-r from-purple-600 to-cyan-500 text-white text-sm font-medium rounded-lg hover:from-purple-700 hover:to-cyan-600 transition duration-300 border border-purple-400/30 shadow-lg shadow-purple-500/20 transform hover:scale-105"
                                    >
                                        <span>View Project</span>
                                        <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg>
                                    </a>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                )}
            </div>
        </section>
    );
};

export default Projects;