export default function Map() {

    return (
      <main className="flex min-h-screen flex-col items-center">
          <div className="w-full flex flex-col justify-center items-center text-pretty px-4">
            <p className="py-5 text-center">
              Unete a nosotros en esta celebracion en <b>Salón de Fiestas, Imperio Texcal, Calle Miguel Hidalgo 1, San Diego Texcoco</b>
            </p>
            <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3760.86856038019!2d-98.87064092401714!3d19.50428998179053!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1e7a5405e767f%3A0xe2ef3f39e1996fc6!2sSal%C3%B3n%20de%20Eventos%20Imperio%20Texcal!5e0!3m2!1ses-419!2smx!4v1706472510893!5m2!1ses-419!2smx"
            className="w-3/4"
            width="600"
            height="450"
            loading="lazy"/>

          </div>
      </main>
    );
  }
