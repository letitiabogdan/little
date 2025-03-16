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

function Main() {
  return (
    <main>
      <section className="hero row justify-content-center align-items-center my-5">
        <div className="col-lg-4">
          <h2>Little Lemon</h2>
          <h4>Chicago</h4>
          <p>
            Charming Little Lemon offers Mediterranean indoors and terrace
            dining, serving exquisite fresh dishes bursting with flavorful
            spices in a welcoming setting, ensuring an unforgettable culinary
            night out in warm surroundings.
          </p>
          <button className="btn btn-primary">Reserve a table</button>
        </div>
        <div className="col-lg-4">
          <img
            className="img-fluid"
            src={heroImg}
            alt="Special dish at Little Lemon restaurant"
          ></img>
        </div>
      </section>

      <section className="highlights my-5">
        <div className="row justify-content-center">
          <div className="col-lg-8 d-flex justify-content-between">
            <h2 className="d-inline">This weeks specials</h2>
            <button className="btn btn-primary">Online menu</button>
          </div>
        </div>
        <div className="row justify-content-center my-4">
          <div className="row col-lg-8">
            <div className="col">
              <div className="card h-100">
                <img
                  src={greekSaladImg}
                  className="card-img-top"
                  alt="Greek Salad"
                />
                <div className="card-body">
                  <div className="card-title d-flex justify-content-between">
                    <h5 className="d-inline">Greek Salad</h5>
                    <span className="price">$ 12.90</span>
                  </div>
                  <p className="card-text">
                    Crisp veggies, feta cheese, olives, and a zesty vinaigrette
                    create a classic and refreshing Greek salad experience.
                  </p>
                  <a href="#" className="btn btn-link">
                    Order a delivery
                  </a>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card h-100">
                <img
                  src={bruschettaImg}
                  className="card-img-top"
                  alt="Bruschetta"
                />
                <div className="card-body">
                  <div className="card-title d-flex justify-content-between">
                    <h5 className="d-inline">Bruschetta</h5>
                    <span className="price">$ 5.70</span>
                  </div>
                  <p className="card-text">
                    A delightful mix of fresh vegetables, feta, olives, and
                    zestful dressing offers a refreshing Greek salad feast.
                  </p>
                  <a href="#" className="btn btn-link">
                    Order a delivery
                  </a>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card h-100">
                <img src={pastaImg} className="card-img-top" alt="Pasta" />
                <div className="card-body">
                  <div className="card-title d-flex justify-content-between">
                    <h5 className="d-inline">Pasta</h5>
                    <span className="price">$ 14.50</span>
                  </div>
                  <p className="card-text">
                    Savor the rich tomato flavor in this pasta, enhanced with
                    fresh herbs and a hint of garlic for a delightful meal.
                  </p>
                  <a href="#" className="btn btn-link">
                    Order a delivery
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="testimonials my-5">
        <div className="row justify-content-center">
          <div className="col-lg-8 text-center">
            <h2>Testimonials</h2>
          </div>
        </div>
        <div className="row justify-content-center my-4">
          <div className="row col-lg-8">
            <div className="col">
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
            <div className="col">
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
            <div className="col">
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
            <div className="col">
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
                    Savor the robust flavors and aromatic spices of the cuisine.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about my-5">
        <div className="row justify-content-center">
          <div className="col-lg-4">
            <h2>Little Lemon</h2>
            <h4>Chicago</h4>
            <p>
              At Little Lemon, Adrian and Mario curate an exquisite fusion of
              classic and modern flavors, providing a delightful dining
              experience in a charming setting. Their collaborative spirit
              enriches every dish.
            </p>
          </div>
          <div className="col-lg-4">
            <img
              className="img-fluid"
              src={aboutImg1}
              alt="Adrian and Mario"
            ></img>
            <img
              className="img-fluid"
              src={aboutImg2}
              alt="Adrian and Mario"
            ></img>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Main;
