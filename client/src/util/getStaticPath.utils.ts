export const getStaticPath = () => {
 const isDevelopment = process.env.REACT_APP_NODE_ENV === 'development'
 const isProduction = process.env.REACT_APP_NODE_ENV === 'production'
 let staticPath: string | undefined = ''
 let protocol: string = ''
 if (isDevelopment) {
  staticPath = 'localhost:3000'
  protocol = 'http'
 } else if (isProduction) {
  staticPath = process.env.REACT_APP_SERVER_IP
  protocol = 'https'
 }
 return { staticPath, protocol }
}
