 

export function shuffle<T>(arr: T[]): T[] {
    for (let i = arr.length - 1; i >= 0; i--) {
      const randomIndex = Math.floor(Math.random() * (i + 1));
      const itemAtIndex = arr[randomIndex];
      arr[randomIndex] = arr[i];
      arr[i] = itemAtIndex;
    }
    return arr;
  }
  
  export class HttpRequest {
    private xhr = new XMLHttpRequest();
  
    public download<T>(
      url: string,
      responseType: XMLHttpRequestResponseType = ''
    ) {
      return new Promise<T>((resolve, reject) => {
        this.xhr.open('get', url);
        this.xhr.responseType = responseType;
        this.xhr.onload = () => {
          const { status } = this.xhr;
          if ((status >= 200 && status < 300) || status === 304) {
            resolve(this.xhr.response);
          }
        };
        this.xhr.onabort = reject;
        this.xhr.onerror = reject;
        this.xhr.ontimeout = reject;
        this.xhr.send();
      });
    }
  }
  
  export function sleep(delay: number = 0): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, delay));
  }
  
  export function eventLoop(
    target: () => boolean,
    timeout: number = 3000
  ): Promise<void> {
    return new Promise((resolve, reject) => {
      const startTime = new Date().getTime();
      const timerId = setInterval(() => {
        if (!target()) {
          if (timeout > 0 && new Date().getTime() - startTime > timeout) {
            reject();
            clearInterval(timerId);
          }
          return;
        }
        resolve();
        clearInterval(timerId);
      }, 100);
    });
  }
  
  import { useSSRContext } from 'vue';
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
};

export default isMobile;
