import React from "react";

interface Props {
  fill?: string;
  className?: string;
}

const IconDots: React.FC<Props> = ({ className, fill = "#555555" }) => {
  return (
    <svg
      className={className}
      width="2"
      height="12"
      viewBox="0 0 2 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="1" cy="1" r="1" fill={fill} />
      <circle cx="1" cy="6" r="1" fill={fill} />
      <circle cx="1" cy="11" r="1" fill={fill} />
    </svg>
  );
};

export default IconDots;
