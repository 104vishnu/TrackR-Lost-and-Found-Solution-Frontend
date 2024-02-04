// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import newRequest from "../../utils/newRequest.js"

// const LostItems = () => {
//   const [lostItems, setLostItems] = useState([]);

// useEffect(()=>{
//   const fetchlostdata = async()=>
//   {
//     try {
//       const lostdata = await newRequest.get('/v1/lostitems');
//       console.log(lostdata);

//     setLostItems(lostdata);

//     } catch (error) {
//       console.log(error);

//     }

//   };

//   fetchlostdata();
// },[]);

//   return (
//     <div>
//       <h2>Lost Items</h2>
//       <div style={{ display: 'flex', flexWrap: 'wrap' }}>
//         {lostItems && lostItems.data.map((item) => (
//           <div key={item._id} style={{ border: '1px solid #ccc', padding: '10px', margin: '10px', borderRadius: '5px', width: '300px' }}>
//             <h3>{item.itemName}</h3>
//             <p>{item.desc}</p>
//             <p>Type: {item.type}</p>
//             <p>User ID: {item.userId}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default LostItems;

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import newRequest from "../../utils/newRequest.js";
// import Card from '../card/Card.jsx';

// const LostItems = () => {
//   const [lostItems, setLostItems] = useState({
//     itemname:"blue waytch",
//     itemdesc:"blue color",
//     itemtype:"lost",
//     userId:"afg985vbcvb56256",
//     // img:"https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
//   });

//   useEffect(() => {
//     const fetchLostData = async () => {
//       try {
//         const response = await newRequest.get('/v1/lostitems');
//         console.log(response.data);

//         setLostItems(response.data);
//       } catch (error) {
//         console.log(error);
//       }
//     };

//     fetchLostData();
//   }, []);

//   return (
//     <div>
//     <h2>Lost Items</h2>
//     <div style={{ display: 'flex', flexWrap: 'wrap' }}>
//       {lostItems && lostItems.map((item) => (
//         <div key={item._id} style={{ border: '1px solid #ccc', padding: '10px', margin: '10px', borderRadius: '5px', width: '300px' }}>
//           <h3>{item.itemName}</h3>
//           <p>{item.desc}</p>
//           <p>Type: {item.type}</p>
//           <p>User ID: {item.userId}</p>
//         </div>
//       ))}
//     </div>
//   </div>
//   );
// };

// export default LostItems;

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import newRequest from "../../utils/newRequest.js";

// const LostItems = () => {
//   const [lostItems, setLostItems] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchLostData = async () => {
//       try {
//         const response = await newRequest.get('/v1/lostitems');
//         console.log(response.data);

//         setLostItems(response.data);
//         setLoading(false);
//       } catch (error) {
//         console.log(error);
//         setLoading(false);
//       }
//     };

//     fetchLostData();
//   }, []);

//   return (
//     <div>
//       <h2>Lost Items</h2>
//       {loading ? (
//         <p>Loading...</p>
//       ) : (
//         <div style={{ display: 'flex', flexWrap: 'wrap' }}>
//           {lostItems&& lostItems.map((item) => (
//             <div key={item._id} style={{ border: '1px solid #ccc', padding: '10px', margin: '10px', borderRadius: '5px', width: '300px' }}>
//               <h3>{item.itemName}</h3>
//               <p>{item.desc}</p>
//               <p>Type: {item.desc}</p>
//               <p>User ID: {item.itemdesc}</p>
//               <img src="https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default LostItems;

// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import newRequest from "../../utils/newRequest.js";
// import Card from "../../components/card/Card.jsx";

// const LostItems = () => {
//   const [lostItems, setLostItems] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchLostData = async () => {
//       try {
//         const response = await newRequest.get("/v1/lostitems");
//         console.log(response.data);

//         setLostItems(response.data);
//         setLoading(false);
//       } catch (error) {
//         console.log(error);
//         setLoading(false);
//       }
//     };

//     fetchLostData();
//   }, []);

//   return (
//     <div>
//       <h2>Lost Items</h2>
//       {loading ? (
//         <p>Loading...</p>
//       ) : (
//         <div>
//           {lostItems.map((item) => {
//             return <Card {...item} key={item.id} />;
//           })}
//         </div>
//       )}
//     </div>
//   );
// };

// export default LostItems;
import React, { useEffect, useState } from "react";
import axios from "axios";
import newRequest from "../../utils/newRequest.js";
import Card from "../../components/card/Card.jsx";

const LostItems = () => {
  const [lostItems, setLostItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLostData = async () => {
      try {
        const response = await newRequest.get("/v1/lostitems");
        console.log(response.data);

        setLostItems(response.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };

    fetchLostData();
  }, []);

  return (
    <div>
      <h2>Lost Items</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          {lostItems.map((item) => {
            return <Card {...item} key={item.id} />;
          })}
        </div>
      )}
    </div>
  );
};

export default LostItems;
