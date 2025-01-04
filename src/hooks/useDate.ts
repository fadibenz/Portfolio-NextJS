import { useState, useEffect } from "react";

export const useDate = (): string => {
  const [formattedDate, setFormattedDate] = useState("");

  useEffect(() => {
    const formatDate = () => {
      const date = new Date();
      const options: Intl.DateTimeFormatOptions = {
        year: "numeric",
        month: "long",
        day: "numeric",
      };
      return date.toLocaleDateString("en-US", options);
    };

    setFormattedDate(formatDate());
  }, []);

  return formattedDate;
};

