import React from "react";

import "./label.scss";

interface Props {
  children: any;
  className?: string;
  type?: string;
  variation?: string;
  bold?: boolean;
}

const Label: React.FC<Props> = ({
  type,
  variation,
  children,
  className,
  bold = false,
}) => {
  let isBold = bold ? "label__bold" : "";

  if (type === "h1")
    return (
      <h1 className={`label label__${type} ${isBold} ${className ? className : ""}`}>
        {children}
      </h1>
    );
  else if (type === "h2")
    return (
      <h2 className={`label label__${type} ${isBold} ${className ? className : ""}`}>
        {children}
      </h2>
    );
  else if (type === "h3")
    return (
      <h3 className={`label label__${type} ${isBold} ${className ? className : ""}`}>
        {children}
      </h3>
    );
  else
    return (
      <h3 className={`label label__${type} label__${type}--${variation} ${isBold} ${className ? className : ""}`}>
        {children}
      </h3>
    );
};

export default Label;
