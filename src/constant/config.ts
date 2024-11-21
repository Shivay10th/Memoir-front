const config: Record<
  string,
  {
    apiUrl: string;
  }
> = {
  development: {
    apiUrl: "http://localhost:3000",
  },
};

const environment = process.env.NODE_ENV ?? "development";

export const apiConfig = config[environment];
