import { useEffect, useState } from 'react'

const directionMap = {
  w: { x: 0, y: -1 },
  s: { x: 0, y: 1 },
  a: { x: -1, y: 0 },
  d: { x: 1, y: 0 },
}
type key = keyof typeof directionMap
const keys: key[] = ['a', 's', 'd', 'w']

export function useBoard() {
  const [position, setPosition] = useState({
    x: 6,
    y: 6,
  })

  const gridSize = 10

  function handleKeyPress(e: KeyboardEvent) {
    if (!keys.includes(e.key as key)) return

    handleDirection(e.key as key)
  }

  function handleDirection(move: key) {
    const change = directionMap[move]

    setPosition((prev) => {
      const newX = prev.x + change.x
      const newY = prev.y + change.y

      if (newX >= 0 && newY >= 0 && newX <= 9 && newY <= 9) {
        return { ...prev, x: newX, y: newY }
      }

      return prev
    })
  }

  useEffect(() => {
    window.addEventListener('keypress', handleKeyPress)

    return () => {
      window.removeEventListener('keypress', handleKeyPress)
    }
  }, [position])

  return {
    position,
    gridSize,
  }
}
