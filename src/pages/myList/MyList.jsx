import { useContext, useEffect } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const MyList = () => {
  const { user } = useContext(AuthContext);

  useEffect(() => {
    fetch(`http://localhost:5000/myList/${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  }, [user]);

  return (
    <div>
      <h1>my list</h1>
    </div>
  );
};

export default MyList;
