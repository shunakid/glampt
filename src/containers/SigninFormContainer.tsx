import { GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth'
import SigninForm from 'components/organisms/SigninForm'
import { useGlobalSpinnerActionsContext } from 'contexts/GlobalSpinnerContext'
import { auth } from 'services/firebase/firebase'
interface SigninFormContainerProps {
  /**
   * サインインした時に呼ばれるイベントハンドラ
   */
  onSignin: (error?: Error) => void
}

/**
 * サインインフォームコンテナ
 */
const SigninFormContainer = ({ onSignin }: SigninFormContainerProps) => {
  const setGlobalSpinner = useGlobalSpinnerActionsContext()
  // サインインボタンを押された時のイベントハンドラ

  const handleGoogleSignin = async () => {
    const provider = new GoogleAuthProvider()

    try {
      setGlobalSpinner(true)
      await signInWithPopup(auth, provider)
      onSignin && onSignin()
    } catch (err: unknown) {
      if (err instanceof Error) {
        window.alert(err.message)
        onSignin && onSignin(err)
      }
    } finally {
      setGlobalSpinner(false)
    }
  }

  const handleSignout = async () => {
    try {
      await signOut(auth)
      // ログアウト成功時の処理をここに追加
    } catch (err: unknown) {
      if (err instanceof Error) {
        // エラーの内容を表示
        window.alert(err.message)
      }
    }
  }

  return (
    <SigninForm onGoogleSignin={handleGoogleSignin} onSignout={handleSignout} />
  )
}

export default SigninFormContainer
