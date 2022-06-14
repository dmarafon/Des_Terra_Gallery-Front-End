import paginationSlice, {
  countPaginationActionCreator,
} from "./paginationSlice";

describe("Given a paginationReducar", () => {
  describe("When it receives an initial state and a countPagination action with 1 pagination information as payload", () => {
    test("Then it should return a new artwork state with the the total page and current information", () => {
      const initialStatus = {
        totalPage: 0,
        currentPage: "",
      };

      const artworkPayload = {
        totalPage: 3,
        currentPage: "1",
      };

      const expectedNewState = { ...artworkPayload };

      const loadArworkAction = countPaginationActionCreator(artworkPayload);

      const newState = paginationSlice(initialStatus, loadArworkAction);

      expect(newState).toEqual(expectedNewState);
    });
  });
});
