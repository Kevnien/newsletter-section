export default function MarketingPoint({ point }: { point: string }) {
  return (
    <div className="flex items-center gap-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="#c7d2fe"
        className="flex-shrink-0 flex-grow-0"
      >
        <circle cx="12" cy="12" r="12" fill="#c7d2fe" />
        <path
          d="M8 12.5l3 3 5-5"
          stroke="#4338ca"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span className="text-neutral-600">{point}</span>
    </div>
  );
}
