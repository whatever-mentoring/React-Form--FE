import uuid from 'react-uuid';
import { Link } from "react-router-dom";
import { Home } from './style.css.ts';

function HomePage() {
  const requestUuid = uuid();

  return (
    <div className={Home.container}>      
      <Link className={Home.link} to={`/form/create/${requestUuid}`}>질문 만들기</Link>
    </div>
  )
}

export default HomePage