// React Project - Ticket Tracker Extension
// Overview
// Your challenge is now to:

// Refactor your codebase to work with new a new data file provided.
// Update your project to include Routing to 3 different pages with navigation between them.
// The Home page will display all of the team member's names.
// The Tickets page will display the ticket tracker with all the team members.
// The Profile page will be accessible by clicking on a team members ticket on the Tickets page or on there name on the Home page.
// This will display more information about the team member.
// You will need navigation between your pages.


// Plan
// Refactor your data file to use the new data provided
// You may need to update your types as well?
// Add a Routing package to the project
// Create a Home page
// Create a Ticket page
// Create a Profile page
// Create Navigation between them
// Should work on mobile devices
// Data
// Your coach will provide you with the mock data to use.

// GOOD LUCK!







import TicketCounterContainer from './Containers/TicketCounterContainer/TicketCounterContainer';
import team from './data/Employees';



const App = () => {
  return (
    <div>
      <TicketCounterContainer profiles={team}/>
    </div>
  )
}

export default App
