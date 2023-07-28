import React from "react";

interface Props {
   fill?: string;
   className?: string;
   style?:any;
}

const IconAddSymbol: React.FC<Props> = ({ className, fill, style}) => {
   return (
      <svg 
         className={className}
         style={style}
         width="13" 
         height="12" 
         viewBox="0 0 13 12" 
         fill="none" 
         xmlns="http://www.w3.org/2000/svg"
      >
         <path 
            fillRule="evenodd" 
            clipRule="evenodd" 
            d="M6.5 5.24537e-07C7.05228 4.76254e-07 7.5 0.447715 7.5 1L7.5 5L11.5 5C12.0523 5 12.5 5.44772 12.5 6C12.5 6.55228 12.0523 7 11.5 7L7.5 7L7.5 11C7.5 11.5523 7.05229 12 6.5 12C5.94772 12 5.5 11.5523 5.5 11L5.5 7L1.5 7C0.947716 7 0.500001 6.55229 0.500001 6C0.5 5.44772 0.947715 5 1.5 5L5.5 5L5.5 1C5.5 0.447716 5.94771 5.72819e-07 6.5 5.24537e-07Z" 
            fill={fill}
            />
      </svg>
   );
};

export default IconAddSymbol;
