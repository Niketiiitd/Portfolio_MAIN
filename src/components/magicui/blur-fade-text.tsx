import React, { useMemo } from "react";

interface BlurFadeTextProps {
  text: string;
  delay?: number;
  className?: string;
  animateByCharacter?: boolean;
  variant?: any;
}

const BlurFadeText: React.FC<BlurFadeTextProps> = ({
  text = "", // Default value for text
  delay = 0,
  className = "",
  animateByCharacter = false,
  variant,
}) => {
  const defaultVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };
  const combinedVariants = variant || defaultVariants;
  const characters = useMemo(() => Array.from(text), [text]);

  if (animateByCharacter) {
    return (
      <span className={className}>
        {characters.map((char, index) => (
          <span
            key={index}
            style={{ transitionDelay: `${delay + index * 0.05}s` }}
            className="inline-block"
          >
            {char}
          </span>
        ))}
      </span>
    );
  }

  return (
    <span
      style={{ transitionDelay: `${delay}s` }}
      className={className}
    >
      {text}
    </span>
  );
};

export default BlurFadeText;