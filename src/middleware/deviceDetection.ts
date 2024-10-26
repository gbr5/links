import { NextRequest, NextResponse, userAgent } from 'next/server'

export function deviceDetection(request: NextRequest, response: NextResponse) {
  const { device, browser, cpu, engine, isBot, os, ua } = userAgent(request)
  
  // Log device information (consider removing in production)
  console.log("device:", device, "browser:", browser, "cpu:", cpu, "engine:", engine, "isBot:", isBot, "os:", os, "ua:", ua)
  
  // Determine viewport
  const viewport = device.type === 'mobile' ? 'mobile' : 'desktop'
  
  // Add device information to request headers
  response.headers.set('X-Device-Type', device.type || 'unknown')
  response.headers.set('X-Browser-Name', browser.name || 'unknown')
  response.headers.set('X-OS-Name', os.name || 'unknown')
  response.headers.set('X-Is-Bot', isBot.toString())
  
  // Set viewport as a header instead of a query parameter
  response.headers.set('X-Viewport', viewport)
  
  return response
}