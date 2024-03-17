import { twMerge } from "tailwind-merge";

type Props = {
  children: React.ReactNode;
  size?: "sm" | "md" | "lg";
  className?: string;
};

const Button = ({ children, size = "md", className }: Props) => {
  const sizeClassNames = {
    sm: "text-xs px-2 py-1",
    md: "text-sm px-5 py-3",
    lg: "text-lg px-8 py-4",
  };

  return (
    <button
      className={twMerge(
        "rounded-full bg-white py-4 text-black",
        sizeClassNames[size],
        className
      )}
    >
      {children}
    </button>
  );
};
export default Button;
