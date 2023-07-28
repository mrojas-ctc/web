import React from "react";

interface Props {
   fill?: string;
   className?: string;
}

const IconAddWithoutOutline: React.FC<Props> = ({
   className,
   fill = "#000000",
}) => {
   return (
      <svg
         className={className}
         width="18"
         height="18"
         viewBox="0 0 18 18"
         fill="none"
         xmlns="http://www.w3.org/2000/svg"
      >
         <rect
            x="8.15845"
            y="0.574219"
            width="1.68527"
            height="16.8527"
            rx="0.842634"
            fill={fill}
         />
         <rect
            x="17.4275"
            y="8.1582"
            width="1.68527"
            height="16.8527"
            rx="0.842634"
            transform="rotate(90 17.4275 8.1582)"
            fill={fill}
         />
      </svg>
   );
};

export default IconAddWithoutOutline;
