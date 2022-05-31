import userReducer, {
  loginActionCreator,
  logoutActionCreator,
} from "./userSlice";

describe("Given a userSlice reducer with a loginActionCreator function", () => {
  describe("When it receives a user and a login action", () => {
    test("Then it should return the same user with the property logged as 'true'", () => {
      const initialUser = {
        id: "1234",
        email: "test@test.com",
        firstName: "Julio",
        logged: false,
      };
      const expectedUser = {
        id: "1234",
        firstName: "Julio",
        email: "test@test.com",
        logged: true,
      };

      const action = loginActionCreator(initialUser);
      const loggedUser = userReducer(initialUser, action);

      expect(loggedUser).toEqual(expectedUser);
    });
  });
  describe("When it receives a logout action", () => {
    test("Then it should set the user propety logged to 'false'", () => {
      const loggedUser = {
        id: "1234",
        firstName: "Julio",
        email: "test@test.com",
        logged: true,
      };

      const expectedUserStatus = false;

      const logoutAction = logoutActionCreator();
      const loggedoutUser = userReducer(loggedUser, logoutAction);

      expect(loggedoutUser.logged).toEqual(expectedUserStatus);
    });
  });
});
