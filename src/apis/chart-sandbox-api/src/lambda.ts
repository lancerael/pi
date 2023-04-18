import { getRandomData } from 'd-theia'

const handler = async () => {
  return {
    statusCode: 200,
    body: JSON.stringify(getRandomData(8, 4)),
  }
}

export { handler }
