import React from "react";

const sizeClasses = {
  txtNotoSerifBold28: "font-bold font-notoserif",
  txtNotoSerifBold18: "font-bold font-notoserif",
  txtNotoSerifRegular16Gray100: "font-normal font-notoserif",
  txtNotoSerifBold14: "font-bold font-notoserif",
  txtNotoSerifBold16: "font-bold font-notoserif",
  txtNotoSerifRegular14: "font-normal font-notoserif",
  txtNotoSerifMedium16Purple50003: "font-medium font-notoserif",
  txtNotoSerifBold22: "font-bold font-notoserif",
  txtNotoSerifRegular13: "font-normal font-notoserif",
  txtNotoSerifMedium14: "font-medium font-notoserif",
  txtNotoSerifMedium16: "font-medium font-notoserif",
  txtNotoSerifRegular16: "font-normal font-notoserif",
  txtNotoSerifMedium14Gray100: "font-medium font-notoserif",
  txtNotoSerifBlack48: "font-black font-notoserif",
  txtNotoSerifBlack36: "font-black font-notoserif",
  txtNotoSerifBold16Gray900: "font-bold font-notoserif",
  txtNotoSerifRegular14Purple50003: "font-normal font-notoserif",
  txtNotoSerifBold14Gray900: "font-bold font-notoserif",
  txtNotoSerifRegular16Pink800: "font-normal font-notoserif",
  txtNotoSerifRegular16Purple50003: "font-normal font-notoserif",
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
