import ProductCard from "../components/ProductCard";
import "../App.css"; // Import the global stylesheet

import ledBulbImg from "../product-images/led-bulb.jpeg";
import switchboardImg from "../product-images/switch-board.jpeg";
import extensionCordImg from "../product-images/extension-cord.jpeg";
import ceilinngFanImg from "../product-images/ceiling-fan.jpeg";
import electricIronImg from "../product-images/iron.jpeg";
import tableLampImg from "../product-images/table-lamp.jpeg";
import powerstripImg from "../product-images/power-strip.jpeg";
import tubeLightImg from "../product-images/tube-light.jpeg";
import wallSocketImg from "../product-images/wall-socket.jpeg";
import InverterBatteryImg from "../product-images/inverter-battery.jpeg";
import wiringCableImg from "../product-images/wiring-cable.jpeg";
import electricKettleImg from "../product-images/electric-kettle.jpeg";
import mcbSwitchImg from "../product-images/mcb-switch.jpeg";
import chargerAdapterImg from "../product-images/charger-adapter.jpeg";
import smartPlugImg from "../product-images/smart-plug.jpeg";

const products = [
  { id: 1, name: "LED Bulb", price: "₹120", image: ledBulbImg },
  { id: 2, name: "Switch Board", price: "₹450", image: switchboardImg },
  { id: 3, name: "Extension Cord", price: "₹350", image: extensionCordImg },
  { id: 4, name: "Ceiling Fan", price: "₹1500", image: ceilinngFanImg },
  { id: 5, name: "Electric Iron", price: "₹999", image: electricIronImg },
  { id: 6, name: "Table Lamp", price: "₹700", image: tableLampImg },
  { id: 7, name: "Power Strip", price: "₹400", image: powerstripImg },
  { id: 8, name: "Tube Light", price: "₹250", image: tubeLightImg },
  { id: 9, name: "Wall Socket", price: "₹180", image: wallSocketImg },
  {
    id: 10,
    name: "Inverter Battery",
    price: "₹6200",
    image: InverterBatteryImg,
  },
  { id: 11, name: "Wiring Cable", price: "₹950", image: wiringCableImg },
  { id: 12, name: "Electric Kettle", price: "₹1300", image: electricKettleImg },
  { id: 13, name: "MCB Switch", price: "₹300", image: mcbSwitchImg },
  { id: 14, name: "Charger Adapter", price: "₹450", image: chargerAdapterImg },
  { id: 15, name: "Smart Plug", price: "₹1500", image: smartPlugImg },
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
