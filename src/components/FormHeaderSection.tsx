import { formHeaderSection  } from '../styles/formHeaderSection.css.ts';

interface FormHeaderSectionProps {
  title: string,
  setTitle: (title: string) => void,
  description: string,
  setDescription: (description: string) => void
} 

function FormHeaderSection({title, setTitle, description, setDescription}: FormHeaderSectionProps) {
  return (    
    <div className={formHeaderSection.container}>
      <input className={formHeaderSection.title} type="text" placeholder="제목 없는 설문지" value={title} onChange={(e) => setTitle(e.target.value)} />
      <input className={formHeaderSection.description} type="text" placeholder="설문지 설명" value={description} onChange={(e) => setDescription(e.target.value)} />
    </div>      
  )
}

export default FormHeaderSection;
