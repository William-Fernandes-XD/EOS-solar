export function EnergyFlow({ reduceMotion = false }) {
  return (
    <svg
      className="energy-art"
      viewBox="0 0 640 420"
      role="img"
      aria-label="Fluxo da energia solar: sol, painel, energia e edificação"
    >
      <rect width="640" height="420" fill="#071422" />
      <g opacity="0.18">
        {[80, 160, 240, 320, 400].map((y) => (
          <line key={y} x1="40" y1={y} x2="600" y2={y} stroke="#f5f3ee" strokeWidth="0.6" />
        ))}
      </g>
      <circle cx="118" cy="96" r="36" fill="#E4B423" />
      <g stroke="#E4B423" strokeWidth="1.4" opacity="0.55">
        {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => {
          const rad = (deg * Math.PI) / 180;
          return (
            <line
              key={deg}
              x1={118 + Math.cos(rad) * 46}
              y1={96 + Math.sin(rad) * 46}
              x2={118 + Math.cos(rad) * 62}
              y2={96 + Math.sin(rad) * 62}
            />
          );
        })}
      </g>
      <g transform="translate(250 150)">
        <rect width="150" height="88" rx="2" fill="#0c1f35" stroke="#8aa0b8" strokeWidth="1.2" />
        {[0, 1, 2, 3].map((col) =>
          [0, 1].map((row) => (
            <rect
              key={`${col}-${row}`}
              x={8 + col * 34}
              y={8 + row * 36}
              width="30"
              height="32"
              fill="#123049"
              stroke="#6f879e"
            />
          ))
        )}
      </g>
      <g transform="translate(490 250)" fill="#f5f3ee">
        <rect x="0" y="28" width="86" height="62" />
        <polygon points="43,0 0,28 86,28" />
        <rect x="34" y="52" width="18" height="38" fill="#071422" />
      </g>
      <path
        d="M118 140 C118 210, 250 180, 325 238 C390 286, 470 280, 490 278"
        fill="none"
        stroke="rgba(228,180,35,0.35)"
        strokeWidth="1.4"
      />
      {!reduceMotion &&
        [0, 1, 2, 3, 4].map((i) => (
          <circle key={i} r="3.2" fill="#E4B423" className="energy-dot" />
        ))}
      <text
        x="96"
        y="178"
        fill="#f5f3ee"
        fontSize="11"
        letterSpacing="2.4"
        fontFamily="IBM Plex Mono, monospace"
      >
        SOL
      </text>
      <text
        x="276"
        y="258"
        fill="#f5f3ee"
        fontSize="11"
        letterSpacing="2.4"
        fontFamily="IBM Plex Mono, monospace"
      >
        PAINEL
      </text>
      <text
        x="488"
        y="338"
        fill="#f5f3ee"
        fontSize="11"
        letterSpacing="2.4"
        fontFamily="IBM Plex Mono, monospace"
      >
        USO
      </text>
    </svg>
  );
}
