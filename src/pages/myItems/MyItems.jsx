import React, { useEffect, useState } from "react";
// import axios from "axios";
import newRequest from "../../utils/newRequest.js";
import Card from "../../components/card/Card.jsx";

const MyItems = () => {
  const [myItems, setMyItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMyData = async () => {
      try {
        const response = await newRequest.get("/v1/myitems");
        console.log(response.data);

        setMyItems(response.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };

    fetchMyData();
  }, []);

  return (
    <div>
      <h2>My Items</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          {myItems.map((item) => {
            return <Card {...item} key={item.id} />;
          })}
        </div>
      )}
    </div>
  );
};

export default MyItems;
