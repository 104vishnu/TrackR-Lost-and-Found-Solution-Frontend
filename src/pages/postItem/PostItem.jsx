import { useState } from 'react';
import axios from 'axios';
import newRequest from '../../utils/newRequest';
// import { useNavigate } from 'react-router-dom';

function PostItem() {

  const [itemName,setItemName] = useState('');
  const [itemDesc,setItemDesc] = useState('');
  const [itemType,setItemType] = useState('');
  const [file, setFile] = useState('');

  // const navigate = useNavigate();

  const handleSubmit = async (e)=>
  {
    e.preventDefault();

    try
    { 
      const res = await newRequest.post("/v1/postitem",{itemName,itemDesc,itemType,file})
      console.log(res);
    // navigate("http://localhost:8080/api/v1/lost");
  
    }
    catch(error)
    {
  
      console.log("erroor in postitem");
      console.log(error);

    }

  };
  return (

    <div className="postitem">

        <div className="postitemA">
            <h1>Post Item</h1>
        </div>
        <div className="postItemB">
          <form action="" onSubmit={handleSubmit}>
            <label htmlFor="itemname">Item name</label>
            <input name='itemname' type="text" id='itemname' onChange={(e)=>setItemName(e.target.value)} />

            <label htmlFor="itemdesc">Item Desc</label>
            <input type="text" name='itemdesc' id='itemdesc' onChange={(e)=>setItemDesc(e.target.value)} />

            <label htmlFor="itemtype">Item type</label>
            <select name="itemtype" id="itemtype" onChange={(e)=>setItemType(e.target.value)} >
                <option value="lost">Lost</option>
                <option value="found">Found</option>
            </select>


            <label htmlFor="">Image Input</label>
            <input type="file" id="myFile" name="img" onChange={(e)=>setFile(e.target.files[0])}></input>

            <button type='submit'>submit</button>
            </form>
        </div>
    </div>
  )
}

export default PostItem