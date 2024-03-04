import { useState } from 'react'
import uuid from 'react-uuid';
import { useNavigate } from 'react-router-dom';
import { FormHeaderSectionType, FormBodySectionType } from '../../../types/form.ts';
import { postSurvey } from '../../../apis/survey.ts';
import FormCreateHeaderSection from '../../../components/FormCreateHeaderSection/index.tsx';
import FormCreateBodySection from '../../../components/FormCreateBodySection/index.tsx';
import { formCreate } from './style.css.ts';

function FormCreatePage() {  
  const navigate = useNavigate();
  const [formHeaderSection, setFormHeaderSection] = useState<FormHeaderSectionType>({ title: '', description: '' });
  const [formBodySections, setFormBodySections] = useState<FormBodySectionType[]>([{ title: "", type: "input", required: false, options: [] }]);

  const addBodySection = () => {
    setFormBodySections([...formBodySections, { title: "", type: "input", required: false, options: [] }]);
  };

  const updateBodySection = (index: number, field: keyof FormBodySectionType, value: any) => {
    setFormBodySections(formBodySections.map((section, i) => i === index ? { ...section, [field]: value } : section));
  };

  const deleteBodySection = (index: number) => {
    setFormBodySections(formBodySections.filter((_, i) => i !== index));
  };

  const handlePostQuestions = async () => {
    const newUuid = uuid();
    const survey = {
      uuid: newUuid,
      headerSection: formHeaderSection,
      bodySections: formBodySections        
    }      

    try {
      const response = await postSurvey(survey);
      if (response) {
        navigate(`/form/read/${newUuid}`);
      }              
    } catch (error) {
      console.error('Error posting questions:', error);
    }
  };

  return (
    <div className={formCreate.container}>
      <FormCreateHeaderSection 
        title={formHeaderSection.title} 
        setTitle={(title: string) => setFormHeaderSection(({...formHeaderSection, title}))} 
        description={formHeaderSection.description} 
        setDescription={(description: string) => setFormHeaderSection(({...formHeaderSection, description}))}  />
      {formBodySections.map((section, index) => (        
        <div className={formCreate.bodySectionWrap} key={index}>
          <FormCreateBodySection     
            index={index}       
            title={section.title}
            setTitle={(newTitle) => updateBodySection(index, 'title', newTitle)}
            type={section.type}
            setType={(newType) => updateBodySection(index, 'type', newType)}          
            options={section.options}
            setOptions={(newOptions) => updateBodySection(index, 'options', newOptions)}     
            required={section.required}
            setRequired={(newRequired) => updateBodySection(index, 'required', newRequired)}
            deleteBodySection={(index) => deleteBodySection(index)}
          />                   
          {index === formBodySections.length - 1 && (
            <div className={formCreate.sidebar}>
              <button className={formCreate.bodySectionAddButton} onClick={addBodySection} style={{ marginLeft: '10px' }}/>              
            </div>
          )}          
        </div>
      ))}
      <div className={formCreate.buttonContainer}>
        <button className={formCreate.submitButton} onClick={handlePostQuestions}>등록하기</button>
      </div>      
    </div>
  )
}

export default FormCreatePage;
