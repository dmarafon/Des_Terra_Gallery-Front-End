import jwtDecode from "jwt-decode";
import { useEffect } from "react";
import { useAppDispatch } from "./components/hooks";
import LoginForm from "./components/LoginForm";
import {
  loginActionCreator,
  logoutActionCreator,
} from "./redux/features/userSlice";
import { userInformation } from "./types/userInterface";

const App = (): JSX.Element => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      const userInfo: userInformation = jwtDecode(token);
      dispatch(loginActionCreator(userInfo));
    } else {
      dispatch(logoutActionCreator());
    }
  }, [dispatch]);

  return <LoginForm />;
};

export default App;
