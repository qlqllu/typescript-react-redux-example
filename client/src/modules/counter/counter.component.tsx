import * as React from 'react';

import Button from '../../components/button/button.component';

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
    </div>
  );
}
