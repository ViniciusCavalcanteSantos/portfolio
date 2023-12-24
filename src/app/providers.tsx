import { GlobalContextProvider } from "@/contexts/GlobalContext";
import StyledComponentsRegistry from "@/lib/StyledComponentsRegistry";
import { CookiesProvider } from "next-client-cookies/server";

export default function Providers({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <CookiesProvider>
      <StyledComponentsRegistry>
        <GlobalContextProvider>
          {children}
        </GlobalContextProvider>
      </StyledComponentsRegistry>
    </CookiesProvider>
  )
}
