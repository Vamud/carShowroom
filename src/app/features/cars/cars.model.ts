export interface FilteredCarsModel {
  carModels: CarModel[]
  pageNumber: number
  totalPages: number
  hasPreviousPage: boolean
  hasNextPage: boolean
  selectedBrandId: string | null
  brandOptions: BrandOption[]
  selectedMinPrice: number | null
  priceOptions: PriceOption[]
  selectedMaxPrice: number | null
  yearOptions: YearOption[]
  selectedMinYear: number | null
  selectedMaxYear: number | null
}

export interface CarNode {
    name: string
    properties: Properties
}

export interface FilterOptions {
  pageNumber: number
  totalPages: number
  hasPreviousPage: boolean
  hasNextPage: boolean
  selectedBrandId: string | null
  brandOptions: BrandOption[]
  selectedMinPrice: number | null
  priceOptions: PriceOption[]
  selectedMaxPrice: number | null
  yearOptions: YearOption[]
  selectedMinYear: number | null
  selectedMaxYear: number | null
}

export interface CarModel {
  id: string
  name: string
  brandId: number
  brand: string
  image?: string
  imageUrl: string
  url: string
  launchDate: string
  description: string
  price: number
  fuel: string
  transmission: string
  location: string
  discount: number
}

export interface BrandOption {
  id?: string
  name: string
}

export interface PriceOption {
  minPrice?: number
  maxPrice?: number
  textMinPrice: string
  textMaxPrice: string
}

export interface YearOption {
  minYear?: number
  maxYear?: number
  minYearText: string
  maxYearText: string
}

export interface Properties {
  brand: string[]
  discount: number
  image: Image[]
  launchDate: string
  description: Description
  price: number
  fuel: string
  transmission: string
  location: string
}

export interface Image {
    url: string
}

export interface Description {
    markup: string
}