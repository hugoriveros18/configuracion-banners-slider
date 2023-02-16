import React, { useState } from 'react';
import { useDevice } from 'vtex.device-detector';
import { useCssHandles } from 'vtex.css-handles';
import Countdown from '../Countdown';
import CSS_HANDLES from '../../typings/cssHandles';
import './styles.css';

const ValidacionOfertaContrarreloj = (bannersOferta: OfertaContrarreloj[]) => {

  //DETECTOR DE DISPOSITIVO
  const { isMobile } = useDevice();

  //CSS HANDLES
  const handles = useCssHandles(CSS_HANDLES);

  //ESTADOS
  const [tiempoFinalizado, setTimepoFinalizado] = useState<boolean>(false);

  //JSX
  if (!tiempoFinalizado && bannersOferta[0]) {
    return (
      <a
        href={bannersOferta[0].urlRedireccion}
        className={`${handles['banner__general-container']}`}
      >
        <img
          alt="Oferta por tiempo limitado"
          src={isMobile ? bannersOferta[0].imagenMobile : bannersOferta[0].imagenDesktop}
          className={`${handles['banner__general-container--image']}`}
        />
        <Countdown
          textoCountdown={bannersOferta[0].textoCountdown}
          alineacionHorizontalCountdown={bannersOferta[0].alineacionHorizontalCountdown}
          colorPlantillaCountdown={bannersOferta[0].colorPlantillaCountdown}
          colorTiempoCountdown={bannersOferta[0].colorTiempoCountdown}
          fechaInicio={bannersOferta[0].fechaInicio}
          fechaFinal={bannersOferta[0].fechaFinal}
          setTiempoFinalizado={setTimepoFinalizado}
        />
      </a>
    )
  };

  return null;
}

export default ValidacionOfertaContrarreloj;
