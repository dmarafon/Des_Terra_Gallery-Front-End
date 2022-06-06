import { useEffect } from "react";
import MyArtworkList from "../../components/MyArtworksList/MyArtworksList";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { useAppDispatch, useAppSelector } from "../../components/hooks";
import { loadUserArtworks } from "../../redux/thunks/artworkThunks";

const MyArtPage = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const userId = useAppSelector((state) => state.user.id);

  useEffect(() => {
    dispatch(loadUserArtworks(userId));
  }, [dispatch, userId]);

  return (
    <>
      <Header />
      <MyArtworkList />
      <Footer />
    </>
  );
};

export default MyArtPage;
