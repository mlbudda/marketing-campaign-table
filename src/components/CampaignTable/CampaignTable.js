import TableHeader from "../TableHeader/TableHeader";
import TableData from "../TableData/TableData";
import FilterSection from "../FilterSection/FilterSection";

const CampaignTable = () => {
  return (
    <div>
      <FilterSection />
      <div className="box has-background-white ">
        <table className="table is-hoverable is-fullwidth">
          <thead>
            <TableHeader />
          </thead>
          <TableData />
        </table>
      </div>
    </div>
  );
};

export default CampaignTable;
