import { render, screen, within } from "@testing-library/react";
import List from ".";
import { expect } from "vitest";

const testUsers = [
  {
    name: "Test",
    age: 12,
    email: "test@test.com",
  },
  {
    name: "Example",
    age: 23,
    email: "example12@example.com",
  },
];

test("A table row is printed on the screen for each user", () => {
  render(<List users={testUsers} />);

  const body = screen.getByTestId("table-body");

  const rows = within(body).getAllByRole("row");

  expect(rows).toHaveLength(testUsers.length);
});

test("Name, age and e-mail information are printed for each user", () => {
  render(<List users={testUsers} />);

  for (const user of testUsers) {
    screen.getByRole("cell", { name: user.name });

    screen.getByRole("cell", { name: user.age });

    screen.getByRole("cell", { name: user.email });
  }
});
