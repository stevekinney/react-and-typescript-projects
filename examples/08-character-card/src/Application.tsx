import * as React from 'react';

import { CharacterType, fetchCharacter } from './characters';

import { Loading } from './Loading';
import { CharacterInformation } from './CharacterInformation';
import { useEffect } from 'react';

const Application = () => {
  const [character, setCharacter] = React.useState<CharacterType | null>(null);
  const [loading, setLoading] = React.useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      fetchCharacter().then((c) => {
        setCharacter(c);
        setLoading(false);
      });
    }, 4000);
  }, []);
  return (
    <main>
      {loading && <Loading />}
      {character && <CharacterInformation character={character} />}
    </main>
  );
};

export default Application;
