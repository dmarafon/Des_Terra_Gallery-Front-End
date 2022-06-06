import { render, screen } from "@testing-library/react";
import Artwork from "./Artwork";

describe("Given a ArtworkList component", () => {
  describe("When it's invoked and given 1 artwork to render", () => {
    const artwork = {
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
    };

    test("Then it should create 1 list item", () => {
      const totalNumberOfLists = 1;

      render(<Artwork artwork={artwork} />);

      const artworkListElement = screen.getAllByRole("listitem");

      expect(artworkListElement).toHaveLength(totalNumberOfLists);
    });
  });
});
