import { GlobalContext } from "@/contexts/GlobalContext";
import { useContext } from "react";

export function useGlobalContext() {
  return useContext(GlobalContext);
}