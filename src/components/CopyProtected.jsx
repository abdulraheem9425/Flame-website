import React, { useEffect } from "react";

export default function CopyProtected({ children }) {
  useEffect(() => {
    const disableCopy = (e) => e.preventDefault();

    // Sirf copy event ko disable karo
    document.addEventListener("copy", disableCopy);

    return () => {
      document.removeEventListener("copy", disableCopy);
    };
  }, []);

  return <>{children}</>;
}
