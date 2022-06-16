// Scripts for firebase and firebase messaging
// eslint-disable-next-line no-undef
importScripts(
  "https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js"
);
// eslint-disable-next-line no-undef
importScripts(
  "https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js"
);

// Initialize the Firebase app in the service worker by passing the generated config
const firebaseConfig = {
  apiKey: "AIzaSyDXZcKCeQj7eA6hBe0Iz816-HoNU8SVM5Q",
  authDomain: "nextjs-notfication.firebaseapp.com",
  projectId: "nextjs-notfication",
  storageBucket: "nextjs-notfication.appspot.com",
  messagingSenderId: "1005829144761",
  appId: "1:1005829144761:web:c4881014e15fd6643e5b68",
};

// eslint-disable-next-line no-undef
firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
// eslint-disable-next-line no-undef
const messaging = firebase.messaging();

// messaging.onBackgroundMessage(function (payload) {
//   console.log("Received background message ", payload);

//   const notificationTitle = payload.notification.title;
//   const notificationOptions = {
//     body: payload.notification.body,
//     icon: "/favicon.ico",
//   };

//   // eslint-disable-next-line no-restricted-globals
//   return self.registration.showNotification(
//     notificationTitle,
//     notificationOptions
//   );
// });
