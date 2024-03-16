import { copyToClipboard } from '../../../utils/handleShareClick.ts';
import { base64Converter } from '../../../utils/base64Converter.ts';
import { formHeader  } from './style.css.ts';

interface FormHeaderProps {
  onSubmit?: () => void;
  uuid?: string;
} 

function FormHeader ({ onSubmit, uuid }: FormHeaderProps) {
  const handleShareClick = () => {
    const encodedUuid = base64Converter.encode(uuid ? uuid : '');
    const url = `${window.location.origin}/form/read/${encodedUuid}`;
    copyToClipboard(url, 
      () => alert('URL이 클립보드에 복사되었습니다.'), 
      () => alert('URL 복사에 실패했습니다.')
    );
  }

  return (    
    <div className={formHeader.container}>  
      <div className={formHeader.buttons}>
        <button className={formHeader.button} onClick={onSubmit}>저장하기</button>
        <button className={formHeader.button} onClick={handleShareClick}>공유하기</button>            
      </div>
      <ul className={formHeader.tabs}>
        <li className={`${formHeader.tab} ${formHeader.active}`}>질문</li>
        <li className={formHeader.tab}>응답</li>
        {/* <li>설정</li> */}
      </ul>              
    </div>      
  )
}

export default FormHeader;

