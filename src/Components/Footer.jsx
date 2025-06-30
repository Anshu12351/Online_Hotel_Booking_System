import React from 'react'

const Footer = () => {
  return (
    <>
     <footer className="bg-gray-900 text-gray-200 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
            {/* <!-- Main footer content - 1 column for social + 4 columns for tags --> */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-8">
                {/* <!-- Social Media Column --> */}
                <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-white">Connect With Us</h3>
                    <div className="flex space-x-4">
                        <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                            <i className="fab fa-facebook-f text-xl"></i>
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                            <i className="fab fa-twitter text-xl"></i>
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                            <i className="fab fa-instagram text-xl"></i>
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                            <i className="fab fa-linkedin-in text-xl"></i>
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                            <i className="fab fa-youtube text-xl"></i>
                        </a>
                    </div>
                    <p className="text-sm text-gray-400">Follow us for updates and news</p>
                </div>

                 {/* Tag Columns */}
                <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-white">Products</h3>
                    <ul className="space-y-2">
                        <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Latest Releases</a></li>
                        <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Featured Items</a></li>
                        <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Seasonal Offers</a></li>
                        <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Limited Editions</a></li>
                    </ul>
                </div>

                <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-white">Services</h3>
                    <ul className="space-y-2">
                        <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Customer Support</a></li>
                        <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Shipping Info</a></li>
                        <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Returns & Exchanges</a></li>
                        <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Product Care</a></li>
                    </ul>
                </div>

                <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-white">About</h3>
                    <ul className="space-y-2">
                        <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Our Story</a></li>
                        <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Sustainability</a></li>
                        <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Careers</a></li>
                        <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Press</a></li>
                    </ul>
                </div>

                <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-white">Legal</h3>
                    <ul className="space-y-2">
                        <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Terms of Service</a></li>
                        <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Privacy Policy</a></li>
                        <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Cookie Policy</a></li>
                        <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Accessibility</a></li>
                    </ul>
                </div>
            </div>

            {/* <!-- Copyright / Bottom row --> */}
            <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
                <p className="text-sm text-gray-400 mb-4 md:mb-0">
                    &copy;  2025 Your Company. All rights reserved.
                </p>
                <div className="flex space-x-6">
                    <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">Sitemap</a>
                    <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">FAQ</a>
                    <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">Contact</a>
                </div>
            </div>
        </div>
    </footer>

    </>
  )
}

export default Footer