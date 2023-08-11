import { useState } from 'react'
const Test = () => {
  const [num, setNum] = useState(0)
  const [val] = [1, 2]
  console.log(val)
  return (
    <div>
      <button type="button" onClick={()=> setNum(num+1)}> Test {num}</button>
    </div>
  )
}

export default Test