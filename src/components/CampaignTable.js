import TableHeader from "./TableHeader";
import TableData from "./TableData";
import FilterSection from "./FilterSection";
import { useSelector } from "react-redux";

const CampaignTable = () => {
  const { campaignData, startDate, endDate, searchKeyword, status, userData } =
    useSelector((state) => state);

  return (
    <div>
      <FilterSection />
      <div className="box has-background-white ">
        <table className="table is-hoverable is-fullwidth">
          <thead>
            <TableHeader />
          </thead>
          <TableData
            selectProductFromState={campaignData}
            startDate={startDate}
            endDate={endDate}
            keyword={searchKeyword}
            userStatus={status}
            usersData={userData}
          />
        </table>
      </div>
    </div>
  );
};

export default CampaignTable;
