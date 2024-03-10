import { Link } from "react-router-dom";
import { defaultError } from './style.css.ts';

interface DefaultErrorProps {
  onResetError: () => void;
}

const DefaultError = ({ onResetError }: DefaultErrorProps) => {
  return (
  <div className={defaultError.container}>
    <h1 className={defaultError.title}>오류가 발생했습니다.</h1>
    <Link to="/" className={defaultError.link} onClick={() => onResetError()}>홈으로 가기</Link>
  </div>
  )        
}

export default DefaultError;

