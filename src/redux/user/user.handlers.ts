import { http, HttpResponse } from "msw";
import { USER_API_PATHS } from "./user.api";
import { useNameNotAvailable, userNameAvailable } from "./__mocks__/user.mock";

export const userHandlers = [
  http.get<{ username: string }>(
    `${USER_API_PATHS.USER_NAME_AVAILABILITY}`,
    ({ params }) => {
      if (params.username === "test")
        return HttpResponse.json(userNameAvailable);
      else return HttpResponse.json(useNameNotAvailable);
    }
  ),
];
