import React from "react";

interface Props {
   fill?: string;
   className?: string;
}

const IconCheckItemMenu: React.FC<Props> = ({
   className,
   fill = "#555555",
}) => {
   return (
      <svg
         className={className}
         width="12"
         height="9"
         viewBox="0 0 12 9"
         fill="none"
         xmlns="http://www.w3.org/2000/svg"
      >
         <path
            d="M3.575 6.175L9.475 0.275C9.65833 0.0916663 9.89167 0 10.175 0C10.4583 0 10.6917 0.0916663 10.875 0.275C11.0583 0.458333 11.15 0.691666 11.15 0.974999C11.15 1.25833 11.0583 1.49167 10.875 1.675L4.275 8.275C4.075 8.475 3.84167 8.575 3.575 8.575C3.30833 8.575 3.075 8.475 2.875 8.275L0.275 5.675C0.0916663 5.49167 0 5.25833 0 4.975C0 4.69167 0.0916663 4.45833 0.275 4.275C0.458333 4.09167 0.691667 4 0.975 4C1.25833 4 1.49167 4.09167 1.675 4.275L3.575 6.175Z"
            fill={fill}
         />
      </svg>
   );
};

export default IconCheckItemMenu;
