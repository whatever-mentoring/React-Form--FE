import * as Sentry from "@sentry/react";

export const initializeSentry = () => {
  Sentry.init({
    dsn: import.meta.env.VITE_SENTRY_DSN,
    integrations: [
      /* (성능 모니터링) 영향을 받는 사람, 이상값, 회귀 및 속도 저하의 근본 원인에 대한 서비스 및 컨텍스트 전반에서 자동 성능 문제 감지 */
      Sentry.browserTracingIntegration(),

      /* (세션 재생 기능) 문제 영향을 확인하고 더 빠르게 문제를 해결하는 데 도움이 되는 디버깅 컨텍스트를 포함하여 사용자 세션을 비디오와 같이 재현합니다. */
      Sentry.replayIntegration({
        maskAllText: false,
        blockAllMedia: false,
      }),
    ],    
    /* 성능 모니터링 */
    tracesSampleRate: 1.0, // 100% 감지, 프로덕션 환경에서는 수치를 더 낮춰야 함
    tracePropagationTargets: ["localhost"],
    // tracePropagationTargets: ["localhost", /^https:\/\/yourserver\.io\/api/],

    /* 세션 재생 */
    replaysSessionSampleRate: 0.1, // 이렇게 하면 샘플 속도가 10%로 설정됩니다. 개발 중에는 100%로 변경한 다음 프로덕션에서는 이보다 낮은 비율로 샘플링할 수 있습니다.
    replaysOnErrorSampleRate: 1.0, // 전체 세션을 샘플링하지 않는 경우 오류가 발생하는 세션을 샘플링할 때 샘플 속도를 100%로 변경하세요.
  });
}

