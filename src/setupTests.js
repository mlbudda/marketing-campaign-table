// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom/extend-expect";

// TODO: Remove this once https://github.com/nickcolley/jest-axe/issues/147 is fixed.
const { getComputedStyle } = window;
window.getComputedStyle = (elt) => getComputedStyle(elt);
