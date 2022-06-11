import { useEffect } from "react";
import DetailArtwork from "../../components/DetailArtwork/DetailArtwork";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { useAppDispatch } from "../../components/hooks";
import { loadArtworksThunk } from "../../redux/thunks/artworkThunks";

const DetailArtworkPage = (): JSX.Element => {
  // const dispatch = useAppDispatch();

  // useEffect(() => {
  //   dispatch(loadArtworksThunk());
  // }, [dispatch]);

  return (
    <>
      <Header />
      <DetailArtwork />
      <Footer />
    </>
  );
};

export default DetailArtworkPage;
