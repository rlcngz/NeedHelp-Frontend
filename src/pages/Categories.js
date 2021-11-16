import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../store/categories/actions";
import Category from "../components/Category";
import { selectCategories } from "../store/categories/selectors";

function Categories() {
  const dispatch = useDispatch();
  const categories = useSelector(selectCategories);
  // console.log("selecting?", categories);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  return (
    <main>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        {" "}
        <iframe
          src="https://c.tenor.com/oxH5Dal_Xr4AAAAM/help-wasabi.gif"
          width="215"
          height="350"
          frameBorder="10"
          allowFullScreen
          title="thumbnail"
        ></iframe>
        <img
          src="https://thetreatmentspecialist.com/wp-content/uploads/2018/09/i-need-help-550x321.jpg"
          alt=" "
        />
      </div>
      <div>
        {categories.map((category) => {
          return (
            <Category
              key={category.id}
              id={category.id}
              title={category.title}
            />
          );
        })}
      </div>
    </main>
  );
}

export default Categories;
