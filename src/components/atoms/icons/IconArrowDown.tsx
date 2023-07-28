import React from "react";

interface Props {
  fill?: string;
  className?: string;
}

const IconArrowDown: React.FC<Props> = ({ className, fill = "#313131" }) => {
  return (
    <svg
      className={className}
      width="19"
      height="20"
      viewBox="0 0 19 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.743756 2.67636C0.242828 2.18147 0.242828 1.37266 0.743757 0.877767C1.23618 0.391279 2.02827 0.39128 2.52069 0.877768L9.00016 7.2792L15.4796 0.877767C15.9721 0.391279 16.7642 0.391279 17.2566 0.877767C17.7575 1.37266 17.7575 2.18147 17.2566 2.67636L9.00016 10.8333L0.743756 2.67636Z"
        fill={fill}
      />
    </svg>
  );
};

export default IconArrowDown;
