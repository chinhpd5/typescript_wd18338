import { useState } from "react";
function Gift(){
  const [arr] = useState<string[]>(["hoa", "quả","bóng","kẹo"])
  const [gift, setGift]= useState<string>('');
  function handleGetGift(){
    const random = Math.floor(Math.random()*4);
    setGift(arr[random]);
  }
  return (
    <>
    {console.log("render")}
      <button onClick={handleGetGift}>Click</button>
    </>
  )
}

export default Gift;