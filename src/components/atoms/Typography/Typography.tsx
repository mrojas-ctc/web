import React from "react";

import "./typography.scss";

interface Props {
   children: any;
   className?: string;
   type: string;
   variation: string;
   bold?: boolean;
   color?: string;
   underline?: boolean;
   align?: "center" | "left";
}

const Typography: React.FC<Props> = ({
   type,
   variation,
   children,
   className = "",
   bold = false,
   underline = false,
   color,
   align,
}) => {
   let isBold = bold ? "typography__bold" : "";
   let isUnderline = underline ? "typography__underline" : "";

   if (type === "h1")
      return (
         <h1
            style={{ color: color }}
            className={`typography typography__${type} typography--${align} typography__${type}--${variation} ${isBold} ${isUnderline} ${className}`}
         >
            {children}
         </h1>
      );
   else if (type === "h2")
      return (
         <h2
            style={{ color: color }}
            className={`typography typography__${type} typography--${align} typography__${type}--${variation} ${isBold} ${isUnderline} ${className}`}
         >
            {children}
         </h2>
      );
   else if (type === "h3")
      return (
         <h3
            style={{ color: color }}
            className={`typography typography__${type} typography--${align} typography__${type}--${variation} ${isBold} ${isUnderline} ${className}`}
         >
            {children}
         </h3>
      );
   else
      return (
         <p
            style={{ color: color }}
            className={`typography typography__${type} typography--${align} typography__${type}--${variation} ${isBold} ${isUnderline} ${className}`}
         >
            {children}
         </p>
      );
};

export default Typography;
