import { useEffect } from "react";
import SingleEntry from "./SingleEntry";
import { fetchUsers } from "../app/campaignSlicer";

const TableData = (props, dispatch) => {
  const applyDateRangeFilter = props.selectProductFromState.filter(
    (single) => {
      const startDate = Date.parse(single.startDate);
      const endDate = Date.parse(single.endDate);

      if (endDate > startDate && (!props.startDate || !props.endDate)) {
        return single;
      } else {
        if (startDate >= props.startDate && startDate <= props.endDate) {
          return single;
        } else if (endDate <= props.endDate && endDate >= props.startDate) {
          return single;
        }
        return "";
      }
    }
  );

  const applySearchKeyword = applyDateRangeFilter.filter((single) => {
    if (single.name.toLowerCase().startsWith(props.keyword.toLowerCase())) {
      return single;
    }
    return "";
  });

  useEffect(() => {
    if (props.userStatus === "idle") {
      dispatch(fetchUsers());
    }
  }, [props.userStatus, dispatch]);

  const mapDataToComponent = applySearchKeyword.map((single, key) => {
    const mapUser = props.usersData.find((user) => user.id === single.userId);
    const user = mapUser ? mapUser.name : "Unknown User";
    const loading = props.userStatus === "loading" ? true : false;
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
    !mapDataToComponent.length === 0 ? (
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
