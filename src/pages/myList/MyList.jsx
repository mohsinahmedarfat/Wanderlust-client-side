import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyList = () => {
  const { user } = useContext(AuthContext);
  const [spots, setSpots] = useState([]);
  const [reload, setReload] = useState(false);

  useEffect(() => {
    fetch(`https://b9a10-wanderlust-server.vercel.app/myList/${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setSpots(data);
      });
  }, [user, reload]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://b9a10-wanderlust-server.vercel.app/myList/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
              //remove from UI after delete
              setReload(!reload);
            }
          });
      }
    });
  };

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
                  <Link to={`/updateSpot/${spot._id}`}>
                    <button className="btn bg-green-400 text-green-100 hover:bg-transparent hover:border hover:border-green-400 hover:text-green-400">
                      Update
                    </button>
                  </Link>
                </td>
                <td>
                  <button
                    onClick={() => handleDelete(spot._id)}
                    className="btn bg-green-400 text-green-100 hover:bg-transparent hover:border hover:border-green-400 hover:text-green-400"
                  >
                    Delete
                  </button>
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
