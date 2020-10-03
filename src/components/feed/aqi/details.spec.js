import { details, NA, GOOD, MODERATE, UNHEALTHYS, UNHEALTHY, VUNHEALTHY, HAZARDOUS } from './details';
import '@testing-library/jest-dom/extend-expect';
describe("details", () => {
  it("is not applicable", () => {
    expect(details("S")).toEqual(NA);
    expect(details(-0.2)).toEqual(NA);
  })
  it("is good", () => {
    expect(details(0)).toEqual(GOOD);
    expect(details(50.9)).toEqual(GOOD);
  })
  it("is moderate", () => {
    expect(details(51)).toEqual(MODERATE);
    expect(details(100)).toEqual(MODERATE);
  })
  it("is unhealthy for sensitive groups", () => {
    expect(details(101)).toEqual(UNHEALTHYS);
    expect(details(150)).toEqual(UNHEALTHYS);
  })
  it("is unhealthy", () => {
    expect(details(151)).toEqual(UNHEALTHY);
    expect(details(200)).toEqual(UNHEALTHY);
  })
  it("is very unhealthy", () => {
    expect(details(201)).toEqual(VUNHEALTHY);
    expect(details(300)).toEqual(VUNHEALTHY);
  })
  it("is hazadours", () => {
    expect(details(301)).toEqual(HAZARDOUS);
    expect(details(400)).toEqual(HAZARDOUS);
  });
});
