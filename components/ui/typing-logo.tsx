"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const FULL_TEXT = "Jell";
const TYPING_SPEED = 150;
const DELETE_SPEED = 100;
const PAUSE_BEFORE_DELETE = 3000;
const PAUSE_BEFORE_TYPE = 500;

export function TypingLogo() {
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (isPaused) {
      timeout = setTimeout(
        () => {
          setIsPaused(false);
        },
        isDeleting ? PAUSE_BEFORE_TYPE : PAUSE_BEFORE_DELETE,
      );
      return () => clearTimeout(timeout);
    }

    if (!isDeleting && displayText === FULL_TEXT) {
      setIsPaused(true);
      setIsDeleting(true);
      return;
    }

    if (isDeleting && displayText === "") {
      setIsPaused(true);
      setIsDeleting(false);
      return;
    }

    const speed = isDeleting ? DELETE_SPEED : TYPING_SPEED;

    timeout = setTimeout(() => {
      if (isDeleting) {
        setDisplayText(FULL_TEXT.slice(0, displayText.length - 1));
      } else {
        setDisplayText(FULL_TEXT.slice(0, displayText.length + 1));
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, isPaused]);

  return (
    <Link
      href="/"
      className="flex items-center justify-center font-bold text-lg text-foreground"
      prefetch={false}
    >
      <span className="min-w-[3ch]">
        {displayText}
        <span className="animate-pulse">|</span>
      </span>
    </Link>
  );
}
