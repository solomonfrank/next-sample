import { AiFillWarning } from "react-icons/ai";
import style from "./index.module.scss";

interface IErrorProps {
  message: string | undefined;
}

const ErrorDisplay: React.FC<IErrorProps> = ({ message }) => {
  if (!message) return <></>;
  return (
    <div className={style.validation__error}>
      <span>
        <AiFillWarning size={16} />
      </span>{" "}
      <span>{message}</span>
    </div>
  );
};

export default ErrorDisplay;
