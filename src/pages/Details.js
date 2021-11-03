import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategoriesById } from "../store/categories/actions";
import { selectCategoryDetails } from "../store/categories/selectors";
// import { selectUserSpace } from "../store/user/selectors";
import Loading from "../components/Loading";
import Filter from "../components/Filter";

function Details() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const category = useSelector(selectCategoryDetails);

  // console.log("anything here?", category);

  useEffect(() => {
    dispatch(fetchCategoriesById(id));
  }, [dispatch, id]);

  if (!category) return <Loading />;
  return (
    <div>
      <Filter />
      <h1>{category.title}</h1>
      {category.services.map((service) => (
        <div key={service.id}>
          <h2>{service.title}</h2>
          {service.spaces.map((space) => (
            <ul key={space.id}>
              {" "}
              <div>
                {" "}
                <li>
                  <h4>{space.title}</h4>
                  <button>More Details</button>{" "}
                </li>
              </div>
            </ul>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Details;
