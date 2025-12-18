"use client";

import { useState } from "react";
import Select from "react-select";

export default function SurveyModal({ onSkip, onComplete }) {
  const [step, setStep] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const steps = [
    <Step1 key="1" />,
    <Step2 key="2" />,
    <Step3 key="3" />,
    <Step4 key="4" />,
    <Step5 key="5" />,
    <Step6 key="6" />,
  ];

  const next = () => {
    if (step < steps.length - 1) {
      setStep(step + 1);
    } else {
      setIsSubmitted(true);
    }
  };

  const prev = () => {
    if (step > 0) setStep(step - 1);
  };

  return (
    <div style={overlay}>
      <form
        style={box}
        className="survey-modal"
        onSubmit={(e) => e.preventDefault()}
      >
        {/* ✅ HARD EXIT: SUCCESS SCREEN */}
        {isSubmitted ? (
          <SuccessScreen onClose={onComplete} />
        ) : (
          <>
            {/* HEADER ONLY DURING SURVEY */}
            <div style={headerContainer}>
              <div style={progress}>
                Step {step + 1} of {steps.length}
              </div>
              <button
                type="button"
                className="survey-skip"
                onClick={onSkip}
                style={skipBtn}
              >
                Skip
              </button>
            </div>

            {/* CURRENT STEP */}
            {steps[step]}

            {/* NAVIGATION */}
            <div style={nav}>
              <div style={{ display: "flex", gap: "10px" }}>
                {step > 0 && (
                  <button
                    type="button"
                    className="survey-prev"
                    onClick={prev}
                    style={prevBtn}
                  >
                    Prev
                  </button>
                )}
                <button
                  type="button"
                  className="survey-next"
                  onClick={next}
                  style={nextBtn}
                >
                  {step === steps.length - 1 ? "Submit" : "Next"}
                </button>
              </div>
            </div>
          </>
        )}
      </form>
    </div>
  );
}

// ============ STEP COMPONENTS ====================

function Step1() {
  const options = [
    { value: "Beit Hall", label: "Beit Hall" },
    { value: "Wilson House", label: "Wilson House" },
    { value: "Xenia", label: "Xenia" },
    { value: "Parsons House", label: "Parsons House" },
    { value: "Kemp Porter Buildings", label: "Kemp Porter Buildings" },
    { value: "Woodward Buildings", label: "Woodward Buildings" },
    { value: "Other", label: "Other" },
  ];
  return (
    <>
      <h2>Basic Information</h2>

      <label>Full Name *</label>
      <input type="text" required placeholder="Enter your full name" />

      <label>Imperial College Email *</label>
      <input type="email" required placeholder="name@imperial.ac.uk" />

      <label>
        Which Imperial College accommodation/hostel do you currently live in?
      </label>

      <Select options={options} required />

      <label>What year of study are you in?</label>
      {[
        "Undergraduate – Year 1",
        "Undergraduate – Year 2",
        "Undergraduate – Year 3",
        "Undergraduate – Year 4+",
        "Postgraduate",
        "PhD / Research",
      ].map((year) => (
        <div className="option-row" key={year}>
          <input type="radio" name="year" id={year} />
          <label htmlFor={year}>{year}</label>
        </div>
      ))}
    </>
  );
}

function Step2() {
  return (
    <>
      <h2>Eating & Food Preferences</h2>

      <label>
        How often do you currently eat homemade or fresh cooked meals?
      </label>
      {["Daily", "4–6 times a week", "2–3 times a week", "Rarely", "Never"].map(
        (opt) => (
          <div className="option-row" key={opt}>
            <input type="radio" name="homemadeFrequency" id={opt} />
            <label htmlFor={opt}>{opt}</label>
          </div>
        )
      )}

      <label>What is your preferred meal type? (Select all that apply)</label>
      {[
        "Vegetarian",
        "Vegan",
        "Non-vegetarian",
        "Halal",
        "Dairy-free",
        "Gluten-free",
      ].map((opt) => (
        <div className="option-row" key={opt}>
          <input type="checkbox" id={opt} />
          <label htmlFor={opt}>{opt}</label>
        </div>
      ))}
      <input type="text" placeholder="Other dietary restrictions" />

      <label>
        Which type of cuisines do you enjoy the most? (Select up to 3)
      </label>
      {[
        "Indian / South Asian",
        "Chinese / East Asian",
        "Mediterranean / Middle Eastern",
        "African / Caribbean",
        "British / European",
        "Italian / Pizza / Pasta",
        "Mexican / Latin American",
      ].map((cuisine) => (
        <div className="option-row" key={cuisine}>
          <input type="checkbox" id={cuisine} />
          <label htmlFor={cuisine}>{cuisine}</label>
        </div>
      ))}
      <input type="text" placeholder="Other (please specify)" />

      <label>What flavors do you prefer?</label>
      {[
        "Mild / Less spicy",
        "Medium spicy",
        "Hot / Spicy",
        "Sweet and savory",
        "Balanced / No strong flavors",
      ].map((flavor) => (
        <div className="option-row" key={flavor}>
          <input type="radio" name="flavor" id={flavor} />
          <label htmlFor={flavor}>{flavor}</label>
        </div>
      ))}
    </>
  );
}

function Step3() {
  return (
    <>
      <h2>Meal Requirements</h2>

      <label>How many meal boxes would you require per week?</label>
      {["1–2", "3–4", "5–6", "7–10", "11+ meals"].map((num) => (
        <div className="option-row" key={num}>
          <input type="radio" name="mealsPerWeek" id={num} />
          <label htmlFor={num}>{num}</label>
        </div>
      ))}

      <label>Which meals are you interested in?</label>
      {["Lunch", "Dinner", "Both lunch and dinner"].map((meal) => (
        <div className="option-row" key={meal}>
          <input type="radio" name="mealPreference" id={meal} />
          <label htmlFor={meal}>{meal}</label>
        </div>
      ))}

      <label>What portion size do you prefer?</label>
      {["Regular", "Large / High-protein", "Small / Budget option"].map(
        (size) => (
          <div className="option-row" key={size}>
            <input type="radio" name="portion" id={size} />
            <label htmlFor={size}>{size}</label>
          </div>
        )
      )}

      <label>Do you prefer weekly meal plans or order-per-meal?</label>
      {[
        "Weekly meal plan subscription",
        "Order whenever needed",
        "Not sure yet",
      ].map((pref) => (
        <div className="option-row" key={pref}>
          <input type="radio" name="planType" id={pref} />
          <label htmlFor={pref}>{pref}</label>
        </div>
      ))}
    </>
  );
}

function Step4() {
  return (
    <>
      <h2>Delivery & Drop-off Points</h2>

      <label>What is your preferred delivery drop-off point?</label>
      {[
        "Hostel reception",
        "Shared kitchen area",
        "Outside main entrance",
        "On-campus pickup point",
      ].map((point) => (
        <div className="option-row" key={point}>
          <input type="radio" name="dropoff" id={point} />
          <label htmlFor={point}>{point}</label>
        </div>
      ))}
      <input type="text" placeholder="Other (please specify)" />

      <label>
        What time window is ideal for delivery? (Select all that apply)
      </label>
      {[
        "11:30 AM – 1:00 PM (Lunch)",
        "1:00 PM – 2:30 PM (Late lunch)",
        "6:00 PM – 7:30 PM (Dinner)",
        "7:30 PM – 9:00 PM (Late dinner)",
      ].map((time) => (
        <div className="option-row" key={time}>
          <input type="checkbox" id={time} />
          <label htmlFor={time}>{time}</label>
        </div>
      ))}
    </>
  );
}

function Step5() {
  return (
    <>
      <h2>Price Sensitivity</h2>

      <label>
        What is a reasonable price for one healthy homemade meal box?
      </label>
      {["£3–£4", "£4–£5", "£5–£6", "£6–£7", "£7+"].map((price) => (
        <div className="option-row" key={price}>
          <input type="radio" name="priceRange" id={price} />
          <label htmlFor={price}>{price}</label>
        </div>
      ))}

      <label>
        Would you pay slightly more for any of the following? (tick all that
        apply)
      </label>
      {[
        "Organic ingredients",
        "High-protein / Gym-friendly meals",
        "Premium packaging",
        "Chef-special / rotating menu",
        "Dessert add-on",
      ].map((extra) => (
        <div className="option-row" key={extra}>
          <input type="checkbox" id={extra} />
          <label htmlFor={extra}>{extra}</label>
        </div>
      ))}
    </>
  );
}

function Step6() {
  return (
    <>
      <h2>Experience & Feedback</h2>

      <label>What do you currently struggle with regarding food at uni?</label>
      {[
        "Too expensive",
        "Lack of variety",
        "Not healthy enough",
        "Takes too long to cook",
        "Dietary restrictions not met",
        "Missing homemade taste",
      ].map((struggle) => (
        <div className="option-row" key={struggle}>
          <input type="checkbox" id={struggle} />
          <label htmlFor={struggle}>{struggle}</label>
        </div>
      ))}
      <input type="text" placeholder="Other (please specify)" />

      <label>
        Would you be willing to recommend UniEat to friends if you like it?
      </label>
      {["Definitely", "Maybe", "Probably not"].map((rec) => (
        <div className="option-row" key={rec}>
          <input type="radio" name="recommend" id={rec} />
          <label htmlFor={rec}>{rec}</label>
        </div>
      ))}

      <label>Any meals you would love to see in our menu? (Open-ended)</label>
      <textarea placeholder="Share your ideas..." />

      <label>Any additional feedback or suggestions? (Open-ended)</label>
      <textarea placeholder="Let us know your thoughts..." />

      <div
        style={{
          marginTop: "20px",
          padding: "15px",
          background: "#f0f8ff",
          borderRadius: "8px",
        }}
      >
        <label
          style={{ display: "flex", alignItems: "center", fontWeight: "600" }}
        >
          <input type="checkbox" required style={{ marginRight: "10px" }} />I
          acknowledge that I will receive a free UniEat homemade meal box after
          successfully completing this survey.
        </label>
      </div>
    </>
  );
}

function SuccessScreen({ onClose }) {
  return (
    <div
      style={{
        textAlign: "center",
        padding: "10px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {/* Success Icon */}
      <svg
        width="120"
        height="120"
        viewBox="0 0 24 24"
        fill="none"
        style={{ marginBottom: "20px" }}
      >
        <circle cx="12" cy="12" r="10" stroke="#7ED37E" strokeWidth="2" />
        <path
          d="M7 12.5L10.5 16L17 9"
          stroke="#7ED37E"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      <h2 style={{ color: "#012169", marginBottom: "10px" }}>Thank You!</h2>

      <p style={{ fontSize: "16px", color: "#333", marginBottom: "6px" }}>
        Your survey has been successfully submitted.
      </p>

      <p style={{ fontSize: "14px", color: "#555", maxWidth: "420px" }}>
        We appreciate your time. Your free UniEat homemade meal box will be
        arranged soon.
      </p>

      {/* Centered Button */}
      <button
        onClick={onClose}
        style={{
          marginTop: "30px",
          background: "#012169",
          color: "#fff",
          border: "none",
          padding: "12px 32px",
          borderRadius: "6px",
          cursor: "pointer",
          fontWeight: "600",
          fontSize: "14px",
        }}
      >
        Close
      </button>
    </div>
  );
}

// =========== STYLES ============

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

const headerContainer = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: "20px",
};

const progress = {
  color: "#666",
  fontSize: "14px",
  fontWeight: "500",
};

const nav = {
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "center",
  marginTop: "30px",
  gap: "10px",
  borderTop: "1px solid #eee",
  paddingTop: "20px",
};

const nextBtn = {
  background: "#012169",
  color: "#ffffff",
  padding: "12px 22px",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer",
  fontWeight: "600",
  fontSize: "14px",
  letterSpacing: "0.3px",
  transition:
    "background 0.25s ease, transform 0.2s ease, box-shadow 0.25s ease",
};

const prevBtn = {
  background: "#f6f8fb",
  color: "#012169",
  padding: "12px 22px",
  border: "1.5px solid #cfd7e6",
  borderRadius: "6px",
  cursor: "pointer",
  fontWeight: "600",
  fontSize: "14px",
  letterSpacing: "0.3px",
  transition:
    "background 0.25s ease, transform 0.2s ease, box-shadow 0.25s ease",
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
  transition: "all 0.3s ease",
};

const formStyles = `
  .survey-modal {
    max-height: 90vh;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
  }

  .survey-modal h2 {
    font-size: 24px;
    color: #333;
    margin-bottom: 20px;
    margin-top: 0;
  }

  .survey-modal label {
    display: block;
    margin-bottom: 8px;
    margin-top: 20px;
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

  /* Scoped only to option rows */
  .survey-modal .option-row {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 10px;
  }

  .survey-modal .option-row > label {
    margin: 0;
    cursor: pointer;
    font-weight: normal;
  }

  /* Custom red radio & checkbox */
  .survey-modal input[type="radio"],
  .survey-modal input[type="checkbox"] {
    -webkit-appearance: none;
    appearance: none;
    width: 18px;
    height: 18px;
    border: 2px solid #999;
    border-radius: 4px;
    cursor: pointer;
    position: relative;
    transition: all 0.2s ease;
    flex-shrink: 0;
  }

  .survey-modal input[type="radio"] {
    border-radius: 50%;
  }

  .survey-modal input[type="radio"]:checked,
  .survey-modal input[type="checkbox"]:checked {
    border-color: #c8102e;
    background-color: #c8102e;
  }

  .survey-modal input[type="radio"]:checked::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 8px;
    height: 8px;
    background: white;
    border-radius: 50%;
    transform: translate(-50%, -50%);
  }

  .survey-modal input[type="checkbox"]:checked::before {
    content: "✓";
    position: absolute;
    top: 50%;
    left: 50%;
    color: white;
    font-size: 14px;
    font-weight: bold;
    transform: translate(-50%, -50%);
  }

  .survey-modal input[type="radio"]:hover,
  .survey-modal input[type="checkbox"]:hover {
    border-color: #c8102e;
    box-shadow: 0 0 0 3px rgba(200, 16, 46, 0.15);
  }

  .survey-modal input[type="radio"]:focus-visible,
  .survey-modal input[type="checkbox"]:focus-visible {
    outline: none;
    box-shadow: 0 0 0 3px rgba(200, 16, 46, 0.3);
  }

  .survey-modal textarea {
    resize: vertical;
    min-height: 80px;
  }

  /* Button hover effects */
  .survey-modal .survey-next:hover,
  .survey-modal .survey-next:focus-visible {
    background: #0a2f8f;
    transform: translateY(-1.5px);
    box-shadow: 0 6px 14px rgba(1, 33, 105, 0.35);
  }

  .survey-modal .survey-prev:hover,
  .survey-modal .survey-prev:focus-visible {
    background: #eef2fa;
    border-color: #a9b9dc;
    transform: translateY(-1.5px);
    box-shadow: 0 4px 10px rgba(1, 33, 105, 0.18);
  }

  .survey-modal .survey-skip:hover,
  .survey-modal .survey-skip:focus-visible {
    color: #8b0000 !important;
    text-decoration: none;
  }

  /* Strong native select (works on Vercel) */
  .survey-modal select {
    appearance: none !important;
    -webkit-appearance: none !important;
    -moz-appearance: none !important;
    background-color: #ffffff !important;
    background-image: none !important;
    border: 1px solid #ddd !important;
    border-radius: 5px !important;
    padding: 10px 12px !important;
    padding-right: 36px !important;
    font-size: 14px !important;
    color: #333 !important;
  }

  .survey-modal select::before,
  .survey-modal select::after {
    content: none !important;
    display: none !important;
  }

  .survey-modal select:focus {
    outline: none;
    border-color: #012169 !important;
    box-shadow: 0 0 0 3px rgba(1, 33, 105, 0.1);
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

// Inject styles
if (typeof document !== "undefined") {
  const style = document.createElement("style");
  style.textContent = formStyles;
  if (!document.head.querySelector("style[data-survey-modal]")) {
    style.setAttribute("data-survey-modal", "true");
    document.head.appendChild(style);
  }
}
