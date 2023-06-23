import Navbar from '@/components/navbar/Navbar'
import './globals.css'
import { Montserrat } from 'next/font/google'
import Footer from '@/components/footer/Footer'
import { ThemeProvider } from '@/context/ThemeContext'

const inter = Montserrat({ subsets: ['latin'] })

// Inter Subset latin

export const metadata = {
  title: 'Victor Oluwafemi',
  description: 'Portfolio of Victor Oluwafemi created by NextJS app',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <ThemeProvider>
          <div className='container'>
            <Navbar />
            {children}
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
