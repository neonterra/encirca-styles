"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StyledButton = exports.ButtonStyles = void 0;
const react_1 = require("@emotion/react");
const styled_1 = __importDefault(require("@emotion/styled"));
// Define the styles based on variant, colorScheme, and state
const ButtonStyles = (theme) => ({
    // Primary button styles
    primary: {
        standardBG: (isHovered) => (0, react_1.css) `
      background-color: ${isHovered
            ? theme.colors.secondaryDark
            : theme.colors.secondary};
      color: ${theme.colors.white};
      border: none;

      &:hover {
        background-color: ${theme.colors.secondaryDark};
      }
    `,
        primaryBG: (isHovered) => (0, react_1.css) `
      background-color: ${isHovered
            ? theme.colors.secondary
            : theme.colors.white};
      color: ${isHovered ? theme.colors.white : theme.colors.primary};
      border: ${isHovered ? `2px solid ${theme.colors.white}` : "none"};
      box-sizing: border-box;

      &:hover {
        background-color: ${theme.colors.secondary};
        border: 2px solid ${theme.colors.white};
        color: ${theme.colors.white};
      }
    `,
        secondaryBG: (isHovered) => (0, react_1.css) `
      background-color: ${isHovered ? theme.colors.primary : theme.colors.white};
      color: ${isHovered ? theme.colors.white : theme.colors.secondary};
      border: ${isHovered ? `2px solid ${theme.colors.white}` : "none"};

      &:hover {
        background-color: ${theme.colors.primary};
        border: 2px solid ${theme.colors.white};
        color: ${theme.colors.white};
      }
    `,
    },
    // Secondary button styles
    secondary: {
        standardBG: (isHovered) => (0, react_1.css) `
      background-color: ${isHovered
            ? theme.colors.secondaryLight
            : theme.colors.white};
      color: ${theme.colors.secondary};
      border: 2px solid ${theme.colors.secondary};

      &:hover {
        background-color: ${theme.colors.secondaryLight};
      }
    `,
        primaryBG: (isHovered) => (0, react_1.css) `
      background-color: ${isHovered
            ? theme.colors.white
            : theme.colors.secondary};
      color: ${isHovered ? theme.colors.primary : theme.colors.white};
      border: ${isHovered ? "none" : `2px solid ${theme.colors.white}`};

      &:hover {
        background-color: ${theme.colors.white};
        color: ${theme.colors.primary};
      }
    `,
        secondaryBG: (isHovered) => (0, react_1.css) `
      background-color: ${isHovered ? theme.colors.white : theme.colors.primary};
      color: ${isHovered ? theme.colors.secondary : theme.colors.white};
      border: ${isHovered ? "none" : `2px solid ${theme.colors.white}`};

      &:hover {
        background-color: ${theme.colors.white};
        color: ${theme.colors.secondary};
      }
    `,
    },
    // Primary-alt button styles
    "primary-alt": {
        standardBG: (isHovered) => (0, react_1.css) `
      background-color: ${isHovered
            ? theme.colors.primaryDark
            : theme.colors.primary};
      color: ${theme.colors.white};
      border: none;

      &:hover {
        background-color: ${theme.colors.primaryDark};
      }
    `,
        primaryBG: (isHovered) => (0, react_1.css) `
      background-color: ${isHovered ? theme.colors.primary : theme.colors.white};
      color: ${isHovered ? theme.colors.white : theme.colors.primary};
      border: ${isHovered ? `2px solid ${theme.colors.white}` : "none"};

      &:hover {
        background-color: ${theme.colors.primaryDark};
      }
    `,
        secondaryBG: (isHovered) => (0, react_1.css) `
      background-color: ${isHovered ? theme.colors.white : theme.colors.secondary};
      color: ${isHovered ? theme.colors.secondary : theme.colors.primary};
      border: ${isHovered ? `2px solid ${theme.colors.secondary}` : "none"};

      &:hover {
        background-color: ${theme.colors.secondary};
        border: 2px solid ${theme.colors.primary};
        color: ${theme.colors.primary};
      }
    `,
    },
    // Secondary-alt button styles
    "secondary-alt": {
        standardBG: (isHovered) => (0, react_1.css) `
      background-color: ${isHovered
            ? theme.colors.primaryLight
            : theme.colors.white};
      color: ${theme.colors.primary};
      border: 2px solid ${theme.colors.primary};

      &:hover {
        background-color: ${theme.colors.primaryLight};
      }
    `,
        primaryBG: (isHovered) => (0, react_1.css) `
      background-color: ${isHovered ? theme.colors.primary : theme.colors.white};
      color: ${isHovered ? theme.colors.white : theme.colors.primary};
      border: ${isHovered ? `2px solid ${theme.colors.primary}` : "none"};
    `,
        secondaryBG: (isHovered) => (0, react_1.css) `
      background-color: ${isHovered ? theme.colors.primary : theme.colors.white};
      color: ${isHovered ? theme.colors.white : theme.colors.primary};
      border: 2px solid ${theme.colors.primary};
    `,
    },
    // Text button styles
    text: {
        standardBG: (isHovered) => (0, react_1.css) `
      background-color: ${isHovered ? theme.colors.gray : "transparent"};
      color: ${theme.colors.secondary};
      border: none;

      &:hover {
        background-color: ${theme.colors.gray};
      }
    `,
        primaryBG: (isHovered) => (0, react_1.css) `
      background-color: ${isHovered ? theme.colors.white : "transparent"};
      color: ${isHovered ? theme.colors.primary : theme.colors.white};
      border: none;

      &:hover {
        background-color: ${theme.colors.white};
        color: ${theme.colors.primary};
      }
    `,
        secondaryBG: (isHovered) => (0, react_1.css) `
      background-color: ${isHovered ? theme.colors.white : "transparent"};
      color: ${isHovered ? theme.colors.secondary : theme.colors.white};
      border: none;

      &:hover {
        background-color: ${theme.colors.white};
        color: ${theme.colors.secondary};
      }
    `,
    },
    // Text-alt button styles
    "text-alt": {
        standardBG: (isHovered) => (0, react_1.css) `
      background-color: ${isHovered ? theme.colors.gray : "transparent"};
      color: ${theme.colors.primary};
      border: none;

      &:hover {
        background-color: ${theme.colors.gray};
      }
    `,
        primaryBG: (isHovered) => (0, react_1.css) `
      background-color: ${isHovered ? theme.colors.primaryLight : "transparent"};
      color: ${theme.colors.primary};
    `,
        secondaryBG: (isHovered) => (0, react_1.css) `
      background-color: ${isHovered ? theme.colors.primary : "transparent"};
      color: ${theme.colors.primary};
    `,
    },
});
exports.ButtonStyles = ButtonStyles;
// StyledButton component
exports.StyledButton = styled_1.default.button `
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 25px;
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease;
  box-sizing: border-box;
  font-weight: 600;

  ${(props) => {
    const theme = (0, react_1.useTheme)(); // Ensure proper type for useTheme
    const variant = props.variant || "primary"; // Default to 'primary' if undefined
    const colorScheme = props.colorScheme || "standardBG"; // Default to 'standardBG' if undefined
    // Return the correct button style based on variant and colorScheme
    return (0, exports.ButtonStyles)(theme)[variant][colorScheme](props.hovered || false);
}}
`;
