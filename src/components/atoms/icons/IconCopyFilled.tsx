import React from "react";

interface Props {
   fill?: string;
   className?: string;
   style?:any;
   onClick?:any;
}

const IconCopyFilled: React.FC<Props> = ({ className, fill = "#000000", style, onClick }) => {
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
               d="M7.2 3.6001H1.2C0.5382 3.6001 0 4.1383 0 4.8001V10.8001C0 11.4619 0.5382 12.0001 1.2 12.0001H7.2C7.8618 12.0001 8.4 11.4619 8.4 10.8001V4.8001C8.4 4.1383 7.8618 3.6001 7.2 3.6001Z" 
               fill={fill}
            />
            <path 
               d="M10.8 0H4.80004C4.48178 0 4.17655 0.126428 3.95151 0.351472C3.72647 0.576515 3.60004 0.88174 3.60004 1.2V2.4H8.40004C8.7183 2.4 9.02352 2.52643 9.24856 2.75147C9.47361 2.97652 9.60004 3.28174 9.60004 3.6V8.4H10.8C11.1183 8.4 11.4235 8.27357 11.6486 8.04853C11.8736 7.82348 12 7.51826 12 7.2V1.2C12 0.88174 11.8736 0.576515 11.6486 0.351472C11.4235 0.126428 11.1183 0 10.8 0Z" 
               fill={fill}
            />
         </svg>
      </div>
   );
};

export default IconCopyFilled;
