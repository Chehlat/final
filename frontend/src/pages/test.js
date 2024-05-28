import React from "react";
import FetchData from "../components/Fetch"; // Adjust the import path based on your file structure

const Professors = () => {
  return (
    <FetchData url="http://localhost:5000/api/professors">
      {({ data, loading, error }) => {
        if (loading) return <p>Loading...</p>;
        if (error) return <p>Error: {error.message}</p>;

        return (
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Position</th>
                <th>Degree</th>
                <th>Address</th>
                <th>Phone</th>
              </tr>
            </thead>
            <tbody>
              {data.map((professor) => (
                <tr key={professor._id}>
                  <td>{professor.name}</td>
                  <td>{professor.position}</td>
                  <td>{professor.degree}</td>
                  <td>{professor.addres}</td>
                  <td>{professor.phone}</td>
                </tr>
              ))}
            </tbody>
          </table>
        );
      }}
    </FetchData>
  );
};
export default Professors;
