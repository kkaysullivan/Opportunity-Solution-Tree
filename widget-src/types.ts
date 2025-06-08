export type CardType =
  | "Business Outcome"
  | "Product Outcome"
  | "Objective"
  | "Key Result"
  | "Opportunity"
  | "Solution"
  | "Assumption"
  | "Experiment"
;

export const cardTypes: CardType[] = [
  "Business Outcome",
  "Product Outcome",
  "Objective",
  "Key Result",
  "Opportunity",
  "Solution",
  "Assumption",
  "Experiment"
]

export const cardHierarchyRanking: { [t in CardType]: number} = {
  "Business Outcome": 1,
  "Product Outcome": 2,
  "Objective": 1,
  "Key Result": 2,
  "Opportunity": 3,
  "Solution": 4,
  "Assumption": 5,
  "Experiment": 6
}


export const cardLabels: { [t in CardType]: string } = {
  "Business Outcome": "Business Outcome",
  "Product Outcome": "Product Outcome",
  "Objective": "Objective",
  "Key Result": "Key Result",
  "Opportunity": "Opportunity",
  "Solution": "Solution",
  "Assumption": "Assumption",
  "Experiment": "Experiment"
};

export const placeholderTextColors: { [t in CardType]: string } = {
  "Business Outcome": "#555555",   // Darker gray
  "Product Outcome":  "#4a4a4a",
  "Objective":        "#4a4a4a",
  "Key Result":       "#4a4a4a",
  "Opportunity":      "#333333",
  "Solution":         "#333333",
  "Assumption":       "#333333",
  "Experiment":       "#333333"
};


// These colors are used for the text in the card label.
export const cardLabelTextColors: { [t in CardType]: string } = {
  "Business Outcome": "#ffffff",
  "Product Outcome": "ffffff",
  "Objective": "#ffffff",
  "Key Result": "#ffffff",
  "Opportunity": "#ffffff",
  "Solution": "#ffffff",
  "Assumption": "#ffffff",
  "Experiment": "#ffffff"
};

// These colors are used for the card itself.
export const cardColors: { [t in CardType]: string } = {
  "Business Outcome": "#44367B", // Violet 70
  "Product Outcome":  "#004477", // Blue 70
  "Objective":        "#44367B", // Violet 70
  "Key Result":       "#004477", // Blue 70
  "Opportunity":      "#1B8533", // Green 70
  "Solution":         "#B88907", // Yellow 70
  "Assumption":       "#007384", // Aqua 70
  "Experiment":       "#495257" // Grey 70
}

export const cardLinkColors: { [t in CardType]: string } = {
  "Business Outcome": "#534296", // Violet 60
  "Product Outcome": "#0073B9", // Blue 50
  "Objective": "#534296", // Violet 60
  "Key Result": "#0073B9", // Blue 50
  "Opportunity": "#24A344", // Green 60
  "Solution": "#B88907", // Yellow 70
  "Assumption": "#0097A8", // Aqua 60
  "Experiment": "#69757A" // Grey 60
};

// These colors are used for text in the card.
export const cardTextColors: { [t in CardType]: string } = {
  "Business Outcome": "#271F47", // Violet 90
  "Product Outcome": "#002342", // Blue 90
  "Objective": "#271F47", // Violet 90
  "Key Result": "#002342", // Blue 90
  "Opportunity": "#094212", // Green 90
  "Solution": "#4D2D02", // Yellow 90
  "Assumption": "#003540", // Aqua 90
  "Experiment": "#1F2426" // Grey 90
};

// These colors are used for the background of the card.
export const cardBackgroundColors: { [t in CardType]: string } = {
  "Business Outcome": "#F3F1F9", // Violet 5
  "Product Outcome": "#EBF4FA", // Blue 5
  "Objective": "#F3F1F9", // Violet 5
  "Key Result": "#EBF4FA", // Blue 5
  "Opportunity": "#EAF8EE", // Green 5
  "Solution": "#FEFAE7", // Yellow 5
  "Assumption": "#E5F7F9", // Aqua 5
  "Experiment": "#F5F7F8" // Grey 10
};

export const cartTypeRelations: { [t in CardType]: { parent: CardType|null, child: CardType|null }} = {
  "Business Outcome": { parent: null,                 child: "Product Outcome"  },
  "Product Outcome":  { parent: "Business Outcome",   child: "Opportunity"      },
  "Objective":        { parent: null,                 child: "Key Result"       },
  "Key Result":       { parent: "Objective",          child: "Opportunity"      },
  "Opportunity":      { parent: "Product Outcome",    child: "Solution"         },
  "Solution":         { parent: "Opportunity",        child: "Assumption"       },
  "Assumption":       { parent: "Solution",           child: "Experiment"       },
  "Experiment":       { parent: "Assumption",         child: null               }
}

export interface CardStatusUI {
    color: string
}

export type CardStatusType = 
    | "New"
    | "Discovery"
    | "Candidate"
    | "Planned"
    | "In progress"
    | "Done"
    | "On hold"
    | "Backlog"
    | "Blocked"
    | "Won't do"
;

export const cardStatuses: { [ s in CardStatusType]:CardStatusUI } = {
    "New":          { color: "#d4d5d8" },
    "Discovery":    { color: "#54c7ec" },
    "Candidate":    { color: "#9747ff" },
    "Planned":      { color: "#3578e5" },
    "In progress":  { color: "#ffba00" },
    "Done":         { color: "#00a400" },
    "On hold":      { color: "#a4a6a8" },
    "Backlog":      { color: "#d4d5d8" },
    "Blocked":      { color: "#e13238" },
    "Won't do":     { color: "#666" },
}

export type Link = {
  key: string,
  text: string,
  url: string
}