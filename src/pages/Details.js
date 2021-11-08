import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategoriesById } from "../store/categories/actions";
import { selectCategoryDetails } from "../store/categories/selectors";
import { fetchReviews } from "../store/reviews/actions";
import Loading from "../components/Loading";
import Filter from "../components/Filter";

function Details() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const detail = useSelector(selectCategoryDetails);
  const [filterDetails, setFilterDetails] = useState(null);

  useEffect(() => {
    dispatch(fetchCategoriesById(id));
  }, [dispatch, id]);

  useEffect(() => {
    dispatch(fetchReviews());
  }, [dispatch]);

  useEffect(() => {
    setFilterDetails(detail);
  }, [detail]);

  if (!filterDetails) return <Loading />;

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
            {serv.spaces.map((space) => (
              <ul key={space.id}>
                <li>
                  <h4>{space.title}</h4>
                  <img style={{ width: "100px" }} src={space.logoUrl} alt="" />
                  <p>About: {space.description}</p>
                  <Link to={`/spaces/${space.id}`}>
                    <button>More details</button>
                  </Link>
                </li>
              </ul>
            ))}
          </div>
        ))}
      </section>
    </section>
  );
}

export default Details;
