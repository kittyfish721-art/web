// Modern Tea - Centralized Script and Config

// Page helper to detect current page
const getCurrentPage = () => {
    const path = window.location.pathname;
    const page = path.split('/').pop() || 'index.html';
    return page;
};

// --- Tailwind Configuration ---
var tailwind = window.tailwind = window.tailwind || {};
const pageName = getCurrentPage();
let appliedConfig = {};

if (pageName.includes('about')) {
    tailwind.config = {
                darkMode: "class",
                theme: {
                    extend: {
                        "colors": {
                            "surface-container-highest": "#e4e2e1",
                            "outline-variant": "#c6c8b8",
                            "primary": "#56642b",
                            "on-surface": "#1b1c1c",
                            "outline": "#76786b",
                            "on-tertiary": "#ffffff",
                            "on-background": "#1b1c1c",
                            "background": "#e5e2dd",
                            "inverse-primary": "#bdce89",
                            "primary-container": "#8a9a5b",
                            "on-error": "#ffffff",
                            "tertiary-fixed": "#e4e4cc",
                            "surface-container-high": "#eae8e7",
                            "surface": "#fbf9f8",
                            "inverse-on-surface": "#f3f0f0",
                            "secondary-fixed-dim": "#f4bb92",
                            "error": "#ba1a1a",
                            "secondary-fixed": "#ffdcc5",
                            "secondary-container": "#fdc39a",
                            "surface-variant": "#e4e2e1",
                            "surface-bright": "#fbf9f8",
                            "on-tertiary-fixed": "#1b1d0e",
                            "secondary": "#805533",
                            "on-error-container": "#93000a",
                            "on-surface-variant": "#46483c",
                            "on-secondary-fixed-variant": "#653d1e",
                            "inverse-surface": "#303030",
                            "on-primary": "#ffffff",
                            "on-tertiary-container": "#2c2e1d",
                            "on-secondary-fixed": "#301400",
                            "error-container": "#ffdad6",
                            "tertiary-container": "#94957f",
                            "on-secondary-container": "#794e2e",
                            "tertiary": "#5e604d",
                            "surface-container-low": "#f6f3f2",
                            "on-tertiary-fixed-variant": "#474836",
                            "surface-container-lowest": "#ffffff",
                            "on-secondary": "#ffffff",
                            "primary-fixed-dim": "#bdce89",
                            "primary-fixed": "#d9eaa3",
                            "surface-container": "#f0eded",
                            "on-primary-container": "#253000",
                            "surface-tint": "#56642b",
                            "on-primary-fixed": "#161f00",
                            "tertiary-fixed-dim": "#c8c8b0",
                            "surface-dim": "#dcd9d9",
                            "on-primary-fixed-variant": "#3e4c16"
                        },
                        "borderRadius": {
                            "DEFAULT": "0.125rem",
                            "lg": "0.25rem",
                            "xl": "0.5rem",
                            "full": "9999px"
                        },
                        "spacing": {
                            "unit": "8px",
                            "container-max-width": "1200px",
                            "gutter": "32px",
                            "margin-desktop": "64px",
                            "margin-mobile": "20px"
                        },
                        "fontFamily": {
                            "label-md": ["Arial", "sans-serif"],
                            "headline-xl": ["Arial", "sans-serif"],
                            "body-md": ["Arial", "sans-serif"],
                            "headline-lg": ["Arial", "sans-serif"],
                            "body-lg": ["Arial", "sans-serif"],
                            "headline-lg-mobile": ["Arial", "sans-serif"]
                        },
                        "fontSize": {
                            "label-md": ["14px", {"lineHeight": "1.2", "letterSpacing": "0.05em", "fontWeight": "500"}],
                            "headline-xl": ["48px", {"lineHeight": "1.2", "letterSpacing": "-0.02em", "fontWeight": "600"}],
                            "body-md": ["16px", {"lineHeight": "1.6", "fontWeight": "400"}],
                            "headline-lg": ["32px", {"lineHeight": "1.3", "fontWeight": "600"}],
                            "body-lg": ["18px", {"lineHeight": "1.6", "fontWeight": "400"}],
                            "headline-lg-mobile": ["28px", {"lineHeight": "1.3", "fontWeight": "600"}]
                        }
                    }
                }
            };
}
else if (pageName.includes('contact')) {
    tailwind.config = {
                darkMode: "class",
                theme: {
                    extend: {
                        "colors": {
                            "on-background": "#1b1c1c",
                            "inverse-on-surface": "#f3f0f0",
                            "tertiary-fixed-dim": "#c8c8b0",
                            "surface-tint": "#56642b",
                            "on-secondary-fixed-variant": "#653d1e",
                            "secondary-container": "#fdc39a",
                            "surface-dim": "#dcd9d9",
                            "on-primary-container": "#253000",
                            "tertiary-fixed": "#e4e4cc",
                            "surface-variant": "#e4e2e1",
                            "on-error": "#ffffff",
                            "surface-container-high": "#eae8e7",
                            "primary-fixed-dim": "#bdce89",
                            "on-tertiary-container": "#2c2e1d",
                            "on-primary-fixed-variant": "#3e4c16",
                            "surface-container-low": "#f6f3f2",
                            "on-secondary-fixed": "#301400",
                            "on-tertiary-fixed": "#1b1d0e",
                            "secondary": "#805533",
                            "tertiary": "#5e604d",
                            "on-primary-fixed": "#161f00",
                            "on-primary": "#ffffff",
                            "tertiary-container": "#94957f",
                            "on-error-container": "#93000a",
                            "secondary-fixed-dim": "#f4bb92",
                            "primary": "#56642b",
                            "on-secondary": "#ffffff",
                            "outline": "#76786b",
                            "surface-bright": "#fbf9f8",
                            "surface-container-highest": "#e4e2e1",
                            "background": "#fbf9f8",
                            "primary-fixed": "#d9eaa3",
                            "on-secondary-container": "#794e2e",
                            "inverse-surface": "#303030",
                            "on-tertiary": "#ffffff",
                            "secondary-fixed": "#ffdcc5",
                            "error": "#ba1a1a",
                            "surface-container": "#f0eded",
                            "on-surface-variant": "#46483c",
                            "surface-container-lowest": "#ffffff",
                            "on-tertiary-fixed-variant": "#474836",
                            "on-surface": "#1b1c1c",
                            "error-container": "#ffdad6",
                            "surface": "#fbf9f8",
                            "primary-container": "#8a9a5b",
                            "outline-variant": "#c6c8b8",
                            "inverse-primary": "#bdce89"
                        },
                        "borderRadius": {
                            "DEFAULT": "0.125rem",
                            "lg": "0.25rem",
                            "xl": "0.5rem",
                            "full": "0.75rem"
                        },
                        "spacing": {
                            "unit": "8px",
                            "container-max-width": "1200px",
                            "gutter": "32px",
                            "margin-desktop": "64px",
                            "margin-mobile": "20px"
                        },
                        "fontFamily": {
                            "label-md": ["Plus Jakarta Sans"],
                            "headline-xl": ["Arial", "sans-serif"],
                            "body-md": ["Arial", "sans-serif"],
                            "headline-lg": ["Arial", "sans-serif"],
                            "body-lg": ["Arial", "sans-serif"],
                            "headline-lg-mobile": ["Arial", "sans-serif"]
                        },
                        "fontSize": {
                            "label-md": ["14px", {"lineHeight": "1.2", "letterSpacing": "0.05em", "fontWeight": "500"}],
                            "headline-xl": ["48px", {"lineHeight": "1.2", "letterSpacing": "-0.02em", "fontWeight": "600"}],
                            "body-md": ["16px", {"lineHeight": "1.6", "fontWeight": "400"}],
                            "headline-lg": ["32px", {"lineHeight": "1.3", "fontWeight": "600"}],
                            "body-lg": ["18px", {"lineHeight": "1.6", "fontWeight": "400"}],
                            "headline-lg-mobile": ["28px", {"lineHeight": "1.3", "fontWeight": "600"}]
                        }
                    },
                },
            }
}


else if (pageName.includes('franchise')) {
    tailwind.config = {
                darkMode: "class",
                theme: {
                    extend: {
                        "colors": {
                            "on-background": "#1b1c1c",
                            "inverse-on-surface": "#f3f0f0",
                            "tertiary-fixed-dim": "#c8c8b0",
                            "surface-tint": "#56642b",
                            "on-secondary-fixed-variant": "#653d1e",
                            "secondary-container": "#fdc39a",
                            "surface-dim": "#dcd9d9",
                            "on-primary-container": "#253000",
                            "tertiary-fixed": "#e4e4cc",
                            "surface-variant": "#e4e2e1",
                            "on-error": "#ffffff",
                            "surface-container-high": "#eae8e7",
                            "primary-fixed-dim": "#bdce89",
                            "on-tertiary-container": "#2c2e1d",
                            "on-primary-fixed-variant": "#3e4c16",
                            "surface-container-low": "#f6f3f2",
                            "on-secondary-fixed": "#301400",
                            "on-tertiary-fixed": "#1b1d0e",
                            "secondary": "#805533",
                            "tertiary": "#5e604d",
                            "on-primary-fixed": "#161f00",
                            "on-primary": "#ffffff",
                            "tertiary-container": "#94957f",
                            "on-error-container": "#93000a",
                            "secondary-fixed-dim": "#f4bb92",
                            "primary": "#56642b",
                            "on-secondary": "#ffffff",
                            "outline": "#76786b",
                            "surface-bright": "#fbf9f8",
                            "surface-container-highest": "#e4e2e1",
                            "background": "#fbf9f8",
                            "primary-fixed": "#d9eaa3",
                            "on-secondary-container": "#794e2e",
                            "inverse-surface": "#303030",
                            "on-tertiary": "#ffffff",
                            "secondary-fixed": "#ffdcc5",
                            "error": "#ba1a1a",
                            "surface-container": "#f0eded",
                            "on-surface-variant": "#46483c",
                            "surface-container-lowest": "#ffffff",
                            "on-tertiary-fixed-variant": "#474836",
                            "on-surface": "#1b1c1c",
                            "error-container": "#ffdad6",
                            "surface": "#fbf9f8",
                            "primary-container": "#8a9a5b",
                            "outline-variant": "#c6c8b8",
                            "inverse-primary": "#bdce89"
                        },
                        "borderRadius": {
                            "DEFAULT": "0.125rem",
                            "lg": "0.25rem",
                            "xl": "0.5rem",
                            "full": "0.75rem"
                        },
                        "spacing": {
                            "unit": "8px",
                            "container-max-width": "1200px",
                            "gutter": "32px",
                            "margin-desktop": "64px",
                            "margin-mobile": "20px"
                        },
                        "fontFamily": {
                            "label-md": ["Plus Jakarta Sans", "Arial", "sans-serif"],
                            "headline-xl": ["Arial", "sans-serif"],
                            "body-md": ["Arial", "sans-serif"],
                            "headline-lg": ["Arial", "sans-serif"],
                            "body-lg": ["Arial", "sans-serif"],
                            "headline-lg-mobile": ["Arial", "sans-serif"]
                        },
                        "fontSize": {
                            "label-md": ["14px", {"lineHeight": "1.2", "letterSpacing": "0.05em", "fontWeight": "500"}],
                            "headline-xl": ["48px", {"lineHeight": "1.2", "letterSpacing": "-0.02em", "fontWeight": "600"}],
                            "body-md": ["16px", {"lineHeight": "1.6", "fontWeight": "400"}],
                            "headline-lg": ["32px", {"lineHeight": "1.3", "fontWeight": "600"}],
                            "body-lg": ["18px", {"lineHeight": "1.6", "fontWeight": "400"}],
                            "headline-lg-mobile": ["28px", {"lineHeight": "1.3", "fontWeight": "600"}]
                        }
                    },
                },
            }
}
else if (pageName.includes('news')) {
    tailwind.config = {
            darkMode: "class",
            theme: {
              extend: {
                "colors": {
                        "on-background": "#1b1c1c",
                        "inverse-on-surface": "#f3f0f0",
                        "tertiary-fixed-dim": "#c8c8b0",
                        "surface-tint": "#56642b",
                        "on-secondary-fixed-variant": "#653d1e",
                        "secondary-container": "#fdc39a",
                        "surface-dim": "#dcd9d9",
                        "on-primary-container": "#253000",
                        "tertiary-fixed": "#e4e4cc",
                        "surface-variant": "#e4e2e1",
                        "on-error": "#ffffff",
                        "surface-container-high": "#eae8e7",
                        "primary-fixed-dim": "#bdce89",
                        "on-tertiary-container": "#2c2e1d",
                        "on-primary-fixed-variant": "#3e4c16",
                        "surface-container-low": "#f6f3f2",
                        "on-secondary-fixed": "#301400",
                        "on-tertiary-fixed": "#1b1d0e",
                        "secondary": "#805533",
                        "tertiary": "#5e604d",
                        "on-primary-fixed": "#161f00",
                        "on-primary": "#ffffff",
                        "tertiary-container": "#94957f",
                        "on-error-container": "#93000a",
                        "secondary-fixed-dim": "#f4bb92",
                        "primary": "#56642b",
                        "on-secondary": "#ffffff",
                        "outline": "#76786b",
                        "surface-bright": "#fbf9f8",
                        "surface-container-highest": "#e4e2e1",
                        "background": "#fbf9f8",
                        "primary-fixed": "#d9eaa3",
                        "on-secondary-container": "#794e2e",
                        "inverse-surface": "#303030",
                        "on-tertiary": "#ffffff",
                        "secondary-fixed": "#ffdcc5",
                        "error": "#ba1a1a",
                        "surface-container": "#f0eded",
                        "on-surface-variant": "#46483c",
                        "surface-container-lowest": "#ffffff",
                        "on-tertiary-fixed-variant": "#474836",
                        "on-surface": "#1b1c1c",
                        "error-container": "#ffdad6",
                        "surface": "#fbf9f8",
                        "primary-container": "#8a9a5b",
                        "outline-variant": "#c6c8b8",
                        "inverse-primary": "#bdce89"
                },
                "borderRadius": {
                        "DEFAULT": "0.125rem",
                        "lg": "0.25rem",
                        "xl": "0.5rem",
                        "full": "0.75rem"
                },
                "spacing": {
                        "unit": "8px",
                        "container-max-width": "1200px",
                        "gutter": "32px",
                        "margin-desktop": "64px",
                        "margin-mobile": "20px"
                },
                "fontFamily": {
                        "label-md": ["Plus Jakarta Sans", "Arial", "sans-serif"],
                        "headline-xl": ["Arial", "sans-serif"],
                        "body-md": ["Arial", "sans-serif"],
                        "headline-lg": ["Arial", "sans-serif"],
                        "body-lg": ["Arial", "sans-serif"],
                        "headline-lg-mobile": ["Arial", "sans-serif"]
                },
                "fontSize": {
                        "label-md": ["14px", {"lineHeight": "1.2", "letterSpacing": "0.05em", "fontWeight": "500"}],
                        "headline-xl": ["48px", {"lineHeight": "1.2", "letterSpacing": "-0.02em", "fontWeight": "600"}],
                        "body-md": ["16px", {"lineHeight": "1.6", "fontWeight": "400"}],
                        "headline-lg": ["32px", {"lineHeight": "1.3", "fontWeight": "600"}],
                        "body-lg": ["18px", {"lineHeight": "1.6", "fontWeight": "400"}],
                        "headline-lg-mobile": ["28px", {"lineHeight": "1.3", "fontWeight": "600"}]
                }
              },
            },
          }
}
else if (pageName.includes('product-detail1')) {
    tailwind.config = {
                darkMode: "class",
                theme: {
                    extend: {
                        "colors": {
                            "on-primary-fixed": "#161f00",
                            "surface-variant": "#e4e2e1",
                            "tertiary": "#5e604d",
                            "primary": "#56642b",
                            "on-secondary-fixed-variant": "#653d1e",
                            "tertiary-fixed-dim": "#c8c8b0",
                            "error": "#ba1a1a",
                            "inverse-surface": "#303030",
                            "on-error-container": "#93000a",
                            "on-primary-container": "#253000",
                            "surface-container-high": "#eae8e7",
                            "primary-fixed": "#d9eaa3",
                            "inverse-on-surface": "#f3f0f0",
                            "on-surface": "#1b1c1c",
                            "surface-tint": "#56642b",
                            "background": "#e5e2dd",
                            "surface-dim": "#dcd9d9",
                            "on-primary": "#ffffff",
                            "secondary": "#805533",
                            "inverse-primary": "#bdce89",
                            "on-background": "#1b1c1c",
                            "on-secondary-container": "#794e2e",
                            "on-error": "#ffffff",
                            "surface-container-highest": "#e4e2e1",
                            "outline": "#76786b",
                            "secondary-fixed-dim": "#f4bb92",
                            "on-surface-variant": "#46483c",
                            "surface-container-low": "#f6f3f2",
                            "on-tertiary-container": "#2c2e1d",
                            "error-container": "#ffdad6",
                            "on-primary-fixed-variant": "#3e4c16",
                            "surface-container-lowest": "#ffffff",
                            "secondary-fixed": "#ffdcc5",
                            "secondary-container": "#fdc39a",
                            "primary-fixed-dim": "#bdce89",
                            "on-tertiary-fixed-variant": "#474836",
                            "surface-container": "#f0eded",
                            "surface-bright": "#fbf9f8",
                            "primary-container": "#8a9a5b",
                            "surface": "#fbf9f8",
                            "on-tertiary-fixed": "#1b1d0e",
                            "tertiary-fixed": "#e4e4cc",
                            "on-tertiary": "#ffffff",
                            "tertiary-container": "#94957f",
                            "on-secondary-fixed": "#301400",
                            "on-secondary": "#ffffff",
                            "outline-variant": "#c6c8b8"
                        },
                        "borderRadius": {
                            "DEFAULT": "0.125rem",
                            "lg": "0.25rem",
                            "xl": "0.5rem",
                            "full": "0.75rem"
                        },
                        "spacing": {
                            "unit": "8px",
                            "container-max-width": "1200px",
                            "margin-desktop": "64px",
                            "margin-mobile": "20px",
                            "gutter": "32px"
                        },
                        "fontFamily": {
                            "label-md": ["Arial", "sans-serif"],
                            "headline-lg": ["Arial", "sans-serif"],
                            "body-lg": ["Arial", "sans-serif"],
                            "headline-xl": ["Arial", "sans-serif"],
                            "headline-lg-mobile": ["Arial", "sans-serif"],
                            "body-md": ["Arial", "sans-serif"]
                        }
                    },
                },
            }
}
else if (pageName.includes('product-detail2')) {
    tailwind.config = {
              darkMode: "class",
              theme: {
                extend: {
                  "colors": {
                          "surface-container-highest": "#e4e2e1",
                          "on-secondary-container": "#794e2e",
                          "outline-variant": "#c6c8b8",
                          "on-error-container": "#93000a",
                          "surface-container-high": "#eae8e7",
                          "error": "#ba1a1a",
                          "tertiary-fixed": "#e4e4cc",
                          "surface-container-lowest": "#ffffff",
                          "surface-bright": "#fbf9f8",
                          "on-primary-fixed-variant": "#3e4c16",
                          "surface-tint": "#56642b",
                          "on-tertiary": "#ffffff",
                          "tertiary-container": "#94957f",
                          "surface": "#fbf9f8",
                          "on-surface": "#1b1c1c",
                          "surface-dim": "#dcd9d9",
                          "on-background": "#1b1c1c",
                          "on-primary": "#ffffff",
                          "surface-container": "#f0eded",
                          "tertiary": "#5e604d",
                          "on-error": "#ffffff",
                          "primary-fixed-dim": "#bdce89",
                          "secondary-fixed-dim": "#f4bb92",
                          "inverse-on-surface": "#f3f0f0",
                          "tertiary-fixed-dim": "#c8c8b0",
                          "surface-container-low": "#f6f3f2",
                          "on-tertiary-fixed-variant": "#474836",
                          "on-primary-fixed": "#161f00",
                          "surface-variant": "#e4e2e1",
                          "on-secondary-fixed-variant": "#653d1e",
                          "error-container": "#ffdad6",
                          "inverse-surface": "#303030",
                          "on-secondary-fixed": "#301400",
                          "on-secondary": "#ffffff",
                          "on-surface-variant": "#46483c",
                          "secondary": "#805533",
                          "primary-container": "#8a9a5b",
                          "outline": "#76786b",
                          "on-tertiary-container": "#2c2e1d",
                          "secondary-container": "#fdc39a",
                          "inverse-primary": "#bdce89",
                          "on-tertiary-fixed": "#1b1d0e",
                          "primary": "#56642b",
                          "secondary-fixed": "#ffdcc5",
                          "on-primary-container": "#253000",
                          "background": "#fbf9f8",
                          "primary-fixed": "#d9eaa3"
                  },
                  "borderRadius": {
                          "DEFAULT": "0.125rem",
                          "lg": "0.25rem",
                          "xl": "0.5rem",
                          "full": "0.75rem"
                  },
                  "spacing": {
                          "unit": "8px",
                          "margin-desktop": "64px",
                          "margin-mobile": "20px",
                          "container-max-width": "1200px",
                          "gutter": "32px"
                  },
                  "fontFamily": {
                          "body-lg": ["Arial", "sans-serif"],
                          "label-md": ["Arial", "sans-serif"],
                          "headline-lg-mobile": ["Arial", "sans-serif"],
                          "headline-lg": ["Arial", "sans-serif"],
                          "body-md": ["Arial", "sans-serif"],
                          "headline-xl": ["Arial", "sans-serif"]
                  },
                  "fontSize": {
                          "body-lg": ["18px", {"lineHeight": "1.6", "fontWeight": "400"}],
                          "label-md": ["14px", {"lineHeight": "1.2", "letterSpacing": "0.05em", "fontWeight": "500"}],
                          "headline-lg-mobile": ["28px", {"lineHeight": "1.3", "fontWeight": "700"}],
                          "headline-lg": ["32px", {"lineHeight": "1.3", "fontWeight": "700"}],
                          "body-md": ["16px", {"lineHeight": "1.6", "fontWeight": "400"}],
                          "headline-xl": ["48px", {"lineHeight": "1.2", "letterSpacing": "-0.02em", "fontWeight": "700"}]
                  }
                },
              },
            }
}
else if (pageName.includes('product-detail3')) {
    tailwind.config = {
            darkMode: "class",
            theme: {
              extend: {
                "colors": {
                    "on-primary-fixed": "#161f00",
                    "surface-variant": "#e4e2e1",
                    "tertiary": "#5e604d",
                    "primary": "#56642b",
                    "on-secondary-fixed-variant": "#653d1e",
                    "tertiary-fixed-dim": "#c8c8b0",
                    "error": "#ba1a1a",
                    "inverse-surface": "#303030",
                    "on-error-container": "#93000a",
                    "on-primary-container": "#253000",
                    "surface-container-high": "#eae8e7",
                    "primary-fixed": "#d9eaa3",
                    "inverse-on-surface": "#f3f0f0",
                    "on-surface": "#1b1c1c",
                    "surface-tint": "#56642b",
                    "background": "#fbf9f8",
                    "surface-dim": "#dcd9d9",
                    "on-primary": "#ffffff",
                    "secondary": "#805533",
                    "inverse-primary": "#bdce89",
                    "on-background": "#1b1c1c",
                    "on-secondary-container": "#794e2e",
                    "on-error": "#ffffff",
                    "surface-container-highest": "#e4e2e1",
                    "outline": "#76786b",
                    "secondary-fixed-dim": "#f4bb92",
                    "on-surface-variant": "#46483c",
                    "surface-container-low": "#f6f3f2",
                    "on-tertiary-container": "#2c2e1d",
                    "error-container": "#ffdad6",
                    "on-primary-fixed-variant": "#3e4c16",
                    "surface-container-lowest": "#ffffff",
                    "secondary-fixed": "#ffdcc5",
                    "secondary-container": "#fdc39a",
                    "primary-fixed-dim": "#bdce89",
                    "on-tertiary-fixed-variant": "#474836",
                    "surface-container": "#f0eded",
                    "surface-bright": "#fbf9f8",
                    "primary-container": "#8a9a5b",
                    "surface": "#fbf9f8",
                    "on-tertiary-fixed": "#1b1d0e",
                    "tertiary-fixed": "#e4e4cc",
                    "on-tertiary": "#ffffff",
                    "tertiary-container": "#94957f",
                    "on-secondary-fixed": "#301400",
                    "on-secondary": "#ffffff",
                    "outline-variant": "#c6c8b8"
                },
                "borderRadius": {
                    "DEFAULT": "0.125rem",
                    "lg": "0.25rem",
                    "xl": "0.5rem",
                    "full": "0.75rem"
                },
                "spacing": {
                    "unit": "8px",
                    "container-max-width": "1200px",
                    "margin-desktop": "64px",
                    "margin-mobile": "20px",
                    "gutter": "32px"
                },
                "fontFamily": {
                    "label-md": ["Arial", "sans-serif"],
                    "headline-lg": ["Arial", "sans-serif"],
                    "body-lg": ["Arial", "sans-serif"],
                    "headline-xl": ["Arial", "sans-serif"],
                    "headline-lg-mobile": ["Arial", "sans-serif"],
                    "body-md": ["Arial", "sans-serif"]
                },
                "fontSize": {
                    "label-md": ["14px", {"lineHeight": "1.2", "letterSpacing": "0.05em", "fontWeight": "500"}],
                    "headline-lg": ["32px", {"lineHeight": "1.3", "fontWeight": "600"}],
                    "body-lg": ["18px", {"lineHeight": "1.6", "fontWeight": "400"}],
                    "headline-xl": ["48px", {"lineHeight": "1.2", "letterSpacing": "-0.02em", "fontWeight": "600"}],
                    "headline-lg-mobile": ["28px", {"lineHeight": "1.3", "fontWeight": "600"}],
                    "body-md": ["16px", {"lineHeight": "1.6", "fontWeight": "400"}]
                }
              },
            },
          }
}
else if (pageName.includes('product-detail4')) {
    tailwind.config = {
                darkMode: "class",
                theme: {
                    extend: {
                        "colors": {
                            "primary-container": "#8a9a5b",
                            "surface": "#fbf9f8",
                            "on-tertiary-fixed": "#1b1d0e",
                            "surface-tint": "#56642b",
                            "primary-fixed": "#d9eaa3",
                            "on-surface-variant": "#46483c",
                            "surface-container-lowest": "#ffffff",
                            "inverse-on-surface": "#f3f0f0",
                            "surface-bright": "#fbf9f8",
                            "surface-variant": "#e4e2e1",
                            "on-surface": "#1b1c1c",
                            "on-secondary-fixed": "#301400",
                            "tertiary-fixed-dim": "#c8c8b0",
                            "surface-container-high": "#eae8e7",
                            "inverse-primary": "#bdce89",
                            "tertiary": "#5e604d",
                            "surface-container-highest": "#e4e2e1",
                            "inverse-surface": "#303030",
                            "secondary-fixed-dim": "#f4bb92",
                            "error": "#ba1a1a",
                            "outline-variant": "#c6c8b8",
                            "on-secondary-fixed-variant": "#653d1e",
                            "on-primary-container": "#253000",
                            "on-primary": "#ffffff",
                            "background": "#fbf9f8",
                            "on-primary-fixed-variant": "#3e4c16",
                            "surface-container-low": "#f6f3f2",
                            "tertiary-fixed": "#e4e4cc",
                            "secondary-fixed": "#ffdcc5",
                            "secondary-container": "#fdc39a",
                            "tertiary-container": "#94957f",
                            "on-tertiary-fixed-variant": "#474836",
                            "outline": "#76786b",
                            "surface-container": "#f0eded",
                            "primary": "#56642b",
                            "on-primary-fixed": "#161f00",
                            "error-container": "#ffdad6",
                            "secondary": "#805533",
                            "on-error": "#ffffff",
                            "on-secondary-container": "#794e2e",
                            "on-tertiary-container": "#2c2e1d",
                            "on-tertiary": "#ffffff",
                            "surface-dim": "#dcd9d9",
                            "on-secondary": "#ffffff",
                            "on-error-container": "#93000a",
                            "on-background": "#1b1c1c",
                            "primary-fixed-dim": "#bdce89"
                        },
                        "borderRadius": {
                            "DEFAULT": "0.125rem",
                            "lg": "0.25rem",
                            "xl": "0.5rem",
                            "full": "0.75rem"
                        },
                        "spacing": {
                            "margin-desktop": "64px",
                            "gutter": "32px",
                            "container-max-width": "1200px",
                            "unit": "8px",
                            "margin-mobile": "20px"
                        },
                        "fontFamily": {
                            "headline-lg-mobile": ["Arial", "sans-serif"],
                            "headline-xl": ["Arial", "sans-serif"],
                            "label-md": ["Arial", "sans-serif"],
                            "headline-lg": ["Arial", "sans-serif"],
                            "body-md": ["Arial", "sans-serif"],
                            "body-lg": ["Arial", "sans-serif"]
                        },
                        "fontSize": {
                            "headline-lg-mobile": ["28px", {"lineHeight": "1.3", "fontWeight": "700"}],
                            "headline-xl": ["48px", {"lineHeight": "1.2", "letterSpacing": "-0.02em", "fontWeight": "700"}],
                            "label-md": ["14px", {"lineHeight": "1.2", "letterSpacing": "0.05em", "fontWeight": "600"}],
                            "headline-lg": ["32px", {"lineHeight": "1.3", "fontWeight": "700"}],
                            "body-md": ["16px", {"lineHeight": "1.6", "fontWeight": "400"}],
                            "body-lg": ["18px", {"lineHeight": "1.6", "fontWeight": "400"}]
                        }
                    },
                },
            }
}
else if (pageName.includes('product-detail5')) {
    tailwind.config = {
                darkMode: "class",
                theme: {
                    extend: {
                        "colors": {
                            "primary": "#56642b",
                            "secondary": "#805533",
                            "surface": "#fbf9f8",
                            "on-surface": "#1b1c1c",
                            "on-surface-variant": "#46483c",
                            "outline": "#76786b",
                            "outline-variant": "#c6c8b8",
                            "surface-container-low": "#f6f3f2",
                            "surface-container-high": "#eae8e7",
                            "on-primary": "#ffffff"
                        },
                        "borderRadius": {
                            "DEFAULT": "0.125rem",
                            "lg": "0.25rem",
                            "xl": "0.5rem",
                            "full": "0.75rem"
                        },
                        "spacing": {
                            "unit": "8px",
                            "margin-desktop": "64px",
                            "margin-mobile": "20px",
                            "container-max-width": "1200px",
                            "gutter": "32px"
                        },
                        "fontFamily": {
                            "sans": ["Arial", "sans-serif"],
                            "body-lg": ["Arial"],
                            "label-md": ["Arial"],
                            "headline-lg": ["Arial"],
                            "body-md": ["Arial"],
                            "headline-xl": ["Arial"]
                        }
                    },
                },
            }
}
else if (pageName.includes('store')) {
    tailwind.config = {
                darkMode: "class",
                theme: {
                    extend: {
                        "colors": {
                            "on-background": "#1b1c1c",
                            "inverse-on-surface": "#f3f0f0",
                            "tertiary-fixed-dim": "#c8c8b0",
                            "surface-tint": "#56642b",
                            "on-secondary-fixed-variant": "#653d1e",
                            "secondary-container": "#fdc39a",
                            "surface-dim": "#dcd9d9",
                            "on-primary-container": "#253000",
                            "tertiary-fixed": "#e4e4cc",
                            "surface-variant": "#e4e2e1",
                            "on-error": "#ffffff",
                            "surface-container-high": "#eae8e7",
                            "primary-fixed-dim": "#bdce89",
                            "on-tertiary-container": "#2c2e1d",
                            "on-primary-fixed-variant": "#3e4c16",
                            "surface-container-low": "#f6f3f2",
                            "on-secondary-fixed": "#301400",
                            "on-tertiary-fixed": "#1b1d0e",
                            "secondary": "#805533",
                            "tertiary": "#5e604d",
                            "on-primary-fixed": "#161f00",
                            "on-primary": "#ffffff",
                            "tertiary-container": "#94957f",
                            "on-error-container": "#93000a",
                            "secondary-fixed-dim": "#f4bb92",
                            "primary": "#56642b",
                            "on-secondary": "#ffffff",
                            "outline": "#76786b",
                            "surface-bright": "#fbf9f8",
                            "surface-container-highest": "#e4e2e1",
                            "background": "#fbf9f8",
                            "primary-fixed": "#d9eaa3",
                            "on-secondary-container": "#794e2e",
                            "inverse-surface": "#303030",
                            "on-tertiary": "#ffffff",
                            "secondary-fixed": "#ffdcc5",
                            "error": "#ba1a1a",
                            "surface-container": "#f0eded",
                            "on-surface-variant": "#46483c",
                            "surface-container-lowest": "#ffffff",
                            "on-tertiary-fixed-variant": "#474836",
                            "on-surface": "#1b1c1c",
                            "error-container": "#ffdad6",
                            "surface": "#fbf9f8",
                            "primary-container": "#8a9a5b",
                            "outline-variant": "#c6c8b8",
                            "inverse-primary": "#bdce89"
                        },
                        "borderRadius": {
                            "DEFAULT": "0.125rem",
                            "lg": "0.25rem",
                            "xl": "0.5rem",
                            "full": "0.75rem"
                        },
                        "spacing": {
                            "unit": "8px",
                            "container-max-width": "1200px",
                            "gutter": "32px",
                            "margin-desktop": "64px",
                            "margin-mobile": "20px"
                        },
                        "fontFamily": {
                            "label-md": ["Plus Jakarta Sans"],
                            "headline-xl": ["Arial", "sans-serif"],
                            "body-md": ["Arial", "sans-serif"],
                            "headline-lg": ["Arial", "sans-serif"],
                            "body-lg": ["Arial", "sans-serif"],
                            "headline-lg-mobile": ["Arial", "sans-serif"]
                        },
                        "fontSize": {
                            "label-md": ["14px", {"lineHeight": "1.2", "letterSpacing": "0.05em", "fontWeight": "500"}],
                            "headline-xl": ["56px", {"lineHeight": "1.2", "letterSpacing": "-0.01em", "fontWeight": "700"}],
                            "body-md": ["16px", {"lineHeight": "1.8", "fontWeight": "400"}],
                            "headline-lg": ["36px", {"lineHeight": "1.3", "fontWeight": "700"}],
                            "body-lg": ["20px", {"lineHeight": "1.7", "fontWeight": "400"}],
                            "headline-lg-mobile": ["30px", {"lineHeight": "1.3", "fontWeight": "700"}]
                        }
                    },
                },
            }
}
else {
    tailwind.config = {
                darkMode: "class",
                theme: {
                    extend: {
                        "colors": {
                            "surface-container-highest": "#e4e2e1",
                            "outline-variant": "#c6c8b8",
                            "primary": "#56642b",
                            "on-surface": "#1b1c1c",
                            "outline": "#76786b",
                            "on-tertiary": "#ffffff",
                            "on-background": "#1b1c1c",
                            "background": "#e5e2dd",
                            "inverse-primary": "#bdce89",
                            "primary-container": "#8a9a5b",
                            "on-error": "#ffffff",
                            "tertiary-fixed": "#e4e4cc",
                            "surface-container-high": "#eae8e7",
                            "surface": "#fbf9f8",
                            "inverse-on-surface": "#f3f0f0",
                            "secondary-fixed-dim": "#f4bb92",
                            "error": "#ba1a1a",
                            "secondary-fixed": "#ffdcc5",
                            "secondary-container": "#fdc39a",
                            "surface-variant": "#e4e2e1",
                            "surface-bright": "#fbf9f8",
                            "on-tertiary-fixed": "#1b1d0e",
                            "secondary": "#805533",
                            "on-error-container": "#93000a",
                            "on-surface-variant": "#46483c",
                            "on-secondary-fixed-variant": "#653d1e",
                            "inverse-surface": "#303030",
                            "on-primary": "#ffffff",
                            "on-tertiary-container": "#2c2e1d",
                            "on-secondary-fixed": "#301400",
                            "error-container": "#ffdad6",
                            "tertiary-container": "#94957f",
                            "on-secondary-container": "#794e2e",
                            "tertiary": "#5e604d",
                            "surface-container-low": "#f6f3f2",
                            "on-tertiary-fixed-variant": "#474836",
                            "surface-container-lowest": "#ffffff",
                            "on-secondary": "#ffffff",
                            "primary-fixed-dim": "#bdce89",
                            "primary-fixed": "#d9eaa3",
                            "surface-container": "#f0eded",
                            "on-primary-container": "#253000",
                            "surface-tint": "#56642b",
                            "on-primary-fixed": "#161f00",
                            "tertiary-fixed-dim": "#c8c8b0",
                            "surface-dim": "#dcd9d9",
                            "on-primary-fixed-variant": "#3e4c16"
                        },
                        "borderRadius": {
                            "DEFAULT": "0.125rem",
                            "lg": "0.25rem",
                            "xl": "0.5rem",
                            "full": "9999px"
                        },
                        "spacing": {
                            "unit": "8px",
                            "container-max-width": "1200px",
                            "gutter": "32px",
                            "margin-desktop": "64px",
                            "margin-mobile": "20px"
                        },
                        "fontFamily": {
                            "label-md": ["Arial", "sans-serif"],
                            "headline-xl": ["Arial", "sans-serif"],
                            "body-md": ["Arial", "sans-serif"],
                            "headline-lg": ["Arial", "sans-serif"],
                            "body-lg": ["Arial", "sans-serif"],
                            "headline-lg-mobile": ["Arial", "sans-serif"]
                        },
                        "fontSize": {
                            "label-md": ["14px", {"lineHeight": "1.2", "letterSpacing": "0.05em", "fontWeight": "500"}],
                            "headline-xl": ["48px", {"lineHeight": "1.2", "letterSpacing": "-0.02em", "fontWeight": "600"}],
                            "body-md": ["16px", {"lineHeight": "1.6", "fontWeight": "400"}],
                            "headline-lg": ["32px", {"lineHeight": "1.3", "fontWeight": "600"}],
                            "body-lg": ["18px", {"lineHeight": "1.6", "fontWeight": "400"}],
                            "headline-lg-mobile": ["28px", {"lineHeight": "1.3", "fontWeight": "600"}]
                        }
                    }
                }
            };
}

// --- Page Logic Execution ---
document.addEventListener('DOMContentLoaded', () => {
    const page = getCurrentPage();

    if (page.includes('about')) {
        tailwind.config = {
                    darkMode: "class",
                    theme: {
                        extend: {
                            "colors": {
                                "surface-container-highest": "#e4e2e1",
                                "outline-variant": "#c6c8b8",
                                "primary": "#56642b",
                                "on-surface": "#1b1c1c",
                                "outline": "#76786b",
                                "on-tertiary": "#ffffff",
                                "on-background": "#1b1c1c",
                                "background": "#e5e2dd",
                                "inverse-primary": "#bdce89",
                                "primary-container": "#8a9a5b",
                                "on-error": "#ffffff",
                                "tertiary-fixed": "#e4e4cc",
                                "surface-container-high": "#eae8e7",
                                "surface": "#fbf9f8",
                                "inverse-on-surface": "#f3f0f0",
                                "secondary-fixed-dim": "#f4bb92",
                                "error": "#ba1a1a",
                                "secondary-fixed": "#ffdcc5",
                                "secondary-container": "#fdc39a",
                                "surface-variant": "#e4e2e1",
                                "surface-bright": "#fbf9f8",
                                "on-tertiary-fixed": "#1b1d0e",
                                "secondary": "#805533",
                                "on-error-container": "#93000a",
                                "on-surface-variant": "#46483c",
                                "on-secondary-fixed-variant": "#653d1e",
                                "inverse-surface": "#303030",
                                "on-primary": "#ffffff",
                                "on-tertiary-container": "#2c2e1d",
                                "on-secondary-fixed": "#301400",
                                "error-container": "#ffdad6",
                                "tertiary-container": "#94957f",
                                "on-secondary-container": "#794e2e",
                                "tertiary": "#5e604d",
                                "surface-container-low": "#f6f3f2",
                                "on-tertiary-fixed-variant": "#474836",
                                "surface-container-lowest": "#ffffff",
                                "on-secondary": "#ffffff",
                                "primary-fixed-dim": "#bdce89",
                                "primary-fixed": "#d9eaa3",
                                "surface-container": "#f0eded",
                                "on-primary-container": "#253000",
                                "surface-tint": "#56642b",
                                "on-primary-fixed": "#161f00",
                                "tertiary-fixed-dim": "#c8c8b0",
                                "surface-dim": "#dcd9d9",
                                "on-primary-fixed-variant": "#3e4c16"
                            },
                            "borderRadius": {
                                "DEFAULT": "0.125rem",
                                "lg": "0.25rem",
                                "xl": "0.5rem",
                                "full": "9999px"
                            },
                            "spacing": {
                                "unit": "8px",
                                "container-max-width": "1200px",
                                "gutter": "32px",
                                "margin-desktop": "64px",
                                "margin-mobile": "20px"
                            },
                            "fontFamily": {
                                "label-md": ["Arial", "sans-serif"],
                                "headline-xl": ["Arial", "sans-serif"],
                                "body-md": ["Arial", "sans-serif"],
                                "headline-lg": ["Arial", "sans-serif"],
                                "body-lg": ["Arial", "sans-serif"],
                                "headline-lg-mobile": ["Arial", "sans-serif"]
                            },
                            "fontSize": {
                                "label-md": ["14px", {"lineHeight": "1.2", "letterSpacing": "0.05em", "fontWeight": "500"}],
                                "headline-xl": ["48px", {"lineHeight": "1.2", "letterSpacing": "-0.02em", "fontWeight": "600"}],
                                "body-md": ["16px", {"lineHeight": "1.6", "fontWeight": "400"}],
                                "headline-lg": ["32px", {"lineHeight": "1.3", "fontWeight": "600"}],
                                "body-lg": ["18px", {"lineHeight": "1.6", "fontWeight": "400"}],
                                "headline-lg-mobile": ["28px", {"lineHeight": "1.3", "fontWeight": "600"}]
                            }
                        }
                    }
                };
    }
    else if (page.includes('about')) {
        // Intersection Observer for Reveal Animations
            const revealObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                    }
                });
            }, {
                threshold: 0.15,
                rootMargin: "0px 0px -80px 0px"
            });
        
            document.querySelectorAll('.reveal').forEach(el => {
                revealObserver.observe(el);
            });
        
            // Parallax effect for botanical images
            window.addEventListener('scroll', () => {
                const scrolled = window.pageYOffset;
                document.querySelectorAll('.decorative-element').forEach(el => {
                    const speed = 0.05;
                    el.style.transform = `translateY(${scrolled * speed}px)`;
                });
            });
        
            // Generate Tea Leaves Animation
            const leafContainer = document.getElementById('leaf-container');
            const leafCount = 15;
        
            for (let i = 0; i < leafCount; i++) {
                const leaf = document.createElement('div');
                leaf.className = 'tea-leaf material-symbols-outlined';
                leaf.textContent = 'eco'; // Material symbol for leaf
                
                // Randomize initial position and timing
                const startX = Math.random() * 100;
                const delay = Math.random() * 10;
                const duration = 15 + Math.random() * 10;
                const size = 12 + Math.random() * 20;
                
                leaf.style.left = `${startX}%`;
                leaf.style.animationDelay = `${delay}s`;
                leaf.style.animationDuration = `${duration}s`;
                leaf.style.fontSize = `${size}px`;
                
                leafContainer.appendChild(leaf);
            }
    }
    else if (page.includes('contact')) {
        tailwind.config = {
                    darkMode: "class",
                    theme: {
                        extend: {
                            "colors": {
                                "on-background": "#1b1c1c",
                                "inverse-on-surface": "#f3f0f0",
                                "tertiary-fixed-dim": "#c8c8b0",
                                "surface-tint": "#56642b",
                                "on-secondary-fixed-variant": "#653d1e",
                                "secondary-container": "#fdc39a",
                                "surface-dim": "#dcd9d9",
                                "on-primary-container": "#253000",
                                "tertiary-fixed": "#e4e4cc",
                                "surface-variant": "#e4e2e1",
                                "on-error": "#ffffff",
                                "surface-container-high": "#eae8e7",
                                "primary-fixed-dim": "#bdce89",
                                "on-tertiary-container": "#2c2e1d",
                                "on-primary-fixed-variant": "#3e4c16",
                                "surface-container-low": "#f6f3f2",
                                "on-secondary-fixed": "#301400",
                                "on-tertiary-fixed": "#1b1d0e",
                                "secondary": "#805533",
                                "tertiary": "#5e604d",
                                "on-primary-fixed": "#161f00",
                                "on-primary": "#ffffff",
                                "tertiary-container": "#94957f",
                                "on-error-container": "#93000a",
                                "secondary-fixed-dim": "#f4bb92",
                                "primary": "#56642b",
                                "on-secondary": "#ffffff",
                                "outline": "#76786b",
                                "surface-bright": "#fbf9f8",
                                "surface-container-highest": "#e4e2e1",
                                "background": "#fbf9f8",
                                "primary-fixed": "#d9eaa3",
                                "on-secondary-container": "#794e2e",
                                "inverse-surface": "#303030",
                                "on-tertiary": "#ffffff",
                                "secondary-fixed": "#ffdcc5",
                                "error": "#ba1a1a",
                                "surface-container": "#f0eded",
                                "on-surface-variant": "#46483c",
                                "surface-container-lowest": "#ffffff",
                                "on-tertiary-fixed-variant": "#474836",
                                "on-surface": "#1b1c1c",
                                "error-container": "#ffdad6",
                                "surface": "#fbf9f8",
                                "primary-container": "#8a9a5b",
                                "outline-variant": "#c6c8b8",
                                "inverse-primary": "#bdce89"
                            },
                            "borderRadius": {
                                "DEFAULT": "0.125rem",
                                "lg": "0.25rem",
                                "xl": "0.5rem",
                                "full": "0.75rem"
                            },
                            "spacing": {
                                "unit": "8px",
                                "container-max-width": "1200px",
                                "gutter": "32px",
                                "margin-desktop": "64px",
                                "margin-mobile": "20px"
                            },
                            "fontFamily": {
                                "label-md": ["Plus Jakarta Sans"],
                                "headline-xl": ["Arial", "sans-serif"],
                                "body-md": ["Arial", "sans-serif"],
                                "headline-lg": ["Arial", "sans-serif"],
                                "body-lg": ["Arial", "sans-serif"],
                                "headline-lg-mobile": ["Arial", "sans-serif"]
                            },
                            "fontSize": {
                                "label-md": ["14px", {"lineHeight": "1.2", "letterSpacing": "0.05em", "fontWeight": "500"}],
                                "headline-xl": ["48px", {"lineHeight": "1.2", "letterSpacing": "-0.02em", "fontWeight": "600"}],
                                "body-md": ["16px", {"lineHeight": "1.6", "fontWeight": "400"}],
                                "headline-lg": ["32px", {"lineHeight": "1.3", "fontWeight": "600"}],
                                "body-lg": ["18px", {"lineHeight": "1.6", "fontWeight": "400"}],
                                "headline-lg-mobile": ["28px", {"lineHeight": "1.3", "fontWeight": "600"}]
                            }
                        },
                    },
                }
    }
    else if (page.includes('contact')) {
        // IntersectionObserver for entrance animations
            const revealCallback = (entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                    }
                });
            };
        
            const observerOptions = {
                threshold: 0.1,
                rootMargin: '0px 0px -100px 0px'
            };
        
            const observer = new IntersectionObserver(revealCallback, observerOptions);
            document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
        
            // Parallax Effect
            window.addEventListener('scroll', () => {
                const parallaxBg = document.querySelector('.parallax-bg');
                if (parallaxBg) {
                    const scrolled = window.pageYOffset;
                    const parent = parallaxBg.closest('.parallax-container');
                    const parentTop = parent.offsetTop;
                    const viewportHeight = window.innerHeight;
                    
                    if (scrolled + viewportHeight > parentTop && scrolled < parentTop + parent.offsetHeight) {
                        const offset = (scrolled - parentTop) * 0.1;
                        parallaxBg.style.setProperty('--parallax-offset', `${offset}px`);
                    }
                }
            });
        
            // Form Submission Interaction
            document.getElementById('contactForm').addEventListener('submit', function(e) {
                e.preventDefault();
                const btn = this.querySelector('button');
                const originalContent = btn.innerHTML;
                
                btn.disabled = true;
                btn.innerHTML = '<span class="flex items-center gap-4">正在為您傳遞訊息... <span class="material-symbols-outlined animate-spin" data-icon="progress_activity">progress_activity</span></span>';
                
                setTimeout(() => {
                    btn.innerHTML = '<span class="flex items-center gap-4">訊息已優雅送達 <span class="material-symbols-outlined" data-icon="check_circle">check_circle</span></span>';
                    btn.classList.replace('bg-primary', 'bg-tertiary');
                    this.reset();
                    
                    setTimeout(() => {
                        btn.innerHTML = originalContent;
                        btn.disabled = false;
                        btn.classList.replace('bg-tertiary', 'bg-primary');
                    }, 4000);
                }, 2000);
            });
        
            // Mobile menu toggle
            const menuBtn = document.getElementById('mobile-menu-toggle');
            menuBtn.addEventListener('click', () => {
                alert('選單功能即將開啟，靜候您的探訪。');
            });
    }
    else if (page.includes('franchise')) {
        tailwind.config = {
                    darkMode: "class",
                    theme: {
                        extend: {
                            "colors": {
                                "on-background": "#1b1c1c",
                                "inverse-on-surface": "#f3f0f0",
                                "tertiary-fixed-dim": "#c8c8b0",
                                "surface-tint": "#56642b",
                                "on-secondary-fixed-variant": "#653d1e",
                                "secondary-container": "#fdc39a",
                                "surface-dim": "#dcd9d9",
                                "on-primary-container": "#253000",
                                "tertiary-fixed": "#e4e4cc",
                                "surface-variant": "#e4e2e1",
                                "on-error": "#ffffff",
                                "surface-container-high": "#eae8e7",
                                "primary-fixed-dim": "#bdce89",
                                "on-tertiary-container": "#2c2e1d",
                                "on-primary-fixed-variant": "#3e4c16",
                                "surface-container-low": "#f6f3f2",
                                "on-secondary-fixed": "#301400",
                                "on-tertiary-fixed": "#1b1d0e",
                                "secondary": "#805533",
                                "tertiary": "#5e604d",
                                "on-primary-fixed": "#161f00",
                                "on-primary": "#ffffff",
                                "tertiary-container": "#94957f",
                                "on-error-container": "#93000a",
                                "secondary-fixed-dim": "#f4bb92",
                                "primary": "#56642b",
                                "on-secondary": "#ffffff",
                                "outline": "#76786b",
                                "surface-bright": "#fbf9f8",
                                "surface-container-highest": "#e4e2e1",
                                "background": "#fbf9f8",
                                "primary-fixed": "#d9eaa3",
                                "on-secondary-container": "#794e2e",
                                "inverse-surface": "#303030",
                                "on-tertiary": "#ffffff",
                                "secondary-fixed": "#ffdcc5",
                                "error": "#ba1a1a",
                                "surface-container": "#f0eded",
                                "on-surface-variant": "#46483c",
                                "surface-container-lowest": "#ffffff",
                                "on-tertiary-fixed-variant": "#474836",
                                "on-surface": "#1b1c1c",
                                "error-container": "#ffdad6",
                                "surface": "#fbf9f8",
                                "primary-container": "#8a9a5b",
                                "outline-variant": "#c6c8b8",
                                "inverse-primary": "#bdce89"
                            },
                            "borderRadius": {
                                "DEFAULT": "0.125rem",
                                "lg": "0.25rem",
                                "xl": "0.5rem",
                                "full": "0.75rem"
                            },
                            "spacing": {
                                "unit": "8px",
                                "container-max-width": "1200px",
                                "gutter": "32px",
                                "margin-desktop": "64px",
                                "margin-mobile": "20px"
                            },
                            "fontFamily": {
                                "label-md": ["Plus Jakarta Sans", "Arial", "sans-serif"],
                                "headline-xl": ["Arial", "sans-serif"],
                                "body-md": ["Arial", "sans-serif"],
                                "headline-lg": ["Arial", "sans-serif"],
                                "body-lg": ["Arial", "sans-serif"],
                                "headline-lg-mobile": ["Arial", "sans-serif"]
                            },
                            "fontSize": {
                                "label-md": ["14px", {"lineHeight": "1.2", "letterSpacing": "0.05em", "fontWeight": "500"}],
                                "headline-xl": ["48px", {"lineHeight": "1.2", "letterSpacing": "-0.02em", "fontWeight": "600"}],
                                "body-md": ["16px", {"lineHeight": "1.6", "fontWeight": "400"}],
                                "headline-lg": ["32px", {"lineHeight": "1.3", "fontWeight": "600"}],
                                "body-lg": ["18px", {"lineHeight": "1.6", "fontWeight": "400"}],
                                "headline-lg-mobile": ["28px", {"lineHeight": "1.3", "fontWeight": "600"}]
                            }
                        },
                    },
                }
    }
    else if (page.includes('franchise')) {
        // Reveal Observer
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                    }
                });
            }, { threshold: 0.1 });
        
            document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
        
            // Parallax
            window.addEventListener('scroll', () => {
                const scrolled = window.pageYOffset;
                document.querySelectorAll('.parallax-target').forEach(el => {
                    const speed = el.getAttribute('data-speed') || 0.1;
                    const rect = el.getBoundingClientRect();
                    if (rect.top < window.innerHeight && rect.bottom > 0) {
                        const yPos = (window.innerHeight / 2 - rect.top) * speed;
                        el.style.transform = `translateY(${yPos}px)`;
                    }
                });
            });
    }
    else if (page.includes('news')) {
        tailwind.config = {
                darkMode: "class",
                theme: {
                  extend: {
                    "colors": {
                            "on-background": "#1b1c1c",
                            "inverse-on-surface": "#f3f0f0",
                            "tertiary-fixed-dim": "#c8c8b0",
                            "surface-tint": "#56642b",
                            "on-secondary-fixed-variant": "#653d1e",
                            "secondary-container": "#fdc39a",
                            "surface-dim": "#dcd9d9",
                            "on-primary-container": "#253000",
                            "tertiary-fixed": "#e4e4cc",
                            "surface-variant": "#e4e2e1",
                            "on-error": "#ffffff",
                            "surface-container-high": "#eae8e7",
                            "primary-fixed-dim": "#bdce89",
                            "on-tertiary-container": "#2c2e1d",
                            "on-primary-fixed-variant": "#3e4c16",
                            "surface-container-low": "#f6f3f2",
                            "on-secondary-fixed": "#301400",
                            "on-tertiary-fixed": "#1b1d0e",
                            "secondary": "#805533",
                            "tertiary": "#5e604d",
                            "on-primary-fixed": "#161f00",
                            "on-primary": "#ffffff",
                            "tertiary-container": "#94957f",
                            "on-error-container": "#93000a",
                            "secondary-fixed-dim": "#f4bb92",
                            "primary": "#56642b",
                            "on-secondary": "#ffffff",
                            "outline": "#76786b",
                            "surface-bright": "#fbf9f8",
                            "surface-container-highest": "#e4e2e1",
                            "background": "#fbf9f8",
                            "primary-fixed": "#d9eaa3",
                            "on-secondary-container": "#794e2e",
                            "inverse-surface": "#303030",
                            "on-tertiary": "#ffffff",
                            "secondary-fixed": "#ffdcc5",
                            "error": "#ba1a1a",
                            "surface-container": "#f0eded",
                            "on-surface-variant": "#46483c",
                            "surface-container-lowest": "#ffffff",
                            "on-tertiary-fixed-variant": "#474836",
                            "on-surface": "#1b1c1c",
                            "error-container": "#ffdad6",
                            "surface": "#fbf9f8",
                            "primary-container": "#8a9a5b",
                            "outline-variant": "#c6c8b8",
                            "inverse-primary": "#bdce89"
                    },
                    "borderRadius": {
                            "DEFAULT": "0.125rem",
                            "lg": "0.25rem",
                            "xl": "0.5rem",
                            "full": "0.75rem"
                    },
                    "spacing": {
                            "unit": "8px",
                            "container-max-width": "1200px",
                            "gutter": "32px",
                            "margin-desktop": "64px",
                            "margin-mobile": "20px"
                    },
                    "fontFamily": {
                            "label-md": ["Plus Jakarta Sans", "Arial", "sans-serif"],
                            "headline-xl": ["Arial", "sans-serif"],
                            "body-md": ["Arial", "sans-serif"],
                            "headline-lg": ["Arial", "sans-serif"],
                            "body-lg": ["Arial", "sans-serif"],
                            "headline-lg-mobile": ["Arial", "sans-serif"]
                    },
                    "fontSize": {
                            "label-md": ["14px", {"lineHeight": "1.2", "letterSpacing": "0.05em", "fontWeight": "500"}],
                            "headline-xl": ["48px", {"lineHeight": "1.2", "letterSpacing": "-0.02em", "fontWeight": "600"}],
                            "body-md": ["16px", {"lineHeight": "1.6", "fontWeight": "400"}],
                            "headline-lg": ["32px", {"lineHeight": "1.3", "fontWeight": "600"}],
                            "body-lg": ["18px", {"lineHeight": "1.6", "fontWeight": "400"}],
                            "headline-lg-mobile": ["28px", {"lineHeight": "1.3", "fontWeight": "600"}]
                    }
                  },
                },
              }
    }
    else if (page.includes('news')) {
        // Reveal animations
            const revealObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                        revealObserver.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.1 });
        
            document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
        
            // Scroll button visibility
            window.onscroll = function() {
                const btn = document.getElementById('backToTop');
                if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
                    btn.style.opacity = "1";
                } else {
                    btn.style.opacity = "0";
                }
            };
    }
    else if (page.includes('product-detail1')) {
        tailwind.config = {
                    darkMode: "class",
                    theme: {
                        extend: {
                            "colors": {
                                "on-primary-fixed": "#161f00",
                                "surface-variant": "#e4e2e1",
                                "tertiary": "#5e604d",
                                "primary": "#56642b",
                                "on-secondary-fixed-variant": "#653d1e",
                                "tertiary-fixed-dim": "#c8c8b0",
                                "error": "#ba1a1a",
                                "inverse-surface": "#303030",
                                "on-error-container": "#93000a",
                                "on-primary-container": "#253000",
                                "surface-container-high": "#eae8e7",
                                "primary-fixed": "#d9eaa3",
                                "inverse-on-surface": "#f3f0f0",
                                "on-surface": "#1b1c1c",
                                "surface-tint": "#56642b",
                                "background": "#e5e2dd",
                                "surface-dim": "#dcd9d9",
                                "on-primary": "#ffffff",
                                "secondary": "#805533",
                                "inverse-primary": "#bdce89",
                                "on-background": "#1b1c1c",
                                "on-secondary-container": "#794e2e",
                                "on-error": "#ffffff",
                                "surface-container-highest": "#e4e2e1",
                                "outline": "#76786b",
                                "secondary-fixed-dim": "#f4bb92",
                                "on-surface-variant": "#46483c",
                                "surface-container-low": "#f6f3f2",
                                "on-tertiary-container": "#2c2e1d",
                                "error-container": "#ffdad6",
                                "on-primary-fixed-variant": "#3e4c16",
                                "surface-container-lowest": "#ffffff",
                                "secondary-fixed": "#ffdcc5",
                                "secondary-container": "#fdc39a",
                                "primary-fixed-dim": "#bdce89",
                                "on-tertiary-fixed-variant": "#474836",
                                "surface-container": "#f0eded",
                                "surface-bright": "#fbf9f8",
                                "primary-container": "#8a9a5b",
                                "surface": "#fbf9f8",
                                "on-tertiary-fixed": "#1b1d0e",
                                "tertiary-fixed": "#e4e4cc",
                                "on-tertiary": "#ffffff",
                                "tertiary-container": "#94957f",
                                "on-secondary-fixed": "#301400",
                                "on-secondary": "#ffffff",
                                "outline-variant": "#c6c8b8"
                            },
                            "borderRadius": {
                                "DEFAULT": "0.125rem",
                                "lg": "0.25rem",
                                "xl": "0.5rem",
                                "full": "0.75rem"
                            },
                            "spacing": {
                                "unit": "8px",
                                "container-max-width": "1200px",
                                "margin-desktop": "64px",
                                "margin-mobile": "20px",
                                "gutter": "32px"
                            },
                            "fontFamily": {
                                "label-md": ["Arial", "sans-serif"],
                                "headline-lg": ["Arial", "sans-serif"],
                                "body-lg": ["Arial", "sans-serif"],
                                "headline-xl": ["Arial", "sans-serif"],
                                "headline-lg-mobile": ["Arial", "sans-serif"],
                                "body-md": ["Arial", "sans-serif"]
                            }
                        },
                    },
                }
    }
    else if (page.includes('product-detail1')) {
        // Reveal animation
            const observerOptions = {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            };
        
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('opacity-100', 'translate-y-0');
                        entry.target.classList.remove('opacity-0', 'translate-y-12');
                    }
                });
            }, observerOptions);
        
            document.querySelectorAll('.group, section > div, .max-w-3xl').forEach(el => {
                el.classList.add('transition-all', 'duration-1000', 'opacity-0', 'translate-y-12');
                observer.observe(el);
            });
    }
    else if (page.includes('product-detail2')) {
        tailwind.config = {
                  darkMode: "class",
                  theme: {
                    extend: {
                      "colors": {
                              "surface-container-highest": "#e4e2e1",
                              "on-secondary-container": "#794e2e",
                              "outline-variant": "#c6c8b8",
                              "on-error-container": "#93000a",
                              "surface-container-high": "#eae8e7",
                              "error": "#ba1a1a",
                              "tertiary-fixed": "#e4e4cc",
                              "surface-container-lowest": "#ffffff",
                              "surface-bright": "#fbf9f8",
                              "on-primary-fixed-variant": "#3e4c16",
                              "surface-tint": "#56642b",
                              "on-tertiary": "#ffffff",
                              "tertiary-container": "#94957f",
                              "surface": "#fbf9f8",
                              "on-surface": "#1b1c1c",
                              "surface-dim": "#dcd9d9",
                              "on-background": "#1b1c1c",
                              "on-primary": "#ffffff",
                              "surface-container": "#f0eded",
                              "tertiary": "#5e604d",
                              "on-error": "#ffffff",
                              "primary-fixed-dim": "#bdce89",
                              "secondary-fixed-dim": "#f4bb92",
                              "inverse-on-surface": "#f3f0f0",
                              "tertiary-fixed-dim": "#c8c8b0",
                              "surface-container-low": "#f6f3f2",
                              "on-tertiary-fixed-variant": "#474836",
                              "on-primary-fixed": "#161f00",
                              "surface-variant": "#e4e2e1",
                              "on-secondary-fixed-variant": "#653d1e",
                              "error-container": "#ffdad6",
                              "inverse-surface": "#303030",
                              "on-secondary-fixed": "#301400",
                              "on-secondary": "#ffffff",
                              "on-surface-variant": "#46483c",
                              "secondary": "#805533",
                              "primary-container": "#8a9a5b",
                              "outline": "#76786b",
                              "on-tertiary-container": "#2c2e1d",
                              "secondary-container": "#fdc39a",
                              "inverse-primary": "#bdce89",
                              "on-tertiary-fixed": "#1b1d0e",
                              "primary": "#56642b",
                              "secondary-fixed": "#ffdcc5",
                              "on-primary-container": "#253000",
                              "background": "#fbf9f8",
                              "primary-fixed": "#d9eaa3"
                      },
                      "borderRadius": {
                              "DEFAULT": "0.125rem",
                              "lg": "0.25rem",
                              "xl": "0.5rem",
                              "full": "0.75rem"
                      },
                      "spacing": {
                              "unit": "8px",
                              "margin-desktop": "64px",
                              "margin-mobile": "20px",
                              "container-max-width": "1200px",
                              "gutter": "32px"
                      },
                      "fontFamily": {
                              "body-lg": ["Arial", "sans-serif"],
                              "label-md": ["Arial", "sans-serif"],
                              "headline-lg-mobile": ["Arial", "sans-serif"],
                              "headline-lg": ["Arial", "sans-serif"],
                              "body-md": ["Arial", "sans-serif"],
                              "headline-xl": ["Arial", "sans-serif"]
                      },
                      "fontSize": {
                              "body-lg": ["18px", {"lineHeight": "1.6", "fontWeight": "400"}],
                              "label-md": ["14px", {"lineHeight": "1.2", "letterSpacing": "0.05em", "fontWeight": "500"}],
                              "headline-lg-mobile": ["28px", {"lineHeight": "1.3", "fontWeight": "700"}],
                              "headline-lg": ["32px", {"lineHeight": "1.3", "fontWeight": "700"}],
                              "body-md": ["16px", {"lineHeight": "1.6", "fontWeight": "400"}],
                              "headline-xl": ["48px", {"lineHeight": "1.2", "letterSpacing": "-0.02em", "fontWeight": "700"}]
                      }
                    },
                  },
                }
    }
    else if (page.includes('product-detail2')) {
        // Subtle micro-interactions
                document.querySelectorAll('.product-card-hover').forEach(card => {
                    card.addEventListener('mouseenter', () => {
                        card.style.borderColor = 'rgba(86, 100, 43, 0.4)';
                    });
                    card.addEventListener('mouseleave', () => {
                        card.style.borderColor = 'rgba(128, 85, 51, 0.1)';
                    });
                });
    }
    else if (page.includes('product-detail3')) {
        tailwind.config = {
                darkMode: "class",
                theme: {
                  extend: {
                    "colors": {
                        "on-primary-fixed": "#161f00",
                        "surface-variant": "#e4e2e1",
                        "tertiary": "#5e604d",
                        "primary": "#56642b",
                        "on-secondary-fixed-variant": "#653d1e",
                        "tertiary-fixed-dim": "#c8c8b0",
                        "error": "#ba1a1a",
                        "inverse-surface": "#303030",
                        "on-error-container": "#93000a",
                        "on-primary-container": "#253000",
                        "surface-container-high": "#eae8e7",
                        "primary-fixed": "#d9eaa3",
                        "inverse-on-surface": "#f3f0f0",
                        "on-surface": "#1b1c1c",
                        "surface-tint": "#56642b",
                        "background": "#fbf9f8",
                        "surface-dim": "#dcd9d9",
                        "on-primary": "#ffffff",
                        "secondary": "#805533",
                        "inverse-primary": "#bdce89",
                        "on-background": "#1b1c1c",
                        "on-secondary-container": "#794e2e",
                        "on-error": "#ffffff",
                        "surface-container-highest": "#e4e2e1",
                        "outline": "#76786b",
                        "secondary-fixed-dim": "#f4bb92",
                        "on-surface-variant": "#46483c",
                        "surface-container-low": "#f6f3f2",
                        "on-tertiary-container": "#2c2e1d",
                        "error-container": "#ffdad6",
                        "on-primary-fixed-variant": "#3e4c16",
                        "surface-container-lowest": "#ffffff",
                        "secondary-fixed": "#ffdcc5",
                        "secondary-container": "#fdc39a",
                        "primary-fixed-dim": "#bdce89",
                        "on-tertiary-fixed-variant": "#474836",
                        "surface-container": "#f0eded",
                        "surface-bright": "#fbf9f8",
                        "primary-container": "#8a9a5b",
                        "surface": "#fbf9f8",
                        "on-tertiary-fixed": "#1b1d0e",
                        "tertiary-fixed": "#e4e4cc",
                        "on-tertiary": "#ffffff",
                        "tertiary-container": "#94957f",
                        "on-secondary-fixed": "#301400",
                        "on-secondary": "#ffffff",
                        "outline-variant": "#c6c8b8"
                    },
                    "borderRadius": {
                        "DEFAULT": "0.125rem",
                        "lg": "0.25rem",
                        "xl": "0.5rem",
                        "full": "0.75rem"
                    },
                    "spacing": {
                        "unit": "8px",
                        "container-max-width": "1200px",
                        "margin-desktop": "64px",
                        "margin-mobile": "20px",
                        "gutter": "32px"
                    },
                    "fontFamily": {
                        "label-md": ["Arial", "sans-serif"],
                        "headline-lg": ["Arial", "sans-serif"],
                        "body-lg": ["Arial", "sans-serif"],
                        "headline-xl": ["Arial", "sans-serif"],
                        "headline-lg-mobile": ["Arial", "sans-serif"],
                        "body-md": ["Arial", "sans-serif"]
                    },
                    "fontSize": {
                        "label-md": ["14px", {"lineHeight": "1.2", "letterSpacing": "0.05em", "fontWeight": "500"}],
                        "headline-lg": ["32px", {"lineHeight": "1.3", "fontWeight": "600"}],
                        "body-lg": ["18px", {"lineHeight": "1.6", "fontWeight": "400"}],
                        "headline-xl": ["48px", {"lineHeight": "1.2", "letterSpacing": "-0.02em", "fontWeight": "600"}],
                        "headline-lg-mobile": ["28px", {"lineHeight": "1.3", "fontWeight": "600"}],
                        "body-md": ["16px", {"lineHeight": "1.6", "fontWeight": "400"}]
                    }
                  },
                },
              }
    }
    else if (page.includes('product-detail3')) {
        // Entrance animation trigger
                document.addEventListener('DOMContentLoaded', () => {
                    const observerOptions = {
                        threshold: 0.1
                    };
                    const observer = new IntersectionObserver((entries) => {
                        entries.forEach(entry => {
                            if (entry.isIntersecting) {
                                entry.target.classList.add('stagger-in');
                                observer.unobserve(entry.target);
                            }
                        });
                    }, observerOptions);
        
                    document.querySelectorAll('.stagger-in').forEach((el, index) => {
                        el.style.animationDelay = `${(index * 0.15)}s`;
                        observer.observe(el);
                    });
                });
    }
    else if (page.includes('product-detail4')) {
        tailwind.config = {
                    darkMode: "class",
                    theme: {
                        extend: {
                            "colors": {
                                "primary-container": "#8a9a5b",
                                "surface": "#fbf9f8",
                                "on-tertiary-fixed": "#1b1d0e",
                                "surface-tint": "#56642b",
                                "primary-fixed": "#d9eaa3",
                                "on-surface-variant": "#46483c",
                                "surface-container-lowest": "#ffffff",
                                "inverse-on-surface": "#f3f0f0",
                                "surface-bright": "#fbf9f8",
                                "surface-variant": "#e4e2e1",
                                "on-surface": "#1b1c1c",
                                "on-secondary-fixed": "#301400",
                                "tertiary-fixed-dim": "#c8c8b0",
                                "surface-container-high": "#eae8e7",
                                "inverse-primary": "#bdce89",
                                "tertiary": "#5e604d",
                                "surface-container-highest": "#e4e2e1",
                                "inverse-surface": "#303030",
                                "secondary-fixed-dim": "#f4bb92",
                                "error": "#ba1a1a",
                                "outline-variant": "#c6c8b8",
                                "on-secondary-fixed-variant": "#653d1e",
                                "on-primary-container": "#253000",
                                "on-primary": "#ffffff",
                                "background": "#fbf9f8",
                                "on-primary-fixed-variant": "#3e4c16",
                                "surface-container-low": "#f6f3f2",
                                "tertiary-fixed": "#e4e4cc",
                                "secondary-fixed": "#ffdcc5",
                                "secondary-container": "#fdc39a",
                                "tertiary-container": "#94957f",
                                "on-tertiary-fixed-variant": "#474836",
                                "outline": "#76786b",
                                "surface-container": "#f0eded",
                                "primary": "#56642b",
                                "on-primary-fixed": "#161f00",
                                "error-container": "#ffdad6",
                                "secondary": "#805533",
                                "on-error": "#ffffff",
                                "on-secondary-container": "#794e2e",
                                "on-tertiary-container": "#2c2e1d",
                                "on-tertiary": "#ffffff",
                                "surface-dim": "#dcd9d9",
                                "on-secondary": "#ffffff",
                                "on-error-container": "#93000a",
                                "on-background": "#1b1c1c",
                                "primary-fixed-dim": "#bdce89"
                            },
                            "borderRadius": {
                                "DEFAULT": "0.125rem",
                                "lg": "0.25rem",
                                "xl": "0.5rem",
                                "full": "0.75rem"
                            },
                            "spacing": {
                                "margin-desktop": "64px",
                                "gutter": "32px",
                                "container-max-width": "1200px",
                                "unit": "8px",
                                "margin-mobile": "20px"
                            },
                            "fontFamily": {
                                "headline-lg-mobile": ["Arial", "sans-serif"],
                                "headline-xl": ["Arial", "sans-serif"],
                                "label-md": ["Arial", "sans-serif"],
                                "headline-lg": ["Arial", "sans-serif"],
                                "body-md": ["Arial", "sans-serif"],
                                "body-lg": ["Arial", "sans-serif"]
                            },
                            "fontSize": {
                                "headline-lg-mobile": ["28px", {"lineHeight": "1.3", "fontWeight": "700"}],
                                "headline-xl": ["48px", {"lineHeight": "1.2", "letterSpacing": "-0.02em", "fontWeight": "700"}],
                                "label-md": ["14px", {"lineHeight": "1.2", "letterSpacing": "0.05em", "fontWeight": "600"}],
                                "headline-lg": ["32px", {"lineHeight": "1.3", "fontWeight": "700"}],
                                "body-md": ["16px", {"lineHeight": "1.6", "fontWeight": "400"}],
                                "body-lg": ["18px", {"lineHeight": "1.6", "fontWeight": "400"}]
                            }
                        },
                    },
                }
    }
    else if (page.includes('product-detail4')) {
        // Scroll interaction for Back to Top button
                window.addEventListener('scroll', () => {
                    const btn = document.getElementById('back-to-top');
                    if (window.scrollY > 400) {
                        btn.style.opacity = '1';
                        btn.style.transform = 'translateY(0)';
                    } else {
                        btn.style.opacity = '0';
                        btn.style.transform = 'translateY(20px)';
                    }
                });
        
                document.getElementById('back-to-top').addEventListener('click', () => {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                });
        
                // Parallax effect for leaves
                window.addEventListener('scroll', () => {
                    const scrollPos = window.scrollY;
                    document.querySelectorAll('.leaf-float').forEach((leaf, index) => {
                        const speed = 0.1 * (index + 1);
                        leaf.style.transform = `translateY(${scrollPos * speed}px) rotate(${45 + scrollPos * 0.05}deg)`;
                    });
                });
    }
    else if (page.includes('product-detail5')) {
        tailwind.config = {
                    darkMode: "class",
                    theme: {
                        extend: {
                            "colors": {
                                "primary": "#56642b",
                                "secondary": "#805533",
                                "surface": "#fbf9f8",
                                "on-surface": "#1b1c1c",
                                "on-surface-variant": "#46483c",
                                "outline": "#76786b",
                                "outline-variant": "#c6c8b8",
                                "surface-container-low": "#f6f3f2",
                                "surface-container-high": "#eae8e7",
                                "on-primary": "#ffffff"
                            },
                            "borderRadius": {
                                "DEFAULT": "0.125rem",
                                "lg": "0.25rem",
                                "xl": "0.5rem",
                                "full": "0.75rem"
                            },
                            "spacing": {
                                "unit": "8px",
                                "margin-desktop": "64px",
                                "margin-mobile": "20px",
                                "container-max-width": "1200px",
                                "gutter": "32px"
                            },
                            "fontFamily": {
                                "sans": ["Arial", "sans-serif"],
                                "body-lg": ["Arial"],
                                "label-md": ["Arial"],
                                "headline-lg": ["Arial"],
                                "body-md": ["Arial"],
                                "headline-xl": ["Arial"]
                            }
                        },
                    },
                }
    }
    else if (page.includes('product-detail5')) {
        // Reveal animation
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }
                });
            }, { threshold: 0.1 });
        
            document.querySelectorAll('section, header').forEach(el => {
                el.style.opacity = '0';
                el.style.transform = 'translateY(30px)';
                el.style.transition = 'all 1s ease-out';
                observer.observe(el);
            });
    }
    else if (page.includes('store')) {
        tailwind.config = {
                    darkMode: "class",
                    theme: {
                        extend: {
                            "colors": {
                                "on-background": "#1b1c1c",
                                "inverse-on-surface": "#f3f0f0",
                                "tertiary-fixed-dim": "#c8c8b0",
                                "surface-tint": "#56642b",
                                "on-secondary-fixed-variant": "#653d1e",
                                "secondary-container": "#fdc39a",
                                "surface-dim": "#dcd9d9",
                                "on-primary-container": "#253000",
                                "tertiary-fixed": "#e4e4cc",
                                "surface-variant": "#e4e2e1",
                                "on-error": "#ffffff",
                                "surface-container-high": "#eae8e7",
                                "primary-fixed-dim": "#bdce89",
                                "on-tertiary-container": "#2c2e1d",
                                "on-primary-fixed-variant": "#3e4c16",
                                "surface-container-low": "#f6f3f2",
                                "on-secondary-fixed": "#301400",
                                "on-tertiary-fixed": "#1b1d0e",
                                "secondary": "#805533",
                                "tertiary": "#5e604d",
                                "on-primary-fixed": "#161f00",
                                "on-primary": "#ffffff",
                                "tertiary-container": "#94957f",
                                "on-error-container": "#93000a",
                                "secondary-fixed-dim": "#f4bb92",
                                "primary": "#56642b",
                                "on-secondary": "#ffffff",
                                "outline": "#76786b",
                                "surface-bright": "#fbf9f8",
                                "surface-container-highest": "#e4e2e1",
                                "background": "#fbf9f8",
                                "primary-fixed": "#d9eaa3",
                                "on-secondary-container": "#794e2e",
                                "inverse-surface": "#303030",
                                "on-tertiary": "#ffffff",
                                "secondary-fixed": "#ffdcc5",
                                "error": "#ba1a1a",
                                "surface-container": "#f0eded",
                                "on-surface-variant": "#46483c",
                                "surface-container-lowest": "#ffffff",
                                "on-tertiary-fixed-variant": "#474836",
                                "on-surface": "#1b1c1c",
                                "error-container": "#ffdad6",
                                "surface": "#fbf9f8",
                                "primary-container": "#8a9a5b",
                                "outline-variant": "#c6c8b8",
                                "inverse-primary": "#bdce89"
                            },
                            "borderRadius": {
                                "DEFAULT": "0.125rem",
                                "lg": "0.25rem",
                                "xl": "0.5rem",
                                "full": "0.75rem"
                            },
                            "spacing": {
                                "unit": "8px",
                                "container-max-width": "1200px",
                                "gutter": "32px",
                                "margin-desktop": "64px",
                                "margin-mobile": "20px"
                            },
                            "fontFamily": {
                                "label-md": ["Plus Jakarta Sans"],
                                "headline-xl": ["Arial", "sans-serif"],
                                "body-md": ["Arial", "sans-serif"],
                                "headline-lg": ["Arial", "sans-serif"],
                                "body-lg": ["Arial", "sans-serif"],
                                "headline-lg-mobile": ["Arial", "sans-serif"]
                            },
                            "fontSize": {
                                "label-md": ["14px", {"lineHeight": "1.2", "letterSpacing": "0.05em", "fontWeight": "500"}],
                                "headline-xl": ["56px", {"lineHeight": "1.2", "letterSpacing": "-0.01em", "fontWeight": "700"}],
                                "body-md": ["16px", {"lineHeight": "1.8", "fontWeight": "400"}],
                                "headline-lg": ["36px", {"lineHeight": "1.3", "fontWeight": "700"}],
                                "body-lg": ["20px", {"lineHeight": "1.7", "fontWeight": "400"}],
                                "headline-lg-mobile": ["30px", {"lineHeight": "1.3", "fontWeight": "700"}]
                            }
                        },
                    },
                }
    }
    else if (page.includes('store')) {
        // Reveal animations on scroll
            const observerOptions = {
                threshold: 0.1,
                rootMargin: "0px 0px -50px 0px"
            };
        
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);
        
            document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
        
            // Scroll header effects
            window.addEventListener('scroll', () => {
                const header = document.querySelector('header');
                if (window.scrollY > 50) {
                    header.classList.add('py-2', 'bg-white/95');
                    header.classList.remove('bg-surface/80');
                } else {
                    header.classList.remove('py-2', 'bg-white/95');
                    header.classList.add('bg-surface/80');
                }
            });
    }
});