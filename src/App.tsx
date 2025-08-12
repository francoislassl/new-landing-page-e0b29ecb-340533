import React from 'react';

// LandingPage component to create a minimalist landing page for a social media expert
const LandingPage = () => {
    return (
        <div className="flex flex-col min-h-screen bg-gray-100">
            {/* Header section with branding */}
            <header className="flex justify-between items-center p-6 bg-white shadow-md">
                <h1 className="text-2xl font-bold text-gray-800">Social Media Expert</h1>
                <nav>
                    <ul className="flex space-x-4">
                        <li><a href="#services" className="text-gray-600 hover:text-blue-500">Services</a></li>
                        <li><a href="#about" className="text-gray-600 hover:text-blue-500">About</a></li>
                        <li><a href="#contact" className="text-gray-600 hover:text-blue-500">Contact</a></li>
                    </ul>
                </nav>
            </header>

            {/* Hero section with a call-to-action */}
            <main className="flex flex-1 items-center justify-center bg-gradient-to-r from-blue-500 to-purple-500 text-white py-20">
                <div className="text-center">
                    <h2 className="text-4xl font-extrabold mb-4">Maximize Your Online Presence</h2>
                    <p className="text-lg mb-6">Expert strategies tailored for your brand to thrive on social media.</p>
                    <a href="#contact" className="px-6 py-3 bg-white text-blue-500 font-semibold rounded-lg shadow-md transition-all duration-300 hover:bg-gray-200">Get Started</a>
                </div>
            </main>

            {/* Services section */}
            <section id="services" className="p-10 bg-white">
                <h3 className="text-3xl font-bold text-center mb-6">Our Services</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="p-6 bg-gray-50 rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
                        <h4 className="text-xl font-semibold mb-2">Social Media Management</h4>
                        <p>Comprehensive management of your social profiles, including content creation and scheduling.</p>
                    </div>
                    <div className="p-6 bg-gray-50 rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
                        <h4 className="text-xl font-semibold mb-2">Content Strategy</h4>
                        <p>Tailored content strategies to engage your audience and increase brand visibility.</p>
                    </div>
                    <div className="p-6 bg-gray-50 rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
                        <h4 className="text-xl font-semibold mb-2">Analytics & Reporting</h4>
                        <p>In-depth analytics to track performance and optimize your social media efforts.</p>
                    </div>
                </div>
            </section>

            {/* About section */}
            <section id="about" className="p-10 bg-gray-100">
                <h3 className="text-3xl font-bold text-center mb-6">About Me</h3>
                <p className="text-center max-w-2xl mx-auto">I am a passionate social media expert with years of experience helping brands grow their online presence and engage with their audience effectively. Let’s take your social media strategy to the next level!</p>
            </section>

            {/* Contact section */}
            <section id="contact" className="p-10 bg-white">
                <h3 className="text-3xl font-bold text-center mb-6">Get In Touch</h3>
                <form className="max-w-lg mx-auto">
                    <input type="text" placeholder="Your Name" className="w-full p-3 border border-gray-300 rounded mb-4" required />
                    <input type="email" placeholder="Your Email" className="w-full p-3 border border-gray-300 rounded mb-4" required />
                    <textarea placeholder="Your Message" className="w-full p-3 border border-gray-300 rounded mb-4" rows="4" required></textarea>
                    <button type="submit" className="w-full px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg transition-all duration-300 hover:bg-blue-600">Send Message</button>
                </form>
            </section>

            {/* Footer section */}
            <footer className="p-6 bg-gray-800 text-white text-center">
                <p>&copy; 2023 Social Media Expert. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default LandingPage;