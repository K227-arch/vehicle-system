import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import images from "./images/back-plate.jpg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="container">
        <div className="container1">
          <div className="item">Monitoring</div>
          <div className="item">Vehicles-Record</div>
          <div className="item">Parking-Status</div>
        </div>

        <div className="container2">
          <div className="box">
            <div className="box-titles">Incoming Vehicle</div>
            <p>N Plate: KL01CA2555</p>
            <p>Entry Point: 04:00 PM</p>
          </div>
          <div className="box">
          <div className="box-titles">Outcoming Vehicle</div>
            <p>N Plate: KL01CA2555</p>
            <p>Entry Point: 04:00 PM</p>
          </div>
          <div className="box">
          <div className="box-titles">Parking Space</div>
            <p>Occupied: 23</p>
            <p>Available: 7</p>
          </div>
        </div>
        <div className="title">
          <div className="title1">Last Record</div>
          <div className="title2">Live Feed</div>
        </div>

        <div className="container3">
          <div className="box1">
            <div className="item">NUMBER PLATE </div>
            <ul className="item1">
              <li>KL01CA2555</li>
              <li>UAY661M</li>
              <li>FKA03NA8385</li>
              <li>UBN885H</li>
              <li>UBB978L</li>
              <li>UAD034U</li>
              <li>UAD034U</li>
            </ul>
            <div className="item">ENTRY TIME</div>
            <ul className="item1">
              <li>04:00 pm</li>
              <li>4:00 pm</li>
              <li>04:00 pm</li>
              <li>04:00 pm</li>
              <li>04:00 pm</li>
              <li>04:00 pm</li>
              <li>04:00 pm</li>
            </ul>
            <div className="item">EXIT TIME </div>
            <ul className="item1">
              <li>04:00 pm</li>
              <li>4:00 pm</li>
              <li>04:00 pm</li>
              <li>04:00 pm</li>
              <li>04:00 pm</li>
              <li>04:00 pm</li>
              <li>04:00 pm</li>
            </ul>
            <div className="item">DATE</div>
            <ul className="item1">
              <li>06/11/2024</li>
              <li>06/11/2024</li>
              <li>06/11/2024</li>
              <li>06/11/2024</li>
              <li>06/11/2024</li>
              <li>06/11/2024</li>
              <li>06/11/2024</li>
            </ul>
            <div className="item">STATUS</div>
            <ul className="item1">
              <li>ENTER</li>
              <li>EXIT</li>
              <li>ENTER</li>
              <li>EXIT</li>
              <li>ENTER</li>
              <li>EXIT</li>
              <li>ENTER</li>
            </ul>
          </div>
          <div className="boxes">
            <div className="box2">
            <div className="icons">
              
              <img src={images} />
            </div>
            
           </div>
           <div className="box4">
            <div className="icons">
              
              <img src={images} />
            </div>
            
          </div>
          </div>
          

        </div>
        <div className="box1"></div>
      </div>
    </>
  );
}

export default App;
