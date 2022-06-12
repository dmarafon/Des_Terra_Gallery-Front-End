import LoginPage from "./pages/LoginPage/LoginPage";
import { Navigate, Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import { useAppDispatch } from "./components/hooks";
import jwtDecode from "jwt-decode";
import {
  loginActionCreator,
  logoutActionCreator,
} from "./redux/features/userSlice";
import { UserInformation } from "./types/userInterface";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import HomePage from "./pages/HomePage/HomePage";
import AboutPage from "./pages/AboutPage/AboutPage";
import ArtworksPage from "./pages/ArtworksPage/ArtworksPage";
import MyArtPage from "./pages/MyArtPage/MyArtPage";
import Gatekeeper from "./components/Gatekeeper/Gatekeeper";
import AddEditPage from "./pages/AddEditPage/AddEditPage";
import GatekeeperReversed from "./components/GateKeeperReversed/GatekeeperReversed";
import DetailArtworkPage from "./pages/DetailArtworkPage/DetailArtworkPage";

const App = (): JSX.Element => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const userInfo: UserInformation = jwtDecode(token);
      dispatch(loginActionCreator(userInfo));
    } else {
      dispatch(logoutActionCreator());
    }
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<HomePage />} />
      <Route
        path="/myart"
        element={
          <Gatekeeper>
            <MyArtPage />
          </Gatekeeper>
        }
      />
      <Route
        path="/addart"
        element={
          <Gatekeeper>
            <AddEditPage />
          </Gatekeeper>
        }
      />
      <Route
        path="/editart/:artworkId"
        element={
          <Gatekeeper>
            <AddEditPage />
          </Gatekeeper>
        }
      />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/artwork/:page" element={<ArtworksPage />} />
      <Route path="/artwork/:artworkId" element={<DetailArtworkPage />} />
      <Route
        path="/users/login"
        element={
          <GatekeeperReversed>
            <LoginPage />
          </GatekeeperReversed>
        }
      />
      <Route
        path="/users/register"
        element={
          <GatekeeperReversed>
            <RegisterPage />
          </GatekeeperReversed>
        }
      />
    </Routes>
  );
};

export default App;
