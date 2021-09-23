import React from "react";
import { Link } from "react-router-dom";
import "../styles/home.css";

const Home = () => {
  return (
    <>
      <section className="banner_image">
        <div className="container">
          <div className="banner_content">
            <h2>Rastogi's Pizzeria</h2>
            <h4>pizza to fit any taste</h4>
          </div>
          <div>
            <button type="button" className="btn btn-dark">
              <Link to="/menu">order now</Link>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
