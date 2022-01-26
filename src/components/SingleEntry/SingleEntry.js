const SingleEntry = (props) => {
  const todayTimestamp = Date.now();
  const endTimestamp = Date.parse(props.endDate);

  const budgetNumber = (props.budget / 1000).toFixed();

  const coolBudget =
    props.budget > 999 ? `${budgetNumber}K USD` : `${props.budget} USD`;

  const status =
    endTimestamp > todayTimestamp ? (
      <span className="tag is-success is-light">Active</span>
    ) : (
      <span className="tag is-danger is-light">Inactive</span>
    );

  const user = props.userLoading ? (
    <div className="button is-loading is-small"></div>
  ) : (
    props.user
  );

  return (
    <tr>
      <td>{props.name}</td>
      <td>{user}</td>
      <td>{props.startDate}</td>
      <td>{props.endDate}</td>
      <td>{status}</td>
      <td>{coolBudget}</td>
    </tr>
  );
};

export default SingleEntry;
