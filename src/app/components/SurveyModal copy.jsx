"use client";

import { useState } from "react";

export default function SurveyModal({ onSkip, onComplete }) {
  const [step, setStep] = useState(0);

  const steps = [
    <Step1 />,
    <Step2 />,
    <Step3 />,
    <Step4 />,
    <Step5 />,
    <Step6 />,
  ];

  const next = () => {
    if (step < steps.length - 1) setStep(step + 1);
    else onComplete();
  };

  const prev = () => {
    if (step > 0) setStep(step - 1);
  };

  return (
    <div style={overlay}>
      <form style={box} className="survey-modal" onSubmit={(e) => e.preventDefault()}>
        <div style={progress}>Step {step + 1} of {steps.length}</div>

        {steps[step]}

        <div style={nav}>
          <button type="button" onClick={onSkip} style={skipBtn}>
            Skip
          </button>

          <div>
            {step > 0 && (
              <button type="button" onClick={prev} style={prevBtn}>
                Prev
              </button>
            )}
            <button type="button" onClick={next} style={nextBtn}>
              {step === steps.length - 1 ? "Submit" : "Next"}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

function Step1() {
  return (
    <>
      <h2>Basic Information</h2>

      <label>Full Name *</label>
      <input type="text" required />

      <label>Email *</label>
      <input type="email" required />

      <label>Accommodation</label>
      <select>
        <option value="">Select</option>
        <option>Beit Hall</option>
        <option>Wilson House</option>
        <option>Xenia</option>
        <option>Parsons House</option>
        <option>Kemp Porter Buildings</option>
        <option>Woodward Buildings</option>
        <option>Other</option>
      </select>

      <label>Year of Study</label>
      {[
        "UG Year 1",
        "UG Year 2",
        "UG Year 3",
        "UG Year 4+",
        "Postgraduate",
        "PhD / Research",
      ].map((y) => (
        <div key={y}>
          <input type="radio" name="year" /> {y}
        </div>
      ))}
    </>
  );
}

function Step2() {
  return (
    <>
      <h2>Eating & Food Preferences</h2>

      {[
        "Daily",
        "4–6 times a week",
        "2–3 times a week",
        "Rarely",
        "Never",
      ].map((o) => (
        <div key={o}>
          <input type="radio" name="homemade" /> {o}
        </div>
      ))}

      <label>Preferred meal type</label>
      {[
        "Vegetarian",
        "Vegan",
        "Non-vegetarian",
        "Halal",
        "Dairy-free",
        "Gluten-free",
      ].map((o) => (
        <div key={o}>
          <input type="checkbox" /> {o}
        </div>
      ))}

      <input placeholder="Other dietary restrictions" />
    </>
  );
}

function Step3() {
  return (
    <>
      <h2>Meal Requirements</h2>

      {["1–2", "3–4", "5–6", "7–10", "11+"].map((o) => (
        <div key={o}>
          <input type="radio" name="meals" /> {o}
        </div>
      ))}

      {["Lunch", "Dinner", "Both"].map((o) => (
        <div key={o}>
          <input type="radio" name="mealTime" /> {o}
        </div>
      ))}

      {["Regular", "Large / High-protein", "Small / Budget"].map((o) => (
        <div key={o}>
          <input type="radio" name="portion" /> {o}
        </div>
      ))}
    </>
  );
}

function Step4() {
  return (
    <>
      <h2>Delivery</h2>

      {[
        "Hostel reception",
        "Shared kitchen",
        "Outside main entrance",
        "On-campus pickup",
      ].map((o) => (
        <div key={o}>
          <input type="radio" name="delivery" /> {o}
        </div>
      ))}

      <input placeholder="Other delivery point" />

      {[
        "11:30–1:00",
        "1:00–2:30",
        "6:00–7:30",
        "7:30–9:00",
      ].map((o) => (
        <div key={o}>
          <input type="checkbox" /> {o}
        </div>
      ))}
    </>
  );
}

function Step5() {
  return (
    <>
      <h2>Price Sensitivity</h2>

      {["£3–4", "£4–5", "£5–6", "£6–7", "£7+"].map((o) => (
        <div key={o}>
          <input type="radio" name="price" /> {o}
        </div>
      ))}

      {[
        "Organic ingredients",
        "High-protein meals",
        "Premium packaging",
        "Chef-special menu",
        "Dessert add-on",
      ].map((o) => (
        <div key={o}>
          <input type="checkbox" /> {o}
        </div>
      ))}
    </>
  );
}

function Step6() {
  return (
    <>
      <h2>Feedback</h2>

      {[
        "Too expensive",
        "Lack of variety",
        "Not healthy",
        "Takes too long",
        "Dietary needs unmet",
        "Missing homemade taste",
      ].map((o) => (
        <div key={o}>
          <input type="checkbox" /> {o}
        </div>
      ))}

      <textarea placeholder="Meals you'd like to see" />
      <textarea placeholder="Additional feedback" />

      <label>
        <input type="checkbox" required /> I agree to receive a free meal box
      </label>
    </>
  );
}

const overlay = {
  position: "fixed",
  inset: 0,
  background: "rgba(0,0,0,0.75)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 9999,
  padding: "20px",
};

const box = {
  background: "#fff",
  maxWidth: 760,
  width: "100%",
  padding: "30px",
  borderRadius: "10px",
  maxHeight: "90vh",
  overflowY: "auto",
  boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
};

const progress = { 
  marginBottom: "20px", 
  color: "#666",
  fontSize: "14px",
  fontWeight: "500",
};

const nav = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginTop: "30px",
  gap: "10px",
  borderTop: "1px solid #eee",
  paddingTop: "20px",
};

const nextBtn = {
  background: "#012169",
  color: "#fff",
  padding: "10px 20px",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
  fontWeight: "600",
  fontSize: "14px",
  transition: "background 0.3s ease",
};

const prevBtn = {
  background: "#ccc",
  color: "#333",
  padding: "10px 20px",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
  fontWeight: "600",
  fontSize: "14px",
  transition: "background 0.3s ease",
};

const skipBtn = {
  background: "transparent",
  color: "#c8102e",
  border: "none",
  textDecoration: "underline",
  cursor: "pointer",
  fontSize: "14px",
  fontWeight: "600",
  padding: "10px 0",
};

// Additional styles for form elements
const formStyles = `
  .survey-modal h2 {
    font-size: 24px;
    color: #333;
    margin-bottom: 20px;
    margin-top: 0;
  }

  .survey-modal label {
    display: block;
    margin-bottom: 8px;
    color: #333;
    font-weight: 600;
    font-size: 14px;
  }

  .survey-modal input[type="text"],
  .survey-modal input[type="email"],
  .survey-modal select,
  .survey-modal textarea {
    width: 100%;
    padding: 10px 12px;
    border: 1px solid #ddd;
    border-radius: 5px;
    font-size: 14px;
    font-family: inherit;
    margin-bottom: 15px;
    box-sizing: border-box;
    transition: border-color 0.3s ease;
  }

  .survey-modal input[type="text"]:focus,
  .survey-modal input[type="email"]:focus,
  .survey-modal select:focus,
  .survey-modal textarea:focus {
    outline: none;
    border-color: #012169;
    box-shadow: 0 0 0 3px rgba(1, 33, 105, 0.1);
  }

  .survey-modal input[type="radio"],
  .survey-modal input[type="checkbox"] {
    margin-right: 8px;
    cursor: pointer;
  }

  .survey-modal input[type="radio"] + span,
  .survey-modal input[type="checkbox"] + span {
    cursor: pointer;
  }

  .survey-modal div > input[type="radio"],
  .survey-modal div > input[type="checkbox"] {
    cursor: pointer;
  }

  .survey-modal div {
    margin-bottom: 10px;
    display: flex;
    align-items: center;
  }

  .survey-modal textarea {
    resize: vertical;
    min-height: 80px;
  }

  @media (max-width: 640px) {
    .survey-modal {
      padding: 20px !important;
    }

    .survey-modal h2 {
      font-size: 20px;
    }
  }
`;

// Inject global styles
if (typeof document !== "undefined") {
  const style = document.createElement("style");
  style.textContent = formStyles;
  if (!document.head.querySelector("style[data-survey-modal]")) {
    style.setAttribute("data-survey-modal", "true");
    document.head.appendChild(style);
  }
}
