import "./TodoCounter.css"

function TodoCounter({ total, completed }) {
  return (
    <div className="head">
    <h1 className="title">My Animes</h1>
    <p className="subTitle">
      Has completado {completed} de {total} animes!
    </p>
    </div>
  )
}

export {TodoCounter};