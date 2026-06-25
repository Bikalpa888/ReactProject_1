import { useEffect, useState } from 'react'

const Counter = () => {
  const [count, setCount] = useState(0)
  const [data, setData] = useState(100)

  useEffect(() => {
    alert('Value changed')
  }, [count, data])

  const increaseCount = () => {
    setCount(prevCount => prevCount + 1)
  }

  const decreaseCount = () => {
    setCount(prevCount => prevCount - 1)
  }

  const increaseData = () => {
    setData(prevData => prevData + 10)
  }

  const decreaseData = () => {
    setData(prevData => prevData - 10)
  }

  const resetData = () => {
    setData(100)
  }

  return (
    <section className='min-h-[80vh] px-5 py-12' style={{ background: 'var(--c-off-white)', color: 'var(--c-dark)' }}>
      <div className='mx-auto flex max-w-5xl flex-col gap-8'>
        <div className='text-center'>
          <p className='text-sm font-semibold uppercase tracking-[0.25em]' style={{ color: 'var(--c-accent)' }}>
            React state
          </p>
          <h1 className='mt-3 text-4xl font-bold sm:text-5xl'>
            Counter Dashboard
          </h1>
        </div>

        <div className='grid gap-6 md:grid-cols-2'>
          <div className='liquid-glass rounded-lg p-6'>
            <div className='mb-8 flex items-center justify-between gap-4'>
              <div>
                <p className='text-sm font-semibold uppercase tracking-widest' style={{ color: 'var(--c-silver)' }}>
                  Counter
                </p>
                <h2 className='mt-2 text-2xl font-bold'>Basic Counter</h2>
              </div>

              <div className='min-w-20 rounded-lg px-5 py-3 text-center text-4xl font-black' style={{ background: 'var(--c-accent)', color: 'var(--c-dark)' }}>
                {count}
              </div>
            </div>

            <div className='grid grid-cols-2 gap-3'>
              <button
                onClick={increaseCount}
                className='glass-btn rounded-md px-5 py-3 text-sm uppercase active:scale-95'
              >
                Increase
              </button>

              <button
                onClick={decreaseCount}
                className='btn-secondary rounded-md px-5 py-3 text-sm uppercase active:scale-95'
              >
                Decrease
              </button>
            </div>
          </div>

          <div className='liquid-glass rounded-lg p-6'>
            <div className='mb-8 flex items-center justify-between gap-4'>
              <div>
                <p className='text-sm font-semibold uppercase tracking-widest' style={{ color: 'var(--c-silver)' }}>
                  Data Counter
                </p>
                <h2 className='mt-2 text-2xl font-bold'>Step Counter</h2>
              </div>

              <div className='min-w-20 rounded-lg px-5 py-3 text-center text-4xl font-black' style={{ background: 'var(--c-accent)', color: 'var(--c-dark)' }}>
                {data}
              </div>
            </div>

            <div className='grid gap-3 sm:grid-cols-3'>
              <button
                onClick={increaseData}
                className='glass-btn rounded-md px-5 py-3 text-sm uppercase active:scale-95'
              >
                Increase
              </button>

              <button
                onClick={decreaseData}
                className='btn-secondary rounded-md px-5 py-3 text-sm uppercase active:scale-95'
              >
                Decrease
              </button>

              <button
                onClick={resetData}
                className='btn-secondary rounded-md px-5 py-3 text-sm uppercase active:scale-95'
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Counter
