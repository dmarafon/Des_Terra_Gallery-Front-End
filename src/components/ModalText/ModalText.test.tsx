import { screen, render } from "@testing-library/react";
import ModalText from "./ModalText";

describe("Given a Modal component", () => {
  describe("When its invoked", () => {
    test("Then it should render a button element", () => {
      render(<ModalText children={"Test Modal"} handleClose={undefined} />);

      const testButton = screen.getByRole("button");

      expect(testButton).toBeInTheDocument();
    });
  });
});
