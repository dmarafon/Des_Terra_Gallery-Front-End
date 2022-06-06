import { artworkMock } from "../../mocks/artworkMock";
import { IArtworks } from "../../types/artworksInterface";
import userArtworkSlice, {
  deleteArtworkActionCreator,
  loadUserartworksActionCreator,
} from "./userArtworkSlice";

describe("Given a userArtworksReducer", () => {
  describe("When it receives an initial state and a loadUserArtworks action with 3 arts as payload", () => {
    test("Then it should return a new records state with the 3 art objecs and an array of the 3 arts", () => {
      const artworkPayload = artworkMock;

      const initialStatus: IArtworks[] = [];

      const expectedNewState = [...artworkPayload];

      const loadArworkAction = loadUserartworksActionCreator(artworkPayload);

      const newState = userArtworkSlice(initialStatus, loadArworkAction);

      expect(newState).toEqual(expectedNewState);
    });
  });

  describe("When it receives an initial state with 3 records and a delete artwork action with the id of one of he 2 records", () => {
    test("Then it should return a new state with an array without the art of the id in the action payload", () => {
      const initialStatus: IArtworks[] = artworkMock;
      const idPayload = "6294aa4bc78dbede94290077";

      const expectedNewState = [artworkMock[0], artworkMock[1]];

      const deleteArtworkAction = deleteArtworkActionCreator(idPayload);

      const newState = userArtworkSlice(initialStatus, deleteArtworkAction);

      expect(newState).toEqual(expectedNewState);
    });
  });
});
