import { artworkMock } from "../../mocks/artworkMock";
import { IArtworks } from "../../types/artworksInterface";
import artworksSlice, { loadartworksActionCreator } from "./artworkSlice";

describe("Given a artworksReducer", () => {
  describe("When it receives an initial state and a loadArtworks action with 3 arts as payload", () => {
    test("Then it should return a new records state with the 3 art objecs and an array of the 3 arts", () => {
      const artworkPayload = artworkMock;

      const initialStatus: IArtworks[] = [];

      const expectedNewState = [...artworkPayload];

      const loadArworkAction = loadartworksActionCreator(artworkPayload);

      const newState = artworksSlice(initialStatus, loadArworkAction);

      expect(newState).toEqual(expectedNewState);
    });
  });
});
