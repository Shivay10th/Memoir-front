import { render, screen, userEvent, store } from "test-utils";
import Login from "../Login";
import { loginPayLoadMock } from "@/redux/auth/__mocks__/auth.mock";
import { showToast } from "@/redux";
import { LOGIN_FORM_ERRORS, LOGIN_MESSAGES } from "../Login.data";
import { UserCredentials } from "@/redux/auth";
import { MESSAGES } from "@/constant";

const loginLabels = {
  email: "Email",
  password: "Password",
};

const getLoginScreenElements = async () => {
  const email: HTMLInputElement = await screen.findByLabelText(
    loginLabels.email
  );

  const password: HTMLInputElement = await screen.findByLabelText(
    loginLabels.password
  );

  const loginButton = await screen.findByRole("button", { name: /login/i });

  return {
    email,
    password,
    loginButton,
  };
};

const performLoginAction = async (credentials: UserCredentials) => {
  const { email, password, loginButton } = await getLoginScreenElements();

  await userEvent.type(email, credentials.email);
  await userEvent.type(password, credentials.password);

  expect(email).toHaveValue(credentials.email);
  expect(password).toHaveValue(credentials.password);

  await userEvent.click(loginButton);
};

describe("Login Screen", () => {
  test("Login screen should render with two Email and Password input box", async () => {
    render(<Login />);
    expect(await screen.findByLabelText(loginLabels.email)).toBeDefined();
    expect(await screen.findByLabelText(loginLabels.password)).toBeDefined();
  });

  test("On Success to redirect from Login screen", async () => {
    const storeDispatchSpy = jest.spyOn(store, "dispatch");
    render(<Login />);

    await performLoginAction({
      email: loginPayLoadMock.email,
      password: loginPayLoadMock.password,
    });

    expect(storeDispatchSpy).toHaveBeenCalledWith(
      showToast({
        open: true,
        severity: "success",
        message: LOGIN_MESSAGES.SUCCESS,
      })
    );
  });
  test("On failure shouldn't redirect to anywhere", async () => {
    const storeDispatchSpy = jest.spyOn(store, "dispatch");

    render(<Login />);

    await performLoginAction({
      email: loginPayLoadMock.email,
      password: "Wrong Password",
    });

    expect(storeDispatchSpy).toHaveBeenCalledWith(
      showToast({
        open: true,
        severity: "error",
        message: MESSAGES.DEFAULT_SERVER_ERROR,
      })
    );
  });

  test("Should show inline errors when fields have invalid values", async () => {
    render(<Login />);
    const { email, password } = await getLoginScreenElements();

    await userEvent.click(email);
    await userEvent.tab();

    expect(
      screen.queryByText(LOGIN_FORM_ERRORS.REQUIRED_EMAIL)
    ).toBeInTheDocument();

    await userEvent.type(email, "Invalid Email");

    expect(
      screen.queryByText(LOGIN_FORM_ERRORS.VALID_EMAIL)
    ).toBeInTheDocument();

    await userEvent.click(password);
    await userEvent.tab();

    expect(
      screen.queryByText(LOGIN_FORM_ERRORS.REQUIRED_PASSWORD)
    ).toBeInTheDocument();

    await userEvent.type(password, "1234");
    expect(
      screen.queryByText(LOGIN_FORM_ERRORS.REQUIRED_PASSWORD)
    ).not.toBeInTheDocument();

    expect(
      screen.queryByText(LOGIN_FORM_ERRORS.MINIMUM_PASSWORD_LENGTH)
    ).toBeInTheDocument();
  });
});
