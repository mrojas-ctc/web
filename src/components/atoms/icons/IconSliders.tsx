import React from "react";

interface Props {
  fill?: string;
  className?: string;
}

const IconSliders: React.FC<Props> = ({ className, fill = "#555555" }) => {
  return (
    <svg
      className={className}
      width="23"
      height="22"
      viewBox="0 0 23 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="1.325"
        y="2.325"
        width="20.35"
        height="17.4555"
        rx="2.675"
        stroke={fill}
        strokeWidth="1.35"
      />
      <path
        d="M2 17.8535L7.07918 13.6992C7.25037 13.5592 7.47311 13.48 7.7053 13.4765C7.93749 13.4731 8.16305 13.5456 8.33935 13.6805L15.775 18.2773M12.45 16.1582L14.7172 14.1353C14.8789 13.9909 15.0936 13.9034 15.3217 13.8889C15.5499 13.8745 15.7763 13.9339 15.9593 14.0564L19.575 16.582M16.725 10.6484V5.5625M16.725 5.5625L14.35 7.68164M16.725 5.5625L19.1 7.68164"
        stroke={fill}
        strokeWidth="1.35"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default IconSliders;
