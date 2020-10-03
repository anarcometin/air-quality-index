import React from "react";
import { render } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';

import { Label } from "./Label";

describe("Label", () => {
  it("renders a Label", () => {
    const { container, getByText } = render(<Label htmlFor="hi">Hola</Label>);
    expect(getByText(/hola/i)).toBeInTheDocument()
    expect(container.firstChild).toMatchInlineSnapshot(`
    <label
      class="f6 db mb2 ph1 gray ttu tracked"
      for="hi"
    >
      Hola
    </label>
  `)
  });
});
