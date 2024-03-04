import { formCreateHeaderSection  } from './style.css.ts';

interface FormCreateHeaderSectionProps {
  title: string,
  setTitle: (title: string) => void,
  description: string,
  setDescription: (description: string) => void
} 

function FormCreateHeaderSection({title, setTitle, description, setDescription}: FormCreateHeaderSectionProps) {
  return (    
    <div className={formCreateHeaderSection.container}>
      <input className={formCreateHeaderSection.title} type="text" placeholder="제목 없는 설문지" value={title} onChange={(e) => setTitle(e.target.value)} />
      <input className={formCreateHeaderSection.description} type="text" placeholder="설문지 설명" value={description} onChange={(e) => setDescription(e.target.value)} />
    </div>      
  )
}

export default FormCreateHeaderSection;