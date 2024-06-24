import React, { FC, ReactNode } from "react";

import ShineBorder from "./magicUI/ShinyButton";

interface MyProps {
  children: ReactNode;
}
const Button: FC<MyProps> = (props) => {
  return (
    <ShineBorder
      className="text-center text-xl md:text-2xl capitalize cursor-pointer"
      color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
    >
      {props.children}
    </ShineBorder>
  );
};
export default Button;
