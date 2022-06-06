import { artworkMock } from "../../mocks/artworkMock";
import { IArtworks } from "../../types/artworksInterface";
import artworksSlice, {
  deleteArtworkActionCreator,
  loadartworksActionCreator,
} from "./artworkSlice";

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

describe("When it receives an initial state with 3 records and a delete record action with the id of one of he 2 records", () => {
  test("Then it should return a new records state with an array without the record of the id in the action payloas", () => {
    const initialStatus: IArtworks[] = artworkMock;
    const idPayload = "6294aa4bc78dbede94290077";

    const expectedNewState = [artworkMock[0], artworkMock[1]];

    const deleteArtworkAction = deleteArtworkActionCreator(idPayload);

    const newState = artworksSlice(initialStatus, deleteArtworkAction);

    expect(newState).toEqual(expectedNewState);
  });
});
