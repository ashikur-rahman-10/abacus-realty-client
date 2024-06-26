import React, { Suspense, lazy } from "react";
import UseApartment from "../../../Hooks/UseApartment";
import ApartmentCardSkeleton from "../../../Components/ApartmentCardSkeleton/ApartmentCardSkeleton";
import { Link } from "react-router-dom";

const ApartmentCard = lazy(() =>
  import("../../../Components/ApartmentCard/ApartmentCard")
);

const ApartmentSection = () => {
  const { apartments } = UseApartment();
  const approvedPost = apartments.filter((a) => a?.postStatus === "approved");
  const sliced = approvedPost.slice(0, 6);

  return (
    <div className="max-w-6xl w-full mx-auto px-4 my-4">
      <h1 className="text-center py-10 text-3xl">Apartments</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-fit mx-auto">
        <Suspense fallback={<ApartmentCardSkeleton />}>
          {sliced.map((a) => (
            <ApartmentCard key={a._id} apartment={a}></ApartmentCard>
          ))}
        </Suspense>
      </div>
      <div className="text-center py-4">
        <Link
          to={"/apartments"}
          className="text-sm text-warning cursor-pointer hover:text-yellow-300"
        >
          See more
        </Link>
      </div>
    </div>
  );
};

export default ApartmentSection;
