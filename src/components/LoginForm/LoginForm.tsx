import { useState } from "react";
import { loginUserThunk } from "../redux/thunks/userThunks";
import { useAppDispatch } from "./hooks";

const LoginForm = (): JSX.Element => {
  const formInitialState = { email: "", password: "" };

  const [formData, setFormData] = useState(formInitialState);

  const dispatch = useAppDispatch();

  const loginSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    const dispatchedData = { ...formData };
    resetForm();

    dispatch(loginUserThunk(dispatchedData));
  };

  const changeData = (event: { target: { id: any; value: any } }) => {
    setFormData({ ...formData, [event.target.id]: event.target.value });
  };

  const resetForm = () => {
    setFormData(formInitialState);
  };

  return (
    <form onSubmit={loginSubmit} noValidate autoComplete="off">
      <label htmlFor="email">EMAIL</label>
      <input id="email" value={formData.email} onChange={changeData} />
      <label htmlFor="password"> PASSWORD </label>
      <input
        id="password"
        type="password"
        value={formData.password}
        onChange={changeData}
      />
      <button type="submit">SIGN IN</button>
    </form>
  );
};

export default LoginForm;
