import React from "react";
import { render } from "@testing-library/react";
import { Link } from "./Link";

describe("Link", () => {
  it("shows the link", () => {
    const { getByText } = render(<Link url={"http://google.com"} />);
    const link = getByText(/google.com/i);
    expect(link).not.toBeNull();
  });
});
