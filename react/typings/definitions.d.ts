type PosiblesConfiguraciones = 'Por Fechas' | 'Activacion Manual'
type PosicionHorizontalContador = "izquierda" | "centro" | "derecha";

type TipoConfiguracion = {
  posiblesConfiguraciones: PosiblesConfiguraciones
  fechaInicio?: string
  fechaFinal?: string
  estaActivo?: boolean
}

type BannerPrincipal = {
  imagenDesktop: string
  imagenMobile: string
  urlRedireccion: string
  tipoConfiguracion: TipoConfiguracion
}

type OfertaContrarreloj = {
  imagenDesktop: string
  imagenMobile: string
  urlRedireccion: string
  textoCountdown: string
  alineacionHorizontalCountdown: PosicionHorizontalContador
  colorPlantillaCountdown: string
  colorTiempoCountdown: string
  fechaInicio: string
  fechaFinal: string
}

type CountdownProps = {
  textoCountdown: string,
  alineacionHorizontalCountdown: string
  colorPlantillaCountdown: string
  colorTiempoCountdown: string
  fechaInicio: string
  fechaFinal: string
  setTiempoFinalizado: React.Dispatch<React.SetStateAction<boolean>>
}

type BannersSliderProps = {
  ofertaContrarreloj: OfertaContrarreloj[]
  banners: BannerPrincipal[]
  children: ReactNode
}

type CountdownTopBannersProps = {
  ofertaContrarreloj: OfertaContrarreloj[]
  children: ReactNode
}

type BannerProps = {
  imagenDesktop: string
  imagenMobile: string
  urlRedireccion: string
}
