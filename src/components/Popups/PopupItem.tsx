import { useCallback, useEffect } from 'react'

import { XIcon } from '@heroicons/react/outline'
import { useRemovePopup } from 'app/states/application/hooks'

const AnimatedFader = ({ duration }: any) => (
  <div className="h-[3px] bg-light-secondary dark:bg-dark-secondary w-full">
    <style jsx>{`
      .animation {
        animation-duration: ${duration}ms;
        animation-name: fader;
        animation-timing-function: linear;
        animation-fill-mode: forwards;
      }
      @keyframes fader {
        from {
          width: 100%;
        }

        to {
          width: 0%;
        }
      }
    `}</style>
    <div className="animation h-[3px] bg-gradient-to-r from-blue to-pink" />
  </div>
)

const PopupItem = ({
  removeAfterMs,
  content,
  popKey,
}: {
  removeAfterMs: number | null
  content: string
  popKey: string
}) => {
  const removePopup = useRemovePopup()
  const removeThisPopup = useCallback(() => removePopup(popKey), [popKey, removePopup])
  useEffect(() => {
    if (removeAfterMs === null) return undefined

    const timeout = setTimeout(() => {
      removeThisPopup()
    }, removeAfterMs)

    return () => {
      clearTimeout(timeout)
    }
  }, [removeAfterMs, removeThisPopup])

  return (
    <div className="mb-4">
      <div className="relative w-full overflow-hidden transition-all bg-light-secondary dark:bg-dark-secondary">
        <div className="flex flex-row p-4">
          {content}
          <div className="w-6 h-6 transition-all opacity-100 cursor-pointer hover:opacity-60 text-dark-primary dark:text-light-primary">
            <XIcon width={24} height={24} onClick={removeThisPopup} />
          </div>
        </div>
        {removeAfterMs !== null ? <AnimatedFader duration={removeAfterMs} /> : null}
      </div>
    </div>
  )
}

export default PopupItem