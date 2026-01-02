"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import SurveyModal from "./SurveyModal";

export default function SurveyGate() {
  const pathname = usePathname();
  const [show, setShow] = useState(false);

  useEffect(() => {
    // If NOT home page → reset survey state
    if (pathname !== "/") {
      sessionStorage.removeItem("unieat-survey-closed");
      setShow(false);
      return;
    }

    // Home page → always open unless closed in this visit
    const closed = sessionStorage.getItem("unieat-survey-closed");

    if (!closed) {
      setShow(true);
    }
  }, [pathname]);

  if (!show) return null;

  return (
    <SurveyModal
      onSkip={() => {
        sessionStorage.setItem("unieat-survey-closed", "true");
        setShow(false);
      }}
      onComplete={() => {
        sessionStorage.setItem("unieat-survey-closed", "true");
        setShow(false);
      }}
    />
  );
}
