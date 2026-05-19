export default function Logo({
  size = 56,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      className={className}
      role="img"
      aria-label="Bridgebean"
    >
      <defs>
        {/* arc the text follows — slightly above center, opens upward */}
        <path
          id="bb-arc"
          d="M 38 118 Q 100 38 162 118"
          fill="none"
        />
      </defs>

      {/* hand-drawn circle: two slightly offset strokes for marker feel */}
      <circle
        cx="100"
        cy="100"
        r="82"
        fill="none"
        stroke="#86B79A"
        strokeWidth="7"
        strokeLinecap="round"
        opacity="0.55"
      />
      <circle
        cx="100"
        cy="100"
        r="80"
        fill="none"
        stroke="#6BA284"
        strokeWidth="5"
        strokeLinecap="round"
        opacity="0.9"
      />

      <text
        fontFamily="var(--font-caveat), 'Caveat', 'Patrick Hand', cursive"
        fontSize="40"
        fontWeight="600"
        fill="#558568"
        textAnchor="middle"
        letterSpacing="0.5"
      >
        <textPath href="#bb-arc" startOffset="50%">
          Bridgebean
        </textPath>
      </text>
    </svg>
  );
}
