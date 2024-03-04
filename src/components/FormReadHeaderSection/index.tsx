import { formReadHeaderSection  } from './style.css.ts';

interface FormReadHeaderSectionProps {
  title: string,  
  description: string,  
} 

function FormReadHeaderSection({title, description}: FormReadHeaderSectionProps) {
  return (    
    <div className={formReadHeaderSection.container}>
      <p className={formReadHeaderSection.title}>{title}</p>
      <p className={formReadHeaderSection.description}>{description}</p>
    </div>      
  )
}

export default FormReadHeaderSection;
