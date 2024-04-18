import { useState } from "react";
import "./TicketCounter.scss";

type TicketCounterProps = {
  name: string;
  role: string;
};

//manage state here
const TicketCounter = ({ name, role }: TicketCounterProps) => {
  const [counter, setCounter] = useState<number>(0);

  const handleIncrement = () => {
    setCounter(counter + 1);
  };

  const handleDecrement = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    } else {
      return;
    }
  };

  return (
    <div className="ticket-counter">
      <div>
        <h2 className="ticket-counter__name">{name}</h2>
        <p className="ticket-counter__role">{role}</p>
        <div className="counter__section">
          <p className="counter__value">Tickets</p>
          <p>{counter}</p>
          <div className="counter__section-buttons">
            <button className="counter__button" onClick={handleDecrement} aria-label="minus button to decrese counter">
              -
            </button>
            <button className="counter__button" onClick={handleIncrement} aria-label="plus button to increase counter">
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketCounter;
