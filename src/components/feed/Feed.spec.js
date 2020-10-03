import React from "react";
import { render } from "@testing-library/react";
import { Feed } from "./Feed";
import '@testing-library/jest-dom/extend-expect';

describe("Feed", () => {
  it("does not render a feed", () => {
    const { container } = render(<Feed feed={null} />);
    expect(container.children).toHaveLength(0);
  });
});
