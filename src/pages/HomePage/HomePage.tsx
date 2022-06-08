import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import HomePageStyled from "./HomePageStyled";

const HomePage = (): JSX.Element => {
  return (
    <>
      <Header />
      <HomePageStyled>
        <div>
          <div className="home__image--crop">
            <div className="home__text--container">
              <h2>Julio Reyes</h2>
              <h3>Summer Paintings</h3>
              <p>Part 2</p>
            </div>
            <div className="home__image--container">
              <img
                className="home__image--first"
                src="https://firebasestorage.googleapis.com/v0/b/desterra-181ac.appspot.com/o/summer_painting-part-2-high.jpeg?alt=media&token=85032b5c-9380-4e35-ad7d-8ce078cb4f8c"
                alt="painting of a boy's head out of the water in the summer"
              />
            </div>
          </div>
        </div>
      </HomePageStyled>
      <Footer />
    </>
  );
};

export default HomePage;
