import classNames from "classnames";
import React from "react";
import "./styles.scss";

type TTagProps = {
  className?: string;
  bgColor?: string;
  statusText?: string;
  statusColor?: string;
};

export const Tag: React.FC<TTagProps> = ({
  className,
  bgColor,
  statusText,
  statusColor,
}) => {
  return (
    <div
      className={classNames("tag", className)}
      style={{ backgroundColor: bgColor }}
    >
      <p className="tag-text" style={{ color: statusColor }}>
        {statusText}
      </p>
    </div>
  );
};
