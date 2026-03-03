export function DecorativeStar({
  className = "",
  size = 20,
}: {
  className?: string;
  size?: number;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 0C12 0 12 8.5 12 12C12 8.5 3.5 12 0 12C3.5 12 12 12 12 12C12 12 12 15.5 12 24C12 15.5 12 12 12 12C12 12 20.5 12 24 12C20.5 12 12 12 12 12C12 12 12 0 12 0Z" />
    </svg>
  );
}
