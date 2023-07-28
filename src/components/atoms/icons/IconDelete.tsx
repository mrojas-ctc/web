import React from "react";

interface Props {
   fill?: string;
   className?: string;
}

const IconDelete: React.FC<Props> = ({ className, fill = "#F74949" }) => {
   return (
      <svg
         className={className}
         width="20"
         height="20"
         viewBox="0 0 20 20"
         fill="none"
         xmlns="http://www.w3.org/2000/svg"
      >
         <g clipPath="url(#clip0_1627_10866)">
            <path
               fillRule="evenodd"
               clipRule="evenodd"
               d="M1.6665 5.00008H18.3332M8.33317 9.16675V13.3334M11.6665 9.16675V13.3334M3.33317 5.00008H16.6665L15.3498 16.8501C15.3047 17.2579 15.1107 17.6347 14.805 17.9084C14.4994 18.1821 14.1035 18.3334 13.6932 18.3334H6.3065C5.8962 18.3334 5.5003 18.1821 5.19463 17.9084C4.88895 17.6347 4.69497 17.2579 4.64984 16.8501L3.33317 5.00008ZM6.12067 2.62258C6.25546 2.33672 6.46876 2.09508 6.73567 1.92584C7.00259 1.7566 7.31212 1.66674 7.62817 1.66675H12.3715C12.6877 1.66659 12.9974 1.75637 13.2645 1.92562C13.5316 2.09486 13.745 2.33659 13.8798 2.62258L14.9998 5.00008H4.99984L6.12067 2.62258V2.62258Z"
               stroke={fill}
               strokeWidth="2"
               strokeLinecap="round"
               strokeLinejoin="round"
            />
         </g>
         <defs>
            <clipPath id="clip0_1627_10866">
               <rect width="20" height="20" fill="white" />
            </clipPath>
         </defs>
      </svg>
   );
};

export default IconDelete;
