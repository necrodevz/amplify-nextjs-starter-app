import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Satellite Components',
  description: 'Take your MC to the next level',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {    
  return (
      <html lang="en">
          <script src="https://cdn.tailwindcss.com?plugins=forms,typography,aspect-ratio,line-clamp"></script>
          <style type="text/tailwindcss">
              @layer utilities {
                  .content - auto {
                              content - visibility: auto;
                  }
                }
          </style>
          <body className={inter.className}>{children}</body>
          <script>
              tailwind.config = {
                        theme: {
                            extend: {
                                colors: {
                                    clifford: '#da373d',
                                }
                            }
                        }
                    }
          </script>
    </html>
  )
}
