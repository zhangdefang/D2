import { useState } from 'react'
function useTest() {
    const [num, setNum] = useState(1)
    return num
}

export default useTest