import React from "react";

interface Props {
   fill?: string;
   className?: string;
}

const IconResetFilter: React.FC<Props> = ({ className, fill = "#313131" }) => {
   return (
      <svg
         className={className}
         width="12"
         height="13"
         viewBox="0 0 12 13"
         fill="none"
         xmlns="http://www.w3.org/2000/svg"
      >
         <g clipPath="url(#clip0_485_14846)">
            <path
               fillRule="evenodd"
               clipRule="evenodd"
               d="M2.50065 2.22201L1.72283 2.99982L5.22302 6.50001L1.72284 10.0002L2.50066 10.778L6.00084 7.27783L9.50101 10.778L10.2788 10.0002L6.77865 6.50001L10.2788 2.99983L9.50102 2.22201L6.00084 5.72219L2.50065 2.22201Z"
               fill={fill}
            />
         </g>
         <defs>
            <clipPath id="clip0_485_14846">
               <rect
                  width="12"
                  height="12"
                  fill="white"
                  transform="translate(0 0.5)"
               />
            </clipPath>
         </defs>
      </svg>
   );
};

export default IconResetFilter;
