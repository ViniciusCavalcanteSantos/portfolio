import { useEffect, useRef } from "react";
import { useGlobalContext } from "./useGlobalContext";

export function useUpdateSection(sectionName: string) {
  const ref = useRef<HTMLElement | null>(null);
  const { setCurrentSection } = useGlobalContext();

  useEffect(() => {
    const current = ref.current;
    if(!current) return;

    const handleScroll = () => {
      if(current.getBoundingClientRect().top - 240 <= 0) {
        setCurrentSection(sectionName)
      }
    }

    window.addEventListener("scroll", handleScroll)
    
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [ref.current])

  return {sectionRef: ref}
}