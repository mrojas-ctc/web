import React from "react";

interface Props {
   fill?: string;
   className?: string;
}

const IconZoom: React.FC<Props> = ({ className, fill = "#237FE8" }) => {
   return (
      <div style={{ width: "auto" }}>
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
               d="M20 10C20 15.5225 15.5225 20 10 20C4.4775 20 0 15.5225 0 10C0 4.4775 4.4775 0 10 0C15.5225 0 20 4.4775 20 10ZM5 13.5H12.5V8C12.5 7.80302 12.4612 7.60796 12.3858 7.42597C12.3104 7.24399 12.1999 7.07863 12.0607 6.93934C11.9214 6.80005 11.756 6.68956 11.574 6.61418C11.392 6.5388 11.197 6.5 11 6.5H3.5V12C3.5 12.3978 3.65804 12.7794 3.93934 13.0607C4.07863 13.1999 4.24399 13.3104 4.42597 13.3858C4.60796 13.4612 4.80302 13.5 5 13.5ZM13.5 11.5L16.5 13.5V6.5L13.5 8.5V11.5Z"
               fill={fill}
            />
         </svg>
      </div>
   );
};

export default IconZoom;
