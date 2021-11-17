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
import Button from "react-bootstrap/Button";

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
      <section style={{ marginTop: "25px", fontFamily: "rockwell" }}>
        {" "}
        <Filter setValue={setFilterDetails} value={filterDetails} />
      </section>
      <section
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "50px",
        }}
      >
        {filterDetails.services.map((serv) => (
          <div
            key={serv.id}
            style={{
              display: "flex",
              flexDirection: "column",
              margin: " 20 px",
              padding: "10px",
              fontFamily: "rockwell",
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
                  borderRadius: "20px",
                  fontFamily: "rockwell",
                  padding: "20px",
                  marginBottom: "10px",
                  width: "200px",
                  height: "300px",
                }}
              >
                <h4>{space.title}</h4>
                <img style={{ width: "100px" }} src={space.logoUrl} alt="" />
                <p>
                  <b>About:</b> {space.description}
                </p>
                {/* <Link to={`/spaces/${space.id}`}>
                  <button style={{ color: "white", backgroundColor: "blue" }}>
                    More details
                  </button>
                </Link> */}
                <Link to={`/spaces/${space.id}`}>
                  <Button variant="primary" type="button">
                    More Details
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        ))}
        <Leaflet />
      </section>
    </section>
  );
}

export default Details;
