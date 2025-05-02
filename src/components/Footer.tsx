"use client"

const Footer = () => {
    return (
      <footer className="bg-white text-gray-700 shadow-md py-10">
        <div className="max-w-screen-xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 hover:text-blue-600 transition">Company Info</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="/about" className="hover:text-blue-600 transition">About Us</a>
              </li>
              <li>
                <a href="/careers" className="hover:text-blue-600 transition">Careers</a>
              </li>
            </ul>
          </div>
  
          {/* Customer Support */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 hover:text-blue-600 transition">Customer Support</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="/faq" className="hover:text-blue-600 transition">FAQ</a>
              </li>
              <li>
                <a href="/contact" className="hover:text-blue-600 transition">Contact Us</a>
              </li>
              <li>
                <a href="/shipping" className="hover:text-blue-600 transition">Shipping Info</a>
              </li>
            </ul>
          </div>
  
          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 hover:text-blue-600 transition">Legal</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="/terms" className="hover:text-blue-600 transition">Terms of Service</a>
              </li>
              <li>
                <a href="/privacy" className="hover:text-blue-600 transition">Privacy Policy</a>
              </li>
            </ul>
          </div>
  
          {/* Social Media & Newsletter */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 hover:text-blue-600 transition">Follow Us</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="https://instagram.com" className="hover:text-blue-600 transition">Instagram</a>
              </li>
              <li>
                <a href="https://twitter.com" className="hover:text-blue-600 transition">Twitter</a>
              </li>
            </ul>
  
            {/* Newsletter Signup */}
            <h3 className="mt-6 text-lg font-semibold text-gray-800 hover:text-blue-600 transition">Subscribe</h3>
            <input
              type="email"
              placeholder="Enter your email"
              className="mt-2 p-2 border-2 border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
            <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-500 transition">
              Subscribe
            </button>
          </div>
        </div>
  
        {/* Payment Methods */}
        <div className="text-center mt-10">
          <h3 className="text-lg font-semibold text-gray-800 hover:text-blue-600 transition">Payment Methods</h3>
          <div className="flex justify-center gap-6 mt-4">
            <img src="/images/visa.png" alt="Visa" className="h-8 hover:opacity-70 transition" />
            <img src="/images/mastercard.png" alt="MasterCard" className="h-8 hover:opacity-70 transition" />
            <img src="/images/paypal.png" alt="PayPal" className="h-8 hover:opacity-70 transition" />
          </div>
        </div>
      </footer>
    )
  }
  
  export default Footer
  