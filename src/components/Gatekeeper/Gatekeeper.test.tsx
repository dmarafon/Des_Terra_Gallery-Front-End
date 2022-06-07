import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../redux/store/store";
import Gatekeeper from "./Gatekeeper";

const mockUseNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  useNavigate: () => mockUseNavigate,
}));

describe("Given a LoggedChecked function", () => {
  describe("When it's invoked there is no token preset", () => {
    test("Then it should call navigate to login", () => {
      render(
        <Provider store={store}>
          <Gatekeeper>
            <h1>Hello</h1>
          </Gatekeeper>
        </Provider>
      );

      expect(mockUseNavigate).toHaveBeenCalledWith("/");
    });
  });
});
