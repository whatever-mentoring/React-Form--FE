import { formBodySection, formBodySectionHeader, formBodySectionContent } from '../styles/formBodySection.css.ts';
import SelectBox from './SelectBox.tsx';
import { FormBodyOptionType } from '../types/form.ts';

interface FormBodySectionProps {
  title: string;
  setTitle: (newTitle: string) => void;
  type: string;
  setType: (newType: string) => void;  
  options: FormBodyOptionType[];
  setOptions: (newOptions: FormBodyOptionType[]) => void;
}

function FormBodySection({ title, setTitle, type, setType, options, setOptions }: FormBodySectionProps) {  
  const typeOptions = [
    { label: "단답형", value: "input" },
    { label: "객관식", value: "radio" },
    { label: "체크박스", value: "checkbox" },
  ];

  const addOption = () => {
    setOptions([...options, { id: options.length, value: '' }]);
  }
  
  const updateOptionValue = (id: number, value: string) => {
    setOptions(options.map((option) => (option.id === id ? { ...option, value } : option))
    );
  };

  const renderOptions = () => options.map((option) => (
    <div key={option.id}>
      <input type={type === 'radio' ? 'radio' : 'checkbox'} disabled/>
      <input type="text" className={formBodySectionContent.optionInput} value={option.value} onChange={(e) => updateOptionValue(option.id, e.target.value)} placeholder="옵션 입력" />
    </div>
  ));

  const renderAddOptionButton = () => {
    return (
      <div>
        <input type={type === 'radio' ? 'radio' : 'checkbox'} disabled/>
        <button className={formBodySectionContent.optionAddButton} onClick={addOption}>옵션 추가</button>
      </div>
    );
  }

  return (
    <div className={formBodySection.container}>
      <div className={formBodySectionHeader.container}>
        <input className={formBodySectionHeader.title} type="text" placeholder="제목 없는 설문지" value={title} onChange={(e) => setTitle(e.target.value)} />
        <SelectBox options={typeOptions} value={type} onChange={(newValue) => setType(newValue)} />
      </div>
      <div className={formBodySectionContent.container}>
        {type === 'input' && <div className={formBodySectionContent.textInput}>단답형 텍스트</div>}
        {(type === 'radio' || type === 'checkbox') && (
          <>
            {renderOptions()}
            {renderAddOptionButton()}
          </>
        )}
      </div>      
    </div>
  );
}

export default FormBodySection;