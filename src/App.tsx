import { Routes, Route } from "react-router-dom";

import { ThemeProvider } from "@/components/theme/theme-provider";
import Home from "./pages/chat";
import AuthPage from "./pages/auth";

function App() {
  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<AuthPage />} />
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
