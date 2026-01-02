"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import SurveyModal from "./SurveyModal";

export default function SurveyGate() {
  const [show, setShow] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    // 👉 change this path to wherever you want the survey
    if (pathname === "/" && !localStorage.getItem("unieat-survey")) {
      setShow(true);
    }
  }, [pathname]);

  if (!show) return null;

  return (
    <SurveyModal
      onSkip={() => {
        localStorage.setItem("unieat-survey", "skipped");
        setShow(false);
      }}
      onComplete={() => {
        localStorage.setItem("unieat-survey", "completed");
        setShow(false);
      }}
    />
  );
}
