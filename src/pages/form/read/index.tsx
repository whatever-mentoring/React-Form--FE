import { Suspense, useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { getSurvey } from "../../../apis/survey.ts";
import { FormResponseType } from "../../../types/form.ts";
import { formRead } from './style.css.ts';
import FormReadHeaderSection from "../../../components/form/FormReadHeaderSection/index.tsx";
import FormReadBodySection from "../../../components/form/FormReadBodySection/index.tsx";

function FormReadPage() { 
  const { uuid } = useParams();
  const [questions, setQuestions] = useState<FormResponseType>();

  const getQuestions = async () => {
    if (uuid) {
      const questions = await getSurvey(uuid);
      setQuestions(questions);      
    }    
  }
  
  useEffect(() => {
    getQuestions()
  }, [])

  if (!questions) {
    return <div>Loading...</div>
  }

  return (
    <div className={formRead.container}>
      <FormReadHeaderSection 
        title={questions.headerSection.title}        
        description={questions.headerSection.description}   />
      {questions.bodySections.map((section, index) => (        
        <FormReadBodySection            
          key={index}
          required={section.required}
          title={section.title}          
          type={section.type}          
          options={section.options}          
        />                                    
      ))}
      <div className={formRead.buttonContainer}>
        <button className={formRead.submitButton}>제출</button>
      </div>
    </div>
  )
}

export default FormReadPage;
