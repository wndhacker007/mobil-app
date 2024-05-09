import React from 'react';
import { Link } from 'react-router-dom';
import Slider from './Slider';
import Navbar from './Navbar';
import fakeData from "../pages/First"



function Mainaka() {
  return (
    <div className='mainaka'>
      <p>FLORIST</p>
      <Navbar />
      <h1>Popularity</h1>
      <Slider />

      {fakeData.map((item) => (
        <div key={item.id}>
          {/* Step 4: Link to the detail page with the item ID */}
          <Link to={`/item/${item.id}`}>{item.name}</Link>
        </div>
      ))}
    </div>
  );
}

export default Mainaka;
