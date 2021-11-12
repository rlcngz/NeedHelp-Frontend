import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategoriesById } from "../store/categories/actions";
import {
  selectCategoryDetails,
  selectMapItems,
} from "../store/categories/selectors";
import { fetchReviews } from "../store/reviews/actions";
import Loading from "../components/Loading";
import Filter from "../components/Filter";
import Leaflet from "../components/Leaflet";

function Details() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const detail = useSelector(selectCategoryDetails);
  const items = useSelector(selectMapItems);
  const [filterDetails, setFilterDetails] = useState(null); // [2,6,1]
  // console.log("extra info", filterDetails);
  // console.log("any coordinates?", items);

  useEffect(() => {
    dispatch(fetchCategoriesById(id));
  }, [dispatch, id]);

  useEffect(() => {
    dispatch(fetchReviews());
  }, [dispatch]);

  useEffect(() => {
    setFilterDetails(detail);
  }, [detail]);

  if (!filterDetails || !items) return <Loading />;

  // filtering happens here:
  // const filteredServices = services.filter(s => filterDetails.includes(s.categoryId))

  return (
    <section>
      <section style={{ marginTop: "25px" }}>
        {" "}
        <Filter setValue={setFilterDetails} value={filterDetails} />
      </section>
      <section
        style={{
          display: "flex",
          marginTop: "50px",
        }}
      >
        {filterDetails.services.map((serv) => (
          <div
            key={serv.id}
            style={{
              //   display: "flex",
              //   alignItems: "center",
              border: "1px solid black",
            }}
          >
            <h2>{serv.title}</h2>
            {serv.spaces.map((space) => (
              <div
                key={space.id}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  border: "1px solid black",
                }}
              >
                <h4>{space.title}</h4>
                <img style={{ width: "100px" }} src={space.logoUrl} alt="" />
                <p>About: {space.description}</p>
                <Link to={`/spaces/${space.id}`}>
                  <button style={{ color: "red", backgroundColor: "aqua" }}>
                    More details
                  </button>
                </Link>
              </div>
            ))}
          </div>
        ))}
      </section>
      <Leaflet />
    </section>
  );
}

export default Details;
