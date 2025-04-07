import React from 'react';

const Messages = () => {


	const handleSubmit = (e) => {

		e.preventDefault();
		const formData = new FormData(e.target);
		const data = Object.fromEntries(formData.entries());

		


		console.log('Form Data:', data);
	
		e.target.reset();
	}

	return (
		<section id="contact" className="py-20 bg-gray-50">
			<div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center mb-12">
					<h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
						Get in Touch
					</h2>
					<p className="mt-4 text-lg text-gray-600">
						Have a question or want to work together? Send me a message!
					</p>
				</div>

				<div className="bg-white rounded-lg shadow-lg p-8">
					<form className="space-y-6" onSubmit={handleSubmit}>
						{/* Name Input */}
						<div>
							<label htmlFor="name" className="block text-sm font-medium text-gray-700">
								Name
							</label>
							<div className="mt-1">
								<input
									type="text"
									name="name"
									id="name"
									placeholder="Your name"
									className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md p-3 border"
								/>
							</div>
						</div>

						{/* Email Input */}
						<div>
							<label htmlFor="email" className="block text-sm font-medium text-gray-700">
								Email
							</label>
							<div className="mt-1">
								<input
									type="email"
									name="email"
									id="email"
									placeholder="your.email@example.com"
									className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md p-3 border"
								/>
							</div>
						</div>

						{/* Message Input */}
						<div>
							<label htmlFor="message" className="block text-sm font-medium text-gray-700">
								Message
							</label>
							<div className="mt-1">
								<textarea
									id="message"
									name="message"
									rows="5"
									placeholder="Your message here..."
									className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md p-3 border"
								></textarea>
							</div>
						</div>

						{/* Submit Button */}
						<div className="flex justify-center">
							<button
								type="submit"
								className="inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-300"
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