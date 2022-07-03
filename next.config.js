/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  react: {
    useSuspense: false,
  },
};

const intercept = require('intercept-stdout');

// safely ignore recoil stdout warning messages
function interceptStdout(text) {
  if (text.includes('Duplicate atom key')) {
    return '';
  }
  return text;
}

// Intercept in dev and prod
intercept(interceptStdout);