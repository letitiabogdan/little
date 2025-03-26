import heroImg from "../assets/img/dish.jpg";
import greekSaladImg from "../assets/img/greekSalad.jpg";
import bruschettaImg from "../assets/img/bruschetta.jpg";
import pastaImg from "../assets/img/pasta.jpg";
import star from "../assets/img/star.svg";
import avatarImg1 from "../assets/img/john.png";
import avatarImg2 from "../assets/img/noah.png";
import avatarImg3 from "../assets/img/lisa.png";
import avatarImg4 from "../assets/img/jane.png";
import aboutImg1 from "../assets/img/about1.png";
import aboutImg2 from "../assets/img/about2.png";
import { Link, useNavigate } from "react-router-dom";

function Main() {
  const navigate = useNavigate();

  const handleReserveClick = () => {
    navigate("/booktable"); // Navigate to the BookingTable page
  };

  return (
    <main>
      <div className="container-fluid bgPrimary mb-10">
        <section className="container hero row justify-content-center align-items-center mb-5 py-5 position-relative">
          <div className="col-md-6 col-sm-12">
            <h2>Little Lemon</h2>
            <h4>Chicago</h4>
            <p className="my-5">
              Charming Little Lemon offers Mediterranean indoors and terrace
              dining, serving exquisite fresh dishes bursting with flavorful
              spices in a welcoming setting, ensuring an unforgettable culinary
              night out in warm surroundings.
            </p>
            <button className="btn custom-btn" onClick={handleReserveClick}>
              Reserve a table
            </button>
          </div>
          <div className="col-md-6 d-none d-md-block">
            <img
              className="img-fluid"
              src={heroImg}
              alt="Special dish at Little Lemon restaurant"
            ></img>
          </div>
        </section>
      </div>

      <div className="container">
        <section className="highlights my-5">
          <div className="row justify-content-center">
            <div className="col-lg-12 d-flex justify-content-between align-items-center">
              <h2 className="d-inline">This weeks specials</h2>
              <span>
                <button className="btn custom-btn">Online menu</button>
              </span>
            </div>
          </div>
          <div className="row justify-content-center my-4">
            <div className="row col-lg-12">
              <div className="col-md-4 col-sm-12 mb-md-0 mb-4">
                <div className="card h-100">
                  <img
                    src={greekSaladImg}
                    className="card-img-top"
                    alt="Greek Salad"
                  />
                  <div className="card-body">
                    <div className="card-title d-flex justify-content-between align-items-center">
                      <h5 className="d-inline">Greek Salad</h5>
                      <span className="price">$ 12.90</span>
                    </div>
                    <p className="card-text">
                      Crisp veggies, feta cheese, olives, and a zesty
                      vinaigrette create a classic and refreshing Greek salad
                      experience.
                    </p>
                    <Link to="/Order" className="btn btn-link">
                      Order a delivery
                    </Link>
                  </div>
                </div>
              </div>

              <div className="col-md-4 col-sm-6 mb-sm-0 mb-4">
                <div className="card h-100">
                  <img
                    src={bruschettaImg}
                    className="card-img-top"
                    alt="Bruschetta"
                  />
                  <div className="card-body">
                    <div className="card-title d-flex justify-content-between align-items-center">
                      <h5 className="d-inline">Bruschetta</h5>
                      <span className="price">$ 5.70</span>
                    </div>
                    <p className="card-text">
                      A delightful mix of fresh vegetables, feta, olives, and
                      zestful dressing offers a refreshing Greek salad feast.
                    </p>
                    <Link to="/Order" className="btn btn-link">
                      Order a delivery
                    </Link>
                  </div>
                </div>
              </div>

              <div className="col-md-4 col-sm-6 mb-sm-0 mb-4">
                <div className="card h-100">
                  <img src={pastaImg} className="card-img-top" alt="Pasta" />
                  <div className="card-body">
                    <div className="card-title d-flex justify-content-between align-items-center">
                      <h5 className="d-inline">Pasta</h5>
                      <span className="price">$ 14.50</span>
                    </div>
                    <p className="card-text">
                      Savor the rich tomato flavor in this pasta, enhanced with
                      fresh herbs and a hint of garlic for a delightful meal.
                    </p>
                    <Link to="/Order" className="btn btn-link">
                      Order a delivery
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="testimonials my-5">
          <div className="row justify-content-center">
            <div className="col-lg-12 text-center">
              <h2>Testimonials</h2>
            </div>
          </div>
          <div className="row justify-content-center my-4">
            <div className="row col-lg-12">
              <div className="col-lg-3 col-md-6 col-sm-12 mb-lg-0 mb-4">
                <div className="card h-100">
                  <div className="card-body">
                    <div className="card-title">
                      <h5 className="d-inline-flex align-items-center">
                        4.8
                        <img src={star} alt="star rating"></img>
                      </h5>
                    </div>
                    <div className="avatar d-flex mb-3">
                      <img
                        src={avatarImg1}
                        className="avatar-image rounded-3"
                        alt="John"
                      />
                      <span className="mx-3 pt-2">John</span>
                    </div>
                    <p className="card-text">
                      Assessing Mediterranean cuisines delves into flavor
                      amalgamation, and culinary originality.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 mb-lg-0 mb-4">
                <div className="card h-100">
                  <div className="card-body">
                    <div className="card-title">
                      <h5 className="d-inline-flex align-items-center">
                        4.5
                        <img src={star} alt="star rating"></img>
                      </h5>
                    </div>
                    <div className="avatar d-flex mb-3">
                      <img
                        src={avatarImg2}
                        className="avatar-image rounded-3"
                        alt="Noah"
                      />
                      <span className="mx-3 pt-2">Noah</span>
                    </div>
                    <p className="card-text">
                      Critically evaluating Mediterranean dishes involves
                      analyzing taste harmony, and innovative presentation.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 mb-lg-0 mb-4">
                <div className="card h-100">
                  <div className="card-body">
                    <div className="card-title">
                      <h5 className="d-inline-flex align-items-center">
                        5<img src={star} alt="star rating"></img>
                      </h5>
                    </div>
                    <div className="avatar d-flex mb-3">
                      <img
                        src={avatarImg3}
                        className="avatar-image rounded-3"
                        alt="Lisa"
                      />
                      <span className="mx-3 pt-2">Lisa</span>
                    </div>
                    <p className="card-text">
                      Delight in the vibrant tastes and healthy ingredients.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 mb-lg-0 mb-4">
                <div className="card h-100">
                  <div className="card-body">
                    <div className="card-title">
                      <h5 className="d-inline-flex align-items-center">
                        4.9
                        <img src={star} alt="star rating"></img>
                      </h5>
                    </div>
                    <div className="avatar d-flex mb-3">
                      <img
                        src={avatarImg4}
                        className="avatar-image rounded-3"
                        alt="Jane"
                      />
                      <span className="mx-3 pt-2">Jane</span>
                    </div>
                    <p className="card-text">
                      Savor the robust flavors and aromatic spices of the
                      cuisine.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="container-fluid bgPrimary py-5">
        <section className="about container my-5 position-relative">
          <div className="row justify-content-center align-items-center">
            <div className="col-lg-6 col-md-12">
              <h2>Little Lemon</h2>
              <h4>Chicago</h4>
              <p className="my-5">
                At Little Lemon, Adrian and Mario curate an exquisite fusion of
                classic and modern flavors, providing a delightful dining
                experience in a charming setting. Their collaborative spirit
                enriches every dish.
              </p>
            </div>
            <div className="col-lg-6">
              <div className="position-relative" style={{ height: "30rem" }}>
                <img
                  className="img-fluid firstImg"
                  src={aboutImg2}
                  alt="Adrian and Mario"
                ></img>
                <img
                  className="img-fluid secondImg"
                  src={aboutImg1}
                  alt="Adrian and Mario"
                ></img>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default Main;
