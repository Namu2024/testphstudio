import React from "react";

const FloorPlans = () => {
  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h4>Floor Plans</h4>
      <ul style={{ textAlign: "left" }}>
        <li>Compose floor-wise sheets.</li>
      </ul>

      <h4 style={{ textAlign: "left" }}>
        Following things to check on this drawing:
      </h4>
      <ul style={{ textAlign: "left" }}>
        <li>Wall tags</li>
        <li>
          Building outside dimensions (While doing dimensions, the outermost
          string should have "OUT TO OUT" in brackets. The same dimensions
          should not repeat on the other side of the building.)
        </li>
        <li>Grid dimensions</li>
        <li>
          Interior elevation tags (In the A-Notes layer, adjust as per
          availability in the plan.)
        </li>
        <li>Equipment</li>
        <li>Millwork</li>
        <li>
          Grid lines (Vertical: right to left numbers, Horizontal: top to bottom
          numbers.)
        </li>
        <li>Section marks</li>
        <li>
          Area - for each use of the building. Should not be visible in other
          types of floor plans. (Includes exterior walls and half of interior
          walls if a common wall exists between two premises.)
        </li>
        <li>Fire rating - wall marking</li>
      </ul>
    </div>
  );
};

export default FloorPlans;
