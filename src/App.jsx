import './App.css'
import DataFetching from './hooks/effect-hooks/DataFetching'
import HookCounterOne from './hooks/effect-hooks/HookCounterOne'
import HookMouse from './hooks/effect-hooks/HookMouse'
import IntervalHookCounter from './hooks/effect-hooks/IntervalHookCounter'
import MouseContainer from './hooks/effect-hooks/MouseContainer'
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
      <DataFetching />
    </div>
  )
}

export default App
