import { FaPenSquare } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { apiBaseUrl } from "../../utils/baseUrl";
import { Link } from "react-router-dom";

const MyList = () => {
  const { user } = useContext(AuthContext);
  const [myList, setMyList] = useState([]);
  console.log(myList);

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
                      <FaTrash className="text-xl cursor-pointer text-red-700" />
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
