import React, { ReactNode } from "react";

const Heading = ({ children }: ReactNode) => {
  return <h3 className="text-2xl mb-4 font-semibold">{children}</h3>;
};

export default Heading;
