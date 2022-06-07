import { ReactElement } from "react";
import ButtonStyled from "./ButtonStyled";
declare module "react" {
  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    action?: any;
  }
}

const Button = ({
  text,
  action,
  className,
  children,
}: {
  text?: string | any;
  action?: any;
  className?: string | any;
  children?: ReactElement<any, any>;
}): JSX.Element => {
  return (
    <ButtonStyled>
      <button onClick={action} className={className}>
        {text}
      </button>
    </ButtonStyled>
  );
};

export default Button;
