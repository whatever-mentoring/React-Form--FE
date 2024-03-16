import { useMutation, useQuery, useSuspenseQuery } from '@tanstack/react-query';
import { getSurvey, createSurvey, updateSurvey } from '../../apis/survey';
import defaultQueryClient from '../clients/defaultQueryClient';
import surveyQueryKey from '../keys/surveyQueryKey';
import { FormRequestType } from '../../types/form';

export function useGetSurvey(uuid?: string) {
  // 새로 추가된 useSuspenseQuery hook은 로딩과 에러 상태를 상위 컴포넌트에서 감싼 Suspense와 Error Boundary에서 처리 (useMuation은 없음)
  return useSuspenseQuery({
    queryFn: () => getSurvey(uuid),        
    queryKey: surveyQueryKey.getSurvey(uuid),    
  },
    defaultQueryClient
  );
}

export function useCreateSurvey() {  
  return useMutation({
    mutationFn: (survey: FormRequestType) => createSurvey(survey),        
    onSuccess: () => {      
      alert('설문지가 저장되었습니다.')      
      
      // 여기서는 필요없지만, 추후 invalidateQueries와 queryKey 키를 활용해, 쿼리 무효화하여 데이터 갱신할 수 있다.
      // onSuccess: () => queryClient.invalidateQueries({ queryKey: surveyQueryKey.getSurvey(uuid) }),
    },
  },
    defaultQueryClient
  );
}

export function useUpdateSurvey() {
  return useMutation({
    mutationFn: (survey: FormRequestType) => updateSurvey(survey.uuid, survey),        
    onSuccess: () => {
      alert('설문지가 수정되었습니다.')
    },
  },
    defaultQueryClient
  );
}