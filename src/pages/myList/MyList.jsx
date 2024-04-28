import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const MyList = () => {
  const { user } = useContext(AuthContext);
  const [spots, setSpots] = useState([]);
  console.log(spots);

  useEffect(() => {
    fetch(`http://localhost:5000/myList/${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setSpots(data);
      });
  }, [user]);

  return (
    <div className="my-10">
      <h1 className="text-3xl text-center mb-5 font-bold">My Tourist Spots</h1>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Tourist Spot Name</th>
              <th>Country</th>
              <th>Average Cost</th>
              <th>Seasonality</th>
            </tr>
          </thead>
          <tbody>
            {spots.map((spot, idx) => (
              <tr key={spot._id} className="hover">
                <th>{idx + 1}</th>
                <td>{spot.tourists_spot_name}</td>
                <td>{spot.country_name}</td>
                <td>{spot.average_cost}</td>
                <td>{spot.seasonality}</td>
                <td>
                  <button className="btn">Update</button>
                </td>
                <td>
                  <button className="btn">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyList;
