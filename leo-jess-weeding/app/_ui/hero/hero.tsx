import styles from './hero.module.css'
import Image from 'next/image'
import Link from 'next/link'

import {Special_Elite} from "next/font/google"

const special_elite = Special_Elite({
    subsets: ['latin'],
    weight: "400"
})

export interface Hero{
    background_image: string
    confirm_url: string
    children?: React.ReactNode;
}

export const Hero = (props: Hero) => {
    return (
        <section className={styles.heroWrapper}>
            <div className={styles.imageWrapper}>
                <Image
                    className={styles.heroImage}
                    priority={true}
                    src={props.background_image}
                    layout='fill'
                    objectFit='cover'
                    objectPosition='center'
                    alt='jessi-leo'
                />
            </div>
            <div className={`${styles.heroContent} ${special_elite.className} text-center`}>
                {props.children}
                <Link className={`${styles.heroLink} my-4`} href={props.confirm_url}>Confirmar asistencia</Link>
            </div>
        </section>
    )
}
