import styled from "styled-components"
import ProgressCircle from "./ProgressCircle"
const SkillsProgressContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 4rem;
  margin-top: 4rem;
`

export default function Skills() {
  return(
    <SkillsProgressContainer>
      <ProgressCircle percentage={100} title="HTML"/>
      <ProgressCircle percentage={89} title="CSS"/>
      <ProgressCircle percentage={94} title="JS"/>
      <ProgressCircle percentage={92} title="PHP"/>
    </SkillsProgressContainer>
  )
}