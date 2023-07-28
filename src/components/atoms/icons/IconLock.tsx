import React from "react";

interface Props {
   fill?: string;
   className?: string;
}

const IconLock: React.FC<Props> = ({ className, fill = "#BCBCBC" }) => {
   return (
      <svg 
         className={className}
         width="20" 
         height="20" 
         viewBox="0 0 20 20" 
         fill="none" 
         xmlns="http://www.w3.org/2000/svg"
      >
         <g id="mdi:lock-outline">
            <path 
               id="Vector" 
               d="M10 14.1666C9.55798 14.1666 9.13406 13.9911 8.8215 13.6785C8.50894 13.3659 8.33334 12.942 8.33334 12.5C8.33334 11.575 9.07501 10.8333 10 10.8333C10.442 10.8333 10.866 11.0089 11.1785 11.3215C11.4911 11.634 11.6667 12.058 11.6667 12.5C11.6667 12.942 11.4911 13.3659 11.1785 13.6785C10.866 13.9911 10.442 14.1666 10 14.1666ZM15 16.6666V8.33331H5.00001V16.6666H15ZM15 6.66665C15.442 6.66665 15.866 6.84224 16.1785 7.1548C16.4911 7.46736 16.6667 7.89129 16.6667 8.33331V16.6666C16.6667 17.1087 16.4911 17.5326 16.1785 17.8452C15.866 18.1577 15.442 18.3333 15 18.3333H5.00001C4.55798 18.3333 4.13406 18.1577 3.8215 17.8452C3.50894 17.5326 3.33334 17.1087 3.33334 16.6666V8.33331C3.33334 7.40831 4.07501 6.66665 5.00001 6.66665H5.83334V4.99998C5.83334 3.89491 6.27233 2.8351 7.05373 2.0537C7.83513 1.2723 8.89494 0.833313 10 0.833313C10.5472 0.833313 11.089 0.941087 11.5945 1.15048C12.1 1.35988 12.5594 1.66679 12.9463 2.0537C13.3332 2.44061 13.6401 2.89994 13.8495 3.40547C14.0589 3.91099 14.1667 4.45281 14.1667 4.99998V6.66665H15ZM10 2.49998C9.33697 2.49998 8.70108 2.76337 8.23224 3.23221C7.7634 3.70105 7.50001 4.33694 7.50001 4.99998V6.66665H12.5V4.99998C12.5 4.33694 12.2366 3.70105 11.7678 3.23221C11.2989 2.76337 10.6631 2.49998 10 2.49998Z" 
               fill={fill}
            />
         </g>
      </svg>
   );
};

export default IconLock;
