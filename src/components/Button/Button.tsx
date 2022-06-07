import styled from "styled-components";

const ButtonStyled = styled.button`
  .button__yellow {
    height: 55px;
    cursor: pointer;
    justify-content: center;
    height: 50px;
    width: 150px;
    background-color: #fac43b;
    color: #000000;
    border-radius: 5px;
    border-style: none;
    font-family: "Karla", sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 28px;
    font-size: 18px;
    opacity: 100%;
    max-width: 100%;
    padding: 11px 15px 10px;
    box-shadow: 5px 5px 10px -3px rgba(0, 0, 0, 0.199),
      -5px -5px 15px 3px rgba(255, 255, 255, 0.199);
    :hover {
      opacity: 100%;
    }
  }

  .general__button--orange {
    height: 55px;
    cursor: pointer;
    justify-content: center;
    height: 50px;
    width: 150px;
    background-color: #fa803b;
    color: #ffffff;
    border-radius: 5px;
    border-style: none;
    font-family: "Karla", sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 28px;
    font-size: 18px;
    opacity: 100%;
    max-width: 100%;
    padding: 11px 15px 10px;
    box-shadow: 5px 5px 10px -3px rgba(0, 0, 0, 0.199),
      -5px -5px 15px 3px rgba(255, 255, 255, 0.199);
    :hover {
      opacity: 100%;
    }
  }
`;

declare module "react" {
  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    action?: any;
  }
}

const Button = ({
  text,
  action,
  className,
}: {
  text: string | any;
  action: string | any;
  className: string | any;
}): JSX.Element => {
  return (
    <ButtonStyled className={className} onClick={action}>
      {text}
    </ButtonStyled>
  );
};

export default Button;
