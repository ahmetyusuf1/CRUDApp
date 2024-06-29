import { render, screen } from "@testing-library/react";
import Form from ".";
import { expect, vi } from "vitest";
import userEvent from "@testing-library/user-event";

test("should first", async () => {
  const mockFn = vi.fn();

  const user = userEvent.setup();

  render(<Form addUser={mockFn} />);

  const nameInput = screen.getByLabelText("Name:");
  const ageInput = screen.getByLabelText("Age:");
  const emailInput = screen.getByLabelText("Email:");
  const addUserButton = screen.getByRole("button");

  await user.type(nameInput, "Ahmet");

  await user.type(ageInput, "23");

  await user.type(emailInput, "test@test.com");

  await user.click(addUserButton);

  expect(mockFn).toHaveBeenCalledWith({
    name: "Ahmet",
    age: "23",
    email: "test@test.com",
  });

  expect(nameInput.value).toBe("");
  expect(ageInput.value).toBe("");
  expect(emailInput.value).toBe("");
});
