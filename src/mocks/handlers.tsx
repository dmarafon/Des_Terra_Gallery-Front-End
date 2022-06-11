import { rest } from "msw";
import { artworkMock } from "./artworkMock";

export const mockToken = "token";

export const handlers = [
  rest.post(`${process.env.REACT_APP_API_URL}users/login`, (req, res, ctx) =>
    res(ctx.status(200))
  ),
  rest.post(`${process.env.REACT_APP_API_URL}users/register`, (req, res, ctx) =>
    res(ctx.status(200), ctx.json({ token: mockToken }))
  ),
  rest.post(
    `${process.env.REACT_APP_API_URL}artworks/addart`,
    (req, res, ctx) => res(ctx.status(200), ctx.json({ token: mockToken }))
  ),

  rest.put(
    `${process.env.REACT_APP_API_URL}artworks/editart/${artworkMock[0].id}`,
    (req, res, ctx) => res(ctx.status(200), ctx.json({ token: mockToken }))
  ),

  rest.get(
    `${process.env.REACT_APP_API_URL}artworks/single/1234`,
    (req, res, ctx) => res(ctx.status(200))
  ),

  rest.get(`${process.env.REACT_APP_API_URL}artworks/myart`, (req, res, ctx) =>
    res(ctx.status(200))
  ),

  rest.delete(
    `${process.env.REACT_APP_API_URL}artworks/1234`,
    (req, res, ctx) => res(ctx.status(200), ctx.json({ token: mockToken }))
  ),

  rest.delete(
    `${process.env.REACT_APP_API_URL}artworks/6294aa4bc78dbede9429006e`,
    (req, res, ctx) => res(ctx.status(200), ctx.json({ token: mockToken }))
  ),
];
