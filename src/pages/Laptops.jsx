import React from 'react'
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./style1.css";

  const Laptops = () => {
    const [Laptops, setLaptops] = useState([]);
  
    useEffect(() => {
      const fetchAllLaptops= async () => {
        try {
          const response = await axios.get("http://localhost:8800/data1"); 
          // console.log(response.data);
          setLaptops(response.data);
          
        } catch (err) {
          console.log(err);
        }
      };
      fetchAllLaptops();
    }, []);
  
    console.log(Laptops);


  return (
    <div>
      <button className="addHome">
        <Link to="/add" style={{ color: "inherit", textDecoration: "none" }}>
          Add new Laptop
        </Link>
      </button>
      <br></br>
      <button className="button deleteButton">
    <Link to="/delete" style={{ color: 'inherit', textDecoration: 'none' }}>
        Delete Laptop
    </Link>
      </button>
    </div>
  )
}
export default Laptops