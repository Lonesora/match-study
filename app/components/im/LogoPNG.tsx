import React from "react";

export function LogoPNG({
  className = "",
  ...props
}: React.ImgHTMLAttributes<HTMLImageElement>) {
  return (
    <img
      src="/im/logo.png"
      alt="Logo"
      className={`h-10 w-10 object-contain ${className}`}
      {...props}
    />
  );
}
