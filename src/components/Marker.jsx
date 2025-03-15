// This code defines a React component called Marker that renders an SVG element and using this file we can make adjusts to the svg before displaying it on the screen.

export const Marker = ({ fill }) => {
    return (
      <svg
        width="8"
        height="22"
        viewBox="0 0 8 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2.5 0H0.5V4V18V22H2.5V16.25L7.63991 11.7526C8.09524 11.3542 8.09524 10.6458 7.63991 10.2474L2.5 5.75V0Z"
          fill={fill || "#2EF2FF"}
        />
      </svg>
    );
  };