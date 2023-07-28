import React from "react";

interface Props {
  fill?: string;
  className?: string;
}

const IconWiki: React.FC<Props> = ({ className, fill = "#9C56E0" }) => {
  return (
    <div style={{ width: "auto" }}>
      <svg
        className={className}
        width="22"
        min-width="22"
        height="20"
        viewBox="0 0 22 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect y="0.429688" width="22" height="19.1429" rx="4" fill={fill} />
        <path
          d="M13.0315 11.1888L11.8031 6.71685H10.1834C9.7649 8.20307 9.35996 9.74236 8.94151 11.1888L7.13273 5.42969H5L8.13161 14.5725H9.69741L10.9798 9.7689L12.2891 14.5725H13.8414L17 5.42969H14.8538L13.0315 11.1888Z"
          fill="white"
        />
      </svg>
    </div>
  );
};

export default IconWiki;
