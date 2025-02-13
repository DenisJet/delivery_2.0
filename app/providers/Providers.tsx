import { ThemeProvider } from "@/components/ThemeProvider";
import { ReactNode } from "react";
import StoreProvider from "./StoreProvider";

const Providers = async ({ children }: { children: ReactNode }) => {
  return (
    <StoreProvider>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        {children}
      </ThemeProvider>
    </StoreProvider>
  );
};

export default Providers;
