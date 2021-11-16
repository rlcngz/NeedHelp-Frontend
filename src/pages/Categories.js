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
      <div style={{ display: "flex", justifyContent: "center" }}>
        {" "}
        <iframe
          // src="https://c.tenor.com/oxH5Dal_Xr4AAAAM/help-wasabi.gif"
          src="https://c.tenor.com/Wkpbi1O8nSoAAAAC/help-me.gif"
          width="550"
          height="375"
          frameBorder="10"
          allowFullScreen
          title="thumbnail"
        ></iframe>
        {/* <img
          src="https://thetreatmentspecialist.com/wp-content/uploads/2018/09/i-need-help-550x321.jpg"
          alt=" "
        /> */}
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
