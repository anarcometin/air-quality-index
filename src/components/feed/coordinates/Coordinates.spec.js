import React from "react";
import { render } from "@testing-library/react";
import { Coordinates } from "./Coordinates";
import '@testing-library/jest-dom/extend-expect'

describe("Coordinates", () => {
  it("does not render coordinates", () => {
    const { container } = render(<Coordinates feed={null} />);
    expect(container.children).toHaveLength(0);
  });

  it("renders coordinates", () => {
    const { getByText } = render(<Coordinates feed={{ city: { name: 'Melbourne', geo: [1, 2] } }} />);
    expect(getByText(/1.000000, 2.000000/i)).toBeInTheDocument();
  });
});
