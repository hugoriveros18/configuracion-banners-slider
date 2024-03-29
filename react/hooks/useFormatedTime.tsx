import { useState, useEffect } from "react";

export default function useFormatedTime({
  fechaInicio = '2023-06-14T17:19:00.000Z',
  fechaFinal = '2023-06-17T17:19:00.000Z'
}:FormatedTimeProps) {

  //MEDIDAS DE TIEMPO
  const segundoEnMilisegundos = 1000;
  const segundosPorMinuto = 60;
  const segundosPorHora = 3600;
  const segundosPorDia = 86400;

  //STATES
  const [isBannerActive, setIsBannerActive] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  const [segundosRestantes, setSegundosRestantes] = useState<number>(0);
  const [segundos, setSegundos] = useState<number>(0);
  const [minutos, setMinutos] = useState<number>(0);
  const [horas, setHoras] = useState<number>(0);
  const [dias, setDias] = useState<number>(0);

  //EFFECTS
  useEffect(() => {
    const hoyToDate = new Date();
    const inicioToDate = new Date(fechaInicio);
    const finalToDate = new Date(fechaFinal);

    if(hoyToDate.getTime() > inicioToDate.getTime() && hoyToDate.getTime() < finalToDate.getTime()) {
      let segundosEstadoIncial = Math.floor((finalToDate.getTime() - hoyToDate.getTime())/segundoEnMilisegundos);
      setInterval(() => {
        setSegundosRestantes(segundosEstadoIncial);
        segundosEstadoIncial -= 1;
      }, segundoEnMilisegundos)
    } else {
      setIsBannerActive(false);
      setLoading(false);
    }

  }, [fechaInicio, fechaFinal])

  useEffect(() => {
    if(segundosRestantes > 0) {
      const diasFormateado = Math.floor(segundosRestantes / segundosPorDia);
      const horasFormateado = Math.floor((segundosRestantes % segundosPorDia) / segundosPorHora);
      const minutosFormateado = Math.floor(((segundosRestantes % segundosPorDia) % segundosPorHora) / segundosPorMinuto);
      const segundosFormateado = Math.floor(((segundosRestantes % segundosPorDia) % segundosPorHora) % segundosPorMinuto);

      setDias(diasFormateado),
      setHoras(horasFormateado),
      setMinutos(minutosFormateado);
      setSegundos(segundosFormateado);
      setLoading(false);
      setIsBannerActive(true);
    } else {
      setIsBannerActive(false);
    }
  }, [segundosRestantes])

  return {
    isBannerActive,
    loading,
    segundos,
    minutos,
    horas,
    dias
  }
}

