import React, { useState } from "react";
import Sidebar from "./Sidebar";
import PhStudio from "./Concepts/PhStudio";
import Overview from "./Concepts/Overview";
import GeneralTechnical from "./Concepts/GeneralTechnical";
import GeneralDrafting from "./Concepts/GeneralDrafting";
import GeneralBIM from "./Concepts/GeneralBIM";
import FolderStructure from "./Concepts/FolderStructure";
import FileNaming from "./Concepts/FileNaming";
import ProjectType1 from "./Concepts/ProjectType1";
import BaseFile from "./Concepts/BaseFile";
import ArchitectureSheets from "./Concepts/ArchitectureSheets";
import FloorPlans from "./Concepts/FloorPlans";
import RCP from "./Concepts/RCP";
import EquipmentPlan from "./Concepts/EquipmentPlan";
import Elevations from "./Concepts/Elevations";
import Sections from "./Concepts/Sections";
import InteriorElevations from "./Concepts/InteriorElevations";
import EnlargeRestrooms from "./Concepts/EnlargeRestrooms";
import FuelDrawing from "./Concepts/FuelDrawing";
import PipingDrawing from "./Concepts/PipingDrawing";
import FloorPlansSeriesA101 from "./Concepts/FloorPlansSeriesA101";
import SitePlanSeriesA001 from "./Concepts/SitePlanSeriesA001";
import SitePlans from "./Concepts/SitePlans";
import SiteDetails from "./Concepts/SiteDetails";
import FireLanePlan from "./Concepts/FireLanePlan";

const EmployeeLayout = () => {
  const [activeContent, setActiveContent] = useState(null);

  const renderContent = () => {
    switch (activeContent) {
      case "phstudio":
        return <PhStudio />;
      case "overview":
        return <Overview />;
      case "general-technical":
        return <GeneralTechnical />;
      case "general-drafting":
        return <GeneralDrafting />;
      case "general-bim":
        return <GeneralBIM />;
      case "folder-structure":
        return <FolderStructure />;
      case "file-naming":
        return <FileNaming />;
      case "project-type-1":
        return <ProjectType1 />;
      case "base-file":
        return <BaseFile />;
      case "architecture-sheets":
        return <ArchitectureSheets />;
      case "floor-plans-series-a101":
        return <FloorPlansSeriesA101 />;
      case "floor-plans":
        return <FloorPlans />;
      case "rcp":
        return <RCP />;
      case "equipment-plan":
        return <EquipmentPlan />;
      case "elevations":
        return <Elevations />;
      case "sections":
        return <Sections />;
      case "interior-elevations":
        return <InteriorElevations />;
      case "enlarge-restrooms":
        return <EnlargeRestrooms />;
      case "site-plans-series-a101":
        return <SitePlanSeriesA001 />;
      case "site-plans":
        return <SitePlans />;
      case "site-details":
        return <SiteDetails />;
      case "fire-lane-plan":
        return <FireLanePlan />;
      case "fuel-drawing":
        return <FuelDrawing />;
      case "piping-drawing":
        return <PipingDrawing />;
      default:
        return (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "100%",
              fontSize: "18px",
              color: "#64748b",
            }}
          >
            <h3>Select a section from the sidebar</h3>
          </div>
        );
    }
  };

  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      <Sidebar setActiveContent={setActiveContent} />
      <div style={{ padding: "20px", flex: 1, background: "#f8fafc" }}>
        {renderContent()}
      </div>
    </div>
  );
};

export default EmployeeLayout;
