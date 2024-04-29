import { FaPenSquare } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { apiBaseUrl } from "../../utils/baseUrl";
import { Link, useNavigation } from "react-router-dom";
import Swal from "sweetalert2";
import Loader from "../Loader/Loader";

const MyList = () => {
  const { user } = useContext(AuthContext);
  const [myList, setMyList] = useState([]);
  const navigation = useNavigation();

  // Handle Delete Spot
  const handleDeleteSpot = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "Do You Want to Delete This Spot!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`${apiBaseUrl}/spot-delete/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              // Update Deleted Data
              const remaiming = myList.filter((dt) => dt._id !== id);
              setMyList(remaiming);
              Swal.fire({
                title: "Deleted!",
                text: "Your Spot has been deleted.",
                icon: "success",
              });
            }
          });
      }
    });
  };

  // Get User Added Data
  useEffect(() => {
    fetch(`${apiBaseUrl}/user-added-spot-list/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.length > 0) {
          setMyList(data);
        } else {
          setMyList(null);
        }
      });
  }, [user]);

  if (navigation.state === "loading") {
    return <Loader />;
  }
  return (
    <div>
      <section className="container mx-auto my-16 md:my-24 px-2 md:px-0 ">
        <div>
          <SectionTitle title={"Spot Added List"} />
        </div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>Spot Name</th>
                <th>Location</th>
                <th>Average Cost</th>
                <th>Travel Time</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {myList ? (
                myList.map((mList) => (
                  <tr className="bg-base-200" key={mList._id}>
                    <td>{mList?.touristsSpotName}</td>
                    <td>{mList?.location}</td>
                    <td>${mList?.averageCost}</td>
                    <td>{mList?.travelTime} Day</td>
                    <td className="flex gap-1">
                      <Link to={`/update-my-spot/${mList._id}`}>
                        <FaPenSquare className="text-xl cursor-pointer text-black" />
                      </Link>
                      <FaTrash
                        className="text-xl cursor-pointer text-red-700"
                        onClick={() => handleDeleteSpot(mList._id)}
                      />
                    </td>
                  </tr>
                ))
              ) : (
                <tr className="bg-base-200 text-center">
                  <th colSpan={6}>You Have Not Added any Spot </th>
                </tr>
              )}
              {/* <tr className="bg-base-200">
                <th>1</th>
                <td>Cy dd</td>
                <td>Bangladesh</td>
                <td>$300</td>
                <td>7 Days</td>
                <td className="flex gap-1">
                  <FaPenSquare className="text-xl cursor-pointer text-black" />
                  <FaTrash className="text-xl cursor-pointer text-red-700" />
                </td>
              </tr> */}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default MyList;
