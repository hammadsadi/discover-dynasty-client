import { FaPenSquare } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";
import SectionTitle from "../../components/SectionTitle/SectionTitle";

const MyList = () => {
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
