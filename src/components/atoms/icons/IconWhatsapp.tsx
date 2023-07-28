import React from "react";

interface Props {
   fill?: string;
   className?: string;
}

const IconWhatsapp: React.FC<Props> = ({ className, fill = "#25D366" }) => {
   return (
      <svg
         className={className}
         width="17"
         height="16"
         viewBox="0 0 17 16"
         fill="none"
         xmlns="http://www.w3.org/2000/svg"
      >
         <path
            d="M1.85123 10.9474L1.43018 6.3158L2.27228 4.00001L4.58807 1.89475L7.95649 0.631592L11.1144 1.05264L13.8512 2.94738L15.746 6.3158V9.68422L14.0618 13.0526L10.2723 15.3684L6.90386 14.9474L4.58807 13.8947L1.43018 14.9474L2.27228 12.4211L1.85123 10.9474Z"
            fill="transparent"
         />
         <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4.98726 13.4622L5.22808 13.605C6.23998 14.2055 7.4001 14.5231 8.58321 14.5237H8.5858C12.219 14.5237 15.1761 11.5673 15.1776 7.93387C15.1782 6.17291 14.4932 4.5172 13.2486 3.27166C12.004 2.02621 10.3491 1.33981 8.5883 1.33909C4.95218 1.33909 1.99521 4.29509 1.99376 7.92847C1.99327 9.1736 2.34159 10.3861 3.00154 11.4354L3.1584 11.6847L2.49232 14.1164L4.98726 13.4622ZM0.588135 16L1.71326 11.8917C1.01928 10.6893 0.654186 9.32529 0.654751 7.92798C0.656444 3.55651 4.21409 0 8.5858 0C10.7073 0.000887132 12.6985 0.826567 14.1959 2.32509C15.6932 3.8237 16.5175 5.8158 16.5168 7.93435C16.5149 12.3056 12.9567 15.8627 8.5858 15.8627C8.58547 15.8627 8.58596 15.8627 8.5858 15.8627H8.58241C7.25509 15.8622 5.95085 15.5293 4.7925 14.8975L0.588135 16Z"
            fill={fill}
         />
         <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6.60463 4.61461C6.45615 4.2846 6.29994 4.27798 6.15872 4.27218C6.04315 4.26726 5.91097 4.26758 5.77895 4.26758C5.64677 4.26758 5.43208 4.31718 5.25054 4.51549C5.06884 4.71381 4.55688 5.19318 4.55688 6.16814C4.55688 7.14318 5.26707 8.08532 5.36603 8.21766C5.46515 8.34976 6.73697 10.4145 8.75117 11.2088C10.4252 11.8689 10.7658 11.7376 11.1292 11.7046C11.4925 11.6716 12.3016 11.2254 12.4667 10.7626C12.6319 10.2999 12.6319 9.90329 12.5824 9.82047C12.5329 9.73788 12.4007 9.68828 12.2025 9.58925C12.0043 9.49013 11.03 9.01068 10.8484 8.94455C10.6667 8.87849 10.5346 8.84551 10.4024 9.0439C10.2703 9.24206 9.89081 9.68828 9.77516 9.82047C9.65959 9.95289 9.54394 9.96943 9.34579 9.87031C9.14755 9.77087 8.5093 9.56183 7.75217 8.8868C7.16304 8.36154 6.76536 7.71288 6.64971 7.51449C6.53414 7.31634 6.63737 7.20899 6.73673 7.1102C6.82577 7.0214 6.93496 6.87881 7.03408 6.76316C7.13295 6.64743 7.16594 6.56485 7.23199 6.43267C7.29812 6.30041 7.26506 6.18468 7.21554 6.08556C7.16594 5.98644 6.78084 5.00648 6.60463 4.61461Z"
            fill={fill}
         />
      </svg>
   );
};

export default IconWhatsapp;
