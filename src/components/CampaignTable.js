import TableHeader from "./TableHeader";
import TableData from "./TableData";
import FilterSection from "./FilterSection";
import { useSelector, connect } from "react-redux";

const CampaignTable = () => {
  const passProductFromState = useSelector((state) => state.campaignData);
  const dateRange = {
    startDate: useSelector((state) => state.startDate),
    endDate: useSelector((state) => state.endDate),
  };
  const selectSearchKeyword = useSelector((state) => state.searchKeyword);
  const userStatus = useSelector((state) => state.status);
  const usersData = useSelector((state) => state.userData);
  connect()(<TableData />);

  return (
    <div>
      <FilterSection />
      <div className="box has-background-white ">
        <table className="table is-hoverable is-fullwidth">
          <thead>
            <TableHeader />
          </thead>
          <TableData
            selectProductFromState={passProductFromState}
            startDate={dateRange.startDate}
            endDate={dateRange.endDate}
            keyword={selectSearchKeyword}
            userStatus={userStatus}
            usersData={usersData}
          />
        </table>
      </div>
    </div>
  );
};

export default CampaignTable;
