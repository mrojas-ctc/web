import React from "react";

interface Props {
   fill?: string;
   className?: string;
}

const IconArrowPagination: React.FC<Props> = ({
   className,
   fill = "#313131",
}) => {
   return (
      <svg
         className={className}
         width="24"
         height="24"
         viewBox="0 0 24 24"
         fill="none"
         xmlns="http://www.w3.org/2000/svg"
      >
         <g clipPath="url(#clip0_1202_6149)">
            <path
               d="M9.99984 6L8.58984 7.41L13.1698 12L8.58984 16.59L9.99984 18L15.9998 12L9.99984 6Z"
               fill={fill}
            />
         </g>
         <defs>
            <clipPath id="clip0_1202_6149">
               <rect width="24" height="24" fill="white" />
            </clipPath>
         </defs>
      </svg>
   );
};

export default IconArrowPagination;
