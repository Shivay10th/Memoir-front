import { render } from "test-utils";
import Login from "../Login";

describe("Login Screen", () => {
  test("login screen should appear", () => {
    render(<Login />);
  });
});
