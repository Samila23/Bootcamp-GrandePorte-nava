function calcularHora(){
    console.log("Olá");
    // Recebendo o horario de entrada do colaborador
    var horarioDeEntrada = (document.getElementById("horarioDeEntrada").value); 
    // Convertedno o horario de entrada no tipo Date
    var ConvertHorarioEntrada = new Date ("01/01/0001 " + horarioDeEntrada );
    // Estou dando um get separado na hora e depois minutos, ambos convertendo para o tipo Int
    var horaEntrada = parseInt(ConvertHorarioEntrada.getHours());
    var minutoEntrada = parseInt(ConvertHorarioEntrada.getMinutes());
    // recebendo o horario de saida do colaborador e realizando as conversoes 
    var horarioDeSaida = document.getElementById("horarioDeSaida").value;
    var coverterHorarioSaida = new Date ("01/01/0001 " + horarioDeSaida);
    var horaSaida = parseInt(coverterHorarioSaida.getHours());
    var minutosSaida = parseInt(coverterHorarioSaida.getMinutes());

    if (horaSaida > horaEntrada ){
        // primeiro irei descobrir quandos horas e minutos de diferença
        var totalHoras = horaSaida - horaEntrada;
        var totalMinutos = minutosSaida - minutoEntrada;
        // Conversão dos horarios em segundos
        var convertHorasEmSegundos = totalHoras * 3600;
        var convertMinutosEmSegundos = totalMinutos * 60;
        var totalSegundos = convertHorasEmSegundos +  convertMinutosEmSegundos;
        // if para a condição : total de horarios maior do que 8h = Horario normal de trabalho
        if ( totalSegundos >= 28800 ){
            // Horas Totais Trabalhadas
            var horasTrabalhadas = parseInt(totalSegundos / 3600);
            var restoHoraTrabalhadas =  parseInt(totalSegundos % 3600)
            var minutosTrabalhadas = parseInt(restoHoraTrabalhadas / 60); 
            console.log(horasTrabalhadas + ":" + minutosTrabalhadas);
            
            // Horas para o banco de horas, será subtraido as horas de 8h.
            var horas = parseInt((totalSegundos - 28800) / 3600);
            var restoHoras =  parseInt((totalSegundos - 28800) % 3600)
            var minutos = parseInt(restoHoras / 60); 
            console.log(horas + ":" + minutos);
            document.getElementById("respostaHorasTrabalhadas").style.display = "inline";
            document.getElementById("EnviarDadosDeEntradaSaida").style.display = "none";
            document.getElementById("respostaHorasTrabalhadas").innerHTML="Horário trabalhado: " + horasTrabalhadas + ":" + minutosTrabalhadas + "0hs - " + " Banco de Horas: " + horas + ":" + minutos + "0hs ";

        }
        else
         // if para a condição : total de horarios menor do que 8h = significa que o banco de horas ficará negativo.
            if(totalSegundos < 28800){
                // Horas Totais Trabalhadas
                var horasTrabalhadas = parseInt(totalSegundos / 3600);
                var restoHorasTrabalhadas =  parseInt(totalSegundos % 3600)
                var minutosTrabalhados = parseInt(restoHorasTrabalhadas / 60); 

                // Horas para o banco de horas, será subtraido as horas de 8h.
                var horas = parseInt((totalSegundos - 28800) / 3600);
                var restoHoras =  parseInt((totalSegundos - 28800) % 3600)
                // como nessa condição o resultado será negativo, precisei multiplicar o resultado dos minutos por -1, e assim o converter para positivo, ou o resultado na tela poderia ser ex: (-10:-15); 
                var minutos = parseInt(restoHoras / 60) * -1; 
                document.getElementById("respostaHorasTrabalhadas").style.display = "inline";
                document.getElementById("EnviarDadosDeEntradaSaida").style.display = "none";
                document.getElementById("respostaHorasTrabalhadas").innerHTML="Horário trabalhado " + horasTrabalhadas + ":" + minutosTrabalhados + "0hs - " + " Banco de Horas " + horas + ":" + minutos + "0hs ";
            }
    }
    else 
    // nessa condição a hora de saida não pode ser inferior ao horário de entrada.
        if (horaSaida < horaEntrada){
            window.alert(" Seu horário de saída precisa ser após " + horaEntrada + ":" + minutoEntrada);
        }
   }
