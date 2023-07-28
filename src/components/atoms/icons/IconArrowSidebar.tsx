import React from "react";

interface Props {
  fill?: string;
  className?: string;
}

const IconArrowSidebar: React.FC<Props> = ({ className, fill = "#BCBCBC" }) => {
  return (
    <svg
      className={className}
      width="5" height="7" viewBox="0 0 5 7" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M3.5 1.125L1.5 3.41071L3.5 5.69643" stroke={fill} strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
		</svg>
  );
};

export default IconArrowSidebar;