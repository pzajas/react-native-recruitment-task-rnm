import {Character} from '../typescript/characterTypes';

export function getCharacterDetails(character: Character) {
  return {
    statusAndOriginRow: [
      {label: 'Status', value: character.status},
      {label: 'Origin', value: character.origin?.name},
    ],
    speciesAndGenderRow: [
      {label: 'Species', value: character.species},
      {label: 'Gender', value: character.gender},
    ],
  };
}
