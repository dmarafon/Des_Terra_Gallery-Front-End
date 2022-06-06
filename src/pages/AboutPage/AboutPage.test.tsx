import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store/store";
import AboutPage from "./AboutPage";

describe("Given a AboutPage", () => {
  describe("When it's invoked", () => {
    test("Then it will render 3 social media svg icons and 2 images, 1 from the Header and 1 for the About Page", () => {
      const totalImages = 2;
      render(
        <BrowserRouter>
          <Provider store={store}>
            <AboutPage />
          </Provider>
        </BrowserRouter>
      );

      const displayImage = screen.getAllByRole("img");

      const elementIconButton1 = screen.getByTestId("icon1");
      const elementIconButton2 = screen.getByTestId("icon2");
      const elementIconButton3 = screen.getByTestId("icon3");

      expect(elementIconButton1).toBeInTheDocument();
      expect(elementIconButton2).toBeInTheDocument();
      expect(elementIconButton3).toBeInTheDocument();
      expect(displayImage).toHaveLength(totalImages);
    });

    test("Then it will render a text explainining about purchasing or renting art and  text", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <AboutPage />
          </Provider>
        </BrowserRouter>
      );

      const displayText = screen.getByText(
        /some collectors might want the opportunity to see the work in person before making an official decision\. but with desterra, you have the option to change it, buy it or return it any time after 3 months\./i
      );

      const displaySecondText = screen.getByText(
        /we foment the exchange, purchase and consumption of the art of diverse artists, aiming to help and foment arists that had to leave their families and home countries due to conflicts, political persecussion or ethical\./i
      );

      expect(displayText).toBeInTheDocument();
      expect(displaySecondText).toBeInTheDocument();
    });
  });
});
