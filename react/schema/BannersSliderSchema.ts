const BannersSliderSchema = {
  title: "Configuracion Banners Slider",
  description: "Configuracion Individual de Banners en el Slider",
  type: "object",
  properties: {
    ofertaContrarreloj: {
      title: "Banner Ofertas Contrarreloj - Añadir Solo Uno",
      type: "array",
      items: {
        properties: {
          imagenDesktop: {
            title: "Imagen de Banner - Desktop",
            type: "string",
            default: '',
            widget: {
              "ui:widget": "image-uploader"
            }
          },
          imagenMobile: {
            title: "Imagen de Banner - Mobile",
            type: "string",
            default: '',
            widget: {
              "ui:widget": "image-uploader"
            }
          },
          urlRedireccion: {
            title: "Url de Redireccion Banner",
            type: "string",
            default: ''
          },
          textoCountdown: {
            title: "Titulo del Countdown",
            type: "string"
          },
          alineacionHorizontalCountdown: {
            title: "Alineacion Horizontal Countdown",
            type: "string",
            enum: [
              "izquierda",
              "centro",
              "derecha"
            ]
          },
          colorPlantillaCountdown: {
            title: "Color General Plantilla Countdown",
            type: "string",
            widget: {
              "ui:widget": "color"
            }
          },
          colorTiempoCountdown: {
            title: "Color del Tiempo del Countdown",
            type: "string",
            widget: {
              "ui:widget": "color"
            }
          },
          fechaInicio: {
            title: "Fecha y Hora de Inicio Oferta",
            type: "string",
            widget: {
              "ui:widget": "date-time"
            }
          },
          fechaFinal: {
            title: "Fecha y Hora de Final Oferta",
            type: "string",
            widget: {
              "ui:widget": "date-time"
            }
          },
        }
      },
    },
    banners: {
      title: "Lista de Banners",
      type: "array",
      items: {
        properties: {
          imagenDesktop: {
            title: "Imagen de Banner - Desktop",
            type: "string",
            default: '',
            widget: {
              "ui:widget": "image-uploader"
            }
          },
          imagenMobile: {
            title: "Imagen de Banner - Mobile",
            type: "string",
            default: '',
            widget: {
              "ui:widget": "image-uploader"
            }
          },
          urlRedireccion: {
            title: "Url de Redireccion Banner",
            type: "string",
            default: ''
          },
          tipoConfiguracion: {
            title: "Tipo Configuracion",
            type: "object",
            properties: {
              posiblesConfiguraciones: {
                title: "Configuracion a Utilizar",
                type: "string",
                enum: [
                  'Por Fechas',
                  'Activacion Manual'
                ],
                default: "Activacion Manual"
              }
            },
            dependencies: {
              posiblesConfiguraciones: {
                oneOf: [
                  {
                    properties: {
                      posiblesConfiguraciones: {
                        enum: [
                          'Activacion Manual'
                        ]
                      },
                      estaActivo: {
                        title: "¿Esta Activo?",
                        type: "boolean",
                        default: true
                      }
                    }
                  },
                  {
                    properties: {
                      posiblesConfiguraciones: {
                        enum: [
                          'Por Fechas'
                        ]
                      },
                      fechaInicio: {
                        title: "Fecha Inicio Visualizacion Banner",
                        type: "string",
                        default: '',
                        widget: {
                          "ui:widget": "date-time"
                        }
                      },
                      fechaFinal: {
                        title: "Fecha Final Visualizacion Banner",
                        type: "string",
                        default: '',
                        widget: {
                          "ui:widget": "date-time"
                        }
                      }
                    }
                  }
                ]
              }
            }
          }
        }
      }
    }
  }
}

export default BannersSliderSchema;
