import React from 'react';
import { useDevice } from 'vtex.device-detector';
import { useCssHandles } from 'vtex.css-handles';
import { Link } from "vtex.render-runtime";
// import CountdownSlider from '../CountdownSlider';
import './styles.css';
import useFormatedTime from '../../../hooks/useFormatedTime';

const CSS_HANDLES = [
  'ctBanner__generalContainer',
  'ctBanner__linkContainer',
  'ctBanner__temporizadorContainer',
  'temporizador__titulo',
  'temporizador__tiempoContenedor',
  'temporizador__tiempoCasilla',
  'tiempoCasilla__numero',
  'tiempoCasilla__descripcion'
]

const ValidacionOfertaContrarreloj = (bannersOferta: OfertaContrarreloj) => {

  //DEVICE
  const { device } = useDevice();

  //CSS HANDLES
  const handles = useCssHandles(CSS_HANDLES);

  //INFORMACION TEMPORIZADOR
  const {
    isBannerActive,
    loading,
    dias,
    horas,
    minutos,
    segundos
  } = useFormatedTime({fechaInicio: bannersOferta.fechaInicio, fechaFinal: bannersOferta.fechaFinal})
  loading

  //JSX
  if (bannersOferta.estaActivo && isBannerActive) {
    return (

      <div className={handles.ctBanner__generalContainer}>

        <Link
          to={bannersOferta.urlRedireccion}
          className={handles.ctBanner__linkContainer}
        >

          {/* BANNER */}
          <img
            alt='Oferta Contrarreloj'
            src={device === 'phone' ? bannersOferta.imagenMobile : bannersOferta.imagenDesktop}
          />

          {/* TEMPORIZADOR */}
          <div className={handles.ctBanner__temporizadorContainer}>
            <div className={handles.temporizador__titulo}>
              <p style={{color: bannersOferta.colorPlantillaCountdown}}>{bannersOferta.textoCountdown}</p>
            </div>

            <div className={handles.temporizador__tiempoContenedor}>

              {/* DIAS */}
              {
                dias > 0 &&
                <div className={handles.temporizador__tiempoCasilla}>
                  <p
                    className={handles.tiempoCasilla__numero}
                    style={{backgroundColor: bannersOferta.colorPlantillaCountdown, color: bannersOferta.colorTiempoCountdown}}
                  >
                      {dias < 10 ? `0${dias}` : dias}
                  </p>
                  <p
                    className={handles.tiempoCasilla__descripcion}
                    style={{color: bannersOferta.colorPlantillaCountdown}}
                  >
                    DÍAS
                  </p>
                </div>
              }
              {/* HORAS */}
              <div className={handles.temporizador__tiempoCasilla}>
                <p
                  className={handles.tiempoCasilla__numero}
                  style={{backgroundColor: bannersOferta.colorPlantillaCountdown, color: bannersOferta.colorTiempoCountdown}}
                >
                    {horas < 10 ? `0${horas}` : horas}
                </p>
                <p
                  className={handles.tiempoCasilla__descripcion}
                  style={{color: bannersOferta.colorPlantillaCountdown}}
                >
                  HORAS
                </p>
              </div>
              {/* MINUTOS */}
              <div className={handles.temporizador__tiempoCasilla}>
                <p
                  className={handles.tiempoCasilla__numero}
                  style={{backgroundColor: bannersOferta.colorPlantillaCountdown, color: bannersOferta.colorTiempoCountdown}}
                >
                    {minutos < 10 ? `0${minutos}` : minutos}
                </p>
                <p
                  className={handles.tiempoCasilla__descripcion}
                  style={{color: bannersOferta.colorPlantillaCountdown}}
                >
                  MINUTOS
                </p>
              </div>
              {/* SEGUNDOS */}
              <div className={handles.temporizador__tiempoCasilla}>
                <p
                  className={handles.tiempoCasilla__numero}
                  style={{backgroundColor: bannersOferta.colorPlantillaCountdown, color: bannersOferta.colorTiempoCountdown}}
                >
                    {segundos < 10 ? `0${segundos}` : segundos}
                </p>
                <p
                  className={handles.tiempoCasilla__descripcion}
                  style={{color: bannersOferta.colorPlantillaCountdown}}
                >
                  SEGUNDOS
                </p>
              </div>

            </div>
          </div>

        </Link>

      </div>

      // <a
      //   href={bannersOferta.urlRedireccion}
      //   className={`${handles['banner__general-container']}`}
      // >
      //   <img
      //     alt="Oferta por tiempo limitado"
      //     src={isMobile ? bannersOferta.imagenMobile : bannersOferta.imagenDesktop}
      //     className={`${handles['banner__general-container--image']}`}
      //   />
      //   <CountdownSlider
      //     textoCountdown={bannersOferta.textoCountdown}
      //     alineacionHorizontalCountdown={bannersOferta.alineacionHorizontalCountdown}
      //     colorPlantillaCountdown={bannersOferta.colorPlantillaCountdown}
      //     colorTiempoCountdown={bannersOferta.colorTiempoCountdown}
      //     fechaInicio={bannersOferta.fechaInicio}
      //     fechaFinal={bannersOferta.fechaFinal}
      //     setTiempoFinalizado={setTimepoFinalizado}
      //   />
      // </a>
    )
  }

  return null;
}

export default ValidacionOfertaContrarreloj;
