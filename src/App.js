import { useRef } from 'react'
function App() {

  const ref = useRef(null)

  console.log(ref)

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
      <div className="card" ref={ref}></div>
    </div>
  )
}

export default App
