import person from "./person.png"

export function Superior() {
  const disdiv = {
    background: "#000000",
    color: "#ffffff",
    padding: "20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: 'Quicksand',
  };

  const select = {
    margin: "10px",
    display: "inline-block",
	cursor: "pointer",
  	padding: "7px",
  	height: "42px",
  	outline: "0",
	background: "#f1f1f1",
	fontSize: "1em",
	color: "#888",
	fontFamily: 'Quicksand',
	border: "2px",
    borderRadius: "12px",
    position: "relative",
    transition: "all",
  };
  const imagen ={
    margin: "20px",
    width: "80px",
    height: "80px",
    borderRadius: "50px",
  }

  return (
    <div style={disdiv}>
      <div>
        <select style={select}>
          <option value="Hechos">Hechos viales</option>
          <option value="Nuevo">Nuevo registro</option>
          <option value="Ver">Ver todos los registros</option>
        </select>
        <select style={select}>
          <option value="Usuarios">Usuarios</option>
          <option value="Registrar">Registrar nuevo usuario</option>
          <option value="Administrar">Administrar usuarios</option>
        </select>
      </div>
      <h1>Bienvenido administrador</h1>
      <img src={person} style={imagen}/>
    </div>
  );
}
