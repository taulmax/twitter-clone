import React, { useState } from "react";
import AppRouter from "components/Router";
import { authService } from "myFireBase";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(authService.currentUser);
  return (
    <>
      <AppRouter isLoggedIn={isLoggedIn} />
      <footer>&copy; Miracle-twitter {new Date().getFullYear()} </footer>
    </>
  );
}

export default App;
