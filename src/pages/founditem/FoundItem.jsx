/* eslint-disable no-unused-vars */

import React, { useEffect, useState } from "react";

import newRequest from "../../utils/newRequest.js";
import Card from "../../components/card/Card.jsx";

const FoundItems = () => {
  const [foundItems, setFoundItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFoundData = async () => {
      try {
        const response = await newRequest.get("/v1/founditems");
        console.log(response.data);

        setFoundItems(response.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };

    fetchFoundData();
  }, []);

  return (
    <div>
      <h2>Found Items</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          {foundItems.map((item) => {
            return <Card {...item} key={item.id} />;
          })}
        </div>
      )}
    </div>
  );
};

export default FoundItems;
