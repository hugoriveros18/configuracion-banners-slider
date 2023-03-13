import React from "react";
import { useDevice } from 'vtex.device-detector';


const Banner = ({imagenDesktop, imagenMobile, urlRedireccion}:BannerProps) => {

  //DEVICE
  const { isMobile } = useDevice();

  //JSX
  if(urlRedireccion === "" || urlRedireccion === undefined || urlRedireccion === "#") {
    return(
      <div
        style={{width: '100%'}}
      >
        <img
          alt="Banner"
          src={isMobile ? imagenMobile : imagenDesktop}
          style={{width: '100%'}}
        />
      </div>
    )
  }
  return(
    <a
      href={urlRedireccion}
      style={{width: '100%'}}
    >
      <img
        alt="Banner"
        src={isMobile ? imagenMobile : imagenDesktop}
        style={{width: '100%'}}
      />
    </a>

  )
}

export default Banner;
