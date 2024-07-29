import { useRef } from 'react'
import Card from './components/Card'

const App = () => {
// inicjalizacja useref
  const ref = useRef(null)

  // napisanie funkcji ograniajacej scrollowanie
  const handleScroll = (currentRef) => {
    console.log('current ref: ', currentRef)
    window.scrollTo({
      top: currentRef.offsetTop,
      behavior: "smooth"
    })
  }
  return (
    <div>
      <button onClick = {() => handleScroll(ref.current)}>scroll to plum card</button>
      <div className="spacer"></div>
      {/* dodanie ref do componentu */}
      <Card ref={ref} />
    </div>
  )
}

export default App
