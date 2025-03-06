import React, { useRef } from "react";
import { FaPrint } from "react-icons/fa"; // Import Print Icon

const PhStudio = () => {
  const printRef = useRef();

  const handlePrint = () => {
    const printContent = printRef.current.innerHTML;
    const originalContent = document.body.innerHTML;

    document.body.innerHTML = printContent;
    window.print();
    document.body.innerHTML = originalContent;
    window.location.reload(); // Reload to restore the original page
  };

  return (
    <div style={{ padding: "20px", position: "relative" }}>
      {/* Print Icon - Positioned in the Upper Right Corner */}
      <FaPrint
        onClick={handlePrint}
        style={{
          position: "absolute",
          top: "10px",
          right: "20px",
          cursor: "pointer",
          fontSize: "20px",
          color: "#1e3a8a",
        }}
      />

      {/* PH Studio Content */}
      <div ref={printRef}>
        <h1 className="text-2xl font-bold">PH Studio</h1>
        <p>PH Studio Content Here...</p>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </div>
    </div>
  );
};

export default PhStudio;
