import CardComponent from './Card.component';
import {CardFeature} from './Feature';
import {CardImage} from './Image';
import {CardName} from './Name';

const Card = Object.assign(
  // @component ./Card.component.tsx
  CardComponent,
  {
    // @component ./Feature
    Feature: CardFeature,
    // @component ./Name
    Name: CardName,
    // @component ./Image
    Image: CardImage,
  },
);

export default Card;
