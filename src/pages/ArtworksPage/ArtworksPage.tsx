import ArtworksList from "../../components/ArtworksList/ArtworksList";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

const ArtworksPage = (): JSX.Element => {
  return (
    <>
      <Header />
      <ArtworksList />
      <Footer />
    </>
  );
};

export default ArtworksPage;
