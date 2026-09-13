export type QuestionType = "text" | "tel" | "email" | "number" | "textarea" | "single" | "multi" | "scale" | "photo";

export interface QuestionDef {
  /** Used as the form field name (and the EmailJS template variable name). */
  id: string;
  label: string;
  type: QuestionType;
  options?: string[];
  /** For "multi": cap how many of `options` can be selected. */
  maxSelect?: number;
  optional?: boolean;
  placeholder?: string;
  /** Adds a free-text "Other" field alongside the options. */
  otherOption?: boolean;
  /** Only for type "scale". */
  scaleMin?: number;
  scaleMax?: number;
  /** Only for type "photo": how many photos this field accepts. */
  maxPhotos?: number;
}

export interface StepDef {
  id: string;
  title: string;
  description?: string;
  questions: QuestionDef[];
  /** If provided, this step is skipped unless the answers satisfy it. */
  showIf?: (answers: Record<string, unknown>) => boolean;
}

const hasBreakoutConcern = (answers: Record<string, unknown>) => {
  const concerns = (answers.mainConcerns as string[] | undefined) ?? [];
  return concerns.includes("Active breakouts") || concerns.includes("Blackheads or clogged pores");
};

export const surveySteps: StepDef[] = [
  {
    id: "basics",
    title: "A few basics",
    questions: [
      { id: "FullName", label: "Full name", type: "text" },
      { id: "Age", label: "Age", type: "number" },
      { id: "PhoneNumber", label: "Phone number", type: "tel" },
      { id: "Email", label: "Email", type: "email" },
      {
        id: "pregnancyStatus",
        label: "Are you currently:",
        type: "single",
        options: [
          "Pregnant",
          "Breastfeeding",
          "Trying to conceive",
          "Postpartum (within the last year)",
          "None of the above",
        ],
      },
    ],
  },
  {
    id: "goals",
    title: "What would you like to change about your skin?",
    questions: [
      {
        id: "mainConcerns",
        label: "Choose up to three things that bother you most right now:",
        type: "multi",
        maxSelect: 3,
        otherOption: true,
        options: [
          "Active breakouts",
          "Blackheads or clogged pores",
          "Marks left after breakouts",
          "Melasma or pigmentation",
          "Redness",
          "Sensitivity or stinging",
          "Dryness or flaking",
          "Oiliness",
          "Uneven texture",
          "Enlarged pores",
          "Wrinkles or loss of elasticity",
          "Acne scarring",
        ],
      },
      {
        id: "topPriority",
        label: "What's the one thing that matters most to you to improve?",
        type: "textarea",
      },
      {
        id: "bestSkinPeriod",
        label: "When was your skin at its best, and what was different back then?",
        type: "textarea",
      },
    ],
  },
  {
    id: "current-skin",
    title: "What's happening with your skin now?",
    questions: [
      {
        id: "skinType",
        label: "How would you usually describe your skin?",
        type: "single",
        options: ["Dry", "Oily", "Combination", "Balanced", "Sensitive", "Not sure"],
      },
      {
        id: "issueStartTime",
        label: "When did the issue that's bothering you start?",
        type: "single",
        options: [
          "In the last few weeks",
          "1–3 months ago",
          "3–12 months ago",
          "More than a year ago",
          "Since puberty",
          "It comes and goes",
        ],
      },
      {
        id: "changeTriggers",
        label: "Did the change start around any of the following?",
        type: "multi",
        otherOption: true,
        options: [
          "Pregnancy or childbirth",
          "Starting, stopping, or changing birth control pills",
          "Hormonal IUD or other hormonal treatment",
          "Fertility treatment",
          "A new medication or supplement",
          "Antibiotics",
          "A significant change in stress or sleep",
          "Moving, travel, or a climate change",
          "A new skincare product or treatment",
          "An illness",
          "I don't recall a specific change",
        ],
      },
      {
        id: "currentSensations",
        label: "What are you feeling in your skin right now?",
        type: "multi",
        options: ["Burning", "Itching", "Warmth/heat", "Pain", "Tightness", "Flaking", "Sensitivity to touch", "None of the above"],
      },
    ],
  },
  {
    id: "breakouts",
    title: "If you have breakouts or clogged pores",
    description: "This section only appears because you mentioned breakouts or clogged pores.",
    showIf: hasBreakoutConcern,
    questions: [
      {
        id: "breakoutLocations",
        label: "Where do most of the breakouts appear?",
        type: "multi",
        otherOption: true,
        options: ["Forehead", "Cheeks", "Nose", "Around the mouth", "Chin", "Jawline or neck", "Chest", "Back"],
      },
      {
        id: "breakoutType",
        label: "What type of breakout usually appears?",
        type: "single",
        options: [
          "Blackheads",
          "Small skin-colored bumps",
          "Red pimples",
          "Whiteheads",
          "Deep, painful pimples",
          "Itchy, uniform-sized bumps",
          "I'm not sure",
        ],
      },
      { id: "currentBreakoutStart", label: "When did the current breakout start?", type: "text" },
      {
        id: "breakoutPattern",
        label: "Are the breakouts:",
        type: "single",
        options: [
          "Constant / always present",
          "Mainly before your period",
          "Worse during stressful periods",
          "Started after a hormonal change",
          "Started after a new product, treatment, medication, or supplement",
          "No clear pattern",
        ],
      },
      {
        id: "breakoutMarks",
        label: "Do the breakouts leave behind:",
        type: "single",
        options: ["Red marks", "Brown marks", "Indentations or scars", "Usually no mark left"],
      },
      {
        id: "touchesBreakouts",
        label: "Do you touch, press, or pop your breakouts?",
        type: "single",
        options: ["Often", "Sometimes", "Almost never", "Never"],
      },
    ],
  },
  {
    id: "health",
    title: "Health and medical history",
    questions: [
      {
        id: "diagnoses",
        label: "Have you been diagnosed with any of the following?",
        type: "multi",
        otherOption: true,
        options: [
          "PCOS (Polycystic Ovary Syndrome)",
          "Thyroid condition",
          "Diabetes or insulin resistance",
          "Endometriosis",
          "Rosacea",
          "Eczema or dermatitis",
          "Skin allergies",
          "Herpes",
          "Autoimmune disease",
          "No known diagnoses",
        ],
      },
      {
        id: "currentSigns",
        label: "Do you currently have any of the following?",
        type: "multi",
        options: [
          "Irregular or absent periods",
          "Clear premenstrual flare-ups",
          "New or increased facial hair",
          "Significant hair loss",
          "Rapid or unexplained weight gain",
          "None of the above",
          "Not applicable to me",
        ],
      },
      {
        id: "prescriptionMeds",
        label: "Are you taking any prescription medications? If so, please list the names and when you started using them.",
        type: "textarea",
        optional: true,
      },
      {
        id: "pastTreatments",
        label: "Have you used any of the following treatments in the past year?",
        type: "multi",
        otherOption: true,
        options: [
          "Birth control or hormonal treatment",
          "Spironolactone",
          "Antibiotics",
          "Steroids",
          "Prescription tretinoin or retinoid",
          "Isotretinoin / Accutane",
          "None of the above",
        ],
      },
      {
        id: "knownAllergies",
        label: "Do you have any known allergies to medications, skincare products, or ingredients?",
        type: "textarea",
        optional: true,
      },
    ],
  },
  {
    id: "lifestyle",
    title: "Supplements, stress, and digestion",
    questions: [
      {
        id: "supplements",
        label: "Are you currently using any of the following?",
        type: "multi",
        otherOption: true,
        options: [
          "Biotin",
          "Vitamin B12",
          "Whey protein powder",
          "Collagen powder",
          "Pre-workout",
          "A hormonal or testosterone-boosting supplement",
          "Multivitamin",
          "I don't use any supplements",
        ],
      },
      { id: "stressLevel", label: "Your current stress level, from 1 to 10:", type: "scale", scaleMin: 1, scaleMax: 10 },
      {
        id: "sleepHours",
        label: "How many hours do you sleep on average?",
        type: "single",
        options: ["Less than 6 hours", "6–7 hours", "7–8 hours", "More than 8 hours"],
      },
      {
        id: "digestion",
        label: "Do you regularly experience:",
        type: "multi",
        options: [
          "Significant bloating",
          "Constipation or diarrhea",
          "Stomach pain",
          "A diagnosis of IBS or a bowel condition",
          "Frequent antibiotic use",
          "None of the above",
        ],
      },
      {
        id: "foodTrigger",
        label: "If you've noticed a certain food makes your skin worse, which food, and what happens afterward?",
        type: "textarea",
        optional: true,
      },
    ],
  },
  {
    id: "routine",
    title: "Your current skincare routine",
    description: "Please write the full name of each product. You'll be able to attach a photo of all your products together at the end if that's easier.",
    questions: [
      { id: "amCleanser", label: "Morning — Cleanser", type: "text", optional: true },
      { id: "amSerum", label: "Morning — Serum", type: "text", optional: true },
      { id: "amMoisturizer", label: "Morning — Moisturizer", type: "text", optional: true },
      { id: "amSpf", label: "Morning — SPF", type: "text", optional: true },
      { id: "amOther", label: "Morning — Additional products", type: "text", optional: true },
      { id: "pmCleanser", label: "Evening — Cleanser", type: "text", optional: true },
      { id: "pmTreatment", label: "Evening — Serum or treatment", type: "text", optional: true },
      { id: "pmRetinol", label: "Evening — Retinol / Retinoid", type: "text", optional: true },
      { id: "pmAcid", label: "Evening — Acid or exfoliant", type: "text", optional: true },
      { id: "pmMoisturizer", label: "Evening — Moisturizer", type: "text", optional: true },
      { id: "pmOther", label: "Evening — Additional products", type: "text", optional: true },
      {
        id: "activesFrequency",
        label: "How often do you use acids, peels, or retinol?",
        type: "single",
        options: ["Never", "Once a week", "2–3 times a week", "4+ times a week", "Almost every night"],
      },
      {
        id: "routineDuration",
        label: "How long have you been using your current routine?",
        type: "single",
        options: ["Less than 2 weeks", "2–6 weeks", "2–6 months", "More than 6 months"],
      },
      {
        id: "productReaction",
        label: "Does any product cause burning, redness, dryness, or worsened breakouts?",
        type: "textarea",
        optional: true,
      },
      {
        id: "routineChanges",
        label: "What has changed in your routine over the past three months?",
        type: "textarea",
        optional: true,
      },
      {
        id: "triedAlready",
        label: "What products or treatments have you already tried for this concern, and for how long?",
        type: "textarea",
        optional: true,
      },
    ],
  },
  {
    id: "professional-treatments",
    title: "Professional treatments",
    questions: [
      {
        id: "recentTreatments",
        label: "What treatments have you had in the past six months, and when?",
        type: "multi",
        otherOption: true,
        options: [
          "Facial",
          "Chemical peel",
          "Microneedling",
          "Laser or IPL",
          "RF or heat-based treatment",
          "Injections or fillers",
          "Waxing or facial hair removal",
          "No treatments done",
        ],
      },
      {
        id: "badReaction",
        label: "Have you ever had an unusual reaction to a treatment or product?",
        type: "textarea",
        optional: true,
      },
    ],
  },
  {
    id: "personalization",
    title: "Personalizing your recommendations",
    questions: [
      {
        id: "routineComplexity",
        label: "What routine could you realistically stick to consistently?",
        type: "single",
        options: ["Basic, 3–4 products", "Moderate, 5–6 products", "Advanced, as many steps as needed"],
      },
      {
        id: "budget",
        label: "What's your preferred budget for a full routine?",
        type: "single",
        options: ["Up to $200", "$200–$400", "$400–$600", "Budget is flexible depending on need"],
      },
      {
        id: "avoidances",
        label: "Are there any ingredients, brands, or product types you'd rather avoid?",
        type: "textarea",
        optional: true,
      },
    ],
  },
  {
    id: "photos",
    title: "Your skin photos",
    description:
      "Please attach three current photos — straight-on, right side, and left side. Take them in daylight, without makeup, without filters, and ideally before applying your morning products.",
    questions: [
      { id: "photoFront", label: "Straight-on, facing the camera", type: "photo", maxPhotos: 1 },
      { id: "photoRight", label: "Right side", type: "photo", maxPhotos: 1 },
      { id: "photoLeft", label: "Left side", type: "photo", maxPhotos: 1 },
      {
        id: "photoExtra",
        label: "Optional: recent bloodwork, or photos of products you couldn't identify",
        type: "photo",
        maxPhotos: 3,
        optional: true,
      },
    ],
  },
];
