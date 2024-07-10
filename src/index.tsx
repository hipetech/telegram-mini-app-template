import { useState } from 'react'

function Index() {
  const [count, setCount] = useState(0)

  return (
    <main className="w-screen h-screen bg-blue-400 flex flex-col justify-center items-center gap-5">
      <h2 className="text-2xl">Telegram mini app template</h2>
      <div className="flex gap-2 flex-row items-center">
        <button className="w-20 h-10 bg-amber-300" onClick={() => setCount((count) => --count)}>
          -
        </button>
        <span>
          {count}
        </span>
        <button className="w-20 h-10 bg-amber-300" onClick={() => setCount((count) => ++count)}>
          +
        </button>
      </div>
    </main>
  )
}

export default Index
