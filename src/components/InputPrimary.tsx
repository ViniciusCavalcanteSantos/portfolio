import { InputHTMLAttributes, TextareaHTMLAttributes } from "react";
import styled from "styled-components";

const css = `
  display: inline-block;
  width: 100%;
  padding: 1rem 1.5rem;
  border-radius: 18px;
  background-color: var(--bg-color-3);
  border: 2px solid var(--bg-color-3);
  outline: none;
  font-family: inherit;
  font-size: .85rem;
  font-weight: 500;
  color: var(--text-primary);
  transition: .3s;

  &:focus,
  &:valid {
    filter: brightness(100%);
    background-color: var(--bg-color-1);
    border-color: var(--primary);
  }

  textarea& {
    min-height: 170px;
    resize: none;
  }
`

const InputTag = styled.input`
  ${css}
`

const TexareaTag = styled.textarea`
  ${css}
`

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}
export default function InputPrimary(props: InputProps) {
  return(
    <InputTag {...props} required/>
  )
}

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {}
export function TextareaPrimary(props: TextareaProps) {
  return(
    <TexareaTag {...props} required />
  )
}