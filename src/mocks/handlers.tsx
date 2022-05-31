import { rest } from "msw";

export const mockToken = "token";

export const handlers = [
  rest.post(`${process.env.REACT_APP_API_URL}users/login`, (req, res, ctx) =>
    res(ctx.status(200), ctx.json({ token: mockToken }))
  ),
];
