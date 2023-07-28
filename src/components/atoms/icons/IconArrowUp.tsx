import React from "react";

interface Props {
  fill?: string;
  className?: string;
}

const IconArrowUp: React.FC<Props> = ({ className, fill = "#313131" }) => {
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
        d="M17.2562 8.32364C17.7572 8.81853 17.7572 9.62734 17.2562 10.1222C16.7638 10.6087 15.9717 10.6087 15.4793 10.1222L8.99984 3.7208L2.52037 10.1222C2.02795 10.6087 1.23585 10.6087 0.743431 10.1222C0.242504 9.62734 0.242502 8.81853 0.743431 8.32364L8.99984 0.166666L17.2562 8.32364Z"
        fill={fill}
      />
    </svg>
  );
};

export default IconArrowUp;
