import { formReadBodySection } from './style.css.ts';
import { FormBodySectionType } from '../../types/form.ts';

function FormReadBodySection({ title, type, options }: FormBodySectionType) {   
  return (
    <div className={formReadBodySection.container}>
      <p className={formReadBodySection.title}>{title}</p>
      {type === 'input' && <input type="text" placeholder='입력해주세요' className={formReadBodySection.textInput} />}
      {(type === 'radio' || type === 'checkbox') && (
        <div className={formReadBodySection.options}>
          {options.map((option) => (
            <div key={option.id} className={formReadBodySection.option}>
              <input type={type} id={option.id.toString()} value={option.value} />
              <label htmlFor={option.id.toString()}>{option.value}</label>
            </div>
          ))}
        </div>
      )}      
    </div>
  );
}

export default FormReadBodySection;

