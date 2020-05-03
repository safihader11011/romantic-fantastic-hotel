// default data for filter elements
export const priceInit = {
  0: '$0',
  100: '$100',
};

export const calenderItem = {
  separator: '-',
  format: 'MM-DD-YYYY',
  locale: 'en',
};

export const getAmenities = {
  id: 1,
  name: 'Amenities',
  identifier: 'amenities',
  options: [
    { label: 'Dine In', value: 'dine-in' },
    { label: 'Wedding', value: 'wedding' },
    { label: 'Sauna', value: 'sauna' },
    { label: 'SPA', value: 'spa' },
    { label: 'GYM', value: 'gym' },
    { label: 'Swimming', value: 'swimming' },
    { label: 'Theatre', value: 'theatre' },
  ],
};

export const getPropertyType = {
  id: 2,
  name: 'Property Type',
  identifier: 'property-type',
  options: [
    { label: 'Villa', value: 'villa' },
    { label: 'Hotel', value: 'hotel' },
    { label: 'Resort', value: 'resort' },
    { label: 'Cottage', value: 'cottage' },
    { label: 'Duplex', value: 'duplex' },
    { label: 'Landscape', value: 'landscape' },
  ],
};
