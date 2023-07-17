import React from "react";
import { useCssHandles } from 'vtex.css-handles';
import { useDevice } from 'vtex.device-detector';
import CSS_HANDLES from "../../typings/cssHandles";

const CSS_HANDLES = [
  'simple-banner__container',
  'simple-banner__image'
]


const Banner = ({
  imagenDesktop,
  imagenMobile,
  urlRedireccion}
:BannerProps) => {

  //CSS HANDLES
  const handles = useCssHandles(CSS_HANDLES);

  //DEVICE
  const { device } = useDevice();

  //JSX
  if(urlRedireccion === "" || urlRedireccion === undefined || urlRedireccion === "#") {
    return(
      <div
        style={{width: '100%'}}
        className={handles['simple-banner__container']}
      >
        <img
          alt="Banner"
          src={device === 'phone' ? imagenMobile : imagenDesktop}
          style={{width: '100%'}}
        className={handles['simple-banner__image']}
        />
      </div>
    )
  }
  return(
    <a
      href={urlRedireccion}
      style={{width: '100%'}}
      className={handles['simple-banner__container']}
    >
      <img
        alt="Banner"
        src={device === 'phone' ? imagenMobile : imagenDesktop}
        style={{width: '100%'}}
        className={handles['simple-banner__image']}
      />
    </a>

  )
}

export default Banner;
