import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store/store";
import Header from "./Header";

describe("Given a Header Component", () => {
  describe("When its called to be rendered without a token in the local storage", () => {
    test("Then it should create a Header Component with 4 list components and an image", () => {
      const totalListComponents = 4;

      const totalImages = 1;
      render(
        <BrowserRouter>
          <Provider store={store}>
            <Header />
          </Provider>
        </BrowserRouter>
      );
      const displayImage = screen.getAllByRole("img");
      const displayHeader = screen.getAllByRole("listitem");

      expect(displayImage).toHaveLength(totalImages);
      expect(displayHeader).toHaveLength(totalListComponents);
    });
  });
});
