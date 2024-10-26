import { NextRequest, NextResponse, userAgent } from 'next/server'

export function middleware(request: NextRequest) {
  const url = request.nextUrl
  const { device, browser, cpu, engine, isBot, os, ua } = userAgent(request)
  console.log("device: ", device, "browser: ", browser, "cpu: ", cpu, "engine: ", engine, "isBot: ", isBot, "os: ", os, "ua: ", ua)
  const viewport = device.type === 'mobile' ? 'mobile' : 'desktop'
  url.searchParams.set('viewport', viewport)
  return NextResponse.rewrite(url)
}

// Add this config object to specify which routes this middleware should run on:
export const config = {
  matcher: '/((?!api|_next/static|favicon.ico).*)',
}