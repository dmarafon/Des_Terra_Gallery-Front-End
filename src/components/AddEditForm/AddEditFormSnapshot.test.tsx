import { Provider } from "react-redux";
import TestRenderer from "react-test-renderer";
import store from "../../redux/store/store";
import AddEditForm from "./AddEditForm";

describe("Given an AddEdit form component", () => {
  describe("When it's rendered", () => {
    test("Then it should always match this snapshot", () => {
      const renderedAddEditForm = TestRenderer.create(
        <Provider store={store}>
          <AddEditForm />
        </Provider>
      );

      expect(renderedAddEditForm).toMatchSnapshot();
    });
  });
});
