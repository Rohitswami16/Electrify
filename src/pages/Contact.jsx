// export default function Contact() {
//   return (
//     <div className="min-h-screen bg-gray-50 py-10 px-4">
//       <div className="max-w-4xl mx-auto">
//         <h1 className="text-4xl font-bold text-center text-blue-900 mb-6">Contact Us</h1>
        
//         <p className="text-center text-gray-600 mb-10">
//           We'd love to hear from you! Fill out the form or reach out using the contact information below.
//         </p>

//         {/* Contact Info */}
//         <div className="bg-white shadow-md rounded-lg p-6 mb-8">
//           <h2 className="text-xl font-semibold text-blue-800 mb-2">Our Office</h2>
//           <p className="text-gray-600">123 Electro Street, Bangalore, India</p>
//           <p className="text-gray-600">Email: support@electroshop.com</p>
//           <p className="text-gray-600">Phone: +91 98765 43210</p>
//         </div>

//         {/* Contact Form */}
//         <form className="bg-white shadow-md rounded-lg p-6 space-y-4">
//           <div className="flex flex-col md:flex-row md:space-x-4">
//             <input
//               type="text"
//               placeholder="Your Name"
//               className="flex-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//               required
//             />
//             <input
//               type="email"
//               placeholder="Your Email"
//               className="flex-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//               required
//             />
//           </div>
//           <input
//             type="text"
//             placeholder="Subject"
//             className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//           <textarea
//             placeholder="Your Message"
//             rows="5"
//             className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//             required
//           ></textarea>
//           <button
//             type="submit"
//             className="bg-blue-700 text-white px-6 py-2 rounded-md hover:bg-blue-800 transition"
//           >
//             Send Message
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }


import '../App.css';

export default function Contact() {
  return (
    <div className="contact-page">
      <div className="contact-container">
        <h1 className="contact-title">Contact Us</h1>
        
        <p className="contact-description">
          We'd love to hear from you! Fill out the form or reach out using the contact information below.
        </p>

        {/* Contact Info */}
        <div className="contact-info">
          <h2 className="contact-info-title">Our Office</h2>
          <p className="contact-info-text">123 Electro Street, Bangalore, India</p>
          <p className="contact-info-text">Email: support@electroshop.com</p>
          <p className="contact-info-text">Phone: +91 98765 43210</p>
        </div>

        {/* Contact Form */}
        <form className="contact-form">
          <div className="form-row">
            <input
              type="text"
              placeholder="Your Name"
              className="form-input"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="form-input"
              required
            />
          </div>
          <input
            type="text"
            placeholder="Subject"
            className="form-input full-width"
          />
          <textarea
            placeholder="Your Message"
            rows="5"
            className="form-input full-width"
            required
          ></textarea>
          <button type="submit" className="form-button">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
