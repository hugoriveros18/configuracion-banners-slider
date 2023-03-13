import React from 'react';
import { useListContext, ListContextProvider } from 'vtex.list-context';
import {BannersSliderSchema} from '../../schema/BannersSliderSchema';
import ValidacionOfertaContrarreloj from './ValidacionOfertaContrarreloj';
import ValidacionBanners from '../ValidacionBanners';

const ConfiguracionBannersSlider = ({ ofertaContrarreloj, banners, children }: BannersSliderProps) => {

  //LIST CONTEXT
  const { list } = useListContext() || [];

  //VALIDACIONES
  const validacionOfertaContrarreloj = ofertaContrarreloj.length > 0 ? ofertaContrarreloj.map(oferta => ValidacionOfertaContrarreloj(oferta)) : [];
  const grupoBanners = ValidacionBanners(banners);
  let bannerParaVisualizar = [];
  if (validacionOfertaContrarreloj) {
    bannerParaVisualizar = list.concat(validacionOfertaContrarreloj.filter(b => b !== undefined));
    bannerParaVisualizar = bannerParaVisualizar.concat(grupoBanners.filter(b => b !== undefined));
  } else {
    bannerParaVisualizar = list.concat(grupoBanners.filter(b => b !== undefined));
  }

  //JSX
  if (bannerParaVisualizar.length > 1) {
    return (
      <ListContextProvider list={bannerParaVisualizar}>
        {children}
      </ListContextProvider>
    )
  } else if (bannerParaVisualizar.length === 1) {
    return (
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
