import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";
import { expect } from "vitest";

test("should first", async () => {
  const user = userEvent.setup();

  render(<App />);

  const nameInput = screen.getByLabelText("Name:");
  const ageInput = screen.getByLabelText("Age:");
  const emailInput = screen.getByLabelText("Email:");
  const addUserButton = screen.getByRole("button", {
    name: "Add User",
  });

  await user.type(nameInput, "Mehmet");
  await user.type(ageInput, "30");
  await user.type(emailInput, "example@example.com");

  await user.click(addUserButton);

  screen.getByRole("cell", { name: "Mehmet" });
  screen.getByRole("cell", { name: "30" });
  screen.getByRole("cell", { name: "example@example.com" });
});
