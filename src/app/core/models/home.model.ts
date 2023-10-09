export interface HomeNode {
  properties: HomeNodeProperties
}

export interface HomeNodeProperties {
  title: string
  image: Image[]
  about: About
  gallery: Image[]
  FooterTitle: string
  address: string
  email: string
  phone: string
}

export interface Image {
  url: string
}
export interface About {
  markup: string
}