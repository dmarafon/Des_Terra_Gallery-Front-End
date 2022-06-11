import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const GatekeeperReversed = ({ children }: { children: JSX.Element }) => {
  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  useEffect(() => {
    if (token) navigate("/");
  }, [token, navigate]);

  if (!token) {
    return children;
  }
  return null;
};

export default GatekeeperReversed;
