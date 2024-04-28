import { FaPenSquare } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { apiBaseUrl } from "../../utils/baseUrl";

const MyList = () => {
  const { user } = useContext(AuthContext);
  console.log(user.email);

  // Get User Added Data
  useEffect(() => {
    fetch(`${apiBaseUrl}/user-added-spot-list/${user?.userEmail}`)
      .then((res) => res.json())
      .then((data) => console.log(data));
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
                <th>#</th>
                <th>Spot Name</th>
                <th>Location</th>
                <th>Average Cost</th>
                <th>Travel Time</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              <tr className="bg-base-200">
                <th>1</th>
                <td>Cy dd</td>
                <td>Bangladesh</td>
                <td>$300</td>
                <td>7 Days</td>
                <td className="flex gap-1">
                  <FaPenSquare className="text-xl cursor-pointer text-black" />
                  <FaTrash className="text-xl cursor-pointer text-red-700" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default MyList;
