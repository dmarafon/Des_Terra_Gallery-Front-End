import { configureStore, createSlice } from "@reduxjs/toolkit";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import Gatekeeper from "./Gatekeeper";

const mockUseNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  useNavigate: () => mockUseNavigate,
}));

describe("Given a LoggedChecked function", () => {
  describe("When it's invoked there is no user logged", () => {
    test("Then it should call navigate to login", () => {
      const userMockSlice = createSlice({
        name: "user",
        initialState: { logged: "" },
        reducers: {},
      });
      const mockStore = configureStore({
        reducer: { user: userMockSlice.reducer },
      });

      render(
        <Provider store={mockStore}>
          <Gatekeeper>
            <h1>Hello</h1>
          </Gatekeeper>
        </Provider>
      );

      expect(mockUseNavigate).toHaveBeenCalledWith("/");
    });

    test("Then it should render its children when the user is logged", () => {
      const userMockSlice = createSlice({
        name: "user",
        initialState: { logged: true },
        reducers: {},
      });
      const mockStore = configureStore({
        reducer: { user: userMockSlice.reducer },
      });

      render(
        <Provider store={mockStore}>
          <Gatekeeper>
            <h1>TEST</h1>
          </Gatekeeper>
        </Provider>
      );

      const receivedText = screen.getByRole("heading", {
        level: 1,
        name: /TEST/i,
      });

      expect(receivedText).toBeInTheDocument();
    });
  });
});
