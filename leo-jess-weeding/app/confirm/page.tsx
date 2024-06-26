export default function Confirm() {

    return (
      <main className="flex min-h-screen flex-col items-center">
          <div className="w-full flex flex-col justify-center items-center text-pretty px-4">
            <p className="py-5 text-center">
              Confirme su asistencia antes del 30 de Mayo para asegurar su lugar en esta reunión intergaláctica.
            </p>
            <p>
              Si no funciona el formulario puedes hacer clic <a className="underline text-punk-p" target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSd5vbJOMV93_GPUOBeHROx6TY6yj84aPUrCQxOn7lwv71Rdpw/viewform">aqui</a>
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
