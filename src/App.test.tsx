import React from "react";
import App from "./App";
import ListItem from "./components/ListItem";
import { screen } from "@testing-library/dom";
import ReactTestUtils from "react-dom/test-utils";
import userEvent from "@testing-library/user-event";
import {
  fireEvent,
  getAllByTestId,
  render,
  waitFor,
} from "@testing-library/react";

describe("Manipulating Todo component", () => {
  test("Adding new todo", async () => {
    let todoContent = "this is test todo";

    const { getByText, getByTestId, getByPlaceholderText } = render(<App />);

    userEvent.type(getByPlaceholderText("Please enter the note"), todoContent);

    fireEvent.submit(getByTestId("input-form"));

    await waitFor(() => expect(getByText(todoContent)).toBeDefined());
  });

  test("Removing current todo", async () => {
    const { getByText, getByTestId } = render(<App />);

    const component = ReactTestUtils.renderIntoDocument(<ListItem />);

    let todo = getByText("Roses are red");

    // let btn =

    screen.debug(todo);
  });
});
