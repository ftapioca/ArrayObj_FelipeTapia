// Creacion de Arreglos con Objetos

var radio = [
    {HORA: `11:00`,ESPECIALISTA: `Ignacio Schulz`,PACIENTE: `Francisca Rojas`,RUT: `9878782-1`,PREVISION: `FONASA`},
    {HORA: `11:30`,ESPECIALISTA: `Federico Subercaseaux`,PACIENTE: `Pamela Estrada`,RUT: `15345241-3`,PREVISION: `ISAPRE`},
    {HORA: `15:00`,ESPECIALISTA: `Fernando Wurthz`,PACIENTE: `Armando Luna`,RUT: `16445345-9`,PREVISION: `ISAPRE`},
    {HORA: `15:30`,ESPECIALISTA: `Ana Maria Godoy`,PACIENTE: `Manuel Godoy`,RUT: `17666419-0`,PREVISION: `FONASA`},
    {HORA: `16:00`,ESPECIALISTA: `Patricia Suazo`,PACIENTE: `Ramon Ulloa`,RUT: `14989389-K`,PREVISION: `FONASA`}
];

var trauma = [
    {HORA: `08:00`,ESPECIALISTA: `MARIA PAZ ALTUZARRA`,PACIENTE: `PAULA SANCHEZ`,RUT: `15554774-5`,PREVISION: `FONASA`},
    {HORA: `10:00`,ESPECIALISTA: `RAUL ARAYA`,PACIENTE: `ANGÉLICA NAVAS`,RUT: `15444147-9`,PREVISION: `ISAPRE`},
    {HORA: `10:30`,ESPECIALISTA: `MARIA ARRIAGADA`,PACIENTE: `ANA KLAPP`,RUT: `17879423-9`,PREVISION: `ISAPRE`},
    {HORA: `11:00`,ESPECIALISTA: `ALEJANDRO BADILLA`,PACIENTE: `FELIPE MARDONES`,RUT: `1547423-6`,PREVISION: `ISAPRE`},
    {HORA: `11:30`,ESPECIALISTA: `CECILIA BUDNIK`,PACIENTE: `DIEGO MARRE`,RUT: `16554741-K`,PREVISION: `FONASA`},
    {HORA: `12:00`,ESPECIALISTA: `ARTURO CAVAGNARO`,PACIENTE: `CECILIA MENDEZ`,RUT: `9747535-8`,PREVISION: `ISAPRE`},
    {HORA: `12:30`,ESPECIALISTA: `ANDRES KANACRI`,PACIENTE: `MARCIAL SUAZO`,RUT: `11254785-5`,PREVISION: `ISAPRE`}
];

var dental = [
    {HORA: `08:30`,ESPECIALISTA: `ANDREA ZUÑIGA`,PACIENTE: `MARCELA RETAMAL`,RUT: `11123425-6`,PREVISION: `ISAPRE`},
    {HORA: `11:00`,ESPECIALISTA: `MARIA PIA ZAÑARTU`,PACIENTE: `ANGEL MUÑOZ`,RUT: `9878789-2`,PREVISION: `ISAPRE`},
    {HORA: `11:30`,ESPECIALISTA: `SCARLETT WITTING`,PACIENTE: `MARIO KAST`,RUT: `7998789-5`,PREVISION: `FONASA`},
    {HORA: `13:00`,ESPECIALISTA: `FRANCISCO VON TEUBER`,PACIENTE: `KARIN FERNANDEZ`,RUT: `18887662-K`,PREVISION: `FONASA`},
    {HORA: `13:30`,ESPECIALISTA: `EDUARDO VIÑUELA`,PACIENTE: `HUGO SANCHEZ`,RUT: `17665461-4`,PREVISION: `FONASA`},
    {HORA: `14:00`,ESPECIALISTA: `RAQUEL VILLASECA`,PACIENTE: `ANA SEPULVEDA`,RUT: `14441281-0`,PREVISION: `ISAPRE`}
];




//Div Contenedor
document.write("<div class='container'>");
    //Título H1
    document.write("<table class='table table-borderless mb-0 mt-2'>");
        document.write("<tr>");
            document.write("<td class='p-0'><h1>Centor Médico Ñuñoa</h1></td>");
        document.write("</tr>");
    document.write("</table>");

    //Tabla primera y ultima atencion
    document.write("<table class='table table-borderless p-0'>");
        document.write("<tr>");
        // Título
            document.write("<td class='p-0'><span class='font-weight-bold'><h4>Primera y última atención por especialidad<h4></br></span></td>");
        document.write("</tr>");

        // Especialidad Radiologia
        document.write("<tr>");
            document.write("<td class='p-0'><span class='font-weight-regular'><h5>Radiología:</h5>Primera atención: "+ radio[0].PACIENTE + " - " + radio[0].PREVISION + " | Última atención: " + radio[radio.length-1].PACIENTE + " - " + radio[radio.length-1].PREVISION +  "</span></td>");
        document.write("</tr>");
        
        // Especialidad Traumatologia
        document.write("<tr>");
            document.write("<td class='p-0'><span class='font-weight-regular'><h5></br>Traumatología:</h5>Primera atención: "+ trauma[0].PACIENTE + " - " + trauma[0].PREVISION + " | Última atención: " + trauma[trauma.length-1].PACIENTE + " - " + trauma[trauma.length-1].PREVISION +  "</span></td>");
        document.write("</tr>");
        document.write("</tr>");

        // Especialidad Dental
        document.write("<tr>");
            document.write("<td class='p-0'><span class='font-weight-regular'><h5></br>Dental:</h5>Primera atención: "+ dental[0].PACIENTE + " - " + dental[0].PREVISION + " | Última atención: " + dental[dental.length-1].PACIENTE + " - " + dental[dental.length-1].PREVISION +  "</span></td>");
        document.write("</tr>");

    //Creación de Tabla Notas
    document.write("<table class='table table-hover'>");

        //Cabecera Tabla Notas
        document.write("<thead class='bg-dark text-light'>");

            //Columnas Cabecera Tabla Notas
            document.write("<tr>");

                //Contenido Columnas Cabecera Tabla Notas
                document.write("<th scope='col'>Hora</th>");
                document.write("<th scope='col' class='text-center'>Especialista</th>");
                document.write("<th scope='col' class='text-center'>Paciente</th>");
                document.write("<th scope='col' class='text-center' >RUT</th>");
                document.write("<th scope='col' class='text-center'>Previsión</th>");
            document.write("</tr>"); //Cierro Columnas Cabecera Tabla Notas
        document.write("</thead>"); //Cierre Cabecera Tabla Notas

        //Cuerpo Tabla Notas
        document.write("<tbody>");

            //Filas Cuerpo Tabla Notas

            //Fila ramo 1 Tabla Notas
            document.write("<tr>");
                //Datos Fila ramo 1 Tabla Notas
                document.write("<th scope='row'>"+ r1 +"</th>");
                document.write("<td class='text-center'>"+ n1_r1 +"</td>");
                document.write("<td class='text-center'>"+ n2_r1 +"</td>");
                document.write("<td class='text-center'>"+ n3_r1 +"</td>");
                document.write("<td class='text-center font-weight-bold'>"+ prom_r1.toFixed(2) +"</td>");
            document.write("</tr>"); //Cierre Fila ramo 1 Tabla Notas

            //Fila ramo 2 Tabla Notas
            document.write("<tr>");
                //Datos Fila ramo 2 Tabla Notas
                document.write("<th scope='row'>"+ r2 +"</th>");
                document.write("<td class='text-center'>"+ n1_r2 +"</td>");
                document.write("<td class='text-center'>"+ n2_r2 +"</td>");
                document.write("<td class='text-center'>"+ n3_r2 +"</td>");
                document.write("<td class='text-center font-weight-bold'>"+ prom_r2.toFixed(2) +"</td>");
            document.write("</tr>"); //Cierre Fila ramo 2 Tabla Notas

            //Fila ramo 3 Tabla Notas
            document.write("<tr>");
                //Datos Fila ramo 3 Tabla Notas
                document.write("<th scope='row'>"+ r3 +"</th>");
                document.write("<td class='text-center'>"+ n1_r3 +"</td>");
                document.write("<td class='text-center'>"+ n2_r3 +"</td>");
                document.write("<td class='text-center'>-</td>");
                document.write("<td class='text-center font-weight-bold'>-</td>");
            document.write("</tr>"); //Cierre Fila ramo 3 Tabla Notas
        document.write("</tbody>"); //Cierro Cuerpo Tabla Notas
    document.write("</table>"); //Cierro Tabla Notas

    //Mensajes de nota necesaria para aprobar

    if (n3_aprob<=10) {
        document.write("<p>Para aprobar el ramo <span class='font-weight-bold'>"+ r3 +"</span> , debes obtener como mínimo un <span class='font-weight-bold'>"+ n3_aprob + "</span> en tu tercera nota.")
    } else {
        document.write("<p>Para aprobar el ramo <span class='font-weight-bold'>"+ r3 +"</span> , debes obtener como mínimo un <span class='font-weight-bold'>"+ n3_aprob + "</span> en tu tercera nota,  <span class='font-weight-bold text-uppercase'>y eso es imposible...</span>")
    }
document.write("</div>");//Cierre Contenedor