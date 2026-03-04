"use client";

import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

interface AnimatedNumberProps {
  value: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  decimals?: number;
  className?: string;
}

export function AnimatedNumber({
  value,
  suffix = "",
  prefix = "",
  duration = 1.5,
  decimals = 0,
  className,
}: AnimatedNumberProps) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <span ref={ref} className={className}>
      {inView ? (
        <CountUp
          start={0}
          end={value}
          duration={duration}
          suffix={suffix}
          prefix={prefix}
          decimals={decimals}
          useEasing
        />
      ) : (
        `${prefix}0${suffix}`
      )}
    </span>
  );
}
