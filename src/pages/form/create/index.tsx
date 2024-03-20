import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react'
import { useCreateSurvey, useUpdateSurvey } from '../../../queries/hooks/useSurvey.ts';
import { useGetSurvey } from "../../../queries/hooks/useSurvey.ts";
import { FormHeaderSectionType, FormBodySectionType } from '../../../types/form.ts';
import FormCreateHeaderSection from '../../../components/form/FormCreateHeaderSection/index.tsx';
import FormCreateBodySection from '../../../components/form/FormCreateBodySection/index.tsx';
import FormHeader from '../../../components/form/FormHeader/index.tsx';
import { formCreate } from './style.css.ts';

function FormCreatePage() {      
  const { uuid } = useParams();
  const { data: questions } = useGetSurvey(uuid);
  const { mutateAsync: createSurvey } = useCreateSurvey();
  const { mutateAsync: updateSurvey } = useUpdateSurvey();  
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

  const handlePostQuestions = () => {    
    const survey = {
      uuid: uuid ? uuid : '',
      headerSection: formHeaderSection,
      bodySections: formBodySections        
    }      

    if (questions) {
      updateSurvey(survey);
    } else {
      createSurvey(survey);
    }          
  };

  /* 존재하는 데이터일 경우 */
  useEffect(() => {
    if (questions) {      
      setFormHeaderSection(questions.headerSection);
      setFormBodySections(questions.bodySections);
    }
  },[questions])

  return (
    <div className={formCreate.container}>
      <FormHeader onSubmit={handlePostQuestions} uuid={uuid}/>
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
              <button className={formCreate.bodySectionAddButton} onClick={addBodySection}/>              
            </div>
          )}          
        </div>
      ))} 
    </div>
  )
}

export default FormCreatePage;
