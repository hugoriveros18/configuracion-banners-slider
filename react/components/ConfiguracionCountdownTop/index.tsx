import React from 'react';
import { useListContext, ListContextProvider } from 'vtex.list-context';
import { CountdownTopSliderSchema } from '../../schema/BannersSliderSchema';
import ValidacionOfertaContrarrelojTop from './ValidacionOfertaContrarrelojTop';

const ConfiguracionCountdownTop = ({ ofertaContrarreloj, children }: CountdownTopBannersProps) => {

  //LIST CONTEXT
  const { list } = useListContext() || [];

  //VALIDACIONES
  const validacionOfertaContrarreloj = ofertaContrarreloj.length > 0 ? ofertaContrarreloj.map(oferta => ValidacionOfertaContrarrelojTop(oferta)) : [];
  let bannerParaVisualizar = [];
  if (validacionOfertaContrarreloj) {
    bannerParaVisualizar = list.concat(validacionOfertaContrarreloj.filter(b => b !== undefined));
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

ConfiguracionCountdownTop.schema = CountdownTopSliderSchema;

export default ConfiguracionCountdownTop;
