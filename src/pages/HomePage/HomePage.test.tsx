import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store/store";
import HomePage from "./HomePage";
describe("Given a HomePage", () => {
  describe("When it's invoked", () => {
    test("Then it will render 3 social media svg icons and 2 images, 1 from the Header and 1 for an art", () => {
      const totalImages = 2;
      render(
        <BrowserRouter>
          <Provider store={store}>
            <HomePage />
          </Provider>
        </BrowserRouter>
      );

      const displayImage = screen.getAllByRole("img");

      const elementIconButton1 = screen.getByTestId("icon1");
      const elementIconButton2 = screen.getByTestId("icon2");
      const elementIconButton3 = screen.getByTestId("icon3");

      expect(elementIconButton1).toBeTruthy();
      expect(elementIconButton2).toBeTruthy();
      expect(elementIconButton3).toBeTruthy();
      expect(displayImage).toHaveLength(totalImages);
    });
  });
});
