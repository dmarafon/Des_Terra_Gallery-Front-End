import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store/store";
import AddEditForm from "./AddEditForm";

const mockDispatch = jest.fn();

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => mockDispatch,
}));

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: () => ({
    artworkId: "123456",
  }),
  useRouteMatch: () => ({ url: "/editart/artworkId" }),
}));

describe("Given a AddEditForm component function", () => {
  describe("When the user fills all the required fields, and uploads an image, clicks the checkbox, the submit button becames enabled and the user clicks in the mentioned button, opening a modal. When the modal is closed it will close the modal as well", () => {
    test("Then the dispatch should be invoked in both instances", async () => {
      const fakeFile = new File(["test"], "test.png", { type: "image/png" });

      const textInput = [
        "Test",
        "Test medium",
        "31",
        "12",
        "oil on canvas",
        "111111111",
        "111111111",
        "super description about this artwork",
      ];
      render(
        <BrowserRouter>
          <Provider store={store}>
            <AddEditForm />
          </Provider>
        </BrowserRouter>
      );

      const titleInput = screen.getByLabelText("TITLE");
      const mediumInput = screen.getByLabelText("MEDIUM");
      const heightInput = screen.getByLabelText("HEIGHT (DIMENSIONS)");
      const widthInput = screen.getByLabelText("WIDTH (DIMENSIONS)");
      const styleInput = screen.getByLabelText("STYLE");
      const purchaseProfileInput = screen.getByLabelText("PURCHASE PRICE");
      const monthlyRatePriceInput = screen.getByLabelText("MONTHLY RATE PRICE");
      const descriptionInput = screen.getByLabelText(
        "DESCRIPTION (MAX 240 CHAR)"
      );

      const artworkButton = screen.getByRole("button", {
        name: "EDIT YOUR ART",
      });

      const inputFile = screen.getByLabelText(/artwork picture/i);

      const dropdownStyleMenu = screen.getByLabelText(/style/i);

      userEvent.selectOptions(dropdownStyleMenu, "Abstract");

      userEvent.upload(inputFile, fakeFile);

      userEvent.type(titleInput, textInput[0]);
      userEvent.type(mediumInput, textInput[1]);
      userEvent.type(heightInput, textInput[2]);
      userEvent.type(widthInput, textInput[3]);
      userEvent.type(styleInput, textInput[4]);
      userEvent.type(purchaseProfileInput, textInput[5]);
      userEvent.type(monthlyRatePriceInput, textInput[6]);
      userEvent.type(descriptionInput, textInput[7]);

      userEvent.click(artworkButton);

      await waitFor(() => {
        const uIaction = {
          type: "ui/apiResponse",
          payload: "new",
        };

        store.dispatch(uIaction);
      });

      expect(mockDispatch).toHaveBeenCalled();

      const closeModal = screen.getByRole("button", {
        name: /×/i,
      });

      userEvent.click(closeModal);

      const element = screen.getByTestId("custom-element");

      await waitFor(() => {
        const uIaction = {
          type: "ui/cleanApiResponse",
          payload: "new",
        };

        store.dispatch(uIaction);
      });

      expect(element).not.toBeInTheDocument();
    });
  });
});
