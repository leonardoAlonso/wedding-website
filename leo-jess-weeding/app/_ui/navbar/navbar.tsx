import styles from './nav.module.css'
import Link from 'next/link'

export interface LinkItem{
    url: string
    label: string
}

interface NavContent {
    pages: LinkItem[]
}

export const Navbar = (props: NavContent) => {
    return (
        <nav className={styles.nav_container}>
            <ul className={styles.ul_container}>
                {
                    props.pages.map((page, idx) => (
                        <Link key={`link-item-${idx}`} className={styles.link} href={page.url}>{page.label}</Link>
                    ))
                }
            </ul>
        </nav>
    )
}
