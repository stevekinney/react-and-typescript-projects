import * as React from 'react';
import { CharacterInformation } from './CharacterInformation';
import { CharacterType, fetchCharacter } from './characters';
import { Loading } from './Loading';

type WithCharacterProps = {
  character: CharacterType;
};

function withCharacter<T extends WithCharacterProps>(
  Component: React.ComponentType<T>
) {
  return (props: Omit<T, keyof WithCharacterProps>) => {
    const [character, setCharacter] = React.useState<CharacterType | null>(
      null
    );
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
      fetchCharacter().then((c) => {
        setCharacter(c);
        setLoading(false);
      });
    }, []);

    if (loading) return <Loading />;
    return character && <Component {...(props as T)} character={character} />;
  };
}

const Application = () => {
  const CharacterInformationWithCharacter = withCharacter(CharacterInformation);

  return (
    <main>
      <CharacterInformationWithCharacter />
    </main>
  );
};

export default Application;
