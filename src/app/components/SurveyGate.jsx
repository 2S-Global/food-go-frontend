"use client";

import { useEffect, useState } from "react";
import SurveyModal from "./SurveyModal";

export default function SurveyGate() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem("unieat-survey")) {
      setShow(true);
    }
  }, []);

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
