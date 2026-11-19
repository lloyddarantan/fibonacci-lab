interface SpiralProps {
  n: number;
}

type Tile = { x: number; y: number; s: number; label: number; d: string };

export default function Spiral({ n }: SpiralProps) {
  const count = Math.max(1, Math.min(n, 12));
  const f = [1, 1];
  while (f.length < count) f.push(f[f.length - 1] + f[f.length - 2]);

  let minX = 0, minY = 0, maxX = 1, maxY = 1;
  const tiles: Tile[] = [
    { x: 0, y: 0, s: 1, label: 1, d: "M0 1 A1 1 0 0 1 1 0" },
  ];

  for (let i = 1; i < count; i++) {
    const s = f[i];
    let x = 0, y = 0, d = "";
    switch ((i - 1) % 4) {
      case 0: // right
        x = maxX; y = minY;
        d = `M${x} ${y} A${s} ${s} 0 0 1 ${x + s} ${y + s}`;
        break;
      case 1: // down
        x = minX; y = maxY;
        d = `M${x + s} ${y} A${s} ${s} 0 0 1 ${x} ${y + s}`;
        break;
      case 2: // left
        x = minX - s; y = minY;
        d = `M${x + s} ${y + s} A${s} ${s} 0 0 1 ${x} ${y}`;
        break;
      default: // up
        x = minX; y = minY - s;
        d = `M${x} ${y + s} A${s} ${s} 0 0 1 ${x + s} ${y}`;
    }
    tiles.push({ x, y, s, label: s, d });
    minX = Math.min(minX, x);
    minY = Math.min(minY, y);
    maxX = Math.max(maxX, x + s);
    maxY = Math.max(maxY, y + s);
  }

  const w = maxX - minX;
  const h = maxY - minY;
  const pad = Math.max(w, h) * 0.03;

  return (
    <svg
      viewBox={`${minX - pad} ${minY - pad} ${w + pad * 2} ${h + pad * 2}`}
      className="mx-auto max-h-[26rem] w-full"
      role="img"
      aria-label={`Squares sized by the first ${count} Fibonacci numbers with a spiral drawn through them`}
    >
      {tiles.map((t, i) => {
        const last = i === tiles.length - 1;
        return (
          <g key={i}>
            <rect
              x={t.x}
              y={t.y}
              width={t.s}
              height={t.s}
              fill={last ? "#fbbf24" : "#ffffff"}
              fillOpacity={last ? 0.95 : 0.05 + (i % 3) * 0.025}
              stroke="#ffffff"
              strokeOpacity={0.25}
              vectorEffect="non-scaling-stroke"
            />
            <text
              x={t.x + t.s / 2}
              y={t.y + t.s / 2}
              textAnchor="middle"
              dominantBaseline="central"
              fontSize={Math.min(t.s * 0.4, Math.max(w, h) * 0.06)}
              fontWeight={600}
              fill={last ? "#042f2e" : "#ffffff"}
              fillOpacity={last ? 1 : 0.7}
            >
              {t.label}
            </text>
          </g>
        );
      })}
      {tiles.map((t, i) => (
        <path
          key={`a${i}`}
          d={t.d}
          fill="none"
          stroke="#fbbf24"
          strokeWidth={2.5}
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
        />
      ))}
    </svg>
  );
}
