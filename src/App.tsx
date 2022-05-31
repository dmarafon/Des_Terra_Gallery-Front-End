import jwtDecode from "jwt-decode";
import { useEffect } from "react";
import { useAppDispatch } from "./components/hooks";
import LoginForm from "./components/LoginForm/LoginForm";
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

  return <LoginForm />;
};

export default App;
