import { useState } from "react";
import { NavLink } from "react-router-dom";
import { IArtworks } from "../../types/artworksInterface";
import Button from "../Button/Button";
import { useAppSelector } from "../hooks";
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
  const logged = useAppSelector((state) => state.user.logged);
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
          <p>Total Months to Be Rented</p>
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
          />
          <p>Renting Total Price</p>
          <p>
            {inputData} Months X {monthlyrateprice} € ={" "}
            {`${calculateMonthlyPriceRent()} €`}
          </p>
          <p>Shipping Costs (5% of Total Price)</p>
          <p>(Free on Purchases Above 200 €)</p>
          <p>{`${
            calculateShippingPriceRent() === 0
              ? `Free Shipping`
              : `${calculateShippingPriceRent()} €`
          }`}</p>
          <p>IVA 10% = {`${calculateIVARent()} €`}</p>
          <p>
            TOTAL{" "}
            {`${
              calculateMonthlyPriceRent() +
              calculateIVARent() +
              calculateShippingPriceRent()
            } €`}
          </p>
          <button className="artwork_buy__button">RENT</button>
        </div>
        <div className="artwork__purchase--container">
          <p>Purchase Total Price</p>
          <p>{purchaseprice} €</p>
          <p>Shipping Costs (5% of Total Price)</p>
          <p>(Free on Purchases Above 200 €)</p>
          <p>{`${
            calculateShippingPriceBuy() === 0
              ? `Free Shipping`
              : `${calculateShippingPriceBuy()} €`
          }`}</p>
          <p>IVA 10% = {`${calculateIVABuy()} €`}</p>
          <p>
            TOTAL{" "}
            {`${
              Number(purchaseprice) +
              calculateShippingPriceBuy() +
              calculateIVABuy()
            } €`}
          </p>
          <button className="artwork_buy__button">BUY</button>
        </div>
      </div>
    </ArtworBuyStyled>
  );
};

export default ArtworkBuy;
