export interface SettingsNode {
  properties: SettingsProperties;
}

export interface SettingsProperties {
  defaultImage: Image[];
  siteIcon: Image[];
  languages: string[];
  pageSize: number;
  fuelIcon: Image[];
  transmissionIcon: Image[];
  locationIcon: Image[];
  originCountryIcon: Image[];
  dateIcon: Image[];
}

export interface Image {
  url: string
}