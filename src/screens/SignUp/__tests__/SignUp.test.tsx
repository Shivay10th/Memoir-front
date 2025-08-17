import { render, screen, userEvent, waitFor } from "test-utils";
import { SignUp, SIGNUP_LABELS } from "..";

describe("Sign Up", () => {
  test("Signup screen should render with three input box.( Email, Username and Password )", async () => {
    render(<SignUp />);

    expect(await screen.findByLabelText(SIGNUP_LABELS.EMAIL)).toBeDefined();
    expect(await screen.findByLabelText(SIGNUP_LABELS.USERNAME)).toBeDefined();
    expect(await screen.findByLabelText(SIGNUP_LABELS.PASSWORD)).toBeDefined();
  });

  test("Should show inline error if username provided is taken", async () => {
    render(<SignUp />);

    const username: HTMLInputElement = await screen.findByLabelText(
      SIGNUP_LABELS.USERNAME
    );

    await userEvent.type(username, "takenName");
    expect(
      screen.queryByText("Username is already taken")
    ).not.toBeInTheDocument();

    await waitFor(() => {
      expect(screen.getByText("Username is already taken")).toBeInTheDocument();
    });
  });
});
