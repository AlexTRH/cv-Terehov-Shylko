import { memo, useState, useEffect } from 'react'
import { Alert } from '@mui/material'

const Notifications = ({ message, show }: { message: string; show: boolean }) => {
  const [visible, setVisible] = useState(show)

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 2000)

    return () => {
      clearTimeout(timer)
    }
  }, [])

  return (
    <>
      {visible && (
        <Alert severity="error">
          {message}
        </Alert>
      )}
    </>
  )
}

export default memo(Notifications)