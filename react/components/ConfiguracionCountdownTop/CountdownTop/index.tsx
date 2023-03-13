import React, { useEffect, useState } from "react";
import { useCssHandles } from 'vtex.css-handles';
import { useFormatedTime } from "../../../hooks/useFormatedTime";
import CSS_HANDLES from "../../../typings/cssHandles";
import './styles.css';

const CountdownTop = ({
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
  const countdownPositionTop = (alienacionHorizontal:string) => {
    switch(alienacionHorizontal) {
      case 'izquierda':
        return handles['alineacion-izquierda'];
      case 'centro':
        return handles['alineacion-centro'];
      case 'derecha':
        return handles['alineacion-derecha'];
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
      ${handles[`countdown__general-container-top`]}
      ${countdownPositionTop(alineacionHorizontalCountdown)}
      `}
      style={countdownDiasInactiveMargin(isDiasActive,alineacionHorizontalCountdown)}
    >

      <div className={`${handles[`countdown__title-top`]}`}>
        <h2
          className={`${handles[`countdown__title-text-top`]}`}
          style={{color: colorPlantillaCountdown}}
        >
          {textoCountdown}
        </h2>
      </div>

      <div
        className={`${handles[`countdown__time-container-top`]}`}
        style={isDiasActive ? {gridTemplateColumns: 'repeat(4, 1fr)'} : {gridTemplateColumns: 'repeat(3, 1fr)'}}
      >

        {/* REGISTRO DIAS */}
        {
          isDiasActive &&
          <div className={`${handles[`time-container__box-top`]}`}>
            <div className={`${handles[`time-container__box-time-top`]}`}>
              <p className={`${handles[`time-container__box-time-top--time`]}`}
                style={countdownTimeStyle}
              >
                {resumenCountdown.tiempoRestante.dias}
              </p>
            </div>
            <div className={`${handles[`time-container__box-text-top`]}`}>
              <p
                className={`${handles[`time-container__box-text-top--text`]}`}
                style={{color: colorPlantillaCountdown}}
              >
                DIAS
              </p>
            </div>
          </div>
        }

        {/* REGISTRO HORAS */}
        <div className={`${handles[`time-container__box-top`]}`}>
          <div className={`${handles[`time-container__box-time-top`]}`}>
            <p
              className={`${handles[`time-container__box-time-top--time`]}`}
              style={countdownTimeStyle}
            >
              {resumenCountdown.tiempoRestante.horas}
            </p>
          </div>
          <div className={`${handles[`time-container__box-text-top`]}`}>
            <p
              className={`${handles[`time-container__box-text-top--text`]}`}
              style={{color: colorPlantillaCountdown}}
            >
              HORAS
            </p>
          </div>
        </div>

        {/* REGISTRO MINUTOS */}
        <div className={`${handles[`time-container__box-top`]}`}>
          <div className={`${handles[`time-container__box-time-top`]}`}>
            <p
              className={`${handles[`time-container__box-time-top--time`]}`}
              style={countdownTimeStyle}
            >
              {resumenCountdown.tiempoRestante.minutos}
            </p>
          </div>
          <div className={`${handles[`time-container__box-text-top`]}`}>
            <p
              className={`${handles[`time-container__box-text-top--text`]}`}
              style={{color: colorPlantillaCountdown}}
            >
              MINUTOS
            </p>
          </div>
        </div>

        {/* REGISTRO SEGUNDOS */}
        <div className={`${handles[`time-container__box-top`]}`}>
          <div className={`${handles[`time-container__box-time-top`]}`}>
            <p
              className={`${handles[`time-container__box-time-top--time`]}`}
              style={countdownTimeStyle}
            >
              {resumenCountdown.tiempoRestante.segundos}
            </p>
          </div>
          <div className={`${handles[`time-container__box-text-top`]}`}>
            <p
              className={`${handles[`time-container__box-text-top--text`]}`}
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

export default CountdownTop;
