import React from "react";

interface Props {
   fill?: string;
   className?: string;
}

const IconArrowCollapse: React.FC<Props> = ({
   className,
   fill = "#313131",
}) => {
   return (
      <svg
         className={className}
         width="20"
         height="20"
         viewBox="0 0 20 20"
         fill="none"
         xmlns="http://www.w3.org/2000/svg"
      >
         <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M18.2562 12.3236C18.7572 12.8185 18.7572 13.6273 18.2562 14.1222C17.7638 14.6087 16.9717 14.6087 16.4793 14.1222L9.99984 7.7208L3.52037 14.1222C3.02795 14.6087 2.23585 14.6087 1.74343 14.1222C1.2425 13.6273 1.2425 12.8185 1.74343 12.3236L9.99984 4.16667L18.2562 12.3236Z"
            fill={fill}
         />
      </svg>
   );
};

export default IconArrowCollapse;
