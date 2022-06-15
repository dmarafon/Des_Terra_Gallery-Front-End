import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import TestRenderer from "react-test-renderer";
import store from "../../redux/store/store";
import LoginForm from "./LoginForm";

describe("Given an Login form component", () => {
  describe("When it's rendered", () => {
    test("Then it should always match this snapshot", () => {
      const renderedAddEditForm = TestRenderer.create(
        <BrowserRouter>
          <Provider store={store}>
            <LoginForm />
          </Provider>
        </BrowserRouter>
      );

      expect(renderedAddEditForm).toMatchSnapshot();
    });
  });
});
