// Hooks
import { useState } from 'react';

// Components
import { ListCategories, AddCategorie } from './components';

export const GifExpertApp = () => {

  const [ categories, setCategories ] = useState('money');

  const addCategori = (newCategori = "") => setCategories(newCategori);

  return (
    <div>
      <h1>{ categories }</h1>
      <AddCategorie onSubmitCategorie={ addCategori } />
      <ListCategories gifToSerch={ categories } />
    </div>
  );
};