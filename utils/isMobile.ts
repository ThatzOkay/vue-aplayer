import { useSSRContext } from "vue";
import { UAParser } from 'ua-parser-js';

const isMobile = (): boolean => {
  
  // If SSR context is available, use the user agent from ssrContext
  let ua = navigator.userAgent;

  // Fallback to ua-parser-js in the client-side context
  if (typeof window !== 'undefined') {
    const parser = UAParser(ua);
    return parser.device.type === 'mobile';
  }
  const ssrContext = useSSRContext();

  if (ssrContext) {
    ua = ssrContext.req.headers['user-agent'];
  }

  // For SSR, just use a basic check
  return /mobile/i.test(ua);
}

export default isMobile;
