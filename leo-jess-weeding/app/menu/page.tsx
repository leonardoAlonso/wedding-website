export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="mt-1">
        <h1 className="text-2xl text-center">Menú</h1>
        <ul className="text-center">
          <li>Raviol relleno de verduras en espero de chile guajillo 🫓</li>
          <li>Crema de queso filadelfia con pera mantequilla y confeti de pimiento morron </li>
          <li>Lomo en salsa de tamarindo y chile pasilla con pure de papa y brocoloi con zanahoria a la mantequilla 🐖</li>
        </ul>
      </div>
      <div className="mt-2">
        <h2 className="text-xl text-center">Tornafiesta</h2>
        <ul className="list-disc">
          <li>Chilaquiles</li>
        </ul>
      </div>
      <div className="mt-2">
        <h2 className="text-xl">Bebidas</h2>
        <ul className="list-disc">
          <li>Cerveza 🍺</li>
          <li>Refresco 🥤</li>
          <li>Tequila 🥃</li>
          <li>Ron 🍸</li>
        </ul>
      </div>

    </div>
  )
}
