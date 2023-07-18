const TRANSPORT_EMOJIS = ['🚗', '🚕', '🚙', '🚌', '🚎', '🏎', '🚓', '🚑', '🚒', '🚐', '🛻', '🚚'];
const BALLS_EMOJIS = ['⚽️','🏀','🏈','⚾️','🎾','🏐','🏉'];

interface EmojisListProps {
  emojis: string[];
  ordered?: boolean;  // если знак вопроса б то можно не указывать typeInference 
}

function EmojisList(props: EmojisListProps): JSX.Element {

  // const { emojis,ordered = false } = props;

  const emojis = props.emojis;
  const ordered = props.ordered ?? false;


  const ListComponent = ordered ? 'ol' : 'ul';
  return (
    <ListComponent>
      {emojis.map((el,ind) => (
        <li key={ind}> {el} </li>
      ))}
    </ListComponent>
  );
}
function EmojisTable({ emojis }: { emojis: string[] }): JSX.Element {
  const rows = [];
  for (let i = 0; i < emojis.length; i++) {
    const emoji = emojis[i];
    rows.push(
      <tr key={i}>
        <td> {i + 1} </td>
        <td> {emoji} </td>
        <td>
          {emoji.split('').map((ch) => ch.charCodeAt(0)).join(' + ')}
        </td>
      </tr>
    );
  }
  return (
    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>Emoji</th>
          <th>Char codes</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

export function Arrays(): JSX.Element {
  return (
    <div>
      <p>Balls emojis: {BALLS_EMOJIS}</p>
      <p>TRANSPORT_EMOJIS: {TRANSPORT_EMOJIS.join(' ,')}</p>
      <div style={{display: 'flex', gap: 20}}>
        <EmojisList emojis={BALLS_EMOJIS} />
        <EmojisList emojis={TRANSPORT_EMOJIS} ordered />
        <EmojisTable emojis={BALLS_EMOJIS} />
        <EmojisTable emojis={TRANSPORT_EMOJIS}/>
      </div>
    </div>
  )
}