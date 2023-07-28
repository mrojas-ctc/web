import React from "react";

interface Props {
   fill?: string;
   className?: string;
   style?:any;
}

const IconCheck: React.FC<Props> = ({ className, fill = "#BCBCBC", style }) => {
   return (
      <svg 
         className={className}
         style={style}
         width="15" 
         height="11" 
         viewBox="0 0 15 11" 
         fill="none" 
         xmlns="http://www.w3.org/2000/svg"
      >
         <path 
            d="M1.5 5.5L5.5 9.5L13.5 1.5" 
            stroke={fill}
            strokeWidth="1.5" 
            strokeLinecap="round" 
            strokeLinejoin="round"
         />
      </svg>
   );
};

export default IconCheck;
