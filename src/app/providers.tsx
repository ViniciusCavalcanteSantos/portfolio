import { GlobalContextProvider } from "@/contexts/GlobalContext";
import StyledComponentsRegistry from "@/lib/StyledComponentsRegistry";
import { CookiesProvider } from "next-client-cookies/server";
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

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

          <ToastContainer theme="dark" />
        </GlobalContextProvider>
      </StyledComponentsRegistry>
    </CookiesProvider>
  )
}
