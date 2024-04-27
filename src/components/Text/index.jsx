import React from "react";

const sizes = {
  xs: "text-xl font-normal",
  s: "text-5xl font-normal md:text-[44px] sm:text-[38px]",
  md: "text-[64px] font-normal md:text-5xl",
};

const Text = ({ children, className = "", as, size = "xs", ...restProps }) => {
  const Component = as || "p";

  return (
    <Component className={`text-white-A700 font-jura ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };
