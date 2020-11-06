import React from "react";
import App from "./App";
import userEvent from "@testing-library/user-event";
import { fireEvent, render, waitFor } from "@testing-library/react";

describe("Manipulating Todo component", () => {
  test("Adding new todo", async () => {
    let todoContent = "this is test todo";

    const { getByText, getByTestId, getByPlaceholderText } = render(<App />);

    userEvent.type(getByPlaceholderText("Please enter the note"), todoContent);

    fireEvent.submit(getByTestId("input-form"));

    await waitFor(() => expect(getByText(todoContent)).toBeDefined());
  });

  test("Removing todo", async () => {});

  test("Marking todo as checked", async () => {});
});
