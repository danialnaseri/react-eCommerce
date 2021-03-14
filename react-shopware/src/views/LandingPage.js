import React from "react";

const Home = () => {
  const style = {
    marginTop: "10rem",
  };

  return (
    <div style={style}>
      <div className="container my-5 z-depth-1">
        <section className="dark-grey-text p-5">
          <div className="row">
            <div className="col-md-5 mb-4 mb-md-0">
              <div className="view">
                <img
                  src="https://mdbootstrap.com/img/illustrations/undraw_Group_chat_unwm.svg"
                  className="img-fluid"
                  alt="smaple"
                />
              </div>
            </div>

            <div className="col-md-7 mb-lg-0 mb-4">
              <form className="" action="">
                <h3 className="font-weight-bold my-3">Missa inte våra erbjudande!</h3>

                <p className="text-muted mb-4 pb-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quibusdam vitae, fuga similique quos aperiam tenetur quo ut
                  rerum debitis.
                </p>

                <div className="input-group">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="E-post adress"
                    aria-label="Enter your email address"
                    aria-describedby="button-addon2"
                  />
                  <div className="input-group-append">
                    <button
                      className="btn btn-md unique-color white-text rounded-right m-0 px-3 py-2 z-depth-0 waves-effect"
                      type="submit"
                      id="button-addon2"
                    >
                      SUBSCRIBE
                    </button>
                  </div>
                </div>
                <small className="form-text black-text">
                  <strong>
                    * Skriv din E-post adress för fler spännande erbjudande.
                  </strong>
                </small>
              </form>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
