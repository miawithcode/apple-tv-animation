import { twMerge } from "tailwind-merge";

type Props = {
  children: React.ReactNode;
  size?: "sm" | "md" | "lg";
};

const Button = ({ children, size = "md" }: Props) => {
  const sizeClassNames = {
    sm: "text-xs px-2 py-1",
    md: "text-sm px-3 py-1",
    lg: "text-lg px-4 py-2",
  };

  return (
    <button
      className={twMerge(
        "rounded-full bg-white text-black",
        sizeClassNames[size],
      )}
    >
      {children}
    </button>
  );
};
export default Button;
