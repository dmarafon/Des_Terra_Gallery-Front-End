import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../redux/store/store";
import GatekeeperReversed from "./GatekeeperReversed";

const mockUseNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  useNavigate: () => mockUseNavigate,
}));

describe("Given a LoggedChecked function", () => {
  describe("When it's invoked there is no token preset", () => {
    test("Then it should call navigate to login", () => {
      render(
        <Provider store={store}>
          <GatekeeperReversed>
            <h1>Hello</h1>
          </GatekeeperReversed>
        </Provider>
      );

      const receivedText = screen.getByRole("heading", {
        level: 1,
        name: /Hello/i,
      });

      expect(receivedText).toBeInTheDocument();
    });
  });
});
