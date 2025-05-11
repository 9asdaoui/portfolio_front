import React, { useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';


const Messages = () => {

    const handleSubmit = (e) => {

        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());

        axios.post('https://oussamaapi.azizbenmallouk.com/api/messages', data)
            .then((response) => {

                e.target.reset();
                console.log('Message sent successfully:', response.data);
                
                Swal.fire({
                    icon: 'success',
                    title: 'Success!',
                    text: 'Message sent successfully!',
                    confirmButtonColor: '#8B5CF6', // Purple color to match theme
                    background: '#1F2937', // Dark background
                    iconColor: '#34D399', // Custom success icon color (green-ish cyan)
                    titleColor: '#F3F4F6', // Light text for title
                    textColor: '#D1D5DB', // Light gray text
                    customClass: {
                        popup: 'dark-swal-popup',
                        title: 'dark-swal-title',
                        content: 'dark-swal-content',
                        confirmButton: 'dark-swal-confirm-button'
                    }
                })
            })
            .catch((error) => {
                console.error('Error sending message:', error);
                console.error('Error sending message:', error);
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Error sending message. Please try again later.',
                    confirmButtonColor: '#8B5CF6', // Purple color to match theme
                    background: '#1F2937', // Dark background
                    iconColor: '#EF4444', // Red color for error icon
                    color: '#F3F4F6', // Light text color for content
                    customClass: {
                        popup: 'dark-swal-popup',
                        title: 'dark-swal-title',
                        content: 'dark-swal-content',
                        confirmButton: 'dark-swal-confirm-button'
                    }
                });
            });    
    }


    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

      
    return (
        <section id="contact" className="py-40 bg-black text-white p-20">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-cyan-400 sm:text-4xl">
                        Get in Touch
                    </h2>
                    <p className="mt-4 text-lg text-gray-400">
                        Have a question or want to work together? Send me a message!
                    </p>
                </div>

                <div className="bg-gray-900 rounded-lg shadow-sm border border-purple-500/20 p-8">
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-300">
                                Name
                            </label>
                            <div className="mt-1">
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    placeholder="Your name"
                                    className="shadow-sm focus:ring-purple-600 focus:border-purple-600 block w-full sm:text-sm border-gray-700 bg-gray-800 text-white rounded-md p-3 border"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                                Email
                            </label>
                            <div className="mt-1">
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder="your.email@example.com"
                                    className="shadow-sm focus:ring-purple-600 focus:border-purple-600 block w-full sm:text-sm border-gray-700 bg-gray-800 text-white rounded-md p-3 border"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-300">
                                Message
                            </label>
                            <div className="mt-1">
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="5"
                                    placeholder="Your message here..."
                                    className="shadow-sm focus:ring-purple-600 focus:border-purple-600 block w-full sm:text-sm border-gray-700 bg-gray-800 text-white rounded-md p-3 border"
                                ></textarea>
                            </div>
                        </div>

                        <div className="flex justify-center">
                            <button
                                type="submit"

                                className="inline-flex justify-center py-3 px-6 border border-purple-400/30 shadow-sm text-base font-medium rounded-md text-white bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-700 hover:to-cyan-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition duration-300"
                            >
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Messages;
