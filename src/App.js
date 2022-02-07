import { React } from "react";
import CampaignTable from "./components/CampaignTable";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const APIerror = useSelector((state) => state.status);
  const APIerrorMsg = useSelector((state) => state.error);
  const msg =
    "Wrong input, data has to be array [{id, name, startDate, endDate, Budget, userId}]";
  const dispatch = useDispatch();
  let globalData = [];

  window.AddCampaigns = (data) => {
    if (Array.isArray(data)) {
      data.forEach((element) => {
        if (
          element.id &&
          element.name &&
          element.startDate &&
          element.endDate &&
          element.Budget &&
          element.userId
        ) {
          globalData.push(element);
          console.log("Added!");
        } else {
          console.log(msg);
        }
      });
      if (globalData.length > 0) {
        dispatch({ type: "campaign/campaignDataAdded", payload: globalData });
        globalData = [];
      } else {
        console.log("Something went wrong..");
      }
    } else {
      console.log(msg);
    }
  };

  const showError =
    APIerror === "failed" ? (
      <p className="box py-0 has-text-danger-dark">
        User API failed to load: {APIerrorMsg}
      </p>
    ) : (
      ""
    );
  return (
    <div className="App">
      <section className="section container is-max-desktop">
        {showError}
        <CampaignTable />
      </section>
    </div>
  );
}

export default App;
