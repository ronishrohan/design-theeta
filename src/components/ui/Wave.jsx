import React, { useMemo } from "react";

/**
 * SimpleWave – a lightweight SVG wave component.
 *
 * Controls:
 *  - w, h: logical drawing size (affects curvature/detail)
 *  - amplitude: wave height in px (0..h/2 recommended)
 *  - wavelength: distance between peaks in px
 *  - phase: shift the wave horizontally (radians)
 *  - baseline: vertical position (0 = top, 1 = bottom)
 *  - flip: mirror vertically
 *  - fill / stroke / strokeWidth / opacity
 *
 * Layout:
 *  - SVG uses a viewBox; set CSS width/height via props.className or style.
 *  - Example: <SimpleWave className="w-full h-32" amplitude={24} wavelength={160} />
 */


const clamp = (n, min, max) => Math.max(min, Math.min(max, n));

const SimpleWave= ({
  w = 1200,
  h = 50,
  amplitude = 40,
  wavelength = 200,
  phase = 0,
  baseline = 0.5,
  flip = false,
  fill = "currentColor",
  stroke,
  strokeWidth = 0,
  closed = true,
  samples = 240,
  className,
  style,
  ...rest
}) => {
  const A = clamp(amplitude, 0, h / 2);
  const λ = Math.max(10, wavelength);
  const y0 = clamp(baseline, 0, 1) * h;

  const d = useMemo(() => {
    const pts = [];
    const step = w / samples;

    for (let i = 0; i <= samples; i++) {
      const x = i * step;
      const y = y0 + (flip ? -1 : 1) * A * Math.sin((2 * Math.PI * x) / λ + phase);
      pts.push(`${i === 0 ? "M" : "L"} ${x.toFixed(2)} ${y.toFixed(2)}`);
    }

    // If closed, drop to bottom, across, and back to start to make a filled ribbon
    if (closed) {
      pts.push(`L ${w.toFixed(2)} ${h + 1}`) // bottom-right
pts.push(`L 0 ${h + 1}`)  
      pts.push("Z");
    }

    return pts.join(" ");
  }, [A, λ, phase, samples, w, y0, h, flip, closed]);

  return (
    <svg
      viewBox={`0 0 ${w} ${h}`}
      preserveAspectRatio="none"
      className={className}
      style={style}
      aria-hidden
      {...rest}
    >
      <path d={d} fill={closed ? fill : "none"} stroke={stroke} strokeWidth={strokeWidth} />
    </svg>
  );
};

export default SimpleWave;

/**
 * Usage examples
 *
 * // Full-width, 128px tall blue wave background
 * <SimpleWave className="w-full h-32" fill="#3b82f6" amplitude={24} wavelength={160} />
 *
 * // Thin stroked sine line (no fill)
 * <SimpleWave className="w-full h-24" closed={false} fill="none" stroke="#14b8a6" strokeWidth={2} amplitude={18} wavelength={220} />
 *
 * // Taller hero curve, baseline near bottom
 * <SimpleWave className="w-full h-48" fill="#0ea5e9" amplitude={48} wavelength={240} baseline={0.75} />
 */
