import Progressbar from './Progress_bar';

export function Tabla() {
  const cuadro = {
    border: "solid",
    borderColor: "#000000",
    borderWidth: "1px",
    marginTop: "20px",
    fontFamily: 'Quicksand',
    backgroundColor: "#e0e4ec",
    borderRadius: "10px",
  };

  return (
    <div style={cuadro}>
      <h3>Ultimos registros agregados</h3>
      <table border={"1"} align={"center"} cellspacing={"0"} cellpadding={"5"} width={"100%"}>
        <tr>
          <td>ID</td>
          <td>Progreso</td>
          <td>Ver</td>
        </tr>
        <tr>
          <td>1</td>
          <td><Progressbar bgcolor="orange" progress='30'  height={20} /></td>
          <td>Ver registro</td>
        </tr>
        <tr>
          <td>2</td>
          <td><Progressbar bgcolor="red" progress='60'  height={20} /></td>
          <td>Ver registro</td>
        </tr>
        <tr>
          <td>3</td>
          <td><Progressbar bgcolor="#99ff66" progress='50'  height={20} /></td>
          <td>Ver registro</td>
        </tr>
        <tr>
          <td>4</td>
          <td><Progressbar bgcolor="#ff00ff" progress='85'  height={20} /></td>
          <td>Ver registro</td>
        </tr>
        <tr>
          <td>5</td>
          <td><Progressbar bgcolor="#99ccff" progress='95'  height={20} /></td>
          <td>Ver registro</td>
        </tr>
      </table>
    </div>
  );
}
