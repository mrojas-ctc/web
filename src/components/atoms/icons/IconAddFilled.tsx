import React from "react";

interface Props {
  fill?: string;
  className?: string;
}

const IconAddFilled: React.FC<Props> = ({ className, fill = "#313131" }) => {
  return (
    <svg
      className={className}
      width="17"
      height="17"
      viewBox="0 0 17 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd" 
        clipRule="evenodd"
        d="M9.00105 0.574707C8.53567 0.574707 8.15841 0.951968 8.15841 1.41734V8.15843H1.41734C0.951967 8.15843 0.574707 8.53569 0.574707 9.00107C0.574707 9.46644 0.951967 9.8437 1.41734 9.8437H8.15841V16.5848C8.15841 17.0501 8.53567 17.4274 9.00105 17.4274C9.46642 17.4274 9.84368 17.0501 9.84368 16.5848V9.8437H16.5848C17.0501 9.8437 17.4274 9.46644 17.4274 9.00107C17.4274 8.5357 17.0501 8.15843 16.5848 8.15843H9.84368V1.41734C9.84368 0.951967 9.46642 0.574707 9.00105 0.574707Z"
        fill={fill}
      />
    </svg>
  );
};

export default IconAddFilled;
