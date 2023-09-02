"use client";

import React from "react";
import {
  Link as ScrollLink,
  animateScroll as scroll,
  LinkProps,
} from "react-scroll";

interface CustomLinkProps extends LinkProps {
  children: React.ReactNode;
}

function CustomScrollLink({ to, children }: CustomLinkProps) {
  return (
    <ScrollLink
      to={to}
      smooth={true}
      duration={800}
      spy={true}
      offset={-100} 
    >
      {children}
    </ScrollLink>
  ) as JSX.Element;
}

export default CustomScrollLink;
