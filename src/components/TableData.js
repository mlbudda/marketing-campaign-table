import { useEffect } from "react";
import SingleEntry from "./SingleEntry";
import { fetchUsers } from "../app/campaignSlicer";
import { connect } from "react-redux";

const TableData = (props) => {
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

  const userStatus = props.userStatus;
  const dispatch = props.dispatch;
  useEffect(() => {
    if (userStatus === "idle") {
      dispatch(fetchUsers());
    }
  }, [userStatus, dispatch]);

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
    mapDataToComponent.length === 0 ? (
      <tbody>
        <tr>
          <td>No data</td>
        </tr>
      </tbody>
    ) : (
      <tbody>{mapDataToComponent}</tbody>
    );
  return tableHasData;
};

export default connect()(TableData);
