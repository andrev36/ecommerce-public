const getStaticPath = () => {
 const isDevelopment = process.env.NODE_ENV === 'development';
 const isProduction = process.env.NODE_ENV === 'production';
 let staticPath = '';
 if (isDevelopment) {
  staticPath = 'localhost:PORT';
 } else if (isProduction) {
  staticPath = process.env.SERVER_IP;
 }
 return staticPath;
};

module.exports = getStaticPath;
