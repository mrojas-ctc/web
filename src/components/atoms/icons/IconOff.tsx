import React from "react";

interface Props {
   fill?: string;
   className?: string;
}

const IconOff: React.FC<Props> = ({ className, fill = "#D84949" }) => {
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
            d="M15.2727 8.88595H13.7273V3.69859C13.7273 2.06132 12.425 0.734375 10.8182 0.734375H5.18182C3.575 0.734375 2.27273 2.06132 2.27273 3.69859V8.88595H0.727273C0.325 8.88595 0 9.21711 0 9.62701V18.5196C0 18.9295 0.325 19.2607 0.727273 19.2607H15.2727C15.675 19.2607 16 18.9295 16 18.5196V9.62701C16 9.21711 15.675 8.88595 15.2727 8.88595ZM3.90909 3.69859C3.90909 2.98301 4.47955 2.40174 5.18182 2.40174H10.8182C11.5205 2.40174 12.0909 2.98301 12.0909 3.69859V8.88595H3.90909V3.69859ZM14.3636 17.5933H1.63636V10.5533H14.3636V17.5933ZM7.36364 14.3744V15.6017C7.36364 15.7036 7.44545 15.787 7.54545 15.787H8.45455C8.55455 15.787 8.63636 15.7036 8.63636 15.6017V14.3744C8.82397 14.2371 8.964 14.0428 9.0363 13.8193C9.10859 13.5958 9.10943 13.3547 9.03868 13.1306C8.96793 12.9066 8.82925 12.7113 8.6426 12.5727C8.45595 12.4341 8.23095 12.3594 8 12.3594C7.76905 12.3594 7.54405 12.4341 7.3574 12.5727C7.17075 12.7113 7.03207 12.9066 6.96132 13.1306C6.89057 13.3547 6.89141 13.5958 6.9637 13.8193C7.036 14.0428 7.17603 14.2371 7.36364 14.3744Z"
            fill={fill}
         />
      </svg>
   );
};

export default IconOff;
