import React from "react";

interface Props {
   fill?: string;
   className?: string;
}

const IconEnroll: React.FC<Props> = ({ className, fill = "#313131" }) => {
   return (
      <svg
         className={className}
         width="22"
         height="20"
         viewBox="0 0 22 20"
         fill="none"
         xmlns="http://www.w3.org/2000/svg"
      >
         <path
            d="M21 17V7C21 6.46957 20.7893 5.96086 20.4142 5.58579C20.0391 5.21071 19.5304 5 19 5H12.236C11.8645 4.99999 11.5004 4.89651 11.1844 4.70116C10.8684 4.50581 10.6131 4.22631 10.447 3.894L9.553 2.106C9.38687 1.77353 9.13138 1.49394 8.8152 1.29858C8.49902 1.10322 8.13466 0.999827 7.763 1H3C2.46957 1 1.96086 1.21071 1.58579 1.58579C1.21071 1.96086 1 2.46957 1 3V17C1 17.5304 1.21071 18.0391 1.58579 18.4142C1.96086 18.7893 2.46957 19 3 19H19C19.5304 19 20.0391 18.7893 20.4142 18.4142C20.7893 18.0391 21 17.5304 21 17Z"
            stroke={fill}
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
         />
         <path
            d="M11 9V12M11 12V15M11 12H14M11 12H8"
            stroke={fill}
            strokeWidth="1.7"
            strokeLinecap="round"
         />
      </svg>
   );
};

export default IconEnroll;
