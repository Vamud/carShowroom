export interface SettingsNode {
  properties: Properties
}

export interface Properties {
  defaultImage: Image[]
  siteIcon: Image[]
  languages: string[]
  pageSize: number
  fuelIcon: Image[]
  transmissionIcon: Image[]
  locationIcon: Image[]
  originCountryIcon: Image[]
  dateIcon: Image[]
}

export interface Image {
  url: string
}