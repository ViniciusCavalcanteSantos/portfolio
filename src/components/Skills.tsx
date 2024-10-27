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
      <ProgressCircle percentage={93} title="NEXT JS"/>
      <ProgressCircle percentage={89} title="TYPESCRIPT"/>
      <ProgressCircle percentage={95} title="PHP"/>
      <ProgressCircle percentage={90} title="SQL"/>
    </SkillsProgressContainer>
  )
}