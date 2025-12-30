"use client";

import { useState, useEffect } from "react";
import Select from "react-select";

export default function SurveyModal({ onSkip, onComplete }) {
  const [step, setStep] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({});
  const [errorMsg, setErrorMsg] = useState("");
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = "");
  }, []);
  const API_URL = process.env.NEXT_PUBLIC_API_URL;

  const submitSurvey = async () => {
    try {
      const res = await fetch(`${API_URL}/api/survey/submit`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        throw new Error("Survey submission failed");
      }

      setIsSubmitted(true);
    } catch (error) {
      console.error("Submit failed", error);
      setErrorMsg("Submission failed. Please try again.");
    }
  };

  const updateField = (name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const toggleArray = (name, value) => {
    setFormData((prev) => ({
      ...prev,
      [name]: prev[name]?.includes(value)
        ? prev[name].filter((v) => v !== value)
        : [...(prev[name] || []), value],
    }));
  };

  const steps = [
    <Step1 key="1" formData={formData} updateField={updateField} />,
    <Step2
      key="2"
      formData={formData}
      updateField={updateField}
      toggleArray={toggleArray}
    />,
    <Step3
      key="3"
      formData={formData}
      updateField={updateField}
      toggleArray={toggleArray}
    />,
    <Step4
      key="4"
      formData={formData}
      updateField={updateField}
      toggleArray={toggleArray}
    />,
    <Step5 key="5" formData={formData} updateField={updateField} />,
  ];

  const next = () => {
    // 🔴 STEP 1 validation (Name & Email)
    if (step === 0) {
      if (!formData.fullName?.trim() || !formData.email?.trim()) {
        setErrorMsg("Please enter your Name and Email to continue.");

        setTimeout(() => setErrorMsg(""), 5000);
        return;
      }
    }

    // 🔴 FINAL STEP validation (Consent checkbox)
    if (step === steps.length - 1) {
      if (!formData.consent) {
        setErrorMsg("Please accept the acknowledgement to submit the survey.");

        setTimeout(() => setErrorMsg(""), 5000);
        return;
      }
    }

    // ✅ clear message if valid
    setErrorMsg("");

    if (step < steps.length - 1) {
      setStep(step + 1);
    } else {
      submitSurvey();
    }
  };

  const prev = () => step > 0 && setStep(step - 1);

  return (
    <div style={overlay}>
      <form
        style={box}
        className="survey-modal"
        onSubmit={(e) => e.preventDefault()}
      >
        {errorMsg && (
          <div
            style={{
              background: "#fdecea",
              color: "#b71c1c",
              padding: "8px 12px",
              borderRadius: "6px",
              marginBottom: "15px",
              fontWeight: "600",
              textAlign: "center",
            }}
          >
            {errorMsg}
          </div>
        )}

        {isSubmitted ? (
          <SuccessScreen onClose={onComplete} />
        ) : (
          <>
            {/* HEADER */}
            <h2
              style={{
                color: "#666",
                textDecoration: "none",
                fontSize: "20px",
                fontWeight: "bold",
              }}
            >
              Survey Form
            </h2>

            <div style={headerContainer}>
              {/*               <div style={progress}>
                Step {step + 1} of {steps.length}
              </div> */}
              <button type="button" onClick={onSkip} style={skipBtn}>
                Skip
              </button>
            </div>

            {/* STEP INDICATOR */}
            <div className="step-indicator">
              {steps.map((_, i) => (
                <div
                  key={i}
                  className={`step-dot ${
                    i < step ? "done" : i === step ? "active" : ""
                  }`}
                >
                  {i + 1}
                </div>
              ))}
            </div>

            {/* CONTENT */}
            <div className="survey-content">{steps[step]}</div>

            {/* NAV */}
            <div style={nav}>
              {step > 0 && (
                <button type="button" onClick={prev} style={prevBtn}>
                  Prev
                </button>
              )}
              <button type="button" onClick={next} style={nextBtn}>
                {step === steps.length - 1 ? "Submit" : "Next"}
              </button>
            </div>
          </>
        )}
      </form>
    </div>
  );
}

/* =======================
   STEP COMPONENTS
======================= */
/* 🔴 UNCHANGED – your exact steps stay as-is */

function Step1({ formData, updateField }) {
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

      {/* FULL NAME – REQUIRED */}
      <label>Full Name *</label>
      <input
        type="text"
        placeholder="Enter your full name"
        value={formData.fullName || ""}
        onChange={(e) => updateField("fullName", e.target.value)}
      />

      {/* EMAIL – REQUIRED */}
      <label>Imperial College Email *</label>
      <input
        type="email"
        placeholder="name@imperial.ac.uk"
        value={formData.email || ""}
        onChange={(e) => updateField("email", e.target.value)}
      />

      {/* ACCOMMODATION */}
      <label>
        Which Imperial College accommodation/hostel do you currently live in?
      </label>
      <Select
        options={options}
        value={options.find((o) => o.value === formData.accommodation) || null}
        onChange={(opt) => updateField("accommodation", opt ? opt.value : "")}
        isClearable
      />

      {/* YEAR OF STUDY */}
      <label>What year of study are you in?</label>
      <div className="option-grid">
        {[
          "Undergraduate – Year 1",
          "Undergraduate – Year 2",
          "Undergraduate – Year 3",
          "Undergraduate – Year 4+",
          "Postgraduate",
          "PhD / Research",
        ].map((year) => (
          <div className="option-row" key={year}>
            <input
              type="radio"
              name="yearOfStudy"
              checked={formData.yearOfStudy === year}
              onChange={() => updateField("yearOfStudy", year)}
            />
            <label>{year}</label>
          </div>
        ))}
      </div>

      {/* HOMEMADE MEAL FREQUENCY */}
      <label>
        How often do you currently eat homemade or fresh cooked meals?
      </label>
      <div className="option-grid">
        {[
          "Daily",
          "4–6 times a week",
          "2–3 times a week",
          "Rarely",
          "Never",
        ].map((opt) => (
          <div className="option-row" key={opt}>
            <input
              type="radio"
              name="homemadeFrequency"
              checked={formData.homemadeFrequency === opt}
              onChange={() => updateField("homemadeFrequency", opt)}
            />
            <label>{opt}</label>
          </div>
        ))}
      </div>
    </>
  );
}

/* ⚠️ ALL OTHER STEPS REMAIN IDENTICAL – ONLY GRID CLASS APPLIES */
/* (I did not alter wording/options anywhere) */

function Step2({ formData, updateField, toggleArray }) {
  return (
    <>
      <h2>Eating & Food Preferences</h2>

      {/* MEAL TYPE – CHECKBOX (MULTI) */}
      <label>What is your preferred meal type? (Select all that apply)</label>
      <div className="option-grid">
        {[
          "Vegetarian",
          "Vegan",
          "Non-vegetarian",
          "Halal",
          "Dairy-free",
          "Gluten-free",
        ].map((opt) => (
          <div className="option-row" key={opt}>
            <input
              type="checkbox"
              checked={formData.mealTypes?.includes(opt) || false}
              onChange={() => toggleArray("mealTypes", opt)}
            />
            <label>{opt}</label>
          </div>
        ))}
      </div>

      {/* OTHER DIET */}
      <input
        type="text"
        placeholder="Other dietary restrictions"
        value={formData.otherDiet || ""}
        onChange={(e) => updateField("otherDiet", e.target.value)}
      />

      {/* MEALS PER WEEK */}
      <label>How many meal boxes would you require per week?</label>
      <div className="option-grid">
        {["1–2", "3–4", "5–6", "7–10", "11+ meals"].map((num) => (
          <div className="option-row" key={num}>
            <input
              type="radio"
              name="mealsPerWeek"
              checked={formData.mealsPerWeek === num}
              onChange={() => updateField("mealsPerWeek", num)}
            />
            <label>{num}</label>
          </div>
        ))}
      </div>

      {/* MEAL PREFERENCE */}
      <label>Which meals are you interested in?</label>
      <div className="option-grid">
        {["Lunch", "Dinner", "Both lunch and dinner"].map((meal) => (
          <div className="option-row" key={meal}>
            <input
              type="radio"
              name="mealPreference"
              checked={formData.mealPreference === meal}
              onChange={() => updateField("mealPreference", meal)}
            />
            <label>{meal}</label>
          </div>
        ))}
      </div>
    </>
  );
}

/* Remaining steps unchanged */
function Step3({ formData, updateField, toggleArray }) {
  return (
    <>
      <h2>Meal Requirements</h2>

      {/* PORTION SIZE */}
      <label>What portion size do you prefer?</label>
      <div className="option-grid">
        {["Regular", "Large / High-protein", "Small / Budget option"].map(
          (size) => (
            <div className="option-row" key={size}>
              <input
                type="radio"
                name="portion"
                checked={formData.portion === size}
                onChange={() => updateField("portion", size)}
              />
              <label>{size}</label>
            </div>
          )
        )}
      </div>

      {/* PLAN TYPE */}
      <label>Do you prefer weekly meal plans or order-per-meal?</label>
      <div className="option-grid">
        {[
          "Weekly meal plan subscription",
          "Order whenever needed",
          "Not sure yet",
        ].map((pref) => (
          <div className="option-row" key={pref}>
            <input
              type="radio"
              name="planType"
              checked={formData.planType === pref}
              onChange={() => updateField("planType", pref)}
            />
            <label>{pref}</label>
          </div>
        ))}
      </div>

      {/* DROPOFF POINT */}
      <label>What is your preferred delivery drop-off point?</label>
      <div className="option-grid">
        {[
          "Hostel reception",
          "Shared kitchen area",
          "Outside main entrance",
          "On-campus pickup point",
        ].map((point) => (
          <div className="option-row" key={point}>
            <input
              type="radio"
              name="dropoff"
              checked={formData.dropoff === point}
              onChange={() => updateField("dropoff", point)}
            />
            <label>{point}</label>
          </div>
        ))}
      </div>

      {/* OTHER DROPOFF */}
      <input
        type="text"
        placeholder="Other (please specify)"
        value={formData.otherDropoff || ""}
        onChange={(e) => updateField("otherDropoff", e.target.value)}
      />

      {/* DELIVERY TIMES */}
      <label>
        What time window is ideal for delivery? (Select all that apply)
      </label>
      <div className="option-grid">
        {[
          "11:30 AM – 1:00 PM (Lunch)",
          "1:00 PM – 2:30 PM (Late lunch)",
          "6:00 PM – 7:30 PM (Dinner)",
          "7:30 PM – 9:00 PM (Late dinner)",
        ].map((time) => (
          <div className="option-row" key={time}>
            <input
              type="checkbox"
              checked={formData.deliveryTimes?.includes(time) || false}
              onChange={() => toggleArray("deliveryTimes", time)}
            />
            <label>{time}</label>
          </div>
        ))}
      </div>
    </>
  );
}

function Step4({ formData, updateField, toggleArray }) {
  return (
    <>
      <h2>Delivery & Drop-off Points</h2>

      {/* PRICE RANGE */}
      <label>
        What is a reasonable price for one healthy homemade meal box?
      </label>
      <div className="option-grid">
        {["£3–£4", "£4–£5", "£5–£6", "£6–£7", "£7+"].map((price) => (
          <div className="option-row" key={price}>
            <input
              type="radio"
              name="priceRange"
              checked={formData.priceRange === price}
              onChange={() => updateField("priceRange", price)}
            />
            <label>{price}</label>
          </div>
        ))}
      </div>

      {/* PAID EXTRAS */}
      <label>
        Would you pay slightly more for any of the following? (tick all that
        apply)
      </label>
      <div className="option-grid">
        {[
          "Organic ingredients",
          "High-protein / Gym-friendly meals",
          "Premium packaging",
          "Chef-special / rotating menu",
          "Dessert add-on",
        ].map((extra) => (
          <div className="option-row" key={extra}>
            <input
              type="checkbox"
              checked={formData.paidExtras?.includes(extra) || false}
              onChange={() => toggleArray("paidExtras", extra)}
            />
            <label>{extra}</label>
          </div>
        ))}
      </div>

      {/* STRUGGLES */}
      <label>What do you currently struggle with regarding food at uni?</label>
      <div className="option-grid">
        {[
          "Too expensive",
          "Lack of variety",
          "Not healthy enough",
          "Takes too long to cook",
          "Dietary restrictions not met",
          "Missing homemade taste",
        ].map((struggle) => (
          <div className="option-row" key={struggle}>
            <input
              type="checkbox"
              checked={formData.struggles?.includes(struggle) || false}
              onChange={() => toggleArray("struggles", struggle)}
            />
            <label>{struggle}</label>
          </div>
        ))}
      </div>

      {/* OTHER STRUGGLE */}
      <input
        type="text"
        placeholder="Other (please specify)"
        value={formData.otherStruggle || ""}
        onChange={(e) => updateField("otherStruggle", e.target.value)}
      />
    </>
  );
}

function Step5({ formData, updateField }) {
  return (
    <>
      <h2>Experience & Feedback</h2>

      {/* RECOMMENDATION */}
      <label>
        Would you be willing to recommend Food Go to friends if you like it?
      </label>
      <div className="option-grid">
        {["Definitely", "Maybe", "Probably not"].map((rec) => (
          <div className="option-row" key={rec}>
            <input
              type="radio"
              name="recommend"
              checked={formData.recommend === rec}
              onChange={() => updateField("recommend", rec)}
            />
            <label>{rec}</label>
          </div>
        ))}
      </div>

      {/* MENU IDEAS */}
      <label>Any meals you would love to see in our menu? (Open-ended)</label>
      <textarea
        placeholder="Share your ideas..."
        value={formData.menuSuggestions || ""}
        onChange={(e) => updateField("menuSuggestions", e.target.value)}
      />

      {/* ADDITIONAL FEEDBACK */}
      <label>Any additional feedback or suggestions? (Open-ended)</label>
      <textarea
        placeholder="Let us know your thoughts..."
        value={formData.feedback || ""}
        onChange={(e) => updateField("feedback", e.target.value)}
      />

      {/* CONSENT – REQUIRED */}
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
          <input
            type="checkbox"
            checked={formData.consent || false}
            onChange={(e) => updateField("consent", e.target.checked)}
            style={{ marginRight: "10px" }}
          />
          {/* I acknowledge that I will receive a free UniEat homemade meal box
          after successfully completing this survey. */}
        </label>
      </div>
    </>
  );
}

/* =======================
   SUCCESS
======================= */

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

/* =======================
   STYLES
======================= */

const overlay = {
  position: "fixed",
  inset: 0,
  background: "rgba(0,0,0,0.85)",
  backdropFilter: "blur(4px)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 999999,
};

const box = {
  background: "#fff",
  width: "100%",
  maxWidth: 760,
  height: "90vh",
  padding: 30,
  borderRadius: 12,
  display: "flex",
  maxHeight: "90vh", // max height relative to viewport
  overflowY: "auto",
  boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
  flexDirection: "column",
  zIndex: 1000000,
};

const headerContainer = {
  display: "flex",
  justifyContent: "space-between",
  marginBottom: 10,
};

const progress = { fontSize: 14, color: "#666" };

const nav = {
  display: "flex",
  justifyContent: "flex-end",
  gap: 10,
  borderTop: "1px solid #eee",
  paddingTop: 20,
};

const nextBtn = {
  background: "#012169",
  color: "#fff",
  padding: "12px 22px",
  borderRadius: 6,
  border: "none",
  fontWeight: 600,
};

const prevBtn = {
  background: "#f6f8fb",
  padding: "12px 22px",
  borderRadius: 6,
  border: "1px solid #ccc",
};

const skipBtn = {
  background: "none",
  border: "none",
  float: "right",
  color: "#c8102e",
  fontWeight: 600,
};

/* =======================
   CSS INJECTION
======================= */

const css = `
.step-indicator{
  display:flex;
  justify-content:center;
  gap:12px;
  margin-bottom:15px;
}
.step-dot{
  width:34px;
  height:34px;
  border-radius:50%;
  background:#d1d5db;
  display:flex;
  align-items:center;
  justify-content:center;
  font-weight:600;
}
.step-dot.active{background:#012169;color:#fff}
.step-dot.done{background:#22c55e;color:#fff}

.survey-content{
  flex:1;
  overflow-y:auto;
}

.option-grid{
  display:grid;
  grid-template-columns:repeat(2,1fr);
  gap:7px 20px;
}
.option-row{
  display:flex;
  align-items:center;
  gap:10px;
}

@media(max-width:640px){
  .option-grid{grid-template-columns:1fr}
}


  .survey-modal {
    max-height: 90vh;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
  }

  .survey-modal h2 {
    font-size: 18px;
    color: #c8102e;
    margin-bottom: 15px;
    margin-top: 0;
    text-decoration: underline;
    text-align: center;
  }

  .survey-modal label {
    display: block;
    margin-bottom: 8px;
    margin-top: 10px;
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
    margin-bottom: 9px;
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

if (typeof document !== "undefined") {
  const style = document.createElement("style");
  style.innerHTML = css;
  document.head.appendChild(style);
}
