import { jwtVerify } from "jose";
import { NextResponse } from "next/server";

export async function middleware(request) {
  const token = "eyJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6ImR1bW15MDFAZ21haWwuY29tIiwiZXhwIjoxNzEyMTE1ODEyfQ.qG7VSrT9GNVjxaCAXUQdvBUygvmQsJoqzFTdyw-KJks"
 //await request.headers.get("Authorization")?.split("")[1]
  if(!token){
    return NextResponse.json({message:"トークンがありません"})
  }
  try{
    const secretKey = new TextEncoder().encode("next-market-app-book")
    const decodedJwt = await jwtVerify(token, secretKey)
    console.log("decodedJwt:", decodedJwt)
    return NextResponse.next()
  }catch(err){
    return NextResponse.json({message:"トークンが正しくないので、ログインしてください"})
  }
  return NextResponse.next()
}

export const config = {
  matcher: ["/api/item/create", "/api/item/update/:pqth*", "/api/item/delete/:path*"],
}