import TicketCounter from "../../components/TicketCounter/TicketCounter";
import { Employee } from "../../data/EmployeeType";
import "./TicketCounterContainer.scss";
import SearchBox from "../../components/SearchBox/SearchBox";
import { FormEvent, useState } from "react";

type TicketCounterContainerProps = {
  profiles: Employee[];
};

const TicketCounterContainer = ({ profiles }: TicketCounterContainerProps) => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleInput = (event: FormEvent<HTMLInputElement>) => {
    const newInput = event.currentTarget.value;
    const capitalisedInput =
      newInput.charAt(0).toUpperCase() + newInput.slice(1);
    setSearchTerm(capitalisedInput);
  };

  const filteredResults = profiles.filter((profile) => {
    const nameMatch = profile.name.includes(searchTerm);
    const roleMatch = profile.role.includes(searchTerm);
    return nameMatch || roleMatch;
  });

  return (
    <div className="ticket-counter__container">
      <div className="ticket-counter__searchbox">
        <SearchBox
          label="Search Employee Name or Role"
          searchTerm={searchTerm}
          handleInput={handleInput}
        />
      </div>
      <div className="ticket-counter__results ">
        {filteredResults.map((profile) => (
          <TicketCounter
            key={profile.id}
            name={profile.name}
            role={profile.role}
          />
        ))}
      </div>
    </div>
  );
};

export default TicketCounterContainer;
