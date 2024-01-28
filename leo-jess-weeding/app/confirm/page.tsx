import {Benne} from "next/font/google"


const benne = Benne({
    subsets: ['latin'],
    weight: "400"
})


export default function Confirm() {

    return (
      <main className="flex min-h-screen flex-col items-center">
          <div className="w-full flex flex-col justify-center items-center text-pretty">
            <p className="py-5">
              Confirme su asistencia antes del 30 de Mayo para asegurar su lugar en esta reunión intergaláctica.
            </p>
            <iframe
            className="w-full"
            src="https://docs.google.com/forms/d/e/1FAIpQLSd5vbJOMV93_GPUOBeHROx6TY6yj84aPUrCQxOn7lwv71Rdpw/viewform?embedded=true"
            width="600"
            height="850"
            >Cargando...</iframe>

          </div>
      </main>
    );
  }
