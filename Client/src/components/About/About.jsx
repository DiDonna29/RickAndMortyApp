import "./About.css";

export default function About() {
  return (
    <div className="card-about">
      <div className="left-about">
        <img
          className="imagecard"
          src="../../images/1703041117705.png"
          alt=""
        />
      </div>
      <div className="right-about">
        <div className="flex-container">
          <h1 className="heading">About Me</h1>
          <p>
            NOMBRE: <span>John</span>
          </p>
          <p>
            APELLIDO: <span>Di Donna</span>
          </p>
          <p>
            CURSO: <span>SoyHenry</span>
          </p>
          <p>
            COHORTE: <span>webpt18a</span>
          </p>
          <p>
            GRUPO: <span>04</span>
          </p>
        </div>
      </div>
    </div>
  );
}
