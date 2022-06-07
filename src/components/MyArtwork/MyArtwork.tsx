import { deleteArtworkThunk } from "../../redux/thunks/artworkThunks";
import { IArtworks } from "../../types/artworksInterface";
import { useAppDispatch, useAppSelector } from "../hooks";
import MyArtworkStyled from "./MyArtworkStyled";

const MyArtwork = ({
  artwork: { id, title, image, purchaseprice, monthlyrateprice },
}: {
  artwork: IArtworks;
}) => {
  const logged = useAppSelector((state) => state.user.logged);

  const dispatch = useAppDispatch();

  const deleteArt = () => {
    dispatch(deleteArtworkThunk(id));
  };

  const titleUpperCase = title.toUpperCase();

  return (
    <li className="artwork__list" key={id}>
      <MyArtworkStyled>
        <div className="artwork__container">
          <img
            className="artwork__image"
            src={image}
            alt={`a painting called ${title}`}
          />
          <div className="artwork__text">
            <h3 className="artwork__text--title">{titleUpperCase}</h3>
            <p className="artwork__text--price">{`${monthlyrateprice}€ /month | ${purchaseprice}€ Purchase`}</p>
          </div>
          <div className="artwork__icons--container">
            <div className="artwork__icons--first">
              <svg
                data-testid="myartwork-test"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path d="M490.3 40.4C512.2 62.27 512.2 97.73 490.3 119.6L460.3 149.7L362.3 51.72L392.4 21.66C414.3-.2135 449.7-.2135 471.6 21.66L490.3 40.4zM172.4 241.7L339.7 74.34L437.7 172.3L270.3 339.6C264.2 345.8 256.7 350.4 248.4 353.2L159.6 382.8C150.1 385.6 141.5 383.4 135 376.1C128.6 370.5 126.4 361 129.2 352.4L158.8 263.6C161.6 255.3 166.2 247.8 172.4 241.7V241.7zM192 63.1C209.7 63.1 224 78.33 224 95.1C224 113.7 209.7 127.1 192 127.1H96C78.33 127.1 64 142.3 64 159.1V416C64 433.7 78.33 448 96 448H352C369.7 448 384 433.7 384 416V319.1C384 302.3 398.3 287.1 416 287.1C433.7 287.1 448 302.3 448 319.1V416C448 469 405 512 352 512H96C42.98 512 0 469 0 416V159.1C0 106.1 42.98 63.1 96 63.1H192z" />
              </svg>
            </div>
            <div className="artwork__icons--second">
              <svg
                data-testid="myartwork-test"
                onClick={deleteArt}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path d="M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM175 208.1L222.1 255.1L175 303C165.7 312.4 165.7 327.6 175 336.1C184.4 346.3 199.6 346.3 208.1 336.1L255.1 289.9L303 336.1C312.4 346.3 327.6 346.3 336.1 336.1C346.3 327.6 346.3 312.4 336.1 303L289.9 255.1L336.1 208.1C346.3 199.6 346.3 184.4 336.1 175C327.6 165.7 312.4 165.7 303 175L255.1 222.1L208.1 175C199.6 165.7 184.4 165.7 175 175C165.7 184.4 165.7 199.6 175 208.1V208.1z" />
              </svg>
            </div>
          </div>
        </div>
      </MyArtworkStyled>
    </li>
  );
};

export default MyArtwork;
