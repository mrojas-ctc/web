import React from "react";

interface Props {
   fill?: string;
   className?: string;
   style?:any;
   onClick?:any;
}

const IconPencilFilled: React.FC<Props> = ({ className, fill = "#000000", style, onClick }) => {
   return (
      <div style={{ width: "auto", cursor:"pointer" }} onClick={onClick}>
         <svg 
            className={className}
            style={style}
            width="12" 
            height="12" 
            viewBox="0 0 12 12" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
         >
            <path 
               d="M8.20334 0.636203C8.62409 0.225194 9.18993 -0.00338702 9.77814 3.79403e-05C10.3663 0.0034629 10.9295 0.238618 11.3454 0.654498C11.7614 1.07038 11.9965 1.63345 12 2.22158C12.0034 2.80972 11.7748 3.37549 11.3637 3.79619L10.8612 4.29869L7.70077 1.13871L8.20334 0.636203ZM7.16966 1.6705L1.16066 7.67875C0.914771 7.9249 0.744095 8.23598 0.66861 8.5756L0.00903944 11.5425C-0.00475592 11.6043 -0.00273384 11.6685 0.0149182 11.7292C0.0325702 11.79 0.0652802 11.8453 0.110013 11.89C0.154747 11.9347 0.210054 11.9674 0.270804 11.9851C0.331553 12.0027 0.395777 12.0048 0.457517 11.991L3.4068 11.3352C3.75795 11.2571 4.07953 11.0804 4.33381 10.826L10.33 4.83049L7.16966 1.6705Z" 
               fill={fill}
            />
         </svg>
      </div>
   );
};

export default IconPencilFilled;
