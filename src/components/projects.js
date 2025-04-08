import React, { useState, useEffect } from 'react';
import axios from 'axios';


const Projects = () => {
    const [projects, setProjects] = useState([]);
    const [isError, setIsError] = useState(false);
    const [loading, setloading] = useState(true);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await axios.get('https://oussamaapi.azizbenmallouk.com/api/projects');
                setProjects(response.data);
                setloading(false);
            } catch (error) {
                console.error("Error fetching projects:", error);
                setIsError(true);
                setloading(false);
            }
        };

        fetchProjects();
    }, []);

    if (loading) {
        return (
            <section id="profile" className="py-40 bg-black text-white min-h-screen flex items-center justify-center">
            <div className="text-center">
                <div className="flex justify-center mb-4">
                <svg className="animate-spin h-12 w-12 text-purple-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                </div>
                <p className="text-xl font-medium text-gray-400">Loading profile information...</p>
                <div className="mt-3 w-48 h-1 mx-auto bg-gray-800 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-purple-600 to-cyan-400 animate-pulse"></div>
                </div>
            </div>
            </section>
        );
    }

    return (
        <section id="projects" className="py-40 bg-black text-white p-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-cyan-400 tracking-tight">
                        My Projects
                    </h2>
                    <div className="mt-2 w-24 h-1 bg-gradient-to-r from-purple-600 to-cyan-400 mx-auto"></div>
                    <p className="mt-4 text-xl text-gray-300 max-w-2xl mx-auto">
                        Explore my complete portfolio of work
                    </p>
                </div>

                {isError && (
                    <div className="flex items-center bg-gray-900 border-l-4 border-cyan-400 text-gray-300 p-4 mb-8 rounded-r">
                        <svg className="w-5 h-5 mr-2 text-cyan-400" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                        Error loading projects. Displaying sample data instead.
                    </div>
                )}

                <div className="space-y-8">
                    {projects.map((project) => (
                        <div key={project.id} className="group bg-gray-900 rounded-xl overflow-hidden shadow-md hover:shadow-lg shadow-purple-500/20 border border-purple-500/20 transition-all duration-300">
                            <div className="flex flex-col md:flex-row">
                                <div className="md:w-1/3 h-64 md:h-auto">
                                    <img
                                        src={project.image_url || "https://via.placeholder.com/300"}
                                        alt={project.title}
                                        className="w-full h-full object-cover"
                                        onError={(e) => { e.target.src = "https://via.placeholder.com/300"; }}
                                    />
                                </div>
                                
                                <div className="md:w-2/3 p-6">
                                    <div className="flex flex-wrap justify-between items-center mb-4">
                                        <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-cyan-400">{project.title}</h3>
                                        <span className="bg-gray-800 text-cyan-400 px-3 py-1 rounded-full text-sm font-medium mt-2 md:mt-0 border border-purple-500/30">
                                            {project.type}
                                        </span>
                                    </div>
                                    
                                    <p className="text-gray-300 mb-4">{project.description}</p>
                                    
                                    <div className="mb-4">
                                        <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-2">Technologies Used</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {project.tools && project.tools.map((tool) => (
                                                <div key={tool.id} className="flex items-center bg-gray-800 border border-purple-500/30 px-2 py-1 rounded-md">
                                                    <img
                                                        src={tool.image_url}
                                                        alt={tool.name}
                                                        className="w-4 h-4 mr-1"
                                                        onError={(e) => { e.target.src = "https://via.placeholder.com/20"; }}
                                                    />
                                                    <span className="text-cyan-400 text-xs">{tool.name}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    
                                    <div className="flex justify-end">
                                        <a
                                            href={project.project_url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-600 to-cyan-500 text-white text-sm font-medium rounded-md hover:from-purple-700 hover:to-cyan-600 transition duration-300 border border-purple-400/30"
                                        >
                                            <span>View Project</span>
                                            <svg className="ml-1 w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;