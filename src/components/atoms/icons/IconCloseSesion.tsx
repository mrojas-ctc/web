import React from "react";

interface Props {
   fill?: string;
   className?: string;
}

const IconCloseSesion: React.FC<Props> = ({ className, fill = "#313131" }) => {
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
            d="M8.00033 0.222006L8.77814 0.999824L5.27796 4.50001L8.77813 8.00019L8.00032 8.778L4.50014 5.27783L0.99997 8.778L0.222152 8.00018L3.72232 4.50001L0.222141 0.99983L0.999959 0.222013L4.50014 3.72219L8.00033 0.222006Z" 
            fill={fill}/>
      </svg>
   );
};

export default IconCloseSesion;
