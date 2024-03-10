import { useState, useEffect } from 'react'
import { useCreateSurvey } from '../../../queries/hooks/useSurvey.ts';
import uuid from 'react-uuid';
import { FormHeaderSectionType, FormBodySectionType } from '../../../types/form.ts';
import FormCreateHeaderSection from '../../../components/form/FormCreateHeaderSection/index.tsx';
import FormCreateBodySection from '../../../components/form/FormCreateBodySection/index.tsx';
import { formCreate } from './style.css.ts';


function FormCreatePage() {      
  const [formUuid, setFormUuid] = useState('');  
  const [formHeaderSection, setFormHeaderSection] = useState<FormHeaderSectionType>({ title: '', description: '' });
  const [formBodySections, setFormBodySections] = useState<FormBodySectionType[]>([{ title: "", type: "input", required: false, options: [] }]);
  const { mutateAsync } = useCreateSurvey(formUuid);

  const addBodySection = () => {
    setFormBodySections([...formBodySections, { title: "", type: "input", required: false, options: [] }]);
  };

  const updateBodySection = (index: number, field: keyof FormBodySectionType, value: any) => {
    setFormBodySections(formBodySections.map((section, i) => i === index ? { ...section, [field]: value } : section));
  };

  const deleteBodySection = (index: number) => {
    setFormBodySections(formBodySections.filter((_, i) => i !== index));
  };

  const handlePostQuestions = () => {    
    const survey = {
      uuid: formUuid,
      headerSection: formHeaderSection,
      bodySections: formBodySections        
    }      
    mutateAsync(survey);          
  };

  useEffect(() => {
    const id = uuid();
    setFormUuid(id);
  }, []);

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
