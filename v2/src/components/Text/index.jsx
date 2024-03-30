import React from "react";

const sizeClasses = {
  txtNotoSerifBold18: "font-bold font-notoserif",
  txtNotoSerifMedium12: "font-medium font-notoserif",
  txtNotoSerifBold14: "font-bold font-notoserif",
  txtNotoSerifBold16: "font-bold font-notoserif",
  txtNotoSerifRegular14: "font-normal font-notoserif",
  txtNotoSerifBold22: "font-bold font-notoserif",
  txtNotoSerifRegular13: "font-normal font-notoserif",
  txtNotoSerifMedium14: "font-medium font-notoserif",
  txtNotoSerifBlack36: "font-black font-notoserif",
  txtNotoSerifBold14Gray900: "font-bold font-notoserif",
  txtNotoSerifMedium16: "font-medium font-notoserif",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
