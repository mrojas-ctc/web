import React from "react";

interface Props {
   fill?: string;
   className?: string;
}

const IconAddSesion: React.FC<Props> = ({ className, fill}) => {
   return (
      <svg
         className={className}
         width="9"
         height="9"
         viewBox="0 0 9 9"
         fill="none"
         xmlns="http://www.w3.org/2000/svg"
      >
         <path 
            fillRule="evenodd" 
            clipRule="evenodd" 
            d="M4.5 3.93403e-07C4.77614 3.69261e-07 5 0.223858 5 0.500001L5 4L8.5 4C8.77614 4 9 4.22386 9 4.5C9 4.77614 8.77614 5 8.5 5L5 5L5 8.5C5 8.77614 4.77614 9 4.5 9C4.22386 9 4 8.77614 4 8.5L4 5L0.5 5C0.223858 5 4.17544e-07 4.77614 3.93402e-07 4.5C3.69261e-07 4.22386 0.223858 4 0.5 4L4 4L4 0.500001C4 0.223858 4.22386 4.17544e-07 4.5 3.93403e-07Z" 
            fill={fill}
         />
      </svg>
   );
};

export default IconAddSesion;
