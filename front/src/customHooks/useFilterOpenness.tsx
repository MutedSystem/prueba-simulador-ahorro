'use client';

import { useState } from "react";

function useFilterOpenness() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleFilterOpenness = () => {
    setIsOpen(!isOpen);
  };

  return { isOpen, toggleFilterOpenness };
}

export default useFilterOpenness;