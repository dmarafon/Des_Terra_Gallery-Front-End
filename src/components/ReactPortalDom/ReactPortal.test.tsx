import { screen, render } from "@testing-library/react";
import ReactPortal from "./ReactPortal";

describe("Given a ReactPortal component", () => {
  describe("When its invoked", () => {
    test("Then it should mutate the DOM by creating a div container with the test id 'custom-element'", () => {
      render(<ReactPortal />);

      const elementReactPortal = screen.getByTestId("custom-element");

      expect(elementReactPortal).toBeTruthy();
    });

    describe("When its invoked when already exists another ReactPortal component present", () => {
      test("Then it should not be called a second time", () => {
        const expectedNumberOfReactPortals = 1;

        render(
          <>
            <ReactPortal />
            <ReactPortal />
          </>
        );

        const elementReactPortal = screen.getAllByTestId("custom-element");

        expect(elementReactPortal).toHaveLength(expectedNumberOfReactPortals);
      });
    });
  });
});
