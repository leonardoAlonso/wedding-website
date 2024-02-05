import styles from './header.module.css'
import Link from 'next/link'
import {Special_Elite} from "next/font/google"

const special_elite = Special_Elite({
    subsets: ['latin'],
    weight: "400"
})


interface HeaderContent {
    couple: string
    date: string
    children:React.ReactNode
}

export const Header = (props: HeaderContent) => {
    const {couple, date, children} = props
    return (
        <header>
            <div className="flex flex-col justify-center items-center mt-5">
                <Link href="/">
                    <h1 className={`text-center font-normal text-5xl ${styles.title} text-header`}>{couple}</h1>
                </Link>
                <p className={`${special_elite.className} text-2xl pt-4`}>{date}</p>
            </div>
            {children}
        </header>
    )
}
