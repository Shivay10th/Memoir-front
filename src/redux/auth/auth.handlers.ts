import { http, HttpResponse } from "msw";
import { AUTH_API_PATHS } from "./auth.api";
import {
  loginPayLoadMock,
  loginSuccess,
  unAuthorizedMock,
} from "./__mocks__/auth.mock";
import { UserCredentials } from "./auth.types";

export const authSuccessHandlers = [
  http.post<never, UserCredentials>(
    `${AUTH_API_PATHS.LOGIN}`,
    async ({ request }) => {
      const body = await request.json();

      if (
        body.email === loginPayLoadMock.email &&
        body.password === loginPayLoadMock.password
      )
        return HttpResponse.json(loginSuccess);

      return HttpResponse.json(unAuthorizedMock, { status: 401 });
    }
  ),
];
