import { render, screen, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { artworkMock } from "../../mocks/artworkMock";
import store from "../../redux/store/store";
import { loadUserArtworks } from "../../redux/thunks/artworkThunks";
import MyArtPage from "./MyArtPage";

describe("Given a MyArtPage", () => {
  describe("When it's invoked with 3 art item in the store", () => {
    test("Then it will render 3 social media svg icons, 1 logo image and 6 svg icon buttons images, 2 for each artwork", async () => {
      await waitFor(() => {
        const loadUserArtworks = {
          type: "userArtworks/loadUserArtworks",
          payload: artworkMock,
        };

        store.dispatch(loadUserArtworks);
      });

      const totalSocialMediaImages = 4;

      const totalDeleteButtons = 3;

      const totalEditButtons = 3;

      render(
        <BrowserRouter>
          <Provider store={store}>
            <MyArtPage />
          </Provider>
        </BrowserRouter>
      );

      const editButtons = screen.getAllByTestId("myartwork-test1");

      const deleteButtons = screen.getAllByTestId("myartwork-test2");

      const displayImage = screen.getAllByRole("img");

      expect(displayImage).toHaveLength(totalSocialMediaImages);

      expect(deleteButtons).toHaveLength(totalDeleteButtons);

      expect(editButtons).toHaveLength(totalEditButtons);
    });
  });

  describe("When it's invoked with a user logged in", () => {
    test("Then it will dispatch the action to load the user artworks", async () => {
      await waitFor(() => {
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
      });

      const userId = "1234";

      render(
        <BrowserRouter>
          <Provider store={store}>
            <MyArtPage />
          </Provider>
        </BrowserRouter>
      );

      const dispatch = jest.fn();

      await waitFor(() => {
        const actionDispatch = loadUserArtworks(userId);
        actionDispatch(dispatch);
      });

      expect(dispatch).toHaveBeenCalled();
    });
  });
});
