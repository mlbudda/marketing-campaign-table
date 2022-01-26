import { useEffect } from "react";
import SingleEntry from "../SingleEntry/SingleEntry";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "../../app/campaignSlicer";

const TableData = () => {
  const selectProductFromState = useSelector((state) => state.campaignData);

  const dateRange = {
    startDate: useSelector((state) => state.startDate),
    endDate: useSelector((state) => state.endDate),
  };

  const applyDateRangeFilter = selectProductFromState.filter((single) => {
    const startDate = Date.parse(single.startDate);
    const endDate = Date.parse(single.endDate);

    if (endDate > startDate && (!dateRange.startDate || !dateRange.endDate)) {
      return single;
    } else {
      if (startDate >= dateRange.startDate && startDate <= dateRange.endDate) {
        return single;
      } else if (
        endDate <= dateRange.endDate &&
        endDate >= dateRange.startDate
      ) {
        return single;
      }
      return "";
    }
  });

  const selectSearchKeyword = useSelector((state) => state.searchKeyword);
  const applySearchKeyword = applyDateRangeFilter.filter((single) => {
    if (
      single.name.toLowerCase().startsWith(selectSearchKeyword.toLowerCase())
    ) {
      return single;
    }
    return "";
  });

  const dispatch = useDispatch();
  const userStatus = useSelector((state) => state.status);
  useEffect(() => {
    if (userStatus === "idle") {
      dispatch(fetchUsers());
    }
  }, [userStatus, dispatch]);

  const usersData = useSelector((state) => state.userData);

  const mapDataToComponent = applySearchKeyword.map((single, key) => {
    const mapUser = usersData.find((user) => user.id === single.userId);
    const user = mapUser ? mapUser.name : "Unknown User";
    const loading = userStatus === "loading" ? true : false;
    return (
      <SingleEntry
        key={key}
        name={single.name}
        startDate={single.startDate}
        endDate={single.endDate}
        budget={single.Budget}
        user={user}
        userLoading={loading}
      />
    );
  });
  const tableHasData =
    mapDataToComponent.length > 0 ? (
      <tbody>{mapDataToComponent}</tbody>
    ) : (
      <tbody>
        <tr>
          <td>No data</td>
        </tr>
      </tbody>
    );
  return tableHasData;
};

export default TableData;
