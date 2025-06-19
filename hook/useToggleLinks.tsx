import { useState } from "react";

const useToggleLinks = (): [boolean, () => void] => {
  const [open, setOpen] = useState(false);

  const toggleLinks = () => {
    setOpen(!open);
  };
  return [open, toggleLinks];
};

export default useToggleLinks;
