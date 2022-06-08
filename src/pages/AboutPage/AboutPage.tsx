import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import AboutPageStyled from "./AboutPageStyled";

const AboutPage = (): JSX.Element => {
  return (
    <>
      <Header />
      <AboutPageStyled>
        <div className="about__container">
          <div className="about__text--first_text">
            <h2 className="about__text--intro">
              <span className="about__text--colored">Why </span>DesTerra?
            </h2>
            <p className="about__text--paragraph">
              Founded in 2022, Desterra is an art gallery aimed to promote
              artwork from exiled and / or expatriate artists that resides and
              works in Catalunya.
            </p>
            <p className="about__text--paragraph">
              We foment the exchange, purchase and consumption of the art of
              diverse artists, aiming to help and foment arists that had to
              leave their families and home countries due to conflicts,
              political persecussion or ethical.
            </p>
            <p className="about__text--paragraph">
              Located in Barcelona, a city by itself renomed by its modernist
              art and open arms to cultural diversity, Desterra aims to
              contribute to the condal city, helping its efervescent artistic
              scene and at the same time, its roast of artists.
            </p>
          </div>
          <div className="about__text--second_text">
            <h2 className="about__text--intro">
              Purchase
              <span className="about__text--colored"> or </span>Rent?
            </h2>
            <p className="about__text--paragraph">
              Since we know that original art can be pricey, we try to connect
              artists and give you the chance to live with the art before
              committing to it, so in that sense it’s possible to rent/lease
              artwork for a low monthly fee, or buy it outright.
            </p>
            <p className="about__text--paragraph">
              Some collectors might want the opportunity to see the work in
              person before making an official decision. But with DesTerra, you
              have the option to change it, buy it or return it any time after 3
              months.
            </p>
            <p className="about__text--paragraph">
              How great is that? So the investment is up to you.
            </p>
          </div>
        </div>
        <div className="about__image--container">
          <div className="about__image--image_container">
            <img
              className="about__image"
              src="https://firebasestorage.googleapis.com/v0/b/desterra-181ac.appspot.com/o/cracked%20phone.jpeg?alt=media&token=c3418aaa-f3a6-4ebe-8171-d93516d0fa8d"
              alt="artist painting"
            />
          </div>
          <div className="about__image--text_container">
            <p className="about__image--subtitle">
              David Fullarton, “Cracked Phone”
            </p>
          </div>
          <div className="about__text--art">
            <div>
              LIVE WITH THE <span className="about__text--colored"> ART </span>
              <div> BEFORE COMMITING TO </div>
              <div>IT!</div>
            </div>
          </div>
        </div>
      </AboutPageStyled>
      <Footer />
    </>
  );
};

export default AboutPage;
