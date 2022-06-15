import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { artworkMock } from "../../mocks/artworkMock";
import store from "../../redux/store/store";
import ArtworkBuy from "./ArtworkBuy";

const mockDispatch = jest.fn();

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => mockDispatch,
}));

describe("Given a ArtworkBuy component", () => {
  describe("When it's invoked navigating to the page with the art id, loading 1 art item in the store and an user logged in and the user types on the spinbutton up to 48", () => {
    const loadUserArtworks = {
      title: "summer paintings part 2",
      medium: "oil on canvas",
      height: "75 inches",
      width: "65 inches",
      style: "figurative",
      image: "uploads\\artimages\\1654969383237summer_painting-part-2.jpeg",
      imagebackup:
        "https://firebasestorage.googleapis.com/v0/b/desterra-181ac.appspot.com/o/1654969383237summer_painting-part-2.jpeg?alt=media&token=4e14e98c-f4d5-4c84-bb27-08845346e103",
      description:
        "I love the summer. Those golden days, when the heat boils the skin and we integrate ourselves into the water. There's something fresh, young and very powerful about the sun, with his energy that bombard us everyday.",
      purchaseprice: "7000",
      monthlyrateprice: "10",
      author: [
        {
          firstname: "julio",
          surname: "reyes",
          id: "62a28f41e2cb25089001eaee",
        },
      ],
      id: "62a4d428e3ffe55db3fa7e18",
    };

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
    test("Then it will change the state and it will reneder the number 48 typed by the user", async () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <ArtworkBuy artwork={loadUserArtworks} />
          </Provider>
        </BrowserRouter>
      );

      await waitFor(() => {
        const finisheLoading = {
          type: "ui/finishedLoading",
        };
        store.dispatch(finisheLoading);
      });

      const spinButton = screen.getByRole("spinbutton");
      userEvent.type(spinButton, "48");

      const expectedScreenValue = screen.getByDisplayValue(/48/i);

      expect(expectedScreenValue).toBeInTheDocument();
    });
  });

  describe("When it's invoked navigating to the page with the art id, loading 1 art item in the store and an user logged in and the user does not types on the spinner button", () => {
    const loadUserArtworks = {
      title: "summer paintings part 2",
      medium: "oil on canvas",
      height: "75 inches",
      width: "65 inches",
      style: "figurative",
      image: "uploads\\artimages\\1654969383237summer_painting-part-2.jpeg",
      imagebackup:
        "https://firebasestorage.googleapis.com/v0/b/desterra-181ac.appspot.com/o/1654969383237summer_painting-part-2.jpeg?alt=media&token=4e14e98c-f4d5-4c84-bb27-08845346e103",
      description:
        "I love the summer. Those golden days, when the heat boils the skin and we integrate ourselves into the water. There's something fresh, young and very powerful about the sun, with his energy that bombard us everyday.",
      purchaseprice: "100",
      monthlyrateprice: "10",
      author: [
        {
          firstname: "julio",
          surname: "reyes",
          id: "62a28f41e2cb25089001eaee",
        },
      ],
      id: "62a4d428e3ffe55db3fa7e18",
    };

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
    test("Then it will change the state and it will render the number 2 typed by the user", async () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <ArtworkBuy artwork={loadUserArtworks} />
          </Provider>
        </BrowserRouter>
      );

      await waitFor(() => {
        const finisheLoading = {
          type: "ui/finishedLoading",
        };
        store.dispatch(finisheLoading);
      });

      const spinButton = screen.getByRole("spinbutton");
      userEvent.type(spinButton, "2");

      const expectedScreenValue = screen.getByDisplayValue(/1/i);

      const expectedFreeShipText = screen.getByText(/10€/i);

      expect(expectedScreenValue).toBeInTheDocument();
      expect(expectedFreeShipText).toBeInTheDocument();
    });
  });

  describe("When it's invoked navigating to the page with the art id, loading 1 art item in the store and the user clicks on the rent button", () => {
    const loadUserArtworks = {
      title: "summer paintings part 2",
      medium: "oil on canvas",
      height: "75 inches",
      width: "65 inches",
      style: "figurative",
      image: "uploads\\artimages\\1654969383237summer_painting-part-2.jpeg",
      imagebackup:
        "https://firebasestorage.googleapis.com/v0/b/desterra-181ac.appspot.com/o/1654969383237summer_painting-part-2.jpeg?alt=media&token=4e14e98c-f4d5-4c84-bb27-08845346e103",
      description:
        "I love the summer. Those golden days, when the heat boils the skin and we integrate ourselves into the water. There's something fresh, young and very powerful about the sun, with his energy that bombard us everyday.",
      purchaseprice: "100",
      monthlyrateprice: "10",
      author: [
        {
          firstname: "julio",
          surname: "reyes",
          id: "62a28f41e2cb25089001eaee",
        },
      ],
      id: "62a4d428e3ffe55db3fa7e18",
    };

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

    test("Then it will dispatch the action that will open a modal informing about renting", async () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <ArtworkBuy artwork={loadUserArtworks} />
          </Provider>
        </BrowserRouter>
      );

      await waitFor(() => {
        const finisheLoading = {
          type: "ui/finishedLoading",
        };
        store.dispatch(finisheLoading);
      });

      const rentButton = screen.getByRole("button", {
        name: /rent/i,
      });
      userEvent.click(rentButton);

      expect(mockDispatch).toHaveBeenCalled();
    });
  });

  describe("When it's invoked navigating to the page with the art id, loading 1 art item in the store and the user clicks on the buy button", () => {
    const loadUserArtworks = {
      title: "summer paintings part 2",
      medium: "oil on canvas",
      height: "75 inches",
      width: "65 inches",
      style: "figurative",
      image: "uploads\\artimages\\1654969383237summer_painting-part-2.jpeg",
      imagebackup:
        "https://firebasestorage.googleapis.com/v0/b/desterra-181ac.appspot.com/o/1654969383237summer_painting-part-2.jpeg?alt=media&token=4e14e98c-f4d5-4c84-bb27-08845346e103",
      description:
        "I love the summer. Those golden days, when the heat boils the skin and we integrate ourselves into the water. There's something fresh, young and very powerful about the sun, with his energy that bombard us everyday.",
      purchaseprice: "100",
      monthlyrateprice: "10",
      author: [
        {
          firstname: "julio",
          surname: "reyes",
          id: "62a28f41e2cb25089001eaee",
        },
      ],
      id: "62a4d428e3ffe55db3fa7e18",
    };

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

    test("Then it will dispatch the action that will open a modal informing about renting", async () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <ArtworkBuy artwork={loadUserArtworks} />
          </Provider>
        </BrowserRouter>
      );

      await waitFor(() => {
        const finisheLoading = {
          type: "ui/finishedLoading",
        };
        store.dispatch(finisheLoading);
      });

      const rentButton = screen.getByRole("button", {
        name: /buy/i,
      });
      userEvent.click(rentButton);

      expect(mockDispatch).toHaveBeenCalled();
    });
  });

  describe("When it's invoked navigating to the page with the art id, loading 1 art item in the store and the user clicks on the buy button once again", () => {
    const loadUserArtworks = {
      title: "summer paintings part 2",
      medium: "oil on canvas",
      height: "75 inches",
      width: "65 inches",
      style: "figurative",
      image: "uploads\\artimages\\1654969383237summer_painting-part-2.jpeg",
      imagebackup:
        "https://firebasestorage.googleapis.com/v0/b/desterra-181ac.appspot.com/o/1654969383237summer_painting-part-2.jpeg?alt=media&token=4e14e98c-f4d5-4c84-bb27-08845346e103",
      description:
        "I love the summer. Those golden days, when the heat boils the skin and we integrate ourselves into the water. There's something fresh, young and very powerful about the sun, with his energy that bombard us everyday.",
      purchaseprice: "100",
      monthlyrateprice: "10",
      author: [
        {
          firstname: "julio",
          surname: "reyes",
          id: "62a28f41e2cb25089001eaee",
        },
      ],
      id: "62a4d428e3ffe55db3fa7e18",
    };

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

    test("Then it will dispatch the action that will open a modal informing about renting and if the users clicks in the 'X' button of the modal, another action will be dispatched closing the modal", async () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <ArtworkBuy artwork={loadUserArtworks} />
          </Provider>
        </BrowserRouter>
      );

      await waitFor(() => {
        const finisheLoading = {
          type: "ui/finishedLoading",
        };
        store.dispatch(finisheLoading);
      });

      const rentButton = screen.getByRole("button", {
        name: /buy/i,
      });
      userEvent.click(rentButton);

      await waitFor(() => {
        const finisheLoading = {
          type: "ui/apiResponse",
          payload: "Buy",
        };
        store.dispatch(finisheLoading);
      });

      expect(mockDispatch).toHaveBeenCalled();

      const closeModal = screen.getByRole("button", {
        name: /×/i,
      });

      userEvent.click(closeModal);

      expect(mockDispatch).toHaveBeenCalled();
    });
  });

  describe("When it's invoked navigating to the page with the art id, loading 1 art item in the store and the user clicks on the rent button another time", () => {
    const loadUserArtworks = {
      title: "summer paintings part 2",
      medium: "oil on canvas",
      height: "75 inches",
      width: "65 inches",
      style: "figurative",
      image: "uploads\\artimages\\1654969383237summer_painting-part-2.jpeg",
      imagebackup:
        "https://firebasestorage.googleapis.com/v0/b/desterra-181ac.appspot.com/o/1654969383237summer_painting-part-2.jpeg?alt=media&token=4e14e98c-f4d5-4c84-bb27-08845346e103",
      description:
        "I love the summer. Those golden days, when the heat boils the skin and we integrate ourselves into the water. There's something fresh, young and very powerful about the sun, with his energy that bombard us everyday.",
      purchaseprice: "100",
      monthlyrateprice: "10",
      author: [
        {
          firstname: "julio",
          surname: "reyes",
          id: "62a28f41e2cb25089001eaee",
        },
      ],
      id: "62a4d428e3ffe55db3fa7e18",
    };

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

    test("Then it will dispatch the action that will open a modal informing about renting and if the users clicks in the 'X' button of the modal, another action will be dispatched closing the modal", async () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <ArtworkBuy artwork={loadUserArtworks} />
          </Provider>
        </BrowserRouter>
      );

      await waitFor(() => {
        const finisheLoading = {
          type: "ui/finishedLoading",
        };
        store.dispatch(finisheLoading);
      });

      const rentButton = screen.getByRole("button", {
        name: /rent/i,
      });
      userEvent.click(rentButton);

      await waitFor(() => {
        const finisheLoading = {
          type: "ui/apiResponse",
          payload: "Rent",
        };
        store.dispatch(finisheLoading);
      });

      expect(mockDispatch).toHaveBeenCalled();

      const closeModal = screen.getByRole("button", {
        name: /×/i,
      });

      userEvent.click(closeModal);

      expect(mockDispatch).toHaveBeenCalled();
    });
  });
});
