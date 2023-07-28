import React from "react";

interface Props {
   fill?: string;
   className?: string;
}

const IconZoom: React.FC<Props> = ({ className, fill = "#FFFFFF" }) => {
   return (
      <svg
         className={className}
         width="22"
         height="15"
         viewBox="0 0 22 15"
         fill="none"
         xmlns="http://www.w3.org/2000/svg"
      >
         <path
            d="M16.5681 4.74468V10.146L21 13.8187V1.17969L16.5681 4.74468ZM1.97988 1.50284H13.1109C14.7318 1.50284 16.4604 2.8006 16.4604 4.52924V12.3055C16.4604 12.5917 16.3471 12.8662 16.1452 13.069C15.9434 13.2719 15.6694 13.3865 15.3832 13.3879H3.92908C2.0876 13.3879 1.01041 11.6592 1.01041 10.0383V2.58004C0.989836 2.44304 0.99984 2.30319 1.0397 2.17052C1.07956 2.03785 1.1483 1.91565 1.24097 1.81268C1.33364 1.70971 1.44795 1.62853 1.57571 1.57496C1.70346 1.5214 1.84148 1.49677 1.97988 1.50284Z"
            stroke={fill}
            strokeWidth="1.5"
            strokeLinejoin="round"
         />
      </svg>
   );
};

export default IconZoom;
