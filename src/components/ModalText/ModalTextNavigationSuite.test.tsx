import { screen, render, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store/store";
import ModalText from "./ModalText";
import { loginUserThunk } from "../../redux/thunks/userThunks";
import { server } from "../../mocks/server";
import axios from "axios";
import * as router from "react-router";

const navigate = jest.fn();

beforeEach(() => {
  jest.spyOn(router, "useNavigate").mockImplementation(() => navigate);
});

jest.mock("axios");

jest.mock("jwt-decode", () =>
  jest.fn().mockResolvedValue({
    id: "1234",
    email: "test@test.com",
    firstName: "testName",
  })
);

describe("Given a Modal component", () => {
  describe("When its invoked and the user clicks in the button after a successfull message", () => {
    beforeEach(() => server.listen());
    afterEach(() => server.resetHandlers());
    afterAll(() => server.close());

    const mockedAxios = axios as jest.Mocked<typeof axios>;

    const uIaction = {
      type: "ui/apiResponse",
      payload: "Blank",
    };

    store.dispatch(uIaction);

    mockedAxios.post.mockResolvedValue({
      data: { token: "test" },
    });

    test("Then the button should not send the user to the Home Page", async () => {
      const testFunction = () => {
        return "test";
      };

      const newUSer = { email: "jesusperea@gmail.com", password: "1234" };

      render(
        <BrowserRouter>
          <Provider store={store}>
            <ModalText
              children={"Test Modal"}
              handleClose={testFunction}
              isOpen={true}
              customFunction={loginUserThunk(newUSer)}
            />
          </Provider>
        </BrowserRouter>
      );

      const testButton = screen.getByRole("button");

      userEvent.click(testButton);

      await waitFor(() => {
        expect(navigate).not.toHaveBeenCalled();
      });
    });
  });

  describe("When its invoked and the user clicks in the button after another successfull message about creating a new artwork", () => {
    beforeEach(() => server.listen());
    afterEach(() => server.resetHandlers());
    afterAll(() => server.close());

    const mockedAxios = axios as jest.Mocked<typeof axios>;

    const uIaction = {
      type: "ui/apiResponse",
      payload: "new",
    };

    store.dispatch(uIaction);

    mockedAxios.post.mockResolvedValue({
      data: { token: "test" },
    });

    test("Then the button should send the user to the MyArt page", async () => {
      const testFunction = () => {
        return "test";
      };

      render(
        <BrowserRouter>
          <Provider store={store}>
            <ModalText
              children={"Test Modal"}
              handleClose={testFunction}
              isOpen={true}
              customFunction={""}
            />
          </Provider>
        </BrowserRouter>
      );

      const testButton = screen.getByRole("button");

      userEvent.click(testButton);

      await waitFor(() => {
        expect(navigate).toHaveBeenCalledWith("/myart");
      });
    });
  });

  describe("When its invoked and the user clicks in the button after another successfull message about updating a new artwork", () => {
    beforeEach(() => server.listen());
    afterEach(() => server.resetHandlers());
    afterAll(() => server.close());

    const mockedAxios = axios as jest.Mocked<typeof axios>;

    const uIaction = {
      type: "ui/apiResponse",
      payload: "upd",
    };

    store.dispatch(uIaction);

    mockedAxios.post.mockResolvedValue({
      data: { token: "test" },
    });

    test("Then the button should send the user to the MyArt Page", async () => {
      const testFunction = () => {
        return "test";
      };

      render(
        <BrowserRouter>
          <Provider store={store}>
            <ModalText
              children={"Test Modal"}
              handleClose={testFunction}
              isOpen={true}
              customFunction={""}
            />
          </Provider>
        </BrowserRouter>
      );

      const testButton = screen.getByRole("button");

      userEvent.click(testButton);

      await waitFor(() => {
        expect(navigate).toHaveBeenCalledWith("/myart");
      });
    });
  });

  describe("When its invoked and the user clicks in the button after an unknown error", () => {
    beforeEach(() => server.listen());
    afterEach(() => server.resetHandlers());
    afterAll(() => server.close());

    const mockedAxios = axios as jest.Mocked<typeof axios>;

    const uIaction = {
      type: "ui/apiResponse",
      payload: "Unknown Error",
    };

    store.dispatch(uIaction);

    mockedAxios.post.mockResolvedValue({
      data: { token: "test" },
    });

    test("Then the button should send the user to the MyArt Page", async () => {
      const testFunction = () => {
        return "test";
      };

      render(
        <BrowserRouter>
          <Provider store={store}>
            <ModalText
              children={"Test Modal"}
              handleClose={testFunction}
              isOpen={true}
              customFunction={""}
            />
          </Provider>
        </BrowserRouter>
      );

      const testButton = screen.getByRole("button");

      userEvent.click(testButton);

      await waitFor(() => {
        expect(navigate).toHaveBeenCalledWith("/myart");
      });
    });
  });
});
