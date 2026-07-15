import { render, screen, waitFor } from "@testing-library/react";
import axios from "axios";
import App from "./App";

jest.mock("axios");

test("renders mocked GitHub user", async () => {
  axios.get.mockResolvedValue({
    data: {
      login: "octocat",
      followers: 100,
      avatar_url: "https://github.com/images/error/octocat_happy.gif",
    },
  });

  render(<App />);

  await waitFor(() => {
    expect(screen.getByText("octocat")).toBeInTheDocument();
  });
});