import React from "react";

interface Props {
   fill?: string;
   className?: string;
}

const IconAdd: React.FC<Props> = ({ className, fill = "#000000" }) => {
   return (
      <svg
         className={className}
         width="27"
         height="27"
         viewBox="0 0 27 24"
         fill="none"
         xmlns="http://www.w3.org/2000/svg"
      >
         <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M13.88 13.64H16.36V12.008H13.88V9.544H12.248V12.008H9.784V13.64H12.248V16.12H13.88V13.64Z"
            fill={fill}
         />

         <rect
            x="1"
            y="1"
            width="25"
            height="22"
            rx="5"
            stroke={fill}
            strokeWidth="2"
         />
      </svg>
   );
};

export default IconAdd;
