import './styles/main.css'
import { Grid } from './Grid'
import { useBoard } from './hooks/useBoard'

export function App() {
  const { position, gridSize } = useBoard()

  return (
    <main className="w-screen h-screen bg-zinc-900 text-zinc-100">
      <header className="w-full flex justify-center mb-16">
        Position x: {position.x} y: {position.y}
      </header>
      <main className="flex items-center justify-center flex-col">
        <Grid gridSize={gridSize} position={position} />
      </main>
    </main>
  )
}
