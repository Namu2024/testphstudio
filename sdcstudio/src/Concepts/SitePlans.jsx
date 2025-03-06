import React from "react";

const SitePlans = () => {
  return (
    <div>
      <h3 style={{ textAlign: "center" }}>Site Plan</h3>
      <br></br>

      <h4>Work flow:</h4>
      <ul>
        <li>Take file from schematic.</li>
        <li>Check new building boundary from floor plan.</li>
        <li>Make new boundary as per building profile.</li>
        <li>Check all areas again.</li>
        <li>
          Start giving dimensions (one string in horizontal line, one string in
          vertical line. It should be covering major elements of the site.)
        </li>
        <li>
          Check building OUT TO OUT dimension from floor plan and try to match
          with site plan.
        </li>
      </ul>

      <h4>Sheet Composition:</h4>
      <ul>
        <li>Start with reference drawing.</li>
        <li>Or decide paper size first in page setup.</li>
        <li>
          Then check with viewport scale and see how much content you can put
          into it.
        </li>
      </ul>

      <h4>Exporting PDF:</h4>
      <ul>
        <li>Please check all things printed in PDF correctly.</li>
      </ul>
    </div>
  );
};

export default SitePlans;
