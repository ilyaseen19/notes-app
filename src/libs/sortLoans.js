const _sortLoans = async (notes) => {
  let lon =
    notes === undefined || notes === null || notes.length === 0
      ? []
      : await notes.map((item) => {
          return { ...item, createdAt: new Date(item.createdAt) };
        });

  const sortedAsc =
    lon.length === 0 ? [] : await lon.sort((a, b) => b.createdAt - a.createdAt);

  return sortedAsc;
};

export default _sortLoans;
