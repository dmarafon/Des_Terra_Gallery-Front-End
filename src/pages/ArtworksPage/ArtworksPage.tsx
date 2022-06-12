import { useEffect } from "react";
import ArtworksList from "../../components/ArtworksList/ArtworksList";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { useAppDispatch } from "../../components/hooks";
import { loadArtworksThunk } from "../../redux/thunks/artworkThunks";

const ArtworksPage = (): JSX.Element => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(loadArtworksThunk("", "", "", "1"));
  }, [dispatch]);

  return (
    <>
      <Header />
      <ArtworksList />
      <Footer />
    </>
  );
};

export default ArtworksPage;
