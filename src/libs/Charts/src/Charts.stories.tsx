import React, { useEffect, useRef } from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Chart, randomData } from '.'

export default {
  title: 'Charts/Charts',
  component: () => <></>,
} as ComponentMeta<any>

const Template: ComponentStory<any> = () => {
  const divRef = useRef(null)

  useEffect(() => {
    if (divRef.current) {
      new Chart({ container: divRef.current, ...randomData() }).addDefaults()
    }
  }, [divRef.current])

  return (
    <>
      <div ref={divRef}></div>
    </>
  )
}

export const Default = Template.bind({})
