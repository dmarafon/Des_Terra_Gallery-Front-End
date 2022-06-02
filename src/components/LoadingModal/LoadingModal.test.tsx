import { render, screen } from "@testing-library/react";
import LoadingModal from "./LoadingModal";

jest.mock("react-dom", () => {
  const original = jest.requireActual("react-dom");
  return {
    ...original,
    createPortal: (node: any) => node,
  };
});

describe("Given a LoadingModal function", () => {
  describe("When its invoked", () => {
    test("Then it should render a modal showing circles spinning", () => {
      render(<LoadingModal />);

      const expectedModal = screen.getByTestId("modal");

      expect(expectedModal).toBeInTheDocument();
    });
  });
});
