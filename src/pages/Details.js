import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategoriesById } from "../store/categories/actions";
// import { fetchSpace } from "../store/spaces/actions";
import { selectDetails } from "../store/categories/selectors";
import Loading from "../components/Loading";

function Details() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const category = useSelector(selectDetails);
  console.log("anything here?", category);
  useEffect(() => {
    dispatch(fetchCategoriesById(id));
  }, [dispatch, id]);

  // useEffect(() => {
  //   dispatch(fetchSpace(id));
  // }, [dispatch, id]);

  if (!category) return <Loading />;
  return (
    <div>
      <h1>{category.title}</h1>
      {category.services.map((service) => (
        <div>
          <h4 key={service.id}>{service.title}</h4>
        </div>
      ))}
    </div>
  );
}

export default Details;
