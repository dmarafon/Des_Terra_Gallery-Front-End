import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store/store";
import NotFoundPage from "./NotFoundPage";

describe("Given a NotFoundPage", () => {
  describe("When it's invoked", () => {
    test("Then it will render 3 social media svg icons and 2 images, 1 from the Header and 1 tex", () => {
      const totalImages = 1;
      render(
        <BrowserRouter>
          <Provider store={store}>
            <NotFoundPage />
          </Provider>
        </BrowserRouter>
      );

      const displayImage = screen.getAllByRole("img");

      const errorCodeText = screen.getByRole("heading", {
        name: /404/i,
      });

      const pageNotText = screen.getByText(/page not/i);

      const foundText = screen.getByText(/found/i);

      const elementIconButton1 = screen.getByTestId("icon1");
      const elementIconButton2 = screen.getByTestId("icon2");
      const elementIconButton3 = screen.getByTestId("icon3");

      expect(elementIconButton1).toBeInTheDocument();
      expect(elementIconButton2).toBeInTheDocument();
      expect(elementIconButton3).toBeInTheDocument();
      expect(errorCodeText).toBeInTheDocument();
      expect(pageNotText).toBeInTheDocument();
      expect(foundText).toBeInTheDocument();
      expect(displayImage).toHaveLength(totalImages);
    });
  });
});
