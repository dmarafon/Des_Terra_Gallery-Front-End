import singleArtworkSlice, {
  loadSingleArtworkActionCreator,
} from "./singleArtworkSlice";

describe("Given a singleArtworkReduces", () => {
  describe("When it receives an initial state and a loadSingleArtwork action with 1 art as payload", () => {
    test("Then it should return a new artwork state with the 1 art objec and an array of the 1 art", () => {
      const initialStatus = {
        title: "",
        medium: "",
        height: "",
        width: "",
        style: "",
        description: "",
        author: [
          {
            surname: "",
            firstname: "",
            id: "",
          },
        ],
        purchaseprice: "",
        monthlyrateprice: "",
        image: "",
        imagebackup: "",
        id: "",
      };

      const artworkPayload = {
        title: "concreto",
        medium: "drawing on paper",
        height: "20 inches",
        width: "17.5 inches",
        style: "drawing",
        description:
          "When I was in Brazil I was inspired but a cultural movement called 'Concretismo'. With its angular and blocked shapes, sorrounded by Neymaier architecture, and a retro-futuristic aesthetic, I tried achieve this piece about a nostalgi future.",
        author: [
          {
            surname: "perea",
            firstname: "jesus",
            id: "1223331",
          },
        ],
        purchaseprice: "120",
        monthlyrateprice: "10",
        image: "https://ibb.co/mht27wM",
        imagebackup: "https://ibb.co/mht27wM",
        id: "6294aa4bc78dbede94290071",
      };

      const expectedNewState = { ...artworkPayload };

      const loadArworkAction = loadSingleArtworkActionCreator(artworkPayload);

      const newState = singleArtworkSlice(initialStatus, loadArworkAction);

      expect(newState).toEqual(expectedNewState);
    });
  });
});
