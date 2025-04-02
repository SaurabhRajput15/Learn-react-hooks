import './App.css'
import Parent from './hooks/callback-hooks/Parent'
import DataFetching from './hooks/effect-hooks/DataFetching'
import HookCounterOne from './hooks/effect-hooks/HookCounterOne'
import HookMouse from './hooks/effect-hooks/HookMouse'
import IntervalHookCounter from './hooks/effect-hooks/IntervalHookCounter'
import MouseContainer from './hooks/effect-hooks/MouseContainer'
import Counter from './hooks/memo-hooks/Counter'
import FocusInput from './hooks/refs-hooks/FocusInput'
import HookTimer from './hooks/refs-hooks/HookTimer'
import CounterOne from './hooks/state-hooks/CounterOne'
import ExampleThree from './hooks/state-hooks/ExampleThree'
import ExampleTwo from './hooks/state-hooks/ExampleTwo'

function App() {
  return (
    <div>
      {/* <CounterOne /> */}
      {/* <ExampleTwo /> */}
      {/* <ExampleThree /> */}
      {/* <HookCounterOne /> */}
      {/* <HookMouse /> */}
      {/* <MouseContainer /> */}
      {/* <IntervalHookCounter /> */}
      {/* <DataFetching /> */}
      {/* <Parent /> */}
      {/* <Counter /> */}
      {/* <FocusInput /> */}
      <HookTimer />
    </div>
  )
}

export default App
