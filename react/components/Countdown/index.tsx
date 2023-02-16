import React, { useEffect, useState } from "react";
import { useCssHandles } from 'vtex.css-handles';
import { useFormatedTime } from "../../hooks/useFormatedTime";
import CSS_HANDLES from "../../typings/cssHandles";

const Countdown = ({
  textoCountdown,
  alineacionHorizontalCountdown,
  colorPlantillaCountdown,
  colorTiempoCountdown,
  fechaInicio,
  fechaFinal,
  setTiempoFinalizado}:CountdownProps) => {

  //RESUMEN COUNTDOWN
  const resumenCountdown = useFormatedTime(fechaInicio, fechaFinal);

  //CSS HANDLES
  const handles = useCssHandles(CSS_HANDLES);

  //ESTADOS
  const [isDiasActive,setIsDiasActive] = useState<boolean>(true);

  //COUNTDOWN TIME STYLE
  const countdownTimeStyle = {
    color: colorTiempoCountdown,
    backgroundColor: colorPlantillaCountdown
  }

  //COUNTDOWN GENERAL STYLES

  const countdownPositionHomeSlider = (alienacionHorizontal:string) => {
    switch(alienacionHorizontal) {
      case 'izquierda':
        return handles[`alineacion-izquierda-abajo-slider`];
      case 'centro':
        return handles[`alineacion-centro-abajo-slider`];
      case 'derecha':
        return handles[`alineacion-derecha-abajo-slider`];
    }
    return ''
  }

  const countdownDiasInactiveMargin = (isDiasActive:boolean,alineacionHorizontalCountdown:string) => {
    if(!isDiasActive) {
      if(alineacionHorizontalCountdown === 'derecha') {
        return {
          marginRight: '20px'
        }
      } else if(alineacionHorizontalCountdown === 'izquierda') {
        return {
          marginLeft: '20px'
        }
      }
    }
    return {};
  }

  //EFECTOS
  useEffect(() => {
    if(resumenCountdown.tiempoFinalizado) {
      setTiempoFinalizado(true);
    }
  },[resumenCountdown.tiempoFinalizado])

  useEffect(() => {
    if(resumenCountdown.tiempoRestante.dias === '00') {
      setIsDiasActive(false);
    }
  },[resumenCountdown.tiempoRestante.dias])

  //JSX
  return(
    <div
      className={`
      ${handles[`countdown__general-container-slider`]}
      ${countdownPositionHomeSlider(alineacionHorizontalCountdown)}
      `}
      style={countdownDiasInactiveMargin(isDiasActive,alineacionHorizontalCountdown)}
    >

      <div className={`${handles[`countdown__title-slider`]}`}>
        <h2
          className={`${handles[`countdown__title-text-slider`]}`}
          style={{color: colorPlantillaCountdown}}
        >
          {textoCountdown}
        </h2>
      </div>

      <div
        className={`${handles[`countdown__time-container-slider`]}`}
        style={isDiasActive ? {gridTemplateColumns: 'repeat(4, 1fr)'} : {gridTemplateColumns: 'repeat(3, 1fr)'}}
      >

        {/* REGISTRO DIAS */}
        {
          isDiasActive &&
          <div className={`${handles[`time-container__box-slider`]}`}>
            <div className={`${handles[`time-container__box-time-slider`]}`}>
              <p className={`${handles[`time-container__box-time-slider--time`]}`}
                style={countdownTimeStyle}
              >
                {resumenCountdown.tiempoRestante.dias}
              </p>
            </div>
            <div className={`${handles[`time-container__box-text-slider`]}`}>
              <p
                className={`${handles[`time-container__box-text-slider--text`]}`}
                style={{color: colorPlantillaCountdown}}
              >
                DIAS
              </p>
            </div>
          </div>
        }

        {/* REGISTRO HORAS */}
        <div className={`${handles[`time-container__box-slider`]}`}>
          <div className={`${handles[`time-container__box-time-slider`]}`}>
            <p
              className={`${handles[`time-container__box-time-slider--time`]}`}
              style={countdownTimeStyle}
            >
              {resumenCountdown.tiempoRestante.horas}
            </p>
          </div>
          <div className={`${handles[`time-container__box-text-slider`]}`}>
            <p
              className={`${handles[`time-container__box-text-slider--text`]}`}
              style={{color: colorPlantillaCountdown}}
            >
              HORAS
            </p>
          </div>
        </div>

        {/* REGISTRO MINUTOS */}
        <div className={`${handles[`time-container__box-slider`]}`}>
          <div className={`${handles[`time-container__box-time-slider`]}`}>
            <p
              className={`${handles[`time-container__box-time-slider--time`]}`}
              style={countdownTimeStyle}
            >
              {resumenCountdown.tiempoRestante.minutos}
            </p>
          </div>
          <div className={`${handles[`time-container__box-text-slider`]}`}>
            <p
              className={`${handles[`time-container__box-text-slider--text`]}`}
              style={{color: colorPlantillaCountdown}}
            >
              MINUTOS
            </p>
          </div>
        </div>

        {/* REGISTRO SEGUNDOS */}
        <div className={`${handles[`time-container__box-slider`]}`}>
          <div className={`${handles[`time-container__box-time-slider`]}`}>
            <p
              className={`${handles[`time-container__box-time-slider--time`]}`}
              style={countdownTimeStyle}
            >
              {resumenCountdown.tiempoRestante.segundos}
            </p>
          </div>
          <div className={`${handles[`time-container__box-text-slider`]}`}>
            <p
              className={`${handles[`time-container__box-text-slider--text`]}`}
              style={{color: colorPlantillaCountdown}}
            >
              SEGUNDOS
            </p>
          </div>
        </div>


      </div>
    </div>
  )
}

export default Countdown;
