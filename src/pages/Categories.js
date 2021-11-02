import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../store/categories/actions";
import Category from "../components/Category";
// import { Carousel, Jumbotron } from "react-bootstrap";
import { selectCategories } from "../store/categories/selectors";

function Categories() {
  const dispatch = useDispatch();
  const categories = useSelector(selectCategories);
  // console.log("selecting?", categories);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  return (
    <div>
      {categories.map((category) => {
        return (
          <Category key={category.id} id={category.id} title={category.title} />
        );
      })}
    </div>
  );
}

export default Categories;
