import React, { useEffect } from "react";
// import { useParams } from "react-router-dom";
// import { fetchCategoriesById } from "../store/categories/actions";
import { selectCategoryDetails } from "../store/categories/selectors";
import { useSelector } from "react-redux";

function Filter() {
  const category = useSelector(selectCategoryDetails);
  //   console.log("anything here?", category);

  return (
    <section>
      <section>
        <section>
          <h3>Filters</h3>
        </section>
        <div>
          <h5>{category.title}</h5>
          {category.services.map((service) => (
            <div key={service.id}>
              <input type="checkbox" className="form-check-input filled-in" />
              <span>{service.title}</span>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h5 className="font-weight-bold mb-3">Price</h5>
      </section>
      <section>
        <div>
          <input
            type="radio"
            className="form-check-input"
            id="under25"
            name="materialExampleRadios"
          />
          <label
            className="form-check-label small text-uppercase card-link-secondary"
            htmlFor="under25"
          >
            Under €25
          </label>
        </div>
        <div className="form-check pl-0 mb-3">
          <input
            type="radio"
            className="form-check-input"
            id="2550"
            name="materialExampleRadios"
          />
          <label
            className="form-check-label small text-uppercase card-link-secondary"
            htmlFor="2550"
          >
            €25 to €50
          </label>
        </div>
        <div className="form-check pl-0 mb-3">
          <input
            type="radio"
            className="form-check-input"
            id="50100"
            name="materialExampleRadios"
          />
          <label
            className="form-check-label small text-uppercase card-link-secondary"
            htmlFor="50100"
          >
            €50 to €100
          </label>
        </div>
        <div className="form-check pl-0 mb-3">
          <input
            type="radio"
            className="form-check-input"
            id="100200"
            name="materialExampleRadios"
          />
          <label
            className="form-check-label small text-uppercase card-link-secondary"
            htmlFor="100200"
          >
            €100 to €200
          </label>
        </div>
        <div className="form-check pl-0 mb-3">
          <input
            type="radio"
            className="form-check-input"
            id="200above"
            name="materialExampleRadios"
          />
          <label
            className="form-check-label small text-uppercase card-link-secondary"
            htmlFor="200above"
          >
            €200 & Above
          </label>
        </div>
      </section>
    </section>
  );
}

export default Filter;
