import React, { useEffect } from "react";
import { Alert } from "antd";

export interface IResponseAlert {
  type: "success" | "error" | undefined;
  message: string;
  onClose: () => void;
}

const ResponseAlert: React.FC<IResponseAlert> = ({
  type,
  onClose,
  message,
}) => {
  useEffect(() => {
    if (onClose) {
      setTimeout(() => {
        onClose();
      }, 2000);
    }
  }, [onClose]);
  return <Alert description={message} type={type} closable onClose={onClose} />;
};
export default ResponseAlert;
