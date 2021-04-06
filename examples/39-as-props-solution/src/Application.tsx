import * as React from 'react';
import { useState } from 'react';

type TextProps = {
  children: string;
} & React.ComponentPropsWithoutRef<'div'>;

type NoTruncateTextProps = TextProps & { truncate?: false };
type TruncateTextProps = TextProps & { truncate: true; expanded?: boolean };

const exampleText =
  'When I was born, the name for what I was did not exist. They called me nymph, assuming I would be like my mother and aunts and thousand cousins. Least of the lesser goddesses, our powers were so modest they could scarcely ensure our eternities. We spoke to fish and nurtured flowers, coaxed drops from the clouds or salt from the waves. That word, nymph, paced out the length and breadth of our futures.';

const truncateString = (string: string, length = 100) =>
  string.slice(0, length) + '…';

function Text(props: NoTruncateTextProps): JSX.Element;
function Text(props: TruncateTextProps): JSX.Element;
function Text(props: TextProps & { truncate?: boolean; expanded?: boolean }) {
  const { children, truncate, expanded, ...otherProps } = props;
  const shouldTruncate = truncate && !expanded;
  return (
    <div aria-expanded={!!expanded} {...otherProps}>
      {shouldTruncate ? truncateString(children) : children}
    </div>
  );
}

const Application = () => {
  const [expanded, setExpanded] = useState(false);
  return (
    <main>
      <Text truncate expanded={expanded} id="Text" style={{ color: 'red' }}>
        {exampleText}
      </Text>
      <section style={{ marginTop: '1em' }}>
        <button onClick={() => setExpanded(!expanded)}>
          {expanded ? 'Contract' : 'Expand'}
        </button>
      </section>
    </main>
  );
};

export default Application;
