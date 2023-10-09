export interface BrandNode {
  items: Brand[]
}

export interface Brand {
  name: string
  id: string
  properties: Properties
}

export interface Properties {
  icon: Image[]
  foundationDate: string
  originCountry: string
  description: Description
}

export interface Image {
  url: string
}

export interface Description {
  markup: string
}