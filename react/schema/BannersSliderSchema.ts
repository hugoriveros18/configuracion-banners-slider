const BannersSliderSchema = {
  title: "Configuracion Banners Slider",
  description: "Configuracion Individual de Banners en el Slider",
  type: "object",
  properties: {
    ofertaContrarreloj: {
      title: "Banner Ofertas Contrarreloj",
      type: "array",
      items: {
        properties: {
          imagenDesktop: {
            title: "Banner Desktop - Tablet",
            type: "string",
            default: '',
            widget: {
              "ui:widget": "image-uploader"
            }
          },
          imagenMobile: {
            title: "Banner Mobile",
            type: "string",
            default: '',
            widget: {
              "ui:widget": "image-uploader"
            }
          },
          urlRedireccion: {
            title: "Slug",
            type: "string",
            default: ''
          },
          textoCountdown: {
            title: "Titulo Countdown",
            type: "string"
          },
          colorPlantillaCountdown: {
            title: "Color Plantilla",
            type: "string",
            widget: {
              "ui:widget": "color"
            }
          },
          colorTiempoCountdown: {
            title: "Color Tiempo",
            type: "string",
            widget: {
              "ui:widget": "color"
            }
          },
          fechaInicio: {
            title: "Fecha de Incio",
            type: "string",
            widget: {
              "ui:widget": "date-time"
            }
          },
          fechaFinal: {
            title: "Fecha Final",
            type: "string",
            widget: {
              "ui:widget": "date-time"
            }
          },
          estaActivo: {
            title: "¿Esta Activo?",
            description: "Si las fechas son validas pero este campo esta inactivo no se visualizará el banner.",
            type: "boolean",
            default: true
          }
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
          abrirNuevaPestaña: {
            title: "¿Abrir en nueva pestaña?",
            type: "boolean",
            default: false
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

export { BannersSliderSchema };
