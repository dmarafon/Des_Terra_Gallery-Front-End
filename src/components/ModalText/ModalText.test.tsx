import { screen, render } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../redux/store/store";
import ModalText from "./ModalText";

describe("Given a Modal component", () => {
  describe("When its invoked", () => {
    test("Then it should render a button element", () => {
      render(
        <Provider store={store}>
          <ModalText
            children={"Test Modal"}
            handleClose={undefined}
            isOpen={true}
            customFunction={""}
          />
        </Provider>
      );

      const testButton = screen.getByRole("button");

      expect(testButton).toBeInTheDocument();
    });
  });
});
