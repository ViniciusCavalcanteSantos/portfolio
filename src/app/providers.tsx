import StyledComponentsRegistry from "@/lib/StyledComponentsRegistry";

export default function Providers({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <StyledComponentsRegistry>
        {children}
    </StyledComponentsRegistry>
  )
}
