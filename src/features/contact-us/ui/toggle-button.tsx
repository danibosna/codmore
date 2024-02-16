import React from "react";
import { Button } from "~/components/ui/button";
import { FaEnvelope } from "react-icons/fa6";

interface Props {
  isVisible: boolean;
  onClick: () => void; // Tipamos la prop onClick como una función que devuelve un booleano
}

export const ToggleButton: React.FC<Props> = ({ onClick, isVisible }) => {
  return (
    <div className={''}>
      <Button onClick={onClick} className="custom-button absolute left-1 z-50 translate-x-[-100%]" size={"icon"}>
        <FaEnvelope />
      </Button>
    </div>
  );
};
