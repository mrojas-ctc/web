import React from "react";

interface Props {
  top?: string;
  bottom?: string;
  className?: string;
}

const IconSort: React.FC<Props> = ({ className, top = "#555555", bottom = "#555555" }) => {
  return (
    <svg
      className={className}
      width="8"
      height="15"
      viewBox="0 0 8 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 0L0 4L0.94 4.94L4 1.88667L7.06 4.94L8 4L4 0Z"
        fill={top}
      />
      <path
        d="M7.06 10L4 13.0533L0.94 10L0 10.94L4 14.94L8 10.94L7.06 10Z"
        fill={bottom}
      />
    </svg>
  );
};

export default IconSort;
