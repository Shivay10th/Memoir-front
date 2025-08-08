import { authSuccessHandlers } from "@/redux/auth/auth.handlers";
import { setupServer } from "msw/node";
import { http } from "msw";

/* Although it will work by default; msw does not need preflight handler */
const preflightHandler = [
  http.options("*", () => {
    return new Response(null, {
      status: 204,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE",
        "Access-Control-Allow-Headers": "*",
      },
    });
  }),
];

const mockServer = setupServer(...preflightHandler, ...authSuccessHandlers);

export { mockServer };
