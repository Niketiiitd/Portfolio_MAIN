"use client";

import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

interface TypingAnimationProps {
  text: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
  className?: string;
}

export default function TypingAnimation({
  text,
  typingSpeed = 30,
  deletingSpeed = 30,
  pauseDuration = 1000,
  className,
}: TypingAnimationProps) {
  const [displayedText, setDisplayedText] = useState<string>("");
  const [textIndex, setTextIndex] = useState<number>(0);
  const [charIndex, setCharIndex] = useState<number>(0);
  const [forward, setForward] = useState<boolean>(true);
  const [isPaused, setIsPaused] = useState<boolean>(false);

  useEffect(() => {
    if (isPaused) return;

    const typingEffect = setInterval(() => {
      if (forward) {
        if (charIndex < text[textIndex].length) {
          setDisplayedText(text[textIndex].substring(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        } else {
          setIsPaused(true);
          setTimeout(() => {
            setIsPaused(false);
            setForward(false);
          }, pauseDuration);
        }
      } else {
        if (charIndex > 0) {
          setDisplayedText(text[textIndex].substring(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        } else {
          setIsPaused(true);
          setTimeout(() => {
            setIsPaused(false);
            setForward(true);
            setTextIndex((prevIndex) => (prevIndex + 1) % text.length);
          }, pauseDuration);
        }
      }
    }, forward ? typingSpeed : deletingSpeed);

    return () => {
      clearInterval(typingEffect);
    };
  }, [charIndex, forward, isPaused, text, textIndex, typingSpeed, deletingSpeed, pauseDuration]);

  return (
    <h1
      className={cn(
        "font-display text-center text-4xl font-bold leading-[5rem] tracking-[-0.02em] drop-shadow-sm",
        className,
      )}
    >
      {displayedText}
    </h1>
  );
}