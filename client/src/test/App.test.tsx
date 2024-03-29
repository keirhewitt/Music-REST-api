import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "../App";

describe("<App />", () => {
  test("App mounts properly", () => {
    const wrapper = render(<App />);
    expect(wrapper).toBeTruthy();

    // Get by text using the React testing library
    const text = screen.getByText(/Swordfishtrombones/i);
    expect(text.textContent).toBeTruthy();
  });
});
