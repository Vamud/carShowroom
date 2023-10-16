export interface BrandNodeInterface {
  items: [
    {
      name: string;
      id: string;
      properties: {
        icon: [
          {
            url: string;
          }
        ];
        foundationDate: string;
        originCountry: string;
        description: {
          markup: string;
        };
      };
    }
  ];
}

export interface Brand {
  name: string;
  id: string;
  properties: {
    icon: {
      url: string;
    };
    foundationDate: string;
    originCountry: string;
    description: {
      markup: string;
    };
  };
}

export interface Properties {
  icon: Image[];
  foundationDate: string;
  originCountry: string;
  description: Description;
}

export interface Image {
  url: string;
}

export interface Description {
  markup: string;
}
