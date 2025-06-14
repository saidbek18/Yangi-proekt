import React from "react";

const GiraffeLogo = ({ size = 120, color = "#F3CD5B" }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="100" cy="100" r="90" stroke={color} strokeWidth="20" fill="none" />
      <path
        d="M100 10C145 10 180 50 180 100H100V10Z"
        fill={color}
      />
    </svg>
  );
};

export default GiraffeLogo;
