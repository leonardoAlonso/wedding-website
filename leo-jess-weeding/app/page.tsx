import { Hero } from "./_ui/hero/hero";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <Hero
        background_image="https://jessi-leo-bucket.s3.us-east-2.amazonaws.com/hero-jessi-leo.jpg"
        confirm_url="confirm"
      >
        <div className="mx-20">
          <h2 className="text-xl">Armonía en la rebelión, amor en cada nota.</h2>
          <p className="text-lg">
            Nuestra boda es una sinfonía de amor, donde cada nota es una promesa y cada latido es un paso hacia el siempre.
          </p>
        </div>
      </Hero>
    </main>
  );
}
