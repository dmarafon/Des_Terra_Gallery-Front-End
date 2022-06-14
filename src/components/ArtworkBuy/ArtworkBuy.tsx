import { useState } from "react";
import { NavLink } from "react-router-dom";
import { IArtworks } from "../../types/artworksInterface";
import { useAppSelector } from "../hooks";
import LoadingModal from "../LoadingModal/LoadingModal";
import ArtworBuyStyled from "./ArtworkBuyStyled";

const ArtworkBuy = ({
  artwork: {
    id,
    title,
    image,
    imagebackup,
    purchaseprice,
    monthlyrateprice,
    author,
  },
}: {
  artwork: IArtworks;
}) => {
  const loading = useAppSelector((state) => state.ui.loading);
  const [inputData, setInputData] = useState(1);

  const firstnameUpperCase = author[0]?.firstname?.toUpperCase();
  const surnameUpperCase = author[0]?.surname?.toUpperCase();

  const titleUpperCase = title.toUpperCase();

  const changeData = (event: { target: HTMLInputElement }) => {
    setInputData(event.target.valueAsNumber);
  };

  const calculateMonthlyPriceRent = () => {
    const total = (inputData * Number(monthlyrateprice)).toString();
    return Number(parseFloat(total).toFixed(2));
  };

  const calculateShippingPriceRent = () => {
    if (inputData * Number(monthlyrateprice) > 200) {
      return 0;
    } else {
      const total = (inputData * Number(monthlyrateprice) * 0.05).toString();
      return Number(parseFloat(total).toFixed(2));
    }
  };

  const calculateShippingPriceBuy = () => {
    if (Number(purchaseprice) > 200) {
      return 0;
    } else {
      const total = (Number(purchaseprice) * 0.05).toString();
      return Number(parseFloat(total).toFixed(2));
    }
  };

  const calculateIVARent = () => {
    if (inputData * Number(monthlyrateprice) > 200) {
      const total = (inputData * Number(monthlyrateprice) * 0.1).toString();
      return Number(parseFloat(total).toFixed(2));
    } else {
      const total = (
        (inputData * Number(monthlyrateprice) +
          inputData * Number(monthlyrateprice) * 0.05) *
        0.1
      ).toString();
      return Number(parseFloat(total).toFixed(2));
    }
  };

  const calculateIVABuy = () => {
    if (Number(purchaseprice) > 200) {
      const total = (Number(purchaseprice) * 0.1).toString();
      return Number(parseFloat(total).toFixed(2));
    } else {
      const total = (
        (Number(purchaseprice) + Number(purchaseprice) * 0.05) *
        0.1
      ).toString();
      return Number(parseFloat(total).toFixed(2));
    }
  };

  return (
    <>
      {loading ? (
        <LoadingModal />
      ) : (
        <ArtworBuyStyled>
          <div>
            <div className="artwork__text--container">
              <p className="artwork__text--intro">
                READY TO <span className="artwork__text--colored">RENT</span> OR
              </p>
              <p className="artwork__text--intro">
                <span className="artwork__text--colored">PURCHASE?</span>
              </p>
            </div>
          </div>
          <div className="artwork__list--info">
            <div className="artwork__list" key={id}>
              <div className="artwork__container">
                <NavLink to={`/artwork/details/${id}`}>
                  <img
                    className="artwork__image"
                    src={imagebackup}
                    alt={`painting by ${
                      firstnameUpperCase ? firstnameUpperCase : ""
                    }  ${surnameUpperCase ? surnameUpperCase : ""}`}
                  />
                </NavLink>
                <div className="artwork__text">
                  <h2 className="artwork__text--author">{`${firstnameUpperCase} ${surnameUpperCase}`}</h2>
                  <h3 className="artwork__text--title">{titleUpperCase}</h3>
                  <p className="artwork__text--price">{`${monthlyrateprice}€ /month | ${purchaseprice}€ Purchase`}</p>
                </div>
              </div>
            </div>
            <div className="artwork__rent--container">
              <p className="artwork__text--title">
                {" "}
                <span className="artwork__buy--color">RENTING</span> TOTAL PRICE
              </p>
              <p className="artworkbuy__text">Total Months to Be Rented</p>
              <p className="artworkbuy__text"> (MAX 48 Months)</p>
              <input
                className="artwork__input"
                id="months"
                placeholder="MONTHS"
                value={inputData}
                onChange={changeData}
                required
                autoComplete="off"
                type="number"
                min="1"
                max="48"
              />{" "}
              <p className="artworkbuy__text--important">
                {inputData} Months X {monthlyrateprice} € ={" "}
                <span className="artwork__buy--color">
                  {" "}
                  {`${calculateMonthlyPriceRent()} €`}
                </span>
              </p>
              <p className="artworkbuy__text">
                Shipping Costs (5% of Total Price)
              </p>
              <p className="artworkbuy__text">
                (Free on Purchases Above 200 €)
              </p>
              <p className="artworkbuy__text--important">
                <span className="artwork__buy--color">{`${
                  calculateShippingPriceRent() === 0
                    ? `Free Shipping`
                    : `${calculateShippingPriceRent()} €`
                }`}</span>
              </p>
              <p className="artworkbuy__text--important">
                IVA 10% ={" "}
                <span className="artwork__buy--color">{`${calculateIVARent()} €`}</span>
              </p>
              <p className="artworkbuy__text--important_total">
                TOTAL =
                <span className="artwork__buy--color">
                  {" "}
                  {`${
                    calculateMonthlyPriceRent() +
                    calculateIVARent() +
                    calculateShippingPriceRent()
                  } €`}
                </span>
              </p>
              <button className="artwork_buy__button">RENT</button>
            </div>
            <div className="artwork__purchase--container">
              <p className="artwork__text--title">
                {" "}
                <span className="artwork__buy--color">BUY</span> TOTAL PRICE
              </p>
              <p className="artworkbuy__text--important">
                Purchase Price ={" "}
                <span className="artwork__buy--color"> {purchaseprice} €</span>
              </p>
              <p className="artworkbuy__text">
                Shipping Costs (5% of Total Price)
              </p>
              <p className="artworkbuy__text">
                (Free on Purchases Above 200 €)
              </p>
              <p className="artworkbuy__text--important">
                <span className="artwork__buy--color">{`${
                  calculateShippingPriceBuy() === 0
                    ? `Free Shipping`
                    : `${calculateShippingPriceBuy()} €`
                }`}</span>
              </p>
              <p className="artworkbuy__text--important">
                IVA 10% ={" "}
                <span className="artwork__buy--color">{`${calculateIVABuy()} €`}</span>
              </p>
              <p className="artworkbuy__text--important_total">
                TOTAL ={" "}
                <span className="artwork__buy--color">
                  {" "}
                  {`${
                    Number(purchaseprice) +
                    calculateShippingPriceBuy() +
                    calculateIVABuy()
                  } €`}
                </span>
              </p>
              <button className="artwork_buy__button">BUY</button>
            </div>
          </div>
        </ArtworBuyStyled>
      )}
    </>
  );
};

export default ArtworkBuy;
