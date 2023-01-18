import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { clear, percent, decrement, increment, x, divide, incrementByAmount1, incrementByAmount2 } from '../redux/slices/counterSlice'

export function Counter() {
  const [addedValue1, setAddedValue1] = React.useState(0)
  const [addedValue2, setAddedValue2] = React.useState(0)

  const count = useSelector((state) => state.counter.value)
  const count2 = useSelector((state) => state.counter.value1)
  const count3 = useSelector((state) => state.counter.result)

  const dispatch = useDispatch()

  return (
    <div className='Home'>
      <span>{count}</span>
        <span>{count2}</span>
        <span>{count3}</span>
      <div>
        <button
          aria-label="Clear field"
          onClick={() => dispatch(clear())}
        >
          ОЧИСТИТЬ СЕКС С ТВОЕЙ МАМОЙ
        </button>
        <button
          aria-label="Percent of value"
          onClick={() => dispatch(percent())}
        >
          ПРОЦЕНТ МОЕГО ЧЛЕНА ОТ ТВОЕЙ МАМЫ
        </button>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          ВВЕСТИ ЧЛЕН НА ТВОЮ МАТЬ

        </button>
        
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          ВЫСУНУТЬ ЧЛЕН ИЗ ТВОЕЙ МАТЕРИ
        </button>
        <button
          aria-label="Multiplication value"
          onClick={() => dispatch(x())}
        >
          УМНОЖИТЬ ЧЛЕН НА ТВОЮ МАТЬ
        </button>
        <button
          aria-label="Divide value"
          onClick={() => dispatch(divide())}
        >
          РАЗДЕЛИТЬ МОЙ ЧЛЕН НА ТВОЮ МАТЬ
        </button>
        <input value={addedValue1} onChange={e => setAddedValue1(e.target.value)} />
        <button
          onClick={() =>
            dispatch(incrementByAmount1(Number(addedValue1) || 0))
          }
        >
          ДОБАВИТЬ СМАЗКУ НА ЧЛЕН
        </button>
        <input value={addedValue2} onChange={e => setAddedValue2(e.target.value)} />
        <button
          onClick={() =>
            dispatch(incrementByAmount2(Number(addedValue2) || 0))
          }
        >
          ДОБАВИТЬ МАТЬ
        </button>
      </div>
      
    </div>
  )
}