import { Card } from "./_ui/card/card";
import { Hero } from "./_ui/hero/hero";

import styles from './globals.module.css'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <Hero
        background_image="https://jessi-leo-bucket.s3.us-east-2.amazonaws.com/herobanner-leo-jessi.jpg"
        confirm_url="confirm"
      >
        <div className="mx-20">
          <p className="text-xl">Armonía en la rebelión, amor en cada nota.</p>
          <p className="text-lg">
            Nuestra boda es una sinfonía de amor, donde cada nota es una promesa y cada latido es un paso hacia el siempre.
          </p>
        </div>
      </Hero>
      <section className="mt-7">
        <h2 className={`text-5xl text-center text-punk-p my-5 ${styles.subtitle}`}>NUESTRA HISTORIA</h2>
        <Card
          imagePosition="right"
          title="15-Junio-12"
          imageUrl="https://jessi-leo-bucket.s3.us-east-2.amazonaws.com/leo-jessi-inicio.JPG"
        >
          <p className="mb-3 font-normal text-punk-t">Fuimos presentados en facebook por una amiga en comun y despues de un par de semanas platicando Leo invito a Jessi a una
         función de lucha dentro de la prepa y seguido a eso jessi invito a leo a un bar por primera vez (el era menor de edad aun 😆)</p>
          <p className="mb-3 font-normal text-punk-t">Ese único encuentro bastó para que al día siguiente Leo le propusiera ser su novia (y dijo que si ❤️)</p>
        </Card>
        <Card
          imagePosition="left"
          title="Septiembre 2019"
          imageUrl="https://jessi-leo-bucket.s3.us-east-2.amazonaws.com/jessi-leo-espejo.jpg"
        >
          <p className="mb-3 font-normal text-punk-t">Durante 2019 Leo dejo su primer trabajo y empezamos juntos un negocio de hamburgesas 🍔 y a inicios de septiembre Leo
          encontro un nuevo trabajo en Jalisco y aun que con mucho temor 😨 este se convirtio en el momento en el que tomamos la decicion de empezar a vivir juntos.</p>
        </Card>
        <Card
          imagePosition="right"
          title="Enero 2024"
          imageUrl="https://jessi-leo-bucket.s3.us-east-2.amazonaws.com/card+4.jpg">
          <p className="mb-3 font-normal text-punk-t">A pesar de llevar varios años hablando sobre ello (en serio varios años) para Enero del 2024 al fin se tomo la decicion de
          dar por iniciados los planes de boda y precisamente en junio 15, 12 años despues. </p>
        </Card>

      </section>
    </main>
  );
}
