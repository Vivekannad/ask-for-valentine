import ReactGA from "react-ga4";

// Initialize Google Analytics
export const initializeGA = () => {
  ReactGA.initialize("G-35ESXXB5W9");
};

// Track a page view (useful if you add routing later)
export const trackPageView = () => {
  ReactGA.send("pageview");
};

// Track custom events (e.g., button clicks)
export const trackEvent = (category, action, label = "") => {
  ReactGA.event({
    category,
    action,
    label,
  });
};
