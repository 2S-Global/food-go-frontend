// 'use client';
// import { useEffect } from 'react';
// import { usePathname } from 'next/navigation';

// function LoadScriptOnRouteChange() {
//   const pathname = usePathname();

//   useEffect(() => {
//     const scriptUrls = [
//       "assets/js/jquery.min.js",
//       "assets/js/bootstrap.min.js",
//       "assets/js/plugins.js",
//       "assets/js/main.js"
//     ];

//     const scripts = [];

//     const loadScripts = () => {
//       scriptUrls.forEach(src => {
//         const script = document.createElement('script');
//         script.src = src;
//         script.async = true;
//         document.body.appendChild(script);
//         scripts.push(script);
//       });
//     };

//     // Delay to ensure the DOM is fully settled
//     setTimeout(loadScripts, 150); // Or use requestAnimationFrame

//     return () => {
//       scripts.forEach(script => {
//         if (document.body.contains(script)) {
//           document.body.removeChild(script);
//         }
//       });
//     };
//   }, []);

//   return null;
// }

// export default LoadScriptOnRouteChange;

'use client';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

function LoadScriptOnRouteChange() {
  const pathname = usePathname();

  useEffect(() => {
    const scripts = [];

    const loadScript = (src, onLoad) => {
      return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = src;
        script.async = false; // ensure execution order
        script.onload = () => {
          if (onLoad) onLoad();
          resolve(script);
        };
        script.onerror = () => reject(`Failed to load ${src}`);
        document.body.appendChild(script);
        scripts.push(script);
      });
    };

    const loadAllScripts = async () => {
      try {
        // Step 1: Load jQuery first
        await loadScript('assets/js/jquery.min.js', () => {
          window.$ = window.jQuery = window.jQuery || window.$;
          console.log('✅ jQuery loaded:', window.jQuery?.fn?.jquery);
        });

        // Step 2: Load remaining scripts in order
        await loadScript('assets/js/bootstrap.min.js');
        await loadScript('assets/js/plugins.js');
        await loadScript('assets/js/main.js');
      } catch (error) {
        console.error('Script loading error:', error);
      }
    };

    // Load with slight delay to ensure route is settled
    const timeout = setTimeout(() => {
      loadAllScripts();
    }, 150);

    // Cleanup on route change
    return () => {
      clearTimeout(timeout);
      scripts.forEach((script) => {
        if (document.body.contains(script)) {
          document.body.removeChild(script);
        }
      });
    };
  }, [pathname]);

  return null;
}

export default LoadScriptOnRouteChange;

