import React, { useState } from "react";
import { FaChevronRight, FaChevronDown } from "react-icons/fa"; // Import chevron icons

const Sidebar = ({ setActiveContent }) => {
  const [openSections, setOpenSections] = useState({});

  const toggleSection = (section, path) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
    if (path) setActiveContent(path);
  };

  const handleItemClick = (path) => {
    setActiveContent(path);
  };

  const sections = [{ name: "PH Studio", path: "phstudio" }];

  const collapsibleSections = [
    {
      title: "Overview",
      key: "overview",
      path: "overview",
      items: [
        { name: "General Technical Guidelines", path: "general-technical" },
        {
          name: "General Drafting Guidelines",
          path: "general-drafting",
          subItems: [
            { name: "Folder Structure", path: "folder-structure" },
            { name: "File Naming", path: "file-naming" },
          ],
        },
        { name: "General BIM Guidelines", path: "general-bim" },
      ],
    },
    {
      title: "Project Type 1",
      key: "project-type-1",
      path: "project-type-1",
      items: [
        { name: "Base file", path: "base-file" },
        {
          name: "Architecture Sheets",
          path: "architecture-sheets",
          subItems: [
            {
              name: "Floor Plans (Series A1.01)",
              path: "floor-plans-series-a101",
              subItems: [
                { name: "Floor Plans", path: "floor-plans" },
                { name: "RCP", path: "rcp" },
                { name: "Equipment Plan", path: "equipment-plan" },
              ],
            },
          ],
        },
        { name: "Elevations", path: "elevations" },
        { name: "Sections", path: "sections" },
        {
          name: "Interior Elevations",
          path: "interior-elevations",
          subItems: [{ name: "Enlarge restrooms", path: "enlarge-restrooms" }],
        },
      ],
    },
    {
      title: "Site Plan (series A0.01...)",
      key: "site-plans-series-a101",
      path: "site-plans-series-a101",
      items: [
        { name: "Site Plans", path: "site-plans" },
        { name: "Site Details", path: "site-details" },
        { name: "Fire Lane Plan", path: "fire-lane-plan" },
      ],
    },

    {
      title: "Fuel Drawing",
      key: "fuel-drawing",
      path: "fuel-drawing", // YEH LINE ADD KARO
      items: [{ name: "Piping Drawing", path: "piping-drawing" }],
    },
  ];

  return (
    <div
      style={{
        width: "280px",
        backgroundColor: "#1e293b",
        color: "white",
        height: "100vh",
        overflowY: "auto",
        paddingTop: "10px",
      }}
    >
      <h2
        style={{
          padding: "15px",
          textAlign: "center",
          backgroundColor: "#334155",
          fontSize: "18px",
          fontWeight: "bold",
        }}
      >
        CONTENTS
      </h2>

      {sections.map((section) => (
        <div
          key={section.path}
          onClick={() => handleItemClick(section.path)}
          style={{
            display: "flex",
            alignItems: "center",
            padding: "12px",
            cursor: "pointer",
            backgroundColor: "",
            transition: "background 0.3s",
          }}
          onMouseEnter={(e) => (e.target.style.backgroundColor = "#55677d")}
          onMouseLeave={(e) => (e.target.style.backgroundColor = "")}
        >
          {section.name}
        </div>
      ))}

      {collapsibleSections.map((section) => (
        <div key={section.key}>
          <div
            onClick={() => toggleSection(section.key, section.path)}
            style={{
              display: "flex",
              alignItems: "center",
              padding: "12px",
              cursor: "pointer",
              backgroundColor: "",
              transition: "background 0.3s",
            }}
            onMouseEnter={(e) => (e.target.style.backgroundColor = "#55677d")}
            onMouseLeave={(e) => (e.target.style.backgroundColor = "")}
          >
            {openSections[section.key] ? (
              <FaChevronDown style={{ marginRight: "10px" }} />
            ) : (
              <FaChevronRight style={{ marginRight: "10px" }} />
            )}
            {section.title}
          </div>

          {openSections[section.key] && section.items && (
            <div style={{ backgroundColor: "#273649", paddingLeft: "20px" }}>
              {section.items.map((item) => (
                <div key={item.path}>
                  <div
                    onClick={() => {
                      if (item.subItems) {
                        toggleSection(item.path, item.path);
                      } else {
                        handleItemClick(item.path);
                      }
                    }}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      padding: "10px 20px",
                      cursor: "pointer",
                    }}
                  >
                    {openSections[item.path] ? (
                      <FaChevronDown style={{ marginRight: "10px" }} />
                    ) : (
                      <FaChevronRight style={{ marginRight: "10px" }} />
                    )}
                    {item.name}
                  </div>
                  {item.subItems && openSections[item.path] && (
                    <div style={{ paddingLeft: "20px" }}>
                      {item.subItems.map((subItem) => (
                        <div key={subItem.path}>
                          <div
                            onClick={() => {
                              if (subItem.subItems) {
                                toggleSection(subItem.path, subItem.path);
                              } else {
                                handleItemClick(subItem.path);
                              }
                            }}
                            style={{
                              display: "flex",
                              alignItems: "center",
                              padding: "8px 20px",
                              cursor: "pointer",
                            }}
                          >
                            {openSections[subItem.path] ? (
                              <FaChevronDown style={{ marginRight: "10px" }} />
                            ) : (
                              <FaChevronRight style={{ marginRight: "10px" }} />
                            )}
                            {subItem.name}
                          </div>
                          {subItem.subItems && openSections[subItem.path] && (
                            <div style={{ paddingLeft: "30px" }}>
                              {subItem.subItems.map((deepSubItem) => (
                                <div
                                  key={deepSubItem.path}
                                  style={{
                                    display: "flex",
                                    alignItems: "center",
                                    padding: "8px 20px",
                                    cursor: "pointer",
                                  }}
                                  onClick={() =>
                                    handleItemClick(deepSubItem.path)
                                  }
                                >
                                  {deepSubItem.name}
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
