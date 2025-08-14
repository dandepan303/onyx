import { ReactNode } from "react";

export function Message({ children, className = '' }: {children: ReactNode, className?: string}) {
  return (
    <div className={`${className}`}>
      {/* Other things to make this look good */}
      {children}
    </div>
  )
}

export function FloatingMessage({ children, className = '' }: { children: ReactNode, className?: string }) {
  return (
    // Make this floating within its parent container
    <div className={`${className}`}>
      {/* Other things to make this look good */}
      {children}
    </div>
  )
}