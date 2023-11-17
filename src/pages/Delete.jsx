/*import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
const Delete = () => {
  const [laptopId, setLaptopId] = useState('');
  const navigate = useNavigate();

  const handleDelete = async (e) => {
    e.preventDefault();
    try {
      // Perform the delete operation here using the laptopId
      // Send a DELETE request to your backend to delete the laptop with the given ID
      // You can use axios or another HTTP client for this purpose.
      await axios.delete(`http://localhost:8800/data1/${laptopId}`);
      // After successful deletion, you can navigate back to the home page
      navigate('/');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>
        Back to Home
      </Link>
      <h2>Delete Laptop</h2>
      <form onSubmit={handleDelete}>
        <label htmlFor="laptopId">Enter Laptop ID to Delete: </label>
        <input
          type="text"
          name="laptopId"
          value={laptopId}
          onChange={(e) => setLaptopId(e.target.value)}
        />
        <button type="submit">Delete</button>
      </form>
    </div>
  );
};

export default Delete;
*/
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Delete = () => {
  const [dataset, setDataset] = useState('data1'); // Default to data1
  const [laptopId, setLaptopId] = useState('');
  const navigate = useNavigate();

  const handleDelete = async (e) => {
    e.preventDefault();
    try {
      // Perform the delete operation here using the dataset and laptopId
      const apiEndpoint = dataset === 'data1' ? 'http://localhost:8800/data1' : 'http://localhost:8800/data2';
      await axios.delete(`${apiEndpoint}/${(laptopId)}`);
      // After successful deletion, you can navigate back to the home page
      navigate('/');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>
        Back to Home
      </Link>
      <h2>Delete Laptop</h2>
      <form onSubmit={handleDelete}>
        <div>
          <label htmlFor="dataset">Select Dataset: </label>
          <select name="dataset" onChange={(e) => setDataset(e.target.value)} value={dataset}>
            <option value="data1">Data1</option>
            <option value="data2">Data2</option>
          </select>
        </div>
        <div>
          <label htmlFor="laptopId">Enter Laptop ID to Delete: </label>
          <input
            type="text"
            name="laptopId"
            value={laptopId}
            onChange={(e) => setLaptopId(e.target.value)}
          />
        </div>
        <button type="submit">Delete</button>
      </form>
    </div>
  );
};

export default Delete;

