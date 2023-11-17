import axios from "axios";
import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
const Add = () => {
  const [formData, setFormData] = useState({
    type: "data1", // Default to data1
    id: "",
    name: "",
    price: "",
    processor: "",
    ram: "",
    os: "",
    storage: "",
    display: "",
    ratings: "",
    no_of_ratings: "",
    no_of_reviews: "",
    
    Company: "",
    Rating: "",
    No_of_ratings: "",
    Review: "",
    Size: "",
    Processor: "",
    RAM: "",
    Memory: "",
    OpSys: "",
    Price: "",
    MRP: "",
    
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData((prevData) => ({ ...prevData, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      const apiEndpoint = formData.type === "data1" ? "http://localhost:8800/data1" : "http://localhost:8800/data2";
      // Post data based on formData
      await axios.post(apiEndpoint, formData).then((response) => {
        console.log(response);
        navigate("/");
      }).catch((error) => {
        console.log(error);
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="form">
      <h1>Add New {formData.type === "data1" ? "Laptop in Data1" : "Laptop in Data2"}</h1>
      <div className="form-group">
        <label htmlFor="type">Select Type:</label>
        <select name="type" onChange={handleChange} value={formData.type}>
          <option value="data1">Data1</option>
          <option value="data2">Data2</option>
        </select>
      </div>
      {formData.type === "data1" ? (
        <>
          <div className="form-group">
            <label htmlFor="id">ID:</label>
            <input
              type="number"
              placeholder="ID"
              name="id"
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="name">Company Name:</label>
            <input
              type="text"
              placeholder="Company Name"
              name="name"
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="price">Price:</label>
            <input
              type="number"
              placeholder="Price"
              name="price"
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
        <label htmlFor="processor">Processor:</label>
        <input
          type="text"
          placeholder="Processor"
          name="processor"
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="ram">RAM:</label>
        <input
          type="number"
          placeholder="RAM"
          name="ram"
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="os">Operating System:</label>
        <input
          type="text"
          placeholder="Operating System"
          name="os"
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="storage">Storage:</label>
        <input
          type="number"
          placeholder="Storage"
          name="storage"
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="display">Display:</label>
        <input
          type="number"
          placeholder="Display"
          name="display"
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="ratings">Rating:</label>
        <input
          type="number"
          placeholder="Rating"
          name="ratings"
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="no_of_ratings">Number of Ratings:</label>
        <input
          type="number"
          placeholder="Number of Ratings"
          name="no_of_ratings"
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="no_of_reviews">Number of Reviews:</label>
        <input
          type="number"
          placeholder="Number of Reviews"
          name="no_of_reviews"
          onChange={handleChange}
        />
      </div>
        </>
      ) : (
        <>
          <div className="form-group">
            <label htmlFor="id">ID:</label>
            <input
              type="number"
              placeholder="ID"
              name="id"
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="Company">Company:</label>
            <input
              type="text"
              placeholder="Company"
              name="Company"
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="Rating">Rating:</label>
            <input
              type="text"
              placeholder="Rating"
              name="Rating"
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="No_of_ratings">Number of Ratings:</label>
            <input
              type="number"
              placeholder="Number of Ratings"
              name="No_of_ratings"
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="Review">Review</label>
            <input
              type="number"
              placeholder="Number of Review"
              name="Review"
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="Size">Size</label>
            <input
              type="number"
              placeholder="Size"
              name="Size"
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="Processor">Processor</label>
            <input
              type="number"
              placeholder="Processor"
              name="Processor"
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="RAM">RAM</label>
            <input
              type="number"
              placeholder="RAM"
              name="RAM"
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="Memory">Memory</label>
            <input
              type="number"
              placeholder="Memory"
              name="Memory"
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="OpSys">OpSys</label>
            <input
              type="number"
              placeholder="OpSys"
              name="OpSys"
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="Price">Review</label>
            <input
              type="number"
              placeholder="Price"
              name="Price"
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="MRP">MRP</label>
            <input
              type="number"
              placeholder="MRP"
              name="MRP"
              onChange={handleChange}
            />
          </div>
        </>
      )}
      <div className="form-group">
        <button onClick={handleClick}>Add</button>
      </div>
      <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
        Back to Home
      </Link>
    </div>
  );
};
export default Add;
