import { useState } from 'react';
import { selectbox } from '../styles/selectbox.css';

interface Option {
  value: string;
  label: string;
}

interface SelectBoxProps {
  options: Option[];
  value: string;
  onChange: (value: string) => void;
}

const SelectBox = ({ options, value, onChange }: SelectBoxProps) => {
  const [showOptions, setShowOptions] = useState(false);

  const handleTypeChange = (value: string) => {    
    onChange(value);
    setShowOptions(false);
  };

  return (
    <div className={selectbox.container}>
      <button className={selectbox.label} onClick={() => setShowOptions(!showOptions)}>        
        {options?.find(option => option.value === value)?.label || '선택'}
      </button>
      {showOptions && (
        <ul className={selectbox.options}>
          {options?.map((option) => (
            <li key={option.value} className={`${selectbox.option} ${option.value === value ? selectbox.selectedOption : ''}`}  onClick={() => handleTypeChange(option.value)}>
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SelectBox;