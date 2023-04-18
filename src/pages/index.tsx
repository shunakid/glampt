import type { NextPage } from 'next'

import Button from 'components/atoms/Button'
import Text from 'components/atoms/Text'

const Home: NextPage = () => {
  return (
    <div>
      <Text fontSize="16px">これは16pxのテキストです</Text>
      <Button variant="secondary" color="brack">
        セカンダリバリアントのボタン
      </Button>
    </div>
  )
}

export default Home
