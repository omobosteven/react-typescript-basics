import React from "react";
import ReactDOM from "react-dom/client";
// import GuestList from "./state/GuestList";
// import UserSearch from "./state/UserSearch";
// import EventComponent from "./events/EventComponent";
import UserSearch from "./refs/UserSearch";

const App = () => {
  return (
	  <div>
		<UserSearch />
	  </div>
  );
};

const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement
);

root.render(
	<React.StrictMode>
	  <App />
	</React.StrictMode>
);
