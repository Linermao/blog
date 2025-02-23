// tailwind.config.js
module.exports = {
    content: [
      './src/**/*.{html,js,jsx,ts,tsx}', // 修改为您的内容路径
    ],
    plugins: [
      require('@tailwindcss/typography'),
    ],
  };
  
module.exports = {
    theme: {
      extend: {
        typography: {
          DEFAULT: {
            css: {
                "code::before": {content: ''},
                "code::after": {content: ''},
                code: {
                    backgroundColor: '#f5f5f5',
                    padding: '2px 4px',
                    borderRadius: '4px',
                  },
            },
          },
        },
      },
    },
    plugins: [
      require('@tailwindcss/typography'),
    ],
  };
  