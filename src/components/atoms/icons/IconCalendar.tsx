import React from "react";

interface Props {
   fill?: string;
   className?: string;
}

const IconCalendar: React.FC<Props> = ({ className, fill = "#000000" }) => {
   return (
      <svg 
         className={className}
         width="24" 
         height="24" 
         viewBox="0 0 24 24" 
         fill="none" 
         xmlns="http://www.w3.org/2000/svg"
      >
         <g id="Iconos/Calendario">
            <g id="Group">
               <path 
                  id="Vector" 
                  d="M18 4H6C3.79086 4 2 5.79086 2 8V18C2 20.2091 3.79086 22 6 22H18C20.2091 22 22 20.2091 22 18V8C22 5.79086 20.2091 4 18 4Z" 
                  stroke={fill}
                  stroke-width="2" 
                  stroke-linecap="round" 
                  stroke-linejoin="round"
               />
               <path 
                  id="Vector_2" 
                  d="M2 10H22M8 2V6V2ZM16 2V6V2Z" 
                  stroke={fill}
                  stroke-width="2" 
                  stroke-linecap="round" 
                  stroke-linejoin="round"
               />
            </g>
         </g>
      </svg>
   );
};

export default IconCalendar;
