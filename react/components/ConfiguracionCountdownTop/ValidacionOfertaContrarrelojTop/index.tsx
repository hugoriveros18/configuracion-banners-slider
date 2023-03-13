import React, { useState, useEffect } from 'react';
import { useDevice } from 'vtex.device-detector';
import { useCssHandles } from 'vtex.css-handles';
import CSS_HANDLES from '../../../typings/cssHandles';
import CountdownTop from '../CountdownTop';
import './styles.css';

const ValidacionOfertaContrarrelojTop = (bannersOferta: OfertaContrarreloj) => {

  //DEVICE
  const { isMobile } = useDevice();

  //CSS HANDLES
  const handles = useCssHandles(CSS_HANDLES);

  //ESTADOS
  const [tiempoFinalizado, setTimepoFinalizado] = useState<boolean>(false);
  const [fechaInicialValida, setFechaInicialValida] = useState<boolean>(false);

  //EFFECTOS
  useEffect(() => {
    const ahora = new Date();
    const inputFechaInicio = new Date(bannersOferta.fechaInicio);
    const inputFechaFinal = new Date(bannersOferta.fechaFinal);

    if (ahora.getTime() > inputFechaInicio.getTime() && ahora.getTime() < inputFechaFinal.getTime()) {
      setFechaInicialValida(true);
    }
  }, [])

  //JSX
  if (fechaInicialValida && !tiempoFinalizado) {
    return (
      <a
        href={bannersOferta.urlRedireccion}
        className={`${handles['banner__general-container-top']}`}
      >
        <img
          alt="Oferta por tiempo limitado"
          src={isMobile ? bannersOferta.imagenMobile : bannersOferta.imagenDesktop}
          className={`${handles['banner__general-container-top--image']}`}
        />
        <CountdownTop
          textoCountdown={bannersOferta.textoCountdown}
          alineacionHorizontalCountdown={bannersOferta.alineacionHorizontalCountdown}
          colorPlantillaCountdown={bannersOferta.colorPlantillaCountdown}
          colorTiempoCountdown={bannersOferta.colorTiempoCountdown}
          fechaInicio={bannersOferta.fechaInicio}
          fechaFinal={bannersOferta.fechaFinal}
          setTiempoFinalizado={setTimepoFinalizado}
        />
      </a>
    )
  }
  return;
}

export default ValidacionOfertaContrarrelojTop;
