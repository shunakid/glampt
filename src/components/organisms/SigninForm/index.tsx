import Button from 'components/atoms/Button'
import Box from 'components/layout/Box'

export type SigninFormData = {
  username: string
  password: string
}

interface SigninFormProps {
  /**
   * Googleログインボタンを押した時のイベントハンドラ
   */
  onGoogleSignin?: () => void
  /**
   * ログアウトボタンを押した時のイベントハンドラ
   */
  onSignout?: () => void
}

/**
 * サインインフォーム
 */
const SigninForm = ({ onGoogleSignin, onSignout }: SigninFormProps) => {
  return (
    <>
      <Box>
        <Button width="100%" onClick={onGoogleSignin}>
          Googleでサインイン
        </Button>
      </Box>
      <Box marginTop={2}>
        <Button width="100%" onClick={onSignout}>
          ログアウト
        </Button>
      </Box>
    </>
  )
}

export default SigninForm
