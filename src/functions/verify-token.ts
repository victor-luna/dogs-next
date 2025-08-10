import { jwtVerify } from 'jose'

export default async function verifyToken(token: string): Promise<boolean> {
  if (!token) return false
  try {
    // await jwtVerify(
    //   token,
    //   new TextEncoder().encode(
    //     'jXw1,=MRs<P-bJ;z>HAm?KJRp|e0xS0b-)u_+-3Gj^zd}V1%^~2|XCf#!T!B_%X1i',
    //   ),
    //   {
    //     algorithms: ['HS256'],
    //   },
    // );
    return true
  } catch (error) {
    return false
  }
}
