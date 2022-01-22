import {getRandomInteger} from '../utils.js';
import dayjs from 'dayjs';

const getRandomWaypointType = () => {
  const waypointTypes = ['Taxi', 'Bus', 'Train', 'Ship', 'Drive', 'Flight', 'Check-in', 'Sightseeing', 'Restaurant'];
  const randomIndex = getRandomInteger(0, waypointTypes.length - 1);

  return waypointTypes[randomIndex];
};

const getRandomDestinations = () => {
  const destinations = ['Moscow', 'St. Petersburg', 'New York', 'Tokio', 'London', 'Paris'];
  const randomIndex = getRandomInteger(0, destinations.length - 1);

  return destinations[randomIndex];
};

const getRandomDescription = () => {
  const text = [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
    'Cras aliquet varius magna, non porta ligula feugiat eget. ',
    'Fusce tristique felis at fermentum pharetra. ',
    'Aliquam id orci ut lectus varius viverra. ',
    'Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante. ',
    'Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum. ',
    'Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui. ',
    'Sed sed nisi sed augue convallis suscipit in sed felis. ',
    'Aliquam erat volutpat. ',
    'Nunc fermentum tortor ac porta dapibus. ',
    'In rutrum ac purus sit amet tempus. '
  ];

  let description = '';

  for (let i = 0; i < getRandomInteger(1, 5); i++) {
    const randomIndex = getRandomInteger(0, text.length - 1);
    description += text[randomIndex];
  }

  return description;

};

const getRandomPhotos = () =>  `http://picsum.photos/248/152?r=${Math.random()}`;

const getOffersByType = (type) => {
  const getRandomeOffers = () => (
    Array.from({ length: getRandomInteger(1, 3) }, () => ({
      offerName: `Offer №${getRandomInteger(0, 100)}`,
      price: getRandomInteger(0, 100),
    }))
  );

  const offersByType = {
    'Taxi': getRandomeOffers(),
    'Bus': getRandomeOffers(),
    'Train': getRandomeOffers(),
    'Ship': getRandomeOffers(),
    'Drive': getRandomeOffers(),
    'Flight': getRandomeOffers(),
    'Check-in': getRandomeOffers(),
    'Sightseeing': getRandomeOffers(),
    'Restaurant': getRandomeOffers(),
  };

  return offersByType[type];
};

const getRandomeDates = () => {
  const dateInRaw = dayjs();
  const timeGapInHours = getRandomInteger(0, 120);
  dateInRaw.add(timeGapInHours, 'hour');
  const dateOutRaw = dateInRaw.add(timeGapInHours, 'hour');

  const dateIn = {
    month : dayjs(dateInRaw).format('MMM'),
    day : dayjs(dateInRaw).format('DD'),
    hours : dayjs(dateInRaw).format('HH'),
    minutes : dayjs(dateInRaw).format('mm'),
  };
  const dateOut = {
    month : dateIn.month,
    day : dayjs(dateOutRaw).format('DD'),
    hours : dayjs(dateOutRaw).format('HH'),
    minutes : dayjs(dateOutRaw).format('mm'),
  };

  let timeGap = '';

  if (timeGapInHours > 24) {
    timeGap = `${Math.floor(timeGapInHours / 24)}D ${timeGapInHours % 24}H`;
  } else {
    timeGap = `${timeGapInHours}H`;
  }

  return {
    dateIn : dateIn,
    dateOut : dateOut,
    timeGap : timeGap,
  };

};

const getTotalPrice = (offers) => {
  let totalPrice = 0;
  for (const offer of offers) {
    const keys = Object.keys(offer);
    for (const key of keys) {
      if (key === 'price') {
        totalPrice += offer[key];
      }
    }
  }

  return totalPrice;
};

const getRandomeWaypointData = () => {
  const type = getRandomWaypointType();
  const offers = getOffersByType(type);

  return {
    type : type,
    destination : getRandomDestinations(),
    date :getRandomeDates(),
    offers : offers,
    destinationInfo : {
      description: getRandomDescription(),
      photos : getRandomPhotos(),
    },
    isFavorite : Boolean(getRandomInteger(0, 1)),
    totalPrice : getTotalPrice(offers),
  };
};

export {getRandomeWaypointData};
