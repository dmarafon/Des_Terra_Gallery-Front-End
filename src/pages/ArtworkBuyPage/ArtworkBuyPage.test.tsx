import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { artworkMock } from "../../mocks/artworkMock";
import store from "../../redux/store/store";
import ArtworkBuyPage from "./ArtworkBuyPage";

describe("Given a ArtworkBuyPage", () => {
  describe("When it's invoked with 1 art item in the store and an user logged in", () => {
    const loadUserArtworks = {
      type: "singleArtwork/loadSingleArtwork",
      payload: {
        title: "summer paintings part 2",
        medium: "oil on canvas",
        height: "75 inches",
        width: "65 inches",
        style: "figurative",
        image: "uploads\\artimages\\1654969383237summer_painting-part-2.jpeg",
        imagebackup:
          "https://firebasestorage.googleapis.com/v0/b/desterra-181ac.appspot.com/o/1654969383237summer_painting-part-2.jpeg?alt=media&token=4e14e98c-f4d5-4c84-bb27-08845346e103",
        description:
          "I love the summer. Those golden days, when the heat boils the skin and we integrate ourselves into the water. There's something fresh, young and very powerful about the sun, with his energy that bombard us everyday.",
        purchaseprice: "7000",
        monthlyrateprice: "800",
        author: [
          {
            firstname: "julio",
            surname: "reyes",
            id: "62a28f41e2cb25089001eaee",
          },
        ],
        id: "62a4d428e3ffe55db3fa7e18",
      },
    };

    store.dispatch(loadUserArtworks);

    const userLogged = {
      type: "user/login",
      payload: {
        firstName: "jesus",
        email: "jesusperea@gmail.com",
        id: "6295020ad1504446d0c04ce8",
        iat: 1654559841,
      },
      artworkMock,
    };

    store.dispatch(userLogged);
    test("Then it will render 3 social media svg icons, 1 logo image and a 1 image for the arwork, a total of 2 images", async () => {
      const totalImages = 2;

      render(
        <BrowserRouter>
          <Provider store={store}>
            <ArtworkBuyPage />
          </Provider>
        </BrowserRouter>
      );

      const displayImage = screen.getAllByRole("img");

      const elementIconButton1 = screen.getByTestId("icon1");
      const elementIconButton2 = screen.getByTestId("icon2");
      const elementIconButton3 = screen.getByTestId("icon3");

      expect(elementIconButton1).toBeInTheDocument();
      expect(elementIconButton2).toBeInTheDocument();
      expect(elementIconButton3).toBeInTheDocument();

      expect(displayImage).toHaveLength(totalImages);
    });
  });
});
