import { createTheme } from "@mui/material";

const PRIMARY_COLORS = {
  DARK_PRIMARY: "#5D4037",
  LIGHT_PRIMARY: "#D7CCC8",
  PRIMARY: "#795548",
  WHITE: "#FFFFFF",
  ACCENT: "#9E9E9E",
  PRIMARY_TEXT: "#212121",
  SECONDARY_TEXT: "#757575",
  DIVIDER: "#BDBDBD",
};

const FEEDBACK_COLORS = {
  ERROR_LIGHT: "#FFCDD2",
  ERROR_MAIN: "#D32F2F",
  ERROR_DARK: "#B71C1C",

  WARNING_LIGHT: "#FFE0B2",
  WARNING_MAIN: "#F57C00",
  WARNING_DARK: "#E65100",

  INFO_LIGHT: "#B3E5FC",
  INFO_MAIN: "#0277BD",
  INFO_DARK: "#014F86",

  SUCCESS_LIGHT: "#C8E6C9",
  SUCCESS_MAIN: "#388E3C",
  SUCCESS_DARK: "#1B5E20",
};

export const NEUTRAL_COLORS = {
  GREY_50: "#FAFAFA",
  GREY_100: "#F5F5F5",
  GREY_200: "#EEEEEE",
  GREY_300: "#E0E0E0",
  GREY_400: "#BDBDBD",
  GREY_500: "#9E9E9E",
  GREY_600: "#757575",
  GREY_700: "#616161",
  GREY_800: "#424242",
  GREY_900: "#212121",
};

export const COLORS = {
  ...PRIMARY_COLORS,
  ...FEEDBACK_COLORS,
  ...NEUTRAL_COLORS,
  BACKGROUND_DEFAULT: "#f6f6f6",
};

export const theme = createTheme({
  palette: {
    primary: {
      dark: COLORS.DARK_PRIMARY,
      light: COLORS.LIGHT_PRIMARY,
      main: COLORS.PRIMARY,
      contrastText: COLORS.WHITE,
    },
    secondary: {
      main: COLORS.ACCENT,
      contrastText: COLORS.PRIMARY_TEXT,
    },
    error: {
      light: FEEDBACK_COLORS.ERROR_LIGHT,
      main: FEEDBACK_COLORS.ERROR_MAIN,
      dark: FEEDBACK_COLORS.ERROR_DARK,
      contrastText: PRIMARY_COLORS.WHITE,
    },
    warning: {
      light: FEEDBACK_COLORS.WARNING_LIGHT,
      main: FEEDBACK_COLORS.WARNING_MAIN,
      dark: FEEDBACK_COLORS.WARNING_DARK,
      contrastText: PRIMARY_COLORS.WHITE,
    },
    info: {
      light: FEEDBACK_COLORS.INFO_LIGHT,
      main: FEEDBACK_COLORS.INFO_MAIN,
      dark: FEEDBACK_COLORS.INFO_DARK,
      contrastText: PRIMARY_COLORS.WHITE,
    },
    success: {
      light: FEEDBACK_COLORS.SUCCESS_LIGHT,
      main: FEEDBACK_COLORS.SUCCESS_MAIN,
      dark: FEEDBACK_COLORS.SUCCESS_DARK,
      contrastText: PRIMARY_COLORS.WHITE,
    },
    background: {
      default: COLORS.BACKGROUND_DEFAULT,
      paper: COLORS.WHITE,
    },
    grey: {
      "50": NEUTRAL_COLORS.GREY_50,
      "100": NEUTRAL_COLORS.GREY_100,
      "200": NEUTRAL_COLORS.GREY_200,
      "300": NEUTRAL_COLORS.GREY_300,
      "400": NEUTRAL_COLORS.GREY_400,
      "500": NEUTRAL_COLORS.GREY_500,
      "600": NEUTRAL_COLORS.GREY_600,
      "700": NEUTRAL_COLORS.GREY_700,
      "800": NEUTRAL_COLORS.GREY_800,
      "900": NEUTRAL_COLORS.GREY_900,
    },
  },
  typography: {
    fontFamily: "inter, sans-serif",
  },
  shape: {
    borderRadius: 8,
  },
});
