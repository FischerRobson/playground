type GridProps = {
  gridSize: number
  position: { x: number; y: number }
}

export function Grid({ gridSize, position }: GridProps) {
  // const gridClass = `grid grid-cols-${gridSize} gap-2`

  function isActualPosition(row: number, col: number) {
    let className = ''
    if (row === position.y && col === position.x) {
      className = 'bg-zinc-300 text-zinc-700'
    }
    return className
  }

  return (
    <div>
      {Array.from({ length: gridSize }).map((row, i) => {
        return (
          <section className="flex items-center justify-center gap-2" key={i}>
            {Array.from({ length: gridSize }).map((col, j) => {
              return (
                <section
                  className={`w-12 h-12 border border-zinc-50 ${isActualPosition(
                    i,
                    j,
                  )}`}
                  key={`${i}-${j}`}
                >
                  a
                </section>
              )
            })}
          </section>
        )
      })}
    </div>
  )
}
