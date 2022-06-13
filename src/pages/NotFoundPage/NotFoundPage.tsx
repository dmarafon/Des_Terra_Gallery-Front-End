import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import NotFoundPageStyled from "./NotFoundPageStyled";

const NotFoundPage = (): JSX.Element => {
  return (
    <>
      <Header />
      <NotFoundPageStyled>
        <h2 className="not-found__title">404</h2>
        <p className="not-found__text--line-first">PAGE NOT</p>
        <p className="not-found__text--line-second">FOUND</p>
      </NotFoundPageStyled>
      <Footer />
    </>
  );
};

export default NotFoundPage;
