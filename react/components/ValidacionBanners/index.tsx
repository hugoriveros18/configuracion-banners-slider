import React from "react";
import Banner from "../Banner";

const ValidacionBanners = (banners:BannerPrincipal[]) => {

  //JSX
  return(
    banners.map((banner, index) => {
      if(banner.tipoConfiguracion.posiblesConfiguraciones === 'Activacion Manual') {
        if(banner.tipoConfiguracion.estaActivo) {
          return(
            <Banner
              key={index}
              imagenDesktop={banner.imagenDesktop}
              imagenMobile={banner.imagenMobile}
              urlRedireccion={banner.urlRedireccion}
            />
          )
        }
      } else {
        if(banner.tipoConfiguracion.fechaInicio && banner.tipoConfiguracion.fechaFinal) {
          const ahora = new Date();
          const inputFechaInicio = new Date(banner.tipoConfiguracion.fechaInicio);
          const inputFechaFinal = new Date(banner.tipoConfiguracion.fechaFinal);
          if(ahora.getTime() > inputFechaInicio.getTime() && ahora.getTime() < inputFechaFinal.getTime()) {
            return(
              <Banner
                key={index}
                imagenDesktop={banner.imagenDesktop}
                imagenMobile={banner.imagenMobile}
                urlRedireccion={banner.urlRedireccion}
              />
            )
          }
        }
      }
      return
    })
  )
}

export default ValidacionBanners;
