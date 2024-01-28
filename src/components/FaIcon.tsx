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
      className={`${color ? color : "text-secondary"} ${
        isLarge ? `text-5xl` : `text-xl`
      } `}
    />
  );
};

export default FaIcon;
