import styles from './card.module.css'
import Image from 'next/image'


interface CardContent {
    title: string
    children: React.ReactNode;
    imageUrl: string
    imagePosition: "right" | "left"
}

export const Card = (props: CardContent) => {
    const {title, children, imageUrl, imagePosition} = props
    return (
        <div className={styles.cardWrapper}>
            {
                imagePosition == "right" && <Image
                    src={imageUrl}
                    objectFit='cover'
                    objectPosition='center'
                    alt='start'
                    width={600}
                    height={600}
                    className={styles.cardImage}
                />
            }
            <div className={styles.cardContentWrapper}>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-punk-p">{title}</h5>
                    {children}
            </div>
            {
                imagePosition == "left" && <Image
                    src={imageUrl}
                    objectFit='cover'
                    objectPosition='center'
                    alt='start'
                    width={600}
                    height={600}
                    className={styles.cardImage}
                />
            }
        </div>
    )
}
