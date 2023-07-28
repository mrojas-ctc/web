import React from "react";
import colors from "../Colors";

interface Props {
   fill?: string;
   className?: string;
}

const IconAlerSuccess: React.FC<Props> = ({
   className,
   fill = colors.colorAlertSuccess,
}) => {
   return (
      <svg
         className={className}
         width="36"
         height="36"
         viewBox="0 0 36 36"
         fill="none"
         xmlns="http://www.w3.org/2000/svg"
      >
         <path
            d="M18 34.875C27.3198 34.875 34.875 27.3198 34.875 18C34.875 8.68019 27.3198 1.125 18 1.125C8.68019 1.125 1.125 8.68019 1.125 18C1.125 27.3198 8.68019 34.875 18 34.875Z"
            fill="#0BC79B"
         />
         <path
            d="M25.875 7.875L14.0625 20.025L10.125 15.975L6.1875 20.025L14.0625 28.125L29.8125 11.925L25.875 7.875Z"
            fill="white"
         />
      </svg>
   );
};

export default IconAlerSuccess;
