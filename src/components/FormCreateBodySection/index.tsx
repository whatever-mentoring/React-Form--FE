import { formCreateBodySection, formCreateBodySectionHeader, formCreateBodySectionContent, formCreateBodySectionFooter } from './style.css.ts';
import SelectBox from '../SelectBox/index.tsx';
import { FormBodyOptionType } from '../../types/form.ts';

interface FormCreateBodySectionProps {
  index: number;
  title: string;
  setTitle: (newTitle: string) => void;
  type: string;
  setType: (newType: string) => void;  
  options: FormBodyOptionType[];
  setOptions: (newOptions: FormBodyOptionType[]) => void;
  deleteBodySection: (index: number) => void;
}

function FormCreateBodySection({ index, title, setTitle, type, setType, options, setOptions, deleteBodySection }: FormCreateBodySectionProps) {  
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
      <input type="text" className={formCreateBodySectionContent.optionInput} value={option.value} onChange={(e) => updateOptionValue(option.id, e.target.value)} placeholder="옵션 입력" />
    </div>
  ));

  const renderAddOptionButton = () => {
    return (
      <div>
        <input type={type === 'radio' ? 'radio' : 'checkbox'} disabled/>
        <button className={formCreateBodySectionContent.optionAddButton} onClick={addOption}>옵션 추가</button>
      </div>
    );
  }

  return (
    <div className={formCreateBodySection.container}>
      <div className={formCreateBodySectionHeader.container}>
        <input className={formCreateBodySectionHeader.title} type="text" placeholder="제목 없는 설문지" value={title} onChange={(e) => setTitle(e.target.value)} />
        <SelectBox options={typeOptions} value={type} onChange={(newValue) => setType(newValue)} />
      </div>
      <div className={formCreateBodySectionContent.container}>
        {type === 'input' && <div className={formCreateBodySectionContent.textInput}>단답형 텍스트</div>}
        {(type === 'radio' || type === 'checkbox') && (
          <>
            {renderOptions()}
            {renderAddOptionButton()}
          </>
        )}
      </div>     
      <div className={formCreateBodySectionFooter.container}>
        <button className={formCreateBodySectionFooter.deleteButton} onClick={() => deleteBodySection(index)} />
        <span className={formCreateBodySectionFooter.divider}/>
        <span className={formCreateBodySectionFooter.requiredToggle}>
          <p className={formCreateBodySectionFooter.requiredToggleText}>필수</p>
          <input type="checkbox" className={formCreateBodySectionFooter.requiredToggleButton}/>
        </span>        
      </div>
    </div>
  );
}

export default FormCreateBodySection;

