import TableHeader from "./TableHeader";
import TableData from "./TableData";
import FilterSection from "./FilterSection";
import { useSelector } from "react-redux";
// pass products from store as porps to enable testing

const CampaignTable = () => {
  const passProductFromState = useSelector((state) => state.campaignData);
  const dateRange = {
    startDate: useSelector((state) => state.startDate),
    endDate: useSelector((state) => state.endDate),
  };
  const selectSearchKeyword = useSelector((state) => state.searchKeyword);
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
          />
        </table>
      </div>
    </div>
  );
};

export default CampaignTable;
