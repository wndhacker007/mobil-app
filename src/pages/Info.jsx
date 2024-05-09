import React from 'react';
import { useParams } from 'react-router-dom';
import fakeData from "../pages/First"


function ItemDetail() {
  const { id } = useParams(); // Get the ID from the URL
  const item = fakeData.find((item) => item.id === parseInt(id, 10)); // Find the matching item

  if (!item) {
    return <div>Item not found</div>;
  }

  return (
    <div>
      <h2>{item.name}</h2>
      <p>{item.description}</p>
      {/* Additional information about the item can be displayed here */}
    </div>
  );
}

export default ItemDetail;
