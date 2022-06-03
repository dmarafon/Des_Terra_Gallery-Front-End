import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../redux/store/store";
import Footer from "./Footer";

describe("Given a Footer component", () => {
  describe("When it's invoked", () => {
    test("Then it will render 3 social media svg icons", () => {
      render(
        <Provider store={store}>
          <Footer />
        </Provider>
      );
      const elementIconButton1 = screen.getByTestId("icon1");
      const elementIconButton2 = screen.getByTestId("icon2");
      const elementIconButton3 = screen.getByTestId("icon3");
      expect(elementIconButton1).toBeTruthy();
      expect(elementIconButton2).toBeTruthy();
      expect(elementIconButton3).toBeTruthy();
    });
  });
});
