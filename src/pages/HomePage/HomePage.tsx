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
                src="https://firebasestorage.googleapis.com/v0/b/desterra.appspot.com/o/summer_painting-part-2-high.jpg?alt=media&token=7c83cb57-1963-404a-b5b3-6b275ac4ccdf"
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
