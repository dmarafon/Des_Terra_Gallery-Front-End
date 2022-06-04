import { screen, render } from "@testing-library/react";
import ReactPortal from "./ReactPortal";

describe("Given a ReactPortal component", () => {
  describe("When its invoked", () => {
    test("Then it should mutate the DOM by creating a div container with the test id 'custom-element'", () => {
      render(<ReactPortal />);

      const elementReactPortal = screen.getByTestId("custom-element");

      expect(elementReactPortal).toBeTruthy();
    });
  });
});
