import ReactGA from 'react-ga';

export const initGA = () => {
  if( !process.env.GA_TRACKING_ID ) {
    console.warn('GA_TRACKING_ID missing or invalid.');
    return;
  }

  console.log('Initializing analytics');
  ReactGA.initialize(process.env.GA_TRACKING_ID)
}

export const logPageView = () => {
  const currentPath = window.location.pathname;

  if( !process.env.GA_TRACKING_ID ) return

  console.log(`Logging pageview for ${currentPath}`);
  ReactGA.set({ page: currentPath });
  ReactGA.pageview(currentPath);
}

export const logEvent = (category = '', action = '') => {
  if( !process.env.GA_TRACKING_ID ) return

  if( category && action ) {
    ReactGA.event({ category, action });
  }
}

export const logException = (description = '', fatal = false) => {
  if( !process.env.GA_TRACKING_ID ) return

  if( description ) {
    ReactGA.exception({ description, fatal })
  }
}
