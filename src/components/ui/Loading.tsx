import { ReactNode } from "react";

export default function Loading({ children, className = '' }: {children?: ReactNode, className?: string}) {
  return (<div className={`${className}`}>
    {/* TODO: Add loading stuff */}
    {children}
  </div>)
}