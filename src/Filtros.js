
export function Filtros (){
    const prin ={fontFamily: 'Quicksand',}
    const cuadro = {
        border: "solid",
        borderColor: "#000000",
        borderWidth: "1px",
        marginTop: "20px",
        backgroundColor: "#e0e4ec",
        borderRadius: "8px",
        textIndent: "1.2em",
        borderRadius: "10px",
      };
      const filtros={
        marginBottom: "20px",
        borderRadius: "10px",
      }
      const inputtype={
        margin: "5px",
        display: "inline-block",
        cursor: "pointer",
        height: "42px",
        outline: "0",
        background: "#ffffff",
        fontSize: "1em",
        color: "#888",
        fontFamily: 'Quicksand',
        border: "2px",
        borderRadius: "12px",
        position: "relative",
        transition: "all",
        borderRadius: "5px",
        margin: "5px",
        textIndent: ".5em",
      }
    return(
        <div style={prin}>
            <h3>Registros</h3>
            <div style={cuadro}>
                <h4>Mostrar por:</h4>
                <div style={filtros}>
                 <input type={"text"} value={"Nombre"} style={inputtype}/>
                 <input type={"text"} value={"Usuario"} style={inputtype}/>
                 <select style={inputtype} width={"100px"}>
                    <option value="completados">Registros completados</option>
                    <option value="imcompletos">Registros incompletos</option>
                 </select>
                 <select style={inputtype} >
                    <option value="tipo">Tipo de siniestro</option>
                    <option value="fatal">Fatal (Incluye personas fallecidas)</option>
                    <option value="nofatal">No fatal (Personas lesionadas sin ningun fallecido)</option>
                    <option value="daños">Solo daños (No hay personas lesionadas ni fallecidas)</option>
                 </select>
                 <input type={"text"} value={"Fecha inicial"} style={inputtype}/>
                 <input type={"text"} value={"Fecha final"} style={inputtype}/>
                </div>
            </div>
        </div>
    )
}