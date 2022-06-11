import { title } from "process";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import DetailArtwork from "../../components/DetailArtwork/DetailArtwork";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

const DetailArtworkPage = (): JSX.Element => {
  return (
    <>
      <Header />
      <DetailArtwork />
      <Footer />
    </>
  );
};

export default DetailArtworkPage;
