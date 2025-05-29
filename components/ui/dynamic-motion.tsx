"use client"
import { motion, MotionProps } from "framer-motion";
import React from "react";


type HTMLTags = keyof HTMLElementTagNameMap;


interface DynamicMotionComponentProps extends MotionProps {
  elementType: HTMLTags; // Allows any valid HTML tag
  children: React.ReactNode;
  className?: string;
}

export function DynamicMotionComponent({ elementType = "div", children, ...rest }: DynamicMotionComponentProps) {
  const MotionComponent = motion[elementType];

  return (
    <MotionComponent
      {...rest}
    >
      {children}
    </MotionComponent>
  );
}
