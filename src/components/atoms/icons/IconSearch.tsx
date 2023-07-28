import React from "react";

interface Props {
   fill?: string;
   className?: string;
}

const IconSearch: React.FC<Props> = ({ className, fill = "#313131" }) => {
   return (
      <svg
         className={className}
         width="12"
         height="12"
         viewBox="0 0 12 12"
         fill="none"
         xmlns="http://www.w3.org/2000/svg"
      >
         <g clipPath="url(#clip0_1001_6135)">
            <path
               d="M8.80668 7.75661C9.53291 6.76563 9.85817 5.53698 9.71741 4.31647C9.57665 3.09597 8.98024 1.97361 8.04751 1.17396C7.11477 0.374301 5.9145 -0.0436868 4.68681 0.00361806C3.45913 0.0509229 2.29457 0.560032 1.42614 1.42909C0.557699 2.29815 0.049423 3.46307 0.00299662 4.69079C-0.0434297 5.9185 0.375417 7.11848 1.17574 8.05064C1.97606 8.98281 3.09884 9.57841 4.31945 9.7183C5.54006 9.85819 6.76847 9.53204 7.75893 8.80511H7.75818C7.78068 8.83511 7.80469 8.86361 7.83169 8.89136L10.7192 11.7789C10.8598 11.9196 11.0506 11.9987 11.2495 11.9988C11.4485 11.9988 11.6393 11.9199 11.7801 11.7792C11.9208 11.6386 11.9999 11.4478 12 11.2489C12 11.0499 11.9211 10.8591 11.7804 10.7184L8.89294 7.83086C8.86612 7.80372 8.83729 7.77865 8.80668 7.75586V7.75661ZM9.00018 4.87361C9.00018 5.41531 8.89349 5.95171 8.68619 6.45218C8.47889 6.95265 8.17504 7.40738 7.792 7.79043C7.40896 8.17347 6.95422 8.47731 6.45375 8.68461C5.95329 8.89191 5.41689 8.99861 4.87519 8.99861C4.33348 8.99861 3.79708 8.89191 3.29662 8.68461C2.79615 8.47731 2.34141 8.17347 1.95837 7.79043C1.57533 7.40738 1.27148 6.95265 1.06418 6.45218C0.856881 5.95171 0.750185 5.41531 0.750185 4.87361C0.750185 3.77959 1.18478 2.73038 1.95837 1.9568C2.73196 1.18321 3.78117 0.748611 4.87519 0.748611C5.9692 0.748611 7.01841 1.18321 7.792 1.9568C8.56559 2.73038 9.00018 3.77959 9.00018 4.87361V4.87361Z"
               fill={fill}
            />
         </g>
         <defs>
            <clipPath id="clip0_1001_6135">
               <rect width="12" height="12" fill="white" />
            </clipPath>
         </defs>
      </svg>
   );
};

export default IconSearch;
