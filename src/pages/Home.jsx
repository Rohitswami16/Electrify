// export default function Home() {
//   return (
//     <div className="text-center py-20 bg-gray-100">
//       <h1 className="text-5xl font-bold text-blue-800">Welcome to ElectroShop</h1>
//       <p className="text-gray-600 mt-4 text-lg">Your trusted source for electrical solutions</p>
//     </div>
//   );
// }


import '../App.css'; // import the CSS file

export default function Home() {
  return (
    <div className="home-container">
      <h1 className="home-title">Welcome to ElectroShop</h1>
      <p className="home-subtitle">Your trusted source for electrical solutions</p>
    </div>
  );
}
