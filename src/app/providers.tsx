import { GlobalContextProvider } from "@/contexts/GlobalContext";
import StyledComponentsRegistry from "@/lib/StyledComponentsRegistry";

export default function Providers({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <StyledComponentsRegistry>
      <GlobalContextProvider>
        {children}
      </GlobalContextProvider>
    </StyledComponentsRegistry>
  )
}
