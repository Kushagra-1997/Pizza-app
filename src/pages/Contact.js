import React from "react";
import PizzaLeft from "../assets/pizzaLeft.jpg";
import "../styles/contact.css";

const Contact = () => {
  return (
    <div className="contact">
      <div className="row">
        <div className="col-11 col-sm-6 mx-auto">
          <div
            className="leftSideContact"
            style={{ backgroundImage: `url(${PizzaLeft})` }}
          ></div>
        </div>
        <div className="col-11 col-sm-6 mx-auto">
          <div className="rightSideContact">
            <h2>Contact Us</h2>
            <div className="cstmForm">
              <form>
                <div className="mb-3">
                  <label for="fullname" className="form-label">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="fullname"
                    aria-describedby="name"
                  />
                </div>
                <div className="mb-3">
                  <label for="exampleInputEmail1" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                </div>

  <label for="floatingTextarea2" className="form-label">Message</label>
                <div className="form-floating">
  <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{height: `100px`}}></textarea>
</div>
<button type="submit" class="btn btn-primary my-4">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
