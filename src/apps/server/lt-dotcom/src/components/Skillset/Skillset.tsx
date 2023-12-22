import Grid from '@pi-lib/grid'
import Card from '@pi-lib/card'
import { SkillsContainer, StyledCardWrapper } from './Skillset.style'
import { skillset } from '@/data/skillset'
import { memo } from 'react'

export const Skillset = memo(() => {
  return (
    <SkillsContainer>
      <Grid>
        {skillset.map(({ title, subTitle, icon, summary, bullets }) => (
          <StyledCardWrapper key={title}>
            <Card
              {...{ title, subTitle }}
              iconProps={{
                src: `/${icon}.svg`,
                color: 'var(--outline)',
                isStroked: true,
              }}
              isClear
            >
              {summary}
              <ul
                style={{
                  padding: '1rem 1rem 0',
                  color: 'var(--textSoft)',
                }}
              >
                {bullets.map((bullet, i) => (
                  <li key={i}>{bullet}</li>
                ))}
              </ul>
            </Card>
          </StyledCardWrapper>
        ))}
      </Grid>
    </SkillsContainer>
  )
})

export default Skillset
