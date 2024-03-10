import { QueryClient } from '@tanstack/react-query'

const defaultQueryClient = new QueryClient({
  defaultOptions: {
    mutations: {      
      retry: 2, // 실패 시 재시도 횟수
      throwOnError: true, // 상위 컴포넌트에서 Error Boundary에서 처리 (useQuery는 useSuspenseQuery로 가능)      
    },
    queries: {
      retry: 2,      
      
    },
  },
})

export default defaultQueryClient;

