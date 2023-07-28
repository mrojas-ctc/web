import React from "react";

interface Props {
  fill?: string;
  className?: string;
}

const IconRooms: React.FC<Props> = ({ className, fill = "#555555" }) => {
  return (
    <svg
      className={className}
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.99951 3H18.9995V15H2.99951V3Z"
        stroke={fill}
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M1 3H21M6.5 20L11 15L15.5 20M7 6H15M7 9H13M7 12H10"
        stroke={fill}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default IconRooms;
