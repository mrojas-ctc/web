import React from "react";

interface Props {
  fill?: string;
  className?: string;
}

const IconUser: React.FC<Props> = ({ className, fill = "#555555" }) => {
  return (
    <svg
      className={className}
      width="560"
      height="560"
      viewBox="0 0 560 560"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M280 560C434.64 560 560 434.64 560 280C560 125.36 434.64 0 280 0C125.36 0 0 125.36 0 280C0 434.64 125.36 560 280 560ZM280 310C335.228 310 380 265.228 380 210C380 154.772 335.228 110 280 110C224.772 110 180 154.772 180 210C180 265.228 224.772 310 280 310ZM280 532C348.781 532 411.127 504.444 456.598 459.77C428.668 389.599 360.126 340 280 340C199.874 340 131.332 389.599 103.402 459.77C148.873 504.444 211.219 532 280 532Z"
        fill={fill}
      />
    </svg>
  );
};

export default IconUser;
