/* @TODO replace with your variables
 * ensure all variables on this page match your project
 */

export const environment = {
  production: false,
  apiServerUrl: 'http://127.0.0.1:5000', // the running FLASK api server url
  auth0: {
    url: 'udacitytut.us', // the auth0 domain prefix
    audience: 'drinks', // the audience set for the auth0 app
    clientId: 'ugC7WIlfQf7pNM2e20gR3oGov097h0zF', // the client id generated for the auth0 app
    callbackURL: 'https://127.0.0.1:4200', // the base url of the running ionic application. 
  }
};
