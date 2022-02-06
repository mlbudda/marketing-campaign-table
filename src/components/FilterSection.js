import { useSelector, useDispatch } from "react-redux";

// https://reactdatepicker.com/
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const FilterSection = () => {
  const dispatch = useDispatch();

  const startDate = useSelector((state) => state.startDate);
  const setStartDate = (date) => {
    dispatch({ type: "campaign/startDateSet", payload: Date.parse(date) });
  };

  const endDate = useSelector((state) => state.endDate);
  const setEndDate = (date) => {
    dispatch({ type: "campaign/endDateSet", payload: Date.parse(date) });
  };

  const setSearchKeyword = (event) => {
    dispatch({
      type: "campaign/searchKeywordSet",
      payload: event.target.value,
    });
  };

  return (
    <nav className="level">
      {/* left */}
      <div className="level-left">
        <div className="level-item">
          <div className="tag is-white is-large pb-1">
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              selectsStart
              startDate={startDate}
              endDate={endDate}
              placeholderText="Select date from"
            />
          </div>
        </div>
        <div className="level-item">
          <div className="tag is-white is-large pb-1">
            <DatePicker
              selected={endDate}
              onChange={(date) => setEndDate(date)}
              selectsEnd
              startDate={startDate}
              endDate={endDate}
              minDate={startDate}
              placeholderText="Select date to"
            />
          </div>
        </div>
      </div>
      {/* Right */}
      <div className="level-right">
        <div className="level-item">
          <input
            onChange={(event) => setSearchKeyword(event)}
            className="input"
            type="text"
            placeholder="Search..."
          />
        </div>
      </div>
    </nav>
  );
};

export default FilterSection;
