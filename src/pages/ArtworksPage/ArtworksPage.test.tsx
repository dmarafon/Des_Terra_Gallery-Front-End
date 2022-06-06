import { render, screen, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store/store";
import ArtworksPage from "./ArtworksPage";

describe("Given a HomePage", () => {
  describe("When it's invoked with 1 art item in the store", () => {
    const action = {
      type: "artworks/loadArtworks",
      payload: [
        {
          medium: "mixed media in paper",
          height: "100 inches",
          width: "40 inches",
          style: "mixed media",
          description:
            "This work was created during a residence in Chile where I had the pleasure to meet Kamiko. I was very inspired by her art and even more by her perfect stillness while posing to this painting. One thing that I will take from Kamiko is that silence goes to places that sound would never dare to go.",
          author: [
            {
              surname: "segrove",
              firstname: "daniel",
              id: "629d1dce77d93a10ce003a2b",
            },
          ],
          purchaseprice: "400",
          monthlyrateprice: "30",
          image:
            "https://firebasestorage.googleapis.com/v0/b/desterra.appspot.com/o/users%2F629d1dce77d93a10ce003a2b%2FDaniel%20Segrove%20(2).jpeg?alt=media&token=3dbc5fd0-cf71-4f86-a877-3141ad2a70b7",
          title: "sleep",
          id: "6294aa4bc78dbede9429006e",
        },
        {
          title: "i awake",
          medium: "mixed media in paper",
          height: "30 inches",
          width: "20 inches",
          style: "mixed media",
          description:
            "This work was elaborated at the last time that I saw Kamiko. Tragically she died 3 months later, in a traffic accidend in Los Angeles. I added the blue later, given a shade and a mood of sadness - one that I keep with myself until this day",
          author: [
            {
              surname: "segrove",
              firstname: "daniel",
              id: "629d1dce77d93a10ce003a2b",
            },
          ],
          purchaseprice: "250",
          monthlyrateprice: "20",
          image:
            "https://firebasestorage.googleapis.com/v0/b/desterra.appspot.com/o/users%2F629d1dce77d93a10ce003a2b%2FDaniel%20Segrove%20(11).jpeg?alt=media&token=408d2b20-ef4c-41bf-bab8-49117d75833b",
          id: "6294aa4bc78dbede9429006f",
        },
      ],
    };

    test("Then it will render 3 social media svg icons and 1 image and a loading modal", async () => {
      const totalImages = 1;
      render(
        <BrowserRouter>
          <Provider store={store}>
            <ArtworksPage />
          </Provider>
        </BrowserRouter>
      );

      const elementReactPortal = screen.getByTestId("custom-element");

      const displayImage = screen.getAllByRole("img");

      expect(displayImage).toHaveLength(totalImages);

      expect(elementReactPortal).toBeTruthy();

      elementReactPortal.remove();
    });
  });
});
