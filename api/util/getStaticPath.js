const getStaticPath = () => {
 const isDevelopment = process.env.NODE_ENV === 'development'
 const isProduction = process.env.NODE_ENV === 'production'
 let staticPath = ''
 let protocol = ''
 if (isDevelopment) {
  staticPath = 'localhost:3000'
  protocol = 'http'
 } else if (isProduction) {
  staticPath = process.env.SERVER_IP
  protocol = 'https'
 }
 return { staticPath, protocol }
}

module.exports = getStaticPath
