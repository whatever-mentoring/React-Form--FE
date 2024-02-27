import { useEffect } from "react";
import { useParams } from 'react-router-dom';
import { getSurvey } from "../../apis/survey";

function FormReadPage() { 
  const { uuid } = useParams();

  const getQuestions = async () => {
    if (uuid) {
      const questions = await getSurvey(uuid);
      console.log(questions);
    }    
  }
  
  useEffect(() => {
    getQuestions()
  }, [])

  return (
    <div>...</div>
  )
}

export default FormReadPage;
