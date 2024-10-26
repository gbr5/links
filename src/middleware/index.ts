import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { deviceDetection } from './deviceDetection'
// import { authenticate } from './authentication'
// import { logging } from './logging'

export function middleware(request: NextRequest) {
  let response = NextResponse.next()

  response = deviceDetection(request, response)
  // response = authenticate(request, response)
  // response = logging(request, response)

  return response
}

export const config = {
  matcher: '/((?!api|_next/static|favicon.ico).*)',
}