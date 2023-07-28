import React from "react";

interface Props {
   fill?: string;
   className?: string;
}

const IconClock: React.FC<Props> = ({ className, fill = "#313131" }) => {
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
            d="M11 21C16.5228 21 21 16.5228 21 11C21 5.47715 16.5228 1 11 1C5.47715 1 1 5.47715 1 11C1 16.5228 5.47715 21 11 21Z"
            stroke="#313131"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
         />
         <path
            d="M14 15L11.586 12.586C11.2109 12.211 11.0001 11.7024 11 11.172V5"
            stroke={fill}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
         />
      </svg>
   );
};

export default IconClock;
