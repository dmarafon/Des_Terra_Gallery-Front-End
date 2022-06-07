import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Button from "./Button";

declare module "react" {
  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    onClick?: any;
    action?: any;
    text?: string | any;
  }
}

describe("Given an Button component", () => {
  describe("When it receives a text 'Welcome''", () => {
    test("Then it should show a button with the given text", () => {
      render(
        <Button
          text={"Welcome"}
          action={""}
          className={"button__yellow"}
        ></Button>
      );
      const textElement = screen.getByRole("button");

      expect(textElement).toBeInTheDocument();
    });
  });
  describe("When it receives a click action'", () => {
    test("Then it should invoke any given function", () => {
      const clickAction = jest.fn();

      const buttonText = "Welcome";

      render(
        <Button
          text={buttonText}
          action={clickAction}
          className={"button__yellow"}
        ></Button>
      );
      const elementButtom = screen.getByRole("button");

      userEvent.click(elementButtom);

      expect(clickAction).toHaveBeenCalled();
    });
  });
});
