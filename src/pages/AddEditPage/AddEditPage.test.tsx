import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store/store";
import AddEditPage from "./AddEditPage";

describe("Given a AddEditPage", () => {
  describe("When it's invoked", () => {
    test("Then it will render 3 social media svg icons and 2 images, 1 from the Header and 4 inputs that are exclusive to the Register", () => {
      const totalImages = 1;
      render(
        <BrowserRouter>
          <Provider store={store}>
            <AddEditPage />
          </Provider>
        </BrowserRouter>
      );

      const displayImage = screen.getAllByRole("img");

      const elementIconButton1 = screen.getByTestId("icon1");
      const elementIconButton2 = screen.getByTestId("icon2");
      const elementIconButton3 = screen.getByTestId("icon3");

      const titleInput = screen.getByLabelText("TITLE");
      const mediumInput = screen.getByLabelText("MEDIUM");
      const heightInputInput = screen.getByLabelText("HEIGHT (DIMENSIONS)");
      const descriptionInput = screen.getByLabelText(
        "DESCRIPTION (MAX 240 CHAR)"
      );

      expect(titleInput).toBeInTheDocument();
      expect(mediumInput).toBeInTheDocument();
      expect(heightInputInput).toBeInTheDocument();
      expect(descriptionInput).toBeInTheDocument();

      expect(elementIconButton1).toBeInTheDocument();
      expect(elementIconButton2).toBeInTheDocument();
      expect(elementIconButton3).toBeInTheDocument();
      expect(displayImage).toHaveLength(totalImages);
    });
  });
});
