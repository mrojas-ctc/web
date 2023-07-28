import React from "react";

import Button from "../../atoms/Button/Button";

import "./buttonLineal.scss";

interface Props {
   children?: any;
   onClick?: any;
   className?: string;
   size?: any;
   iconLeft?: any;
   iconRight?: any;
   hasHoverColor?: boolean;
   disabled?: boolean;
   to?: string;
   underline?: boolean;
   external?: boolean;
   fullWidth?: boolean | string | number;
   width?: string | number;
}

const ButtonLineal: React.FC<Props> = ({
   children,
   onClick,
   className,
   hasHoverColor,
   disabled,
   to,
   underline = true,
   external = false,
   fullWidth,
   width,
   ...otherProps
}) => {
   let hoverType = hasHoverColor ? "hover-color" : "hover-no-color";

   return (
      <>
         {to ? (
            <a
               {...otherProps}
               className={`button-lineal button-lineal--${hoverType} ${
                  disabled
                     ? "button-lineal__disabled button-lineal__disabled-link"
                     : ""
               } ${className ? className : ""}`}
               href={disabled ? "" : to}
               style={{
                  textDecorationLine: underline ? "underline" : "none",
                  width:
                     typeof fullWidth === "string" ||
                     typeof fullWidth === "number"
                        ? width
                        : fullWidth === true
                        ? "100%"
                        : "auto",
               }}
               target={external ? "_blank" : "_self"}
            >
               {children}
            </a>
         ) : (
            <Button
               {...otherProps}
               className={`button-lineal button-lineal--${hoverType} ${
                  disabled ? "button-lineal__disabled" : ""
               } ${className ? className : ""}`}
               onClick={onClick}
            >
               {children}
            </Button>
         )}
      </>
   );
};

export default ButtonLineal;
