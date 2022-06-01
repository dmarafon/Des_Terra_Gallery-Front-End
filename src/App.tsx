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
      <Route path="/" element={<Navigate to="/users/login" />} />
      <Route path="/users/login" element={<LoginPage />} />
    </Routes>
  );
};

export default App;
