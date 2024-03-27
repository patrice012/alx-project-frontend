import { ThemeProvider } from "@/components/theme/theme-provider";
import Home from "./pages/chat";

function App() {
  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Home />
      </ThemeProvider>
    </>
  );
}

export default App;
