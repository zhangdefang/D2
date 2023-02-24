import React,{ useEffect } from 'react'
const DropDown = () => {
    // 输出{a:{test:1,b:{c:{b:{}}}}}
    const nameSpace = (name, packge) => {
        console.log(name, packge)
    }
    useEffect(() => {
        nameSpace({ a: { test: '1', b: '2' } }, 'a.b.c.d')
    })

    return (
        <>
            <div></div>
        </>
    )
}
export default DropDown