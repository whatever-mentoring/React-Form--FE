import { useState } from 'react'
import { postSurvey } from '../../apis/survey';
import { FormHeaderSectionType, FormBodySectionType } from '../../types/form.ts';
import { form  } from '../../styles/form.css.ts';
import FormHeaderSection from '../../components/FormHeaderSection.tsx';
import FormBodySection from '../../components/FormBodySection.tsx';
import uuid from 'react-uuid';
import { useNavigate } from 'react-router-dom';

function FormCreatePage() {  
  const navigate = useNavigate();
  const [formHeaderSection, setFormHeaderSection] = useState<FormHeaderSectionType>({ title: '', description: '' });
  const [formBodySections, setFormBodySections] = useState<FormBodySectionType[]>([{ title: "", type: "input", options: [] }]);

  const addBodySection = () => {
    setFormBodySections([...formBodySections, { title: "", type: "input", options: [] }]);
  };

  const updateBodySection = (index: number, field: keyof FormBodySectionType, value: any) => {
    setFormBodySections(formBodySections.map((section, i) => i === index ? { ...section, [field]: value } : section));
  };

    const handlePostQuestions = async () => {
      const newUuid = uuid();
      const survey = {
        uuid: newUuid,
        headerSection: {
          title: formHeaderSection.title,
          description: formHeaderSection.description,
        },
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
    <div className={form.container}>
      <FormHeaderSection 
        title={formHeaderSection.title} 
        setTitle={(title: string) => setFormHeaderSection(({...formHeaderSection, title}))} 
        description={formHeaderSection.description} 
        setDescription={(description: string) => setFormHeaderSection(({...formHeaderSection, description}))}  />
      {formBodySections.map((section, index) => (        
        <div className={form.bodySectionWrap} key={index}>
          <FormBodySection            
            title={section.title}
            setTitle={(newTitle) => updateBodySection(index, 'title', newTitle)}
            type={section.type}
            setType={(newType) => updateBodySection(index, 'type', newType)}          
            options={section.options}
            setOptions={(newOptions) => updateBodySection(index, 'options', newOptions)}          
          />                   
          {index === formBodySections.length - 1 && (
            <div className={form.sidebar}>
              <button className={form.bodySectionAddButton} onClick={addBodySection} style={{ marginLeft: '10px' }}/>              
            </div>
          )}          
        </div>
      ))}

      <button onClick={handlePostQuestions}>등록하기</button>
    </div>
  )
}

export default FormCreatePage;
