import * as React from 'react';

import Button from '../../components/button/button.component';

import {ButtonToolbar, Button as Button2} from 'react-bootstrap';

interface ICounterProps extends React.Props<any> {
  counter: number;
  increaseCounter: () => void;
  decreaseCounter: () => void;
};

export default function Counter({
  counter,
  increaseCounter,
  decreaseCounter
}: ICounterProps) {
  return (
    <div className="flex">
      <Button
        testid="counter-decrementButton"
        id="qa-decrement-button"
        className="bg-black col-2"
        onClick={decreaseCounter}>
        -
      </Button>

      <div
        data-testid="counter-result"
        id="qa-counter-div"
        className="flex-auto center h1">
        The current value: {counter}
      </div>

      <Button
        testid="counter-incrementButton"
        id="qa-increment-button"
        className="col-2"
        onClick={increaseCounter}>
        +
      </Button>

      <ButtonToolbar>
        <div>React bootstrap buttons:</div>
        {/* Standard button */}
        <Button2>Default</Button2>

        {/* Provides extra visual weight and identifies the primary action in a set of buttons */}
        <Button2 bsStyle="primary">Primary</Button2>

        {/* Indicates a successful or positive action */}
        <Button2 bsStyle="success">Success</Button2>

        {/* Contextual button for informational alert messages */}
        <Button2 bsStyle="info">Info</Button2>

        {/* Indicates caution should be taken with this action */}
        <Button2 bsStyle="warning">Warning</Button2>

        {/* Indicates a dangerous or potentially negative action */}
        <Button2 bsStyle="danger">Danger</Button2>

        {/* Deemphasize a button by making it look like a link while maintaining button behavior */}
        <Button2 bsStyle="link">Link</Button2>
      </ButtonToolbar>
    </div>
  );
}
