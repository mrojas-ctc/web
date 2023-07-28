import React from "react";

interface Props {
  fill?: string;
  className?: string;
}

const IconEditPencil: React.FC<Props> = ({ className, fill = "#313131" }) => {
  return (
    <svg
      className={className}
      width="10"
      height="10"
      viewBox="0 0 10 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.15 3.525L6.025 1.425L6.725 0.725C6.91667 0.533333 7.15217 0.4375 7.4315 0.4375C7.7105 0.4375 7.94583 0.533333 8.1375 0.725L8.8375 1.425C9.02917 1.61667 9.12917 1.848 9.1375 2.119C9.14583 2.38967 9.05417 2.62083 8.8625 2.8125L8.15 3.525ZM7.425 4.2625L2.125 9.5625H0V7.4375L5.3 2.1375L7.425 4.2625Z"
        fill={fill}
      />
    </svg>
  );
};

export default IconEditPencil;
