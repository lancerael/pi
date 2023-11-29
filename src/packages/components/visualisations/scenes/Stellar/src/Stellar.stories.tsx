import type { Meta, StoryObj } from '@storybook/react'
import { Stellar } from './Stellar'
import { StellarProps } from './Stellar.types'

const render = (props: StellarProps) => {
  return (
    <div style={{ height: '100vh' }}>
      <Stellar {...props}>
        <div
          style={{
            userSelect: 'none',
            maxHeight: '500px',
            paddingTop: '800px',
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          finibus venenatis nibh in auctor. Ut feugiat odio non euismod
          porttitor. Nulla semper ornare tellus ac gravida. Nam et sodales
          tortor. Donec sodales malesuada mauris, sit amet venenatis nunc
          euismod at. Duis consectetur faucibus felis, vitae sodales tellus
          rutrum in. Proin gravida nec eros nec viverra. Mauris in quam ut dui
          auctor vestibulum. Sed eu mollis dui. Morbi eget risus hendrerit,
          porta massa sed, dictum libero. Pellentesque gravida augue enim, a
          auctor velit tincidunt id. Quisque a eros et risus placerat finibus
          nec et tortor. Praesent facilisis nisi quis congue eleifend. Vivamus
          rhoncus maximus risus. Integer tristique odio nec enim malesuada, at
          eleifend lacus molestie. Morbi mollis nisi vitae nisl dictum faucibus.
          <br />
          <br />
          <br />
          Class aptent taciti sociosqu ad litora torquent per conubia nostra,
          per inceptos himenaeos. Phasellus ac euismod nibh. Aliquam rhoncus
          consectetur libero vitae gravida. Morbi suscipit, dui ut hendrerit
          tincidunt, risus nulla rutrum ex, rhoncus tincidunt libero dolor eu
          arcu. In porttitor risus diam, non commodo nunc venenatis vel. Donec
          dignissim lacinia ullamcorper. Vestibulum tincidunt lorem vitae
          lobortis pharetra.
          <br />
          <br />
          <br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque justo
          arcu, ultrices quis finibus et, ultricies non sapien. Sed tristique
          nisl eu interdum venenatis. Vivamus vitae mi libero. In in nisi ante.
          Nullam sapien tellus, elementum et sagittis sed, scelerisque ac dolor.
          Donec maximus nibh enim, pellentesque tincidunt lacus mattis ac. Donec
          tempor consectetur scelerisque. Nulla convallis scelerisque odio,
          auctor lobortis turpis mollis a. Nulla facilisi.
          <br />
          <br />
          <br />
          Donec in metus orci. Maecenas elementum porta dapibus. Curabitur
          eleifend ante massa. Duis suscipit in augue iaculis rhoncus. Nunc enim
          elit, ultrices a nisi ac, varius finibus elit. Ut odio lacus, accumsan
          sit amet turpis vestibulum, feugiat cursus risus. Duis id mi ut neque
          pellentesque fringilla.
          <br />
          Curabitur condimentum sagittis augue maximus condimentum. In fringilla
          ipsum id dolor mattis venenatis. Nulla ultricies, eros vel interdum
          iaculis, mi velit blandit turpis, vel viverra massa enim at quam. Ut
          in euismod dolor. Vivamus placerat magna mi, at accumsan eros
          facilisis sit amet. Aenean eu rhoncus mi, auctor suscipit elit. Nullam
          eget rutrum lectus. Nunc vitae tincidunt dui. Sed eu metus rutrum,
          blandit massa a, lacinia magna. Nullam sagittis nisl sed felis
          venenatis vulputate. Donec rutrum erat a tortor aliquet, ut suscipit
          leo condimentum.
        </div>
      </Stellar>
    </div>
  )
}

const meta: Meta<typeof Stellar> = {
  title: 'Visualisations/Scenes/Stellar',
  component: Stellar,
  argTypes: {
    starCount: {
      control: 'number',
    },
    isTravelling: {
      control: 'boolean',
    },
    showDebug: {
      control: 'boolean',
    },
  },
  tags: ['autodocs'],
}

/**
 * The default state for the component
 */
export const Default: StoryObj<typeof Stellar> = {
  args: {
    starCount: 10,
    isTravelling: true,
    isAutoDimmed: true,
    showDebug: true,
  },
  render,
}

export default meta
