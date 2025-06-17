// export default function About() {
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-yellow-50 px-4 py-12 flex items-center justify-center">
//       <div className="max-w-5xl w-full bg-white/90 backdrop-blur-sm shadow-2xl rounded-3xl p-10">
//         <h1 className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-6 border-b-4 border-yellow-400 inline-block pb-2 text-center">
//           About Us
//         </h1>
//         <p className="text-lg text-gray-700 leading-relaxed text-center max-w-3xl mx-auto">
//           <span className="text-blue-800 font-semibold">ElectroShop</span> is your trusted destination for high-quality electrical products.
//           We specialize in modern lighting solutions, durable wiring components, and reliable electrical accessories tailored to both
//           residential and commercial needs. With a commitment to innovation and customer satisfaction, ElectroShop is lighting up homes and powering progress across the nation.
//         </p>

//         <div className="mt-10 grid md:grid-cols-2 gap-6">
//           <div className="bg-blue-100/80 p-6 rounded-lg shadow hover:shadow-md transition-all">
//             <h2 className="text-xl font-bold text-blue-800 mb-2">🌟 Our Vision</h2>
//             <p className="text-gray-800">
//               To be a leader in providing smart, sustainable, and accessible electrical solutions for everyone.
//             </p>
//           </div>
//           <div className="bg-yellow-100/80 p-6 rounded-lg shadow hover:shadow-md transition-all">
//             <h2 className="text-xl font-bold text-yellow-800 mb-2">⚡ Why Choose Us?</h2>
//             <p className="text-gray-800">
//               Quality assurance, wide product range, expert guidance, and a seamless shopping experience for our customers.
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


import '../App.css'; // Import the global stylesheet

export default function About() {
  return (
    <div className="about-container">
      <div className="about-wrapper">
        <h1 className="about-title">About Us</h1>
        <p className="about-description">
          <span className="highlight">ElectroShop</span> is your trusted destination for high-quality electrical products.
          We specialize in modern lighting solutions, durable wiring components, and reliable electrical accessories tailored to both
          residential and commercial needs. With a commitment to innovation and customer satisfaction, ElectroShop is lighting up homes and powering progress across the nation.
        </p>

        <div className="about-cards">
          <div className="card vision-card">
            <h2 className="card-title">🌟 Our Vision</h2>
            <p className="card-text">
              To be a leader in providing smart, sustainable, and accessible electrical solutions for everyone.
            </p>
          </div>
          <div className="card choose-card">
            <h2 className="card-title">⚡ Why Choose Us?</h2>
            <p className="card-text">
              Quality assurance, wide product range, expert guidance, and a seamless shopping experience for our customers.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
