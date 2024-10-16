"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("@emotion/react/jsx-runtime");
const StyledButton_1 = require("./StyledButton");
// NokeButton component
const Button = ({ variant = "primary", colorScheme = "standardBG", // Renamed prop from "theme" to avoid conflict
hovered = false, children, }) => {
    return ((0, jsx_runtime_1.jsx)(StyledButton_1.StyledButton, { variant: variant, colorScheme: colorScheme, hovered: hovered, children: children }));
};
exports.default = Button;
