"use client";

import { useState } from "react";

export default function SurveyModal({ onSkip, onComplete }) {
  const [step, setStep] = useState(0);

  const steps = [
    <Step1 key="1" />,
    <Step2 key="2" />,
    <Step3 key="3" />,
    <Step4 key="4" />,
    <Step5 key="5" />,
    <Step6 key="6" />,
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
      <form
        style={box}
        className="survey-modal survey-isolated"
        onSubmit={(e) => e.preventDefault()}
      >
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

        {steps[step]}

        <div style={nav}>
          <div>
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
      </form>
    </div>
  );
}

// Section 1: Basic Information
function Step1() {
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
      <select required>
        <option value="">Select accommodation</option>
        <option>Beit Hall</option>
        <option>Wilson House</option>
        <option>Xenia</option>
        <option>Parsons House</option>
        <option>Kemp Porter Buildings</option>
        <option>Woodward Buildings</option>
        <option>Other (Please Specify)</option>
      </select>

      <label>What year of study are you in?</label>
      {[
        "Undergraduate – Year 1",
        "Undergraduate – Year 2",
        "Undergraduate – Year 3",
        "Undergraduate – Year 4+",
        "Postgraduate",
        "PhD / Research",
      ].map((year) => (
        <div key={year}>
          <input type="radio" name="year" id={year} />
          <label htmlFor={year}>{year}</label>
        </div>
      ))}
    </>
  );
}

// Section 2: Eating & Food Preferences
function Step2() {
  return (
    <>
      <h2>Eating & Food Preferences</h2>

      <label>
        How often do you currently eat homemade or fresh cooked meals?
      </label>
      {["Daily", "4–6 times a week", "2–3 times a week", "Rarely", "Never"].map(
        (opt) => (
          <div key={opt}>
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
        <div key={opt}>
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
        <div key={cuisine}>
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
        <div key={flavor}>
          <input type="radio" name="flavor" id={flavor} />
          <label htmlFor={flavor}>{flavor}</label>
        </div>
      ))}
    </>
  );
}

// Section 3: Meal Requirements
function Step3() {
  return (
    <>
      <h2>Meal Requirements</h2>

      <label>How many meal boxes would you require per week?</label>
      {["1–2", "3–4", "5–6", "7–10", "11+ meals"].map((num) => (
        <div key={num}>
          <input type="radio" name="mealsPerWeek" id={num} />
          <label htmlFor={num}>{num}</label>
        </div>
      ))}

      <label>Which meals are you interested in?</label>

      {["Lunch", "Dinner", "Both lunch and dinner"].map((meal) => (
        <div key={meal}>
          <input
            type="radio"
            name="mealPreference" // 👈 SAME name = single select
            id={meal}
            value={meal}
          />
          <label htmlFor={meal}>{meal}</label>
        </div>
      ))}

      <label>What portion size do you prefer?</label>
      {["Regular", "Large / High-protein", "Small / Budget option"].map(
        (size) => (
          <div key={size}>
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
        <div key={pref}>
          <input type="radio" name="planType" id={pref} />
          <label htmlFor={pref}>{pref}</label>
        </div>
      ))}
    </>
  );
}

// Section 4: Delivery & Drop-off Points
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
        <div key={point}>
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
        <div key={time}>
          <input type="checkbox" id={time} />
          <label htmlFor={time}>{time}</label>
        </div>
      ))}
    </>
  );
}

// Section 5: Price Sensitivity
function Step5() {
  return (
    <>
      <h2>Price Sensitivity</h2>

      <label>
        What is a reasonable price for one healthy homemade meal box?
      </label>
      {["£3–£4", "£4–£5", "£5–£6", "£6–£7", "£7+"].map((price) => (
        <div key={price}>
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
        <div key={extra}>
          <input type="checkbox" id={extra} />
          <label htmlFor={extra}>{extra}</label>
        </div>
      ))}
    </>
  );
}

// Section 6: Experience & Feedback + Reward Confirmation
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
        <div key={struggle}>
          <input type="checkbox" id={struggle} />
          <label htmlFor={struggle}>{struggle}</label>
        </div>
      ))}
      <input type="text" placeholder="Other (please specify)" />

      <label>
        Would you be willing to recommend UniEat to friends if you like it?
      </label>
      {["Definitely", "Maybe", "Probably not"].map((rec) => (
        <div key={rec}>
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

// Styles remain unchanged
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
/* 🔒 HARD ISOLATION */
    .survey-isolated {
    all: initial;
    font-family: inherit;
    color: #333;
    }

    .survey-isolated * {
    box-sizing: border-box;
    font-family: inherit;
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

  /* Radio & Checkbox Custom Styling - Imperial Red #c8102e */
  .survey-modal input[type="radio"],
  .survey-modal input[type="checkbox"] {
    -webkit-appearance: none;
    appearance: none;
    width: 18px;
    height: 18px;
    border: 2px solid #999;
    border-radius: 4px;
    margin-right: 10px;
    cursor: pointer;
    position: relative;
    transition: all 0.2s ease;
    flex-shrink: 0;
  }

  .survey-modal input[type="radio"] {
    border-radius: 50%;
  }

  /* Checked state - fill with #c8102e */
  .survey-modal input[type="radio"]:checked,
  .survey-modal input[type="checkbox"]:checked {
    border-color: #c8102e;
    background-color: #c8102e;
  }

  /* Inner checkmark/dot */
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

  /* Hover state */
  .survey-modal input[type="radio"]:hover,
  .survey-modal input[type="checkbox"]:hover {
    border-color: #c8102e;
    box-shadow: 0 0 0 3px rgba(200, 16, 46, 0.15);
  }

  /* Focus state for accessibility */
  .survey-modal input[type="radio"]:focus-visible,
  .survey-modal input[type="checkbox"]:focus-visible {
    outline: none;
    box-shadow: 0 0 0 3px rgba(200, 16, 46, 0.3);
  }

  .survey-modal div {
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .survey-modal div > label {
    margin: 0;
    cursor: pointer;
    font-weight: normal;
  }

  .survey-modal textarea {
    resize: vertical;
    min-height: 80px;
  }

  /* Button Hover Effects */
  .survey-modal .survey-next:hover,
  .survey-modal .survey-next:focus-visible {
    background: #0a2f8f;
    transform: translateY(-1.5px);
    box-shadow: 0 6px 14px rgba(1, 33, 105, 0.35);
    outline: none;
  }

  .survey-modal .survey-prev:hover,
  .survey-modal .survey-prev:focus-visible {
    background: #eef2fa;
    border-color: #a9b9dc;
    transform: translateY(-1.5px);
    box-shadow: 0 4px 10px rgba(1, 33, 105, 0.18);
    outline: none;
  }

  .survey-modal .survey-skip:hover,
  .survey-modal .survey-skip:focus-visible {
    color: #8b0000 !important;
    text-decoration: none;
    outline: none;
  }

  /* Select styling reset */
  .survey-modal select {
    appearance: auto !important;
    -webkit-appearance: menulist !important;
    background: #ffffff !important;
    border: 1px solid #ddd !important;
    border-radius: 5px !important;
    padding: 10px 12px !important;
    font-size: 14px !important;
    color: #333 !important;
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

  /* ✅ NATIVE SELECT – PRODUCTION SAFE */
    .survey-isolated select {
        all: revert !important;
        appearance: menulist !important;
        -webkit-appearance: menulist !important;
        -moz-appearance: menulist !important;
        width: 100%;
        padding: 10px 12px;
        border: 1px solid #ddd;
        border-radius: 5px;
        background: #fff;
    }

    /* KILL THEME PSEUDO ELEMENTS */
    .survey-isolated select::before,
    .survey-isolated select::after {
        content: none !important;
        display: none !important;
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
