import firebase from './../firebase';
import "../styles/globals.css";
import { useEffect, useState } from "react";

function MyApp({ Component, pageProps }) {
  const [token, setToken] = useState("");

  useEffect(() => {
    const msg = firebase.messaging();
    if (!token) {
      msg
        .requestPermission()
        .then(() => {
          return msg.getToken();
        })
        .then((data) => {
          console.log(data);
          setToken(data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);

  
  // firebase.messaging().onMessage((payload) => {
  //   if (payload) {
  //     console.log(payload)
      
  //   }
  // });

  return <Component {...pageProps} />;
}

export default MyApp;
