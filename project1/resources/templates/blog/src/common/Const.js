const DEV = {
  mode: 'dev',
  APIMODE: {mode: 'no-cors'},
  APIHOST: 'http://localhost:9001',
}

const PROD = {
  mode: 'prod',
  APIMODE: '',
  APIHOST: window.location.origin,
}

let CONST = null;
if(process.env.NODE_ENV === 'development'){
  CONST = DEV;
}else if(process.env.NODE_ENV === 'production'){
  CONST = PROD;
}

export default CONST;
