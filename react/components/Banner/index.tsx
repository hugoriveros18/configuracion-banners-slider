import React from "react";
import { useDevice } from 'vtex.device-detector';
import { useCssHandles } from 'vtex.css-handles';
import CSS_HANDLES from "../../typings/cssHandles";


const Banner = ({imagenDesktop, imagenMobile, urlRedireccion}:BannerProps) => {

  //DEVICE
  const { isMobile } = useDevice();

  //CSS HANDLES
  const handles = useCssHandles(CSS_HANDLES);

  //JSX
  return(
    <a
      href={urlRedireccion}
      className={`${handles['banner-general-container']}`}
    >
      <img
        alt="Banner"
        src={isMobile ? imagenMobile : imagenDesktop}
        className={`${handles['banner-general-container']}`}
      />
    </a>

  )
}

export default Banner;
