import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../store/categories/actions";
import Category from "../components/Category";
import { Carousel, Jumbotron } from "react-bootstrap";
import { selectCategories } from "../store/categories/selectors";

function Categories() {
  const dispatch = useDispatch();
  const categories = useSelector(selectCategories);
  // console.log("selecting?", categories);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  return (
    <Jumbotron>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.epfl.ch/research/domains/cnp/wp-content/uploads/2020/03/i-need-help-1024x683.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="http://www.lollydaskal.com/wp-content/uploads/2019/04/Screen-Shot-2019-04-16-at-5.16.54-PM.png"
            alt="Second slide"
          />

          <Carousel.Caption>
            {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://st2.depositphotos.com/5312214/10024/i/950/depositphotos_100249822-stock-photo-i-need-your-help-adhesive.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            {/* <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p> */}
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
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
    </Jumbotron>
  );
}

export default Categories;
