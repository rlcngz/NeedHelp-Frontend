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
  const [filterDetails, setFilterDetails] = useState(null);
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

  return (
    <section>
      <section style={{ marginTop: "25px" }}>
        {" "}
        <Filter setValue={setFilterDetails} value={filterDetails} />
      </section>
      <section style={{ display: "flex", marginTop: "50px" }}>
        {filterDetails.services.map((serv) => (
          <div key={serv.id}>
            <h3>{serv.title}</h3>
            <ul>
              {serv.spaces.map((space) => (
                <li key={space.id}>
                  <h4>{space.title}</h4>
                  <img style={{ width: "100px" }} src={space.logoUrl} alt="" />
                  <p>About: {space.description}</p>
                  <Link to={`/spaces/${space.id}`}>
                    <button>More details</button>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>
      <Leaflet />
    </section>
  );
}

export default Details;
