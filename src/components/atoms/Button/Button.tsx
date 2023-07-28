import React from "react";

import "./button.scss";

interface Props {
    children: any;
    onClick?:any;
    model?:any;
    type?:any;
    className?: string;
    size?: any;
    iconLeft?: any;
    iconRight?: any;
    disabled?: any;
}

const Button: React.FC<Props> = ({
    children,
    onClick,
    model = "filled",
    type,
    size = "sm",
    iconLeft,
    iconRight,
    className,
    disabled,
    ...otherProps
  }) => {
    let hasIcon = iconLeft || iconRight ? "icon" : "no-icon";
    /*
      ----------- size ------------
      lg -> (más de 1200 pixels)
      md -> (de más de 992 pixels)
      sm -> (de más de 768px)s
      xs -> (menos de 768px)
      ----------- **** ------------
    */
    return (
      <button
        disabled={disabled}
        className={`button button__${hasIcon}--${size} button__${model} ${className ? className : ""}`}
        {...otherProps}
        onClick={ disabled ? "" : onClick}
      >
        {iconLeft} {children} {iconRight}
      </button>
    );
  };

export default Button;