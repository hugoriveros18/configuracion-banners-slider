import { useEffect, useState } from 'react'

type TimepoRestante = {
  segundos: string
  minutos: string
  horas: string
  dias: string
}

const tiempoRestanteValorInicial:TimepoRestante = {
  dias: '01',
  segundos: '00',
  minutos: '00',
  horas: '00'
}

const useFormatedTime = (fechaInicio: string, fechaFinal: string) => {

  //ESTADOS
  const [tiempoRestante, setTiempoRestante] = useState<TimepoRestante>(tiempoRestanteValorInicial);
  const [tiempoFinalizado, setTiempoFinalizado] = useState<boolean>(false);

  //CONSTANTES
  const segundoEnMilisegundos = 1000;
  const segundosPorMinuto = 60;
  const segundosPorHora = 60 * segundosPorMinuto;
  const segundosPorDia = 24 * segundosPorHora;

  //METODOS
  const llenarConCeros = (numeroDeDigitos:number, numero:number) => {
    const completado = `${'0'.repeat(numeroDeDigitos - 1)}${numero}`

    return completado.slice(completado.length - numeroDeDigitos);
  }

  const tiempoToRender = (totalSegundos:number) => {
    const dias = Math.floor(totalSegundos / segundosPorDia);
    const horas = Math.floor((totalSegundos % segundosPorDia) / segundosPorHora);
    const minutos = Math.floor(((totalSegundos % segundosPorDia) % segundosPorHora) / segundosPorMinuto);
    const segundos = Math.floor(((totalSegundos % segundosPorDia) % segundosPorHora) % segundosPorMinuto);

    return {
      segundos: llenarConCeros(2, segundos),
      minutos: llenarConCeros(2, minutos),
      horas: llenarConCeros(2, horas),
      dias: llenarConCeros(2, dias)
    }
  }

  //EFECTOS
  useEffect(() => {
    const fechaHoy = new Date();
    const fechaInicioConvert = new Date(fechaInicio);
    const fechaFinalConvert = new Date(fechaFinal);

    if(fechaHoy.getTime() > fechaInicioConvert.getTime() && fechaHoy.getTime() < fechaFinalConvert.getTime()) {
      let segundosRestantes = (fechaFinalConvert.getTime() - fechaHoy.getTime())/segundoEnMilisegundos;
      setInterval(() => {
        setTiempoRestante(tiempoToRender(segundosRestantes))
        segundosRestantes -= 1;
        if(segundosRestantes === 0) {
          setTiempoFinalizado(true);
        }
      },segundoEnMilisegundos)
    } else {
      setTiempoFinalizado(true);
    }
  },[])

  return {
    tiempoRestante,
    tiempoFinalizado
  }
}

export { useFormatedTime };
