import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store/store";
import ModalText from "./ModalText";

describe("Given a Modal component", () => {
  describe("When its invoked and the user clicks in the button", () => {
    test("Then the button should render a button", () => {
      const testFunction = () => {
        return "test";
      };

      const customTestFunction = () => {
        return true;
      };
      render(
        <BrowserRouter>
          <Provider store={store}>
            <ModalText
              children={"Test Modal"}
              handleClose={testFunction}
              isOpen={true}
              customFunction={customTestFunction}
            />
          </Provider>
        </BrowserRouter>
      );

      const testButton = screen.getByRole("button");

      userEvent.click(testButton);

      expect(testButton).toBeInTheDocument();
    });
  });
});
