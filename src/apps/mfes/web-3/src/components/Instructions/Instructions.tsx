import Card from '@pi-lib/card'
import IconButton from '@pi-lib/icon-button'

const Instructions = ({ dummyAccounts }: any) => {
  return (
    <Card isSolid>
      <div
        style={{
          fontFamily: 'monospace',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
        }}
      >
        <div>
          Link a crypto wallet and make ETH transactions in Google Chrome.
        </div>
        <div>
          <h3>Step 1</h3>
          Install the MetaMask extension
          <br />
          <IconButton
            iconProps={{
              height: '2.2rem',
              src: `${import.meta.env.VITE_CLOUDFRONT_URL}/metamask.svg`,
            }}
            buttonProps={{
              isExternal: true,
              boxName: 'light',
              title: 'MetaMask - external link',
              href: 'https://chromewebstore.google.com/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn',
            }}
          />
        </div>
        <div>
          <h3>Step 2</h3>
          Add this test network to MetaMask:
          <div
            style={{
              marginTop: '0.2rem',
              border: '1px solid var(--outline)',
              padding: '0.4rem 0.5rem',
              fontSize: '0.7rem',
              background: 'var(--bgHC)',
            }}
          >
            Network Name: Blah
            <br />
            New RPC URL: Blah
            <br />
            Chain ID: Blah
            <br />
            Currency symbol: Blah
            <br />
          </div>
        </div>
        <div>
          <h3>Step 3</h3>
          Connect this test wallet:
          <div
            style={{
              marginTop: '0.2rem',
              border: '1px solid var(--outline)',
              padding: '0.4rem 0.5rem',
              fontSize: '0.7rem',
              background: 'var(--bgHC)',
            }}
          >
            Private Key: {dummyAccounts?.[0]?.privateKey}
          </div>
        </div>
        <div>
          <h3>Step 4</h3>
          Send funds to this test wallet:
          <div
            style={{
              marginTop: '0.2rem',
              border: '1px solid var(--outline)',
              padding: '0.4rem 0.5rem',
              fontSize: '0.7rem',
              background: 'var(--bgHC)',
            }}
          >
            Wallet Address: {dummyAccounts?.[1]?.address}
          </div>
        </div>
      </div>
    </Card>
  )
}

export default Instructions
