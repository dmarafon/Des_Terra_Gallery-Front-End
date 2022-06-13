import { useEffect } from "react";
import { useParams } from "react-router-dom";
import ArtworkBuy from "../../components/ArtworkBuy/ArtworkBuy";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { useAppDispatch, useAppSelector } from "../../components/hooks";
import { loadSingleArtworkThunk } from "../../redux/thunks/singleArtworkThunk";

const ArtworkBuyPage = (): JSX.Element => {
  const artwork = useAppSelector((state) => state.singleArtwork);

  const dispatch = useAppDispatch();

  const { artworkId } = useParams();

  useEffect(() => {
    if (artworkId) {
      dispatch(loadSingleArtworkThunk(artworkId));
    }
  }, [artworkId, dispatch]);
  return (
    <>
      <Header />
      <ArtworkBuy artwork={artwork} />
      <Footer />
    </>
  );
};

export default ArtworkBuyPage;
