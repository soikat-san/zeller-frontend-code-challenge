import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { ApolloProvider } from "@apollo/client/react";
import { client } from "./api/client";
import { ThemeProvider } from "./context/themeContext.tsx";
import AppRouter from "./router.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ApolloProvider client={client}>
      <ThemeProvider>
        <AppRouter />
      </ThemeProvider>
    </ApolloProvider>
  </StrictMode>,
);
