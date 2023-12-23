import styled from "styled-components"
import { Abril_Fatface } from "next/font/google";
const AbrilFatface = Abril_Fatface({ weight: ["400"], subsets: ['latin'] });

const TopicName = styled.span`
  display: inline-block;
  color: var(--text-primary);
  font-size: .85rem;
  font-weight: 400;
  letter-spacing: .5px;
  text-transform: uppercase;
  margin-bottom: 1rem;
  padding: 2px 12px;
  border-left: 3px solid var(--primary);
`

const TopicTitle = styled.h2`
  color: var(--text-primary);
  line-height: 1.3;
  font-size: 3rem;
  ${AbrilFatface.style}
`

const TopicDescription = styled.p`
  color: var(--text-secondary);
  font-size: .9rem;
  font-weight: 400;
  line-height: 2.3;
  margin: .8rem 0;
`

interface TopicType {
  topic: string,
  title: string,
  description?: string
}

export default function Topic({topic, title, description}: TopicType) {
  return(
    <div>
      <TopicName>
        {topic}
      </TopicName>

      <TopicTitle>
        {title}
      </TopicTitle>

      {description && 
        <TopicDescription>
          {description}
        </TopicDescription>
      }
    </div>
  )
}