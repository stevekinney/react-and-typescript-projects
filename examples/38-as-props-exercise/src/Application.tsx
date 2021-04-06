import * as React from 'react';

type TextProps = {
  children: string;
};

const exampleText =
  'When I was born, the name for what I was did not exist. They called me nymph, assuming I would be like my mother and aunts and thousand cousins. Least of the lesser goddesses, our powers were so modest they could scarcely ensure our eternities. We spoke to fish and nurtured flowers, coaxed drops from the clouds or salt from the waves. That word, nymph, paced out the length and breadth of our futures.';

function Text({ children }: TextProps) {
  return <div>{children}</div>;
}

const Application = () => {
  return (
    <main>
      <Text>{exampleText}</Text>
    </main>
  );
};

export default Application;
