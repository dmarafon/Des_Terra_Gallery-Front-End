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

describe("Given a AddEditForm", () => {
  describe("When the user fills all the fields, and leaves only the Medium field empty", () => {
    const textInput = [
      "Test",
      "",
      "31",
      "12",
      "oil on canvas",
      "111111111",
      "111111111",
      "super description about this artwork",
    ];
    test("Then the dispatch should be invoked and a modal will open warning the user about missing field", async () => {
      const fakeFile = new File(["test"], "test.png", { type: "image/png" });

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
        name: "ADD YOUR ART",
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
          type: "ui/loading",
        };

        store.dispatch(uIaction);
      });

      await waitFor(() => {
        const uIaction = {
          type: "ui/finishedLoading",
        };

        store.dispatch(uIaction);
      });

      await waitFor(() => {
        const uIaction = {
          type: "ui/apiResponse",
          payload: "Blank 'Medium'",
        };

        store.dispatch(uIaction);
      });

      const element = screen.getByTestId("custom-element");

      expect(element).toBeInTheDocument();

      expect(mockDispatch).toHaveBeenCalled();

      await waitFor(() => {
        const uIaction = {
          type: "ui/cleanApiResponse",
        };

        store.dispatch(uIaction);
      });
    });
  });

  describe("When the user fills all the fields, and leaves only the Height field empty", () => {
    const textInput = [
      "Test",
      "oil on canvas",
      "",
      "12",
      "oil on canvas",
      "111111111",
      "111111111",
      "super description about this artwork",
    ];
    test("Then the dispatch should be invoked and a modal will open warning the user about missing field", async () => {
      const fakeFile = new File(["test"], "test.png", { type: "image/png" });

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
        name: "ADD YOUR ART",
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
          type: "ui/loading",
        };

        store.dispatch(uIaction);
      });

      await waitFor(() => {
        const uIaction = {
          type: "ui/finishedLoading",
        };

        store.dispatch(uIaction);
      });

      await waitFor(() => {
        const uIaction = {
          type: "ui/apiResponse",
          payload: "Blank 'Height'",
        };

        store.dispatch(uIaction);
      });

      const element = screen.getByTestId("custom-element");

      expect(element).toBeInTheDocument();

      expect(mockDispatch).toHaveBeenCalled();

      await waitFor(() => {
        const uIaction = {
          type: "ui/cleanApiResponse",
        };

        store.dispatch(uIaction);
      });
    });
  });

  describe("When the user fills all the fields, and leaves only the Width field empty", () => {
    const textInput = [
      "Test",
      "oil on canvas",
      "31",
      "",
      "oil on canvas",
      "111111111",
      "111111111",
      "super description about this artwork",
    ];
    test("Then the dispatch should be invoked and a modal will open warning the user about missing field", async () => {
      const fakeFile = new File(["test"], "test.png", { type: "image/png" });

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
        name: "ADD YOUR ART",
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
          type: "ui/loading",
        };

        store.dispatch(uIaction);
      });

      await waitFor(() => {
        const uIaction = {
          type: "ui/finishedLoading",
        };

        store.dispatch(uIaction);
      });

      await waitFor(() => {
        const uIaction = {
          type: "ui/apiResponse",
          payload: "Blank 'Width'",
        };

        store.dispatch(uIaction);
      });

      const element = screen.getByTestId("custom-element");

      expect(element).toBeInTheDocument();

      expect(mockDispatch).toHaveBeenCalled();

      await waitFor(() => {
        const uIaction = {
          type: "ui/cleanApiResponse",
        };

        store.dispatch(uIaction);
      });
    });
  });

  describe("When the user fills all the fields, and leaves only the Style field empty", () => {
    const textInput = [
      "Test",
      "oil on canvas",
      "31",
      "12",
      "",
      "111111111",
      "111111111",
      "super description about this artwork",
    ];
    test("Then the dispatch should be invoked and a modal will open warning the user about missing field", async () => {
      const fakeFile = new File(["test"], "test.png", { type: "image/png" });

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
        name: "ADD YOUR ART",
      });

      const inputFile = screen.getByLabelText(/artwork picture/i);

      const dropdownStyleMenu = screen.getByLabelText(/style/i);

      userEvent.selectOptions(dropdownStyleMenu, "");

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
          type: "ui/loading",
        };

        store.dispatch(uIaction);
      });

      await waitFor(() => {
        const uIaction = {
          type: "ui/finishedLoading",
        };

        store.dispatch(uIaction);
      });

      await waitFor(() => {
        const uIaction = {
          type: "ui/apiResponse",
          payload: "Blank 'Style'",
        };

        store.dispatch(uIaction);
      });

      const element = screen.getByTestId("custom-element");

      expect(element).toBeInTheDocument();

      expect(mockDispatch).toHaveBeenCalled();

      await waitFor(() => {
        const uIaction = {
          type: "ui/cleanApiResponse",
        };

        store.dispatch(uIaction);
      });
    });
  });

  describe("When the user fills all the fields, and leaves only the Purchase Price field empty", () => {
    const textInput = [
      "Test",
      "oil on canvas",
      "31",
      "12",
      "oil on canvas",
      "",
      "111111111",
      "super description about this artwork",
    ];
    test("Then the dispatch should be invoked and a modal will open warning the user about missing field", async () => {
      const fakeFile = new File(["test"], "test.png", { type: "image/png" });

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
        name: "ADD YOUR ART",
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
          type: "ui/loading",
        };

        store.dispatch(uIaction);
      });

      await waitFor(() => {
        const uIaction = {
          type: "ui/finishedLoading",
        };

        store.dispatch(uIaction);
      });

      await waitFor(() => {
        const uIaction = {
          type: "ui/apiResponse",
          payload: "Blank 'Purchase Price'",
        };

        store.dispatch(uIaction);
      });

      const element = screen.getByTestId("custom-element");

      expect(element).toBeInTheDocument();

      expect(mockDispatch).toHaveBeenCalled();

      await waitFor(() => {
        const uIaction = {
          type: "ui/cleanApiResponse",
        };

        store.dispatch(uIaction);
      });
    });
  });

  describe("When the user fills all the fields, and leaves only the Monthly Rate Price field empty", () => {
    const textInput = [
      "Test",
      "oil on canvas",
      "31",
      "12",
      "oil on canvas",
      "111111111",
      "",
      "super description about this artwork",
    ];
    test("Then the dispatch should be invoked and a modal will open warning the user about missing field", async () => {
      const fakeFile = new File(["test"], "test.png", { type: "image/png" });

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
        name: "ADD YOUR ART",
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
          type: "ui/loading",
        };

        store.dispatch(uIaction);
      });

      await waitFor(() => {
        const uIaction = {
          type: "ui/finishedLoading",
        };

        store.dispatch(uIaction);
      });

      await waitFor(() => {
        const uIaction = {
          type: "ui/apiResponse",
          payload: "Blank 'Monthly Rate Price'",
        };

        store.dispatch(uIaction);
      });

      const element = screen.getByTestId("custom-element");

      expect(element).toBeInTheDocument();

      expect(mockDispatch).toHaveBeenCalled();

      await waitFor(() => {
        const uIaction = {
          type: "ui/cleanApiResponse",
        };

        store.dispatch(uIaction);
      });
    });
  });

  describe("When the user fills all the fields, and leaves only the Description field empty", () => {
    const textInput = [
      "Test",
      "oil on canvas",
      "31",
      "12",
      "oil on canvas",
      "111111111",
      "111111111",
      "",
    ];
    test("Then the dispatch should be invoked and a modal will open warning the user about missing field", async () => {
      const fakeFile = new File(["test"], "test.png", { type: "image/png" });

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
        name: "ADD YOUR ART",
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
          type: "ui/loading",
        };

        store.dispatch(uIaction);
      });

      await waitFor(() => {
        const uIaction = {
          type: "ui/finishedLoading",
        };

        store.dispatch(uIaction);
      });

      await waitFor(() => {
        const uIaction = {
          type: "ui/apiResponse",
          payload: "Blank 'Description'",
        };

        store.dispatch(uIaction);
      });

      const element = screen.getByTestId("custom-element");

      expect(element).toBeInTheDocument();

      expect(mockDispatch).toHaveBeenCalled();

      await waitFor(() => {
        const uIaction = {
          type: "ui/cleanApiResponse",
        };

        store.dispatch(uIaction);
      });
    });
  });

  describe("When the user fills all the fields, but an Unknown Error occurs", () => {
    const textInput = [
      "Test",
      "oil on canvas",
      "31",
      "12",
      "oil on canvas",
      "111111111",
      "111111111",
      "a beautiful description",
    ];
    test("Then the dispatch should be invoked and a modal will open warning the user about missing field", async () => {
      const fakeFile = new File(["test"], "test.png", { type: "image/png" });

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
        name: "ADD YOUR ART",
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
          type: "ui/loading",
        };

        store.dispatch(uIaction);
      });

      await waitFor(() => {
        const uIaction = {
          type: "ui/finishedLoading",
        };

        store.dispatch(uIaction);
      });

      await waitFor(() => {
        const uIaction = {
          type: "ui/apiResponse",
          payload: "Unknown Error",
        };

        store.dispatch(uIaction);
      });

      const element = screen.getByTestId("custom-element");

      expect(element).toBeInTheDocument();

      expect(mockDispatch).toHaveBeenCalled();

      await waitFor(() => {
        const uIaction = {
          type: "ui/cleanApiResponse",
        };

        store.dispatch(uIaction);
      });
    });
  });
});
