export const getStaticPath = () => {
 const isDevelopment = process.env.REACT_APP_NODE_ENV === 'development';
 const isProduction = process.env.REACT_APP_NODE_ENV === 'production';
 let staticPath: any = '';
 if (isDevelopment) {
  staticPath = 'localhost:PORT';
 } else if (isProduction) {
  staticPath = process.env.REACT_APP_SERVER_IP;
 }
 return staticPath;
};
