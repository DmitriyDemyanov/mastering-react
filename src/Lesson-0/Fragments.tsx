import { Fragment } from "react";

function Fruits(): JSX.Element {
  return (
    <Fragment>
      <li>apple</li>
      <li>pear</li>
      <li>orange</li>
      <li>banana</li>
      <li>watermelon</li>
    </Fragment>
  );
}

function Vegetables(): JSX.Element {
  return (
    <>
      <li>tomato</li>
      <li>eggplant</li>
      <li>avocado</li>
      <li>pepper</li>
    </>
  )
}

export function Fragments(): JSX.Element {
  return (
    <ul>
      <Fruits />
      <Vegetables/>
    </ul>
  )
}