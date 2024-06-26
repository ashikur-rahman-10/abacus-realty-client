import React from "react";
import {
  FaHeartCircleBolt,
  FaHouseMedical,
  FaPlus,
  FaRegCalendarCheck,
} from "react-icons/fa6";
import { IoNewspaperOutline } from "react-icons/io5";
import { MdManageHistory, MdOutlineRateReview } from "react-icons/md";
import { Link } from "react-router-dom";
import useThisUser from "../../../../Hooks/UseThisUser";
import { FaRegCalendarAlt } from "react-icons/fa";

const UserPage = () => {
  const { thisUser } = useThisUser();
  const id = thisUser._id;

  // Scroll to top
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
  return (
    <div className="py-14 max-w-7xl mx-auto px-4 min-h-screen">
      {/* <h1 className="text-xl text-center text-gray-500 py-4">User Page</h1> */}

      <div className="min-h-[80vh] w-full flex items-center justify-center">
        <div className="w-fit grid grid-cols-2 md:grid-cols-4 gap-4 ">
          <Link
            to={`/manage-profile/${id}`}
            className=" w-44 md:w-52 h-36 bg-white rounded-lg shadow-md flex flex-col-reverse items-center justify-center gap-2 text-green-400 uppercase hover:bg-green-50 font-semibold hover:border border-green-400 hover:scale-105 duration-300"
          >
            Manage Profile
            <img
              className="w-16 h-16 mask mask-hexagon-2"
              src={thisUser?.photoURL}
              alt=""
            />
          </Link>
          <Link
            to={"/add-apartment"}
            className="w-44 md:w-52 h-36 bg-white rounded-lg shadow-md flex flex-col-reverse items-center justify-center gap-2 text-sky-400 uppercase hover:bg-sky-50 font-semibold hover:border border-sky-400 hover:scale-105 duration-300"
          >
            Sell Apartment
            <FaHouseMedical className="text-xl" />
          </Link>
          <Link
            to={"/manage-my-post"}
            className="w-44 md:w-52 h-36 bg-white rounded-lg shadow-md flex flex-col-reverse items-center justify-center gap-2 text-blue-600 uppercase hover:bg-blue-50 font-semibold hover:border border-blue-600 hover:scale-105 duration-300"
          >
            Manage Post
            <IoNewspaperOutline className="text-3xl font-bold" />
          </Link>
          <Link
            to={"/saved-post"}
            className="w-44 md:w-52 h-36 bg-white rounded-lg shadow-md flex flex-col-reverse items-center justify-center gap-2 text-orange-400 uppercase  font-semibold hover:border border-orange-400 hover:scale-105 duration-300 hover:bg-orange-50"
          >
            Saved Post
            <FaHeartCircleBolt className="text-3xl font-bold" />
          </Link>
          <Link
            to={"/my-appointments"}
            className="w-44 md:w-52 h-36 bg-white rounded-lg shadow-md flex flex-col-reverse items-center justify-center gap-2 text-lime-400 uppercase  font-semibold hover:border border-lime-400 hover:scale-105 duration-300 hover:bg-lime-50"
          >
            My Appointments
            <FaRegCalendarCheck className="text-3xl font-bold" />
          </Link>

          <Link
            to={"/give-review"}
            className="w-44 md:w-52 h-36 bg-white rounded-lg shadow-md flex flex-col-reverse items-center justify-center gap-2 text-yellow-400 uppercase text-center  font-semibold hover:border border-yellow-400 hover:scale-105 duration-300 hover:bg-yellow-50"
          >
            Give Service Review
            <MdOutlineRateReview className="text-3xl font-bold" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UserPage;
