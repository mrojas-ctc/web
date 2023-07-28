import React from "react";

interface Props {
   fill?: string;
   className?: string;
}

const IconClose: React.FC<Props> = ({ className, fill = "#313131" }) => {
   return (
      <svg
         className={className}
         width="18"
         height="18"
         viewBox="0 0 18 18"
         fill="none"
         xmlns="http://www.w3.org/2000/svg"
      >
         <g clipPath="url(#clip0_1213_613)">
            <path
               fillRule="evenodd"
               clipRule="evenodd"
               d="M14.249 2.58301L15.4157 3.74973L10.1655 9.00001L15.4157 14.2503L14.249 15.417L8.99874 10.1667L3.74849 15.417L2.58176 14.2503L7.83202 9.00001L2.58175 3.74974L3.74847 2.58302L8.99874 7.83329L14.249 2.58301Z"
               fill={fill}
            />
         </g>
         <defs>
            <clipPath id="clip0_1213_613">
               <rect
                  width="18"
                  height="18"
                  fill="white"
                  transform="matrix(-1 0 0 1 18 0)"
               />
            </clipPath>
         </defs>
      </svg>
   );
};

export default IconClose;
