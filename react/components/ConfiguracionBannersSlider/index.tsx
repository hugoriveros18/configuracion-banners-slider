import React from 'react';
import ValidacionBanners from '../ValidacionBanners';
import { useListContext, ListContextProvider } from 'vtex.list-context';
import BannersSliderSchema from '../../schema/BannersSliderSchema';
import ValidacionOfertaContrarreloj from '../ValidacionOfertaContrarreloj';

const ConfiguracionBannersSlider = ({ofertaContrarreloj, banners, children}:BannersSliderProps) => {

  //LIST CONTEXT
  const { list } = useListContext() || [];

  //VALIDACIONES
  const validacionOfertaContrarreloj = ValidacionOfertaContrarreloj(ofertaContrarreloj);
  const grupoBanners = ValidacionBanners(banners);
  let bannerParaVisualizar = [];
  if (validacionOfertaContrarreloj) {
    bannerParaVisualizar = list.concat([validacionOfertaContrarreloj]);
    bannerParaVisualizar = bannerParaVisualizar.concat(grupoBanners.filter(b => b!== undefined));
  } else {
    bannerParaVisualizar = list.concat(grupoBanners.filter(b => b!== undefined));
  }

  //JSX
  if(bannerParaVisualizar.length > 1) {
    return(
      <ListContextProvider list={bannerParaVisualizar}>
        {children}
      </ListContextProvider>
    )
  } else if(bannerParaVisualizar.length === 1) {
    return(
      <>
        {bannerParaVisualizar}
      </>
    )
  } else {
    return null;
  }
}

ConfiguracionBannersSlider.schema = BannersSliderSchema;

export default ConfiguracionBannersSlider;
