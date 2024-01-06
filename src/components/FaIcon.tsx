import React from "react";
import { IconType } from "react-icons";

const FaIcon = ({
  icon,
  isLarge,
  color,
}: {
  icon: IconType;
  isLarge?: boolean;
  color?: string;
}) => {
  const Icon = icon;
  return (
    <Icon
      className={`ml-2 ${color ? "text-primary" : "text-neural-400"} ${
        isLarge ? `text-5xl` : `text-xl`
      } `}
    />
  );
};

export default FaIcon;
