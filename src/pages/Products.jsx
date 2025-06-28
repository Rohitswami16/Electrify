import ProductCard from "../components/ProductCard";
import "../App.css";
import { useState } from "react";

// tv
import tv1 from "../product-images/tv1.jpg";
import tvlg from "../product-images/tv-lg.jpg";
import tvsamsung from "../product-images/tv-samsung.jpg";
import tvlenova from "../product-images/tv-lenovo.jpg";
import tvsony from "../product-images/tv-sony.jpg";
// refrigerator
import refrigeratorlg from "../product-images/refrigerator-lg.jpg";
import refrigeratorSamsung from "../product-images/refrigerator-samsung.jpg";
import refrigeratorWhirlpool from "../product-images/refrigerator-gdrj.jpg";
import refrigerator3 from "../product-images/refrigerator3.jpg";
// mobile phones
import iphone16 from "../product-images/iphone-16.jpg";
import sumsungs24 from "../product-images/samsung-s24-ultra.jpg"; 
import redminote13 from "../product-images/redmi-note-13.jpg";
import vivo from "../product-images/vivo.jpg";

// washing machines
import  washingMLG from "../product-images/washing-machine-1.jpg";
import washingMSamsung from "../product-images/washing-machine-2.jpg";
import washingMWhirlpool from "../product-images/washing-machine-3.jpg";

// air conditioners
import acLG from "../product-images/ac-2.jpg";
import acSamsung from "../product-images/ac-3.jpg";
import acWhirlpool from "../product-images/ac-wayfair.jpg";

import ledBulbImg from "../product-images/led-bulb.jpeg";
import extensionCordImg from "../product-images/extension-cord.jpeg";
import ceilinngFanImg from "../product-images/ceiling-fan.jpeg";
import electricIronImg from "../product-images/iron.jpeg";
import tableLampImg from "../product-images/table-lamp.jpeg";
import powerstripImg from "../product-images/power-strip.jpeg";
import tubeLightImg from "../product-images/tube-light.jpeg";
import wallSocketImg from "../product-images/wall-socket.jpeg";
import InverterImg from "../product-images/Inverter-Battery.jpeg";
import wiringCableImg from "../product-images/Wiring-Cable.jpeg";
import electricKettleImg from "../product-images/Electric-Kettle.jpeg";
import mcbSwitchImg from "../product-images/MCB-Switch.jpeg";
import chargerAdapterImg from "../product-images/Charger-Adapter.jpeg";
import smartPlugImg from "../product-images/Smart-Plug.jpeg";


const products = [
  // tvs
  { id: 1, name: "TV 32 inch", price: "₹25000", image: tv1 },
  { id: 2, name: "LG TV 43 inch", price: "₹45000", image: tvlg },
  { id: 3, name: "Samsung TV 55 inch", price: "₹65000", image: tvsamsung },
  { id: 4, name: "Lenovo TV 65 inch", price: "₹85000", image: tvlenova },
  { id: 5, name: "Sony TV 75 inch", price: "₹105000", image: tvsony },

  // refrigerators
  { id: 6, name: "LG Refrigerator", price: "₹30000", image: refrigeratorlg },
  { id: 7, name: "Samsung Refrigerator", price: "₹35000", image: refrigeratorSamsung },
  { id: 8, name: "Whirlpool Refrigerator", price: "₹40000", image: refrigeratorWhirlpool },
  { id: 9, name: "Refrigerator", price: "₹45000", image: refrigerator3 },

  // mobile phones
  { id: 10, name: "iPhone 16", price: "₹120000", image: iphone16 },
  { id: 11, name: "Samsung S24", price: "₹90000", image: sumsungs24 },
  { id: 12, name: "Redmi Note 13", price: "₹15000", image: redminote13 },
  { id: 13, name: "Vivo", price: "₹20000", image: vivo },

  // washing machines
  { id: 28, name: "LG Washing Machine", price: "₹25000", image: washingMLG },
  { id: 29, name: "Samsung Washing Machine", price: "₹30000", image: washingMSamsung },
  { id: 30, name: "Whirlpool Washing Machine", price: "₹35000", image: washingMWhirlpool },

  // air conditioners
  { id: 31, name: "LG Air Conditioner", price: "₹40000", image: acLG },
  { id: 32, name: "Samsung Air Conditioner", price: "₹45000", image: acSamsung },
  { id: 33, name: "Whirlpool Air Conditioner", price: "₹50000", image: acWhirlpool },


  // electrical products
  { id: 14, name: "LED Bulb", price: "₹120", image: ledBulbImg },
  { id: 15, name: "Extension Cord", price: "₹350", image: extensionCordImg },
  { id: 16, name: "Ceiling Fan", price: "₹1500", image: ceilinngFanImg },
  { id: 17, name: "Electric Iron", price: "₹999", image: electricIronImg },
  { id: 18, name: "Table Lamp", price: "₹700", image: tableLampImg },
  { id: 19, name: "Power Strip", price: "₹400", image: powerstripImg },
  { id: 20, name: "Tube Light", price: "₹250", image: tubeLightImg },
  { id: 21, name: "Wall Socket", price: "₹180", image: wallSocketImg },
  { id: 22, name: "Inverter Battery", price: "₹6200", image: InverterImg },
  { id: 23, name: "Wiring Cable", price: "₹950", image: wiringCableImg },
  { id: 24, name: "Electric Kettle", price: "₹1300", image: electricKettleImg },
  { id: 25, name: "MCB Switch", price: "₹300", image: mcbSwitchImg },
  { id: 26, name: "Charger Adapter", price: "₹450", image: chargerAdapterImg },
  { id: 27, name: "Smart Plug", price: "₹1500", image: smartPlugImg },
];

export default function Products() {
  return (
    <section className="products-section">

      <h2 className="product-heading">Products</h2>
      <div className="products-grid">
        {products.map((p) => (
          <ProductCard key={p.id} {...p} />
        ))}
      </div>
    </section>
    
  );
}

