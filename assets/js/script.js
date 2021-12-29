// Creacion de Arreglos con Objetos

var radio = [
    {HORA: `11:00`,ESPECIALISTA: `IGNACIO SCHULZ`,PACIENTE: `FRANCISCA ROJAS`,RUT: `9878782-1`,PREVISION: `FONASA`},
    {HORA: `11:30`,ESPECIALISTA: `FEDERICO SUBERCASEAUX`,PACIENTE: `PAMELA ESTRADA`,RUT: `15345241-3`,PREVISION: `ISAPRE`},
    {HORA: `15:00`,ESPECIALISTA: `FERNANDO WURTHZ`,PACIENTE: `ARMANDO LUNA`,RUT: `16445345-9`,PREVISION: `ISAPRE`},
    {HORA: `15:30`,ESPECIALISTA: `ANA MARIA GODOY`,PACIENTE: `MANUEL GODOY`,RUT: `17666419-0`,PREVISION: `FONASA`},
    {HORA: `16:00`,ESPECIALISTA: `PATRICIA SUAZO`,PACIENTE: `RAMON ULLOA`,RUT: `14989389-K`,PREVISION: `FONASA`}
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
            document.write("<td class='p-0'><h1>Centro Médico Ñuñoa</h1></td>");
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



//Creación de Tablas con atenciones por especialidad

//Tabla de Radiologia
    document.write("<table class='table table-borderless mb-0 mt-2'>");
    document.write("<tr>");
    document.write("<td class='p-0'><h2></br>Atenciones Radiología</h2></td>");
    document.write("</tr>");
    document.write("</table>");
    document.write("<table class='table table-hover'>");
    //Cabecera Tabla radio
        document.write("<thead class='bg-dark text-light'>");
    //Columnas Cabecera Tabla radio
        document.write("<tr>");
        //Contenido Columnas Cabecera Tabla radio
            document.write("<th scope='col'>Hora</th>");
            document.write("<th scope='col' class='text-center'>Especialista</th>");
            document.write("<th scope='col' class='text-center'>Paciente</th>");
            document.write("<th scope='col' class='text-center' >RUT</th>");
            document.write("<th scope='col' class='text-center'>Previsión</th>");
            document.write("</tr>"); //Cierro Columnas Cabecera Tabla radio
            document.write("</thead>"); //Cierre Cabecera Tabla radio

            //Cuerpo Tabla atenciones Radio
            document.write("<tbody>");
                for (let i = 0; i<radio.length ; i++) {
                    document.write("<tr>");
                    document.write("<th scope='row' class='text-center'>"+ radio[i].HORA +"</th>");
                    document.write("<td scope='row' class='text-center'>"+ radio[i].ESPECIALISTA +"</td>");
                    document.write("<td scope='row' class='text-center'>"+ radio[i].PACIENTE +"</td>");
                    document.write("<td scope='row' class='text-center'>"+ radio[i].RUT +"</td>");
                    document.write("<td scope='row' class='text-center'>"+ radio[i].PREVISION +"</td>");
                    document.write("</tr>");
                }
// Fin Tabla Radio

//Tabla de Traumatología
    document.write("<table class='table table-borderless mb-0 mt-2'>");
    document.write("<tr>");
    document.write("<td class='p-0'><h2></br>Atenciones Traumatología</h2></td>");
    document.write("</tr>");
    document.write("</table>");
    document.write("<table class='table table-hover'>");
    document.write("<table class='table table-hover'>");
    //Cabecera Tabla radio
        document.write("<thead class='bg-dark text-light'>");
    //Columnas Cabecera Tabla radio
        document.write("<tr>");
        //Contenido Columnas Cabecera Tabla radio
            document.write("<th scope='col'>Hora</th>");
            document.write("<th scope='col' class='text-center'>Especialista</th>");
            document.write("<th scope='col' class='text-center'>Paciente</th>");
            document.write("<th scope='col' class='text-center' >RUT</th>");
            document.write("<th scope='col' class='text-center'>Previsión</th>");
            document.write("</tr>"); //Cierro Columnas Cabecera Tabla radio
            document.write("</thead>"); //Cierre Cabecera Tabla radio

            //Cuerpo Tabla atenciones trauma
            document.write("<tbody>");
                for (let i = 0; i<trauma.length ; i++) {
                    document.write("<tr>");
                    document.write("<th scope='row' class='text-center'>"+ trauma[i].HORA +"</th>");
                    document.write("<td scope='row' class='text-center'>"+ trauma[i].ESPECIALISTA +"</td>");
                    document.write("<td scope='row' class='text-center'>"+ trauma[i].PACIENTE +"</td>");
                    document.write("<td scope='row' class='text-center'>"+ trauma[i].RUT +"</td>");
                    document.write("<td scope='row' class='text-center'>"+ trauma[i].PREVISION +"</td>");
                    document.write("</tr>");
                }
// Fin Tabla traumatologia

//Tabla de Dental
    document.write("<table class='table table-borderless mb-0 mt-2'>");
    document.write("<tr>");
    document.write("<td class='p-0'><h2></br>Atenciones Dental</h2></td>");
    document.write("</tr>");
    document.write("</table>");
    document.write("<table class='table table-hover'>");
    document.write("<table class='table table-hover'>");
    //Cabecera Tabla radio
        document.write("<thead class='bg-dark text-light'>");
    //Columnas Cabecera Tabla radio
        document.write("<tr>");
        //Contenido Columnas Cabecera Tabla radio
            document.write("<th scope='col'>Hora</th>");
            document.write("<th scope='col' class='text-center'>Especialista</th>");
            document.write("<th scope='col' class='text-center'>Paciente</th>");
            document.write("<th scope='col' class='text-center' >RUT</th>");
            document.write("<th scope='col' class='text-center'>Previsión</th>");
            document.write("</tr>"); //Cierro Columnas Cabecera Tabla radio
            document.write("</thead>"); //Cierre Cabecera Tabla radio

            //Cuerpo Tabla atenciones dental
            document.write("<tbody>");
                for (let i = 0; i<dental.length ; i++) {
                    document.write("<tr>");
                    document.write("<th scope='row' class='text-center'>"+ dental[i].HORA +"</th>");
                    document.write("<td scope='row' class='text-center'>"+ dental[i].ESPECIALISTA +"</td>");
                    document.write("<td scope='row' class='text-center'>"+ dental[i].PACIENTE +"</td>");
                    document.write("<td scope='row' class='text-center'>"+ dental[i].RUT +"</td>");
                    document.write("<td scope='row' class='text-center'>"+ dental[i].PREVISION +"</td>");
                    document.write("</tr>");
                }
// Fin Tabla dental


        document.write("</tbody>"); //Cierro Cuerpo Tabla 
    document.write("</table>"); //Cierro Tabla 
document.write("</div>");//Cierre Contenedor