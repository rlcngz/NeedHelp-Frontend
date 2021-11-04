import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategoriesById } from "../store/categories/actions";
import { selectCategoryDetails } from "../store/categories/selectors";
import { fetchReviews } from "../store/reviews/actions";
// import { selectAllReviews } from "../store/reviews/selectors";

import Loading from "../components/Loading";
import Filter from "../components/Filter";

function Details() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const detail = useSelector(selectCategoryDetails);
  const [filterDetails, setFilterDetails] = useState(null);
  // const reviews = useSelector(selectAllReviews);

  // console.log("anything here?", detail);
  // console.log("anything review", reviews);

  useEffect(() => {
    dispatch(fetchCategoriesById(id));
  }, [dispatch, id]);

  useEffect(() => {
    dispatch(fetchReviews());
  }, [dispatch]);

  useEffect(() => {
    setFilterDetails(detail);
  }, [detail]);

  // useEffect(() => {
  //   console.log("details", detail);
  // }, [detail]);

  if (!filterDetails) return <Loading />;

  return (
    <section>
      <section>
        <Filter setValue={setFilterDetails} value={filterDetails} />
      </section>
      <section>
        {filterDetails.services.map((serv) => (
          <div key={serv.id}>
            <h2>{serv.title}</h2>
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
