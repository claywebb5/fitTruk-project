import React from 'react';


function AboutPage() {
  return (
    <>
      <div className="container">
        <div>
          <h1>ABOUT THE TRUK</h1>
        </div>
        <div>
          <h3>
            Fit Truk is a fully equipped, mobile, outdoor gym complete with squat rack, cable station, landmine, pull up and dip bars, TRX, medicine ball wall and immersive sound and lighting experience.
          </h3>
        </div>
        <div>
          <h2>HERE'S WHAT IS ON THE TRUK:</h2>
        </div>
        {/* ========< ACCORDION >============= */}
        <div> 
          {/* ------< SUMMARY >-------- */}
          <h3>HIGHLIGHTS</h3>
          {/* ------< DETAILS >-------- */}
          <li>Mobile Sign in</li>
          <li>Workout Displays</li>
          <li>Water Bottle Filler</li>
          <li>Heat/AC</li>
          <li>Office workstation for private health plans</li>
          <li>TV's for workout experience</li>
          <li>State-of-the-art sound system</li>
        </div>
        {/* ===========< ACCORDION >=============== */}
        <div>
          {/* ------< SUMMARY >-------- */}
          <h3>EQUIPMENT</h3>
          {/* ------< DETAILS >-------- */}
          <li>Squat Rack</li>
          <li>Commercial Cable Station</li>
          <li>Pull-Up Bars</li>
          <li>Adjustable Plyo Boxes</li>
          <li>Dip Bars</li>
          <li>Battle Rope</li>
          {/* BREAK */}
          <li>2 Rogue Landmines</li>
          <li>Trx Trainer</li>
          <li>Torque Tank M1 Sled</li>
          <li>2 Rogue Benches</li>
          <li>3 Solid Fitness Barbells</li>
          <li>2 Solid Fitness Training Bars</li>
          {/* BREAK */}
          <li>Trap Bar</li>
          <li>Bumper Plates</li>
          <li>Full Kettle Bell and Dumbbell Set</li>
          <li>Resistance Bands</li>
          <li>Medicine Balls</li>
          <li>Jump Ropes</li>
          {/* BREAK */}
        </div>
        {/* ===========< ACCORDION >=============== */}
        <div>
          {/* ------< SUMMARY >-------- */}
          <h3>AUDIO/VIDEO</h3>
          {/* ------< DETAILS >-------- */}
          <li>Pioneer DMG-WT8600NEX Head Unit with 10.1” Floating Display</li>
          <li>Kicker Marine Amplifiers</li>
          <li>8 Kicker 6.5” Marine Lighted Marine Speakers</li>
          <li>2 Bazooka Marine Subwoofers</li>
          <li>2 Flat Screen LED Displays</li>
        </div>
        {/* ===========< ACCORDION >=============== */}
        <div>
          {/* ------< SUMMARY >-------- */}
          <h3>LIGHTING</h3>
          {/* ------< DETAILS >-------- */}
          <li>Million Color App Controlled LED Under-glow Lighting</li>
          <li>6 LED Scene Lights</li>
          <li>2 LED Light Bars</li>
          <li>LED Lighting Throughout Interior Space</li>
        </div>
        {/* ===========< ACCORDION >=============== */}
        <div>
          {/* ------< SUMMARY >-------- */}
          <h3>SECURITY</h3>
          {/* ------< DETAILS >-------- */}
          <li>Viper Audible Alarm System with Text Alerts</li>
          <li>App Controlled Lock/Unlock, GPS Location/Speed Tracking</li>
          <li>Remote Start</li>
          <li>Low Battery Alerts</li>
        </div>
        {/* ===========< ACCORDION >=============== */}
        <div>
          {/* ------< SUMMARY >-------- */}
          <h3>INTERIOR AMENITIES</h3>
          {/* ------< DETAILS >-------- */}
          <li>Desk and Workspace</li>
          <li>Heated and Cooled Rear Workspace</li>
          <li>Interior Audio Controls</li>
          <li>Mini Fridge</li>
          <li>Water Bottle Filler</li>
          <li>360 Camera System For Driver- Always on with Video Storage</li>
          <li>Front Touchscreen Head Unit</li>
          <li>Custom Fit Truk Seats</li>
        </div>
        {/* ===========< ACCORDION >=============== */}
        <div>
          {/* ------< SUMMARY >-------- */}
          <h3>POWER</h3>
          {/* ------< DETAILS >-------- */}
          <li>7 Onboard Batteries</li>
          <li>400 Watt Solar Panel System</li>
          <li>110 Power Inverter</li>
        </div>
        {/* ===========< ACCORDION >=============== */}
        <div>
          {/* ------< SUMMARY >-------- */}
          <h3>PICTURES</h3>
          {/* ------< DETAILS >-------- */}
          <li>
            <img 
              className="photo" 
              width={100} height={100}
              src="https://fittrukkc.com/wp-content/uploads/2021/08/IMG_4729.jpg">
            </img>
          </li>
          <li>
            <img 
              className="photo" 
              width={100} height={100}
              src="https://fittrukkc.com/wp-content/uploads/2021/08/IMG_4752.jpg">
            </img>
          </li>
          <li>
          <img 
              className="photo" 
              width={100} height={100}
              src="https://fittrukkc.com/wp-content/uploads/2021/08/IMG_4755.jpg">
            </img>
          </li>
          <li>
          <img 
              className="photo" 
              width={100} height={100}
              src="https://fittrukkc.com/wp-content/uploads/2021/08/IMG_4765.jpg">
            </img>
          </li>
          <li>
          <img 
              className="photo" 
              width={100} height={100}
              src="https://fittrukkc.com/wp-content/uploads/2021/08/IMG_4767.jpg">
            </img>
          </li>
          <li>
          <img 
              className="photo" 
              width={100} height={100}
              src="https://fittrukkc.com/wp-content/uploads/2021/08/IMG_4791.jpg">
            </img>
          </li>
          <li>
          <img 
              className="photo" 
              width={100} height={100}
              src="https://fittrukkc.com/wp-content/uploads/2021/08/IMG_4776-scaled.jpg">
            </img>
          </li>
          <li>
          <img 
              className="photo" 
              width={100} height={100}
              src="https://fittrukkc.com/wp-content/uploads/2021/08/IMG_4793.jpg">
            </img>
          </li>
        </div> 
      </div> 
      
    </>
  );
}

export default AboutPage;
