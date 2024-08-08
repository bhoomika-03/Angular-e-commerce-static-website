export const environments = {
    // src/environments/environment.ts
    production: false,
    firebase: {
      apiKey: "YOUR_API_KEY",
      authDomain: "YOUR_AUTH_DOMAIN",
      databaseURL: "YOUR_DATABASE_URL",
      projectId: "YOUR_PROJECT_ID",
      storageBucket: "YOUR_STORAGE_BUCKET",
      messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
      appId: "YOUR_APP_ID"
    }
  };
  
  // src/environments/environment.prod.ts
  export const environment = {
    production: true,
    firebase:{
        apiKey: "AIzaSyCTV-RL3hzeSl7JpCrK7K3JK37vePWfYyM",
        authDomain: "ecommerce-sales-system.firebaseapp.com",
        projectId: "ecommerce-sales-system",
        storageBucket: "ecommerce-sales-system.appspot.com",
        messagingSenderId: "110453974664",
        appId: "1:110453974664:web:98b6d5a9d6867413c9613d"
      }
  };
  

