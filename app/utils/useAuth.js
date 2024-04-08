import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { jwtVerify } from "jose"

const useAuth = () =>{
  const [loginUserEmail, setLoginUserEmail] = useState("")
  const router = useRouter()

  useEffect(() => {
    const checkToken = async() =>{
    const token = localStorage.getItem("token")
  
  if(!token){
    console.log("トークンがない場合")
    router.push("/user/login")
  }
  
  //else{
  console.log("トークンがある場合")  
  //}

  try{
    const secretKey = new TextEncoder().encode("next-market-app-book")
    const decodedJwt = await jwtVerify(token, secretKey)
    console.log("token", token)
    console.log("secretKey", secretKey)
    console.log("アドレスが取得できた場合", decodedJwt.payload.email)
    setLoginUserEmail(decodedJwt.payload.email)
    console.log("アドレス保存")
    console.log("loginUserEmail", loginUserEmail)
  }catch(error){
    console.log("トークンが正しくない場合")
    router.push("/user/login")
  }
  console.log("loginUserEmail", loginUserEmail)
}
checkToken()
},[router])

return loginUserEmail
}



export default useAuth