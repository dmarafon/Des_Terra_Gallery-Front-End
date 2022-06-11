import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store/store";

import MyArtwork from "./MyArtwork";

const mockDispatch = jest.fn();

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => mockDispatch,
}));

describe("Given a MyArtwork component", () => {
  describe("When it's invoked with a user logged in and the user clicks in the delete button, and confirms the deletion", () => {
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
      imagebackup: "",
      id: "6294aa4bc78dbede9429006e",
    };
    test("Then it will dispatch the action to delete and to load again the users artworks", async () => {
      const userId = "1234";

      render(
        <BrowserRouter>
          <Provider store={store}>
            <MyArtwork artwork={artwork} />
          </Provider>
        </BrowserRouter>
      );

      const deleteButton = screen.getByTestId("myartwork-test2");

      userEvent.click(deleteButton);

      await waitFor(() => {
        const uIaction = {
          type: "ui/apiResponse",
          payload: "Delete Confirmation",
        };

        store.dispatch(uIaction);
      });

      const confirmDelete = screen.getByTestId("delete-button");

      userEvent.click(confirmDelete);

      await waitFor(() => {
        const uIaction = {
          type: "ui/cleanApiResponse",
        };

        store.dispatch(uIaction);
      });

      expect(mockDispatch).toHaveBeenCalled();
    });
  });
});
