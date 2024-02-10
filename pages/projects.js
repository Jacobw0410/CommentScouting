import React, { useEffect, useState } from 'react';

const Admin = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data from backend upon component mount
    // Use fetch or Axios to retrieve data
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      // Fetch data from backend
      // const response = await fetch('/api/data');
      // const data = await response.json();
      // setData(data);

      // For demonstration, setting dummy data
      setData([
        {
          id: 1,
          driving: 8,
          scoring: 7,
          maneuverability: 9,
          autons: 6,
          effectiveness: 8,
          overallRating: 7.6,
        },
        // Add more dummy data or remove based on actual data retrieval
      ]);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div>
      <h1>Admin Page</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Driving</th>
            <th>Scoring</th>
            <th>Maneuverability</th>
            <th>Autons</th>
            <th>Effectiveness</th>
            <th>Overall Rating</th>
          </tr>
        </thead>
        <tbody>
          {data.map((entry) => (
            <tr key={entry.id}>
              <td>{entry.id}</td>
              <td>{entry.driving}</td>
              <td>{entry.scoring}</td>
              <td>{entry.maneuverability}</td>
              <td>{entry.autons}</td>
              <td>{entry.effectiveness}</td>
              <td>{entry.overallRating}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Admin;
