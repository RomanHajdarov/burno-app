import { Children } from "react";
import "../styles/globals.css";
import Header from "./header";
import {fetchAppicon} from "../utilis/fetchAppicon";
import Providers from "./Providers";

export const metadata = {
  title: 'Burno',
  description: 'Cardenio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
        <Header/>         
        <main className="overflow-x-hidden bg-violet-100 text- dark:bg-stone-600 dark:text-zinc-100 overflow-y-scroll scrollbar-hide">{children}</main>
        </Providers>
        </body>
    </html>
  )
}
