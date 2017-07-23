// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: "AIzaSyCPZnw5Ab0OpFlzqRgrIcxLK9e684wfIcc",
    authDomain: "connect4-website.firebaseapp.com",
    databaseURL: "https://connect4-website.firebaseio.com",
    projectId: "connect4-website",
    storageBucket: "connect4-website.appspot.com",
    messagingSenderId: "556271102741"
  },
  rosefireRegistryToken: "c7851d22-a0d8-4fb9-914c-b951e1600df4",
};
