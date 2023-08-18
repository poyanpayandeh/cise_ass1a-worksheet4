/**
 * Function to sort data based of a sortKey, and whether the sorting should be reversed or not.
 *
 * @param tableData the data to sort. This is an array of objects
 * @sortKey They key to sort by
 * @param reverse True if we shold reverse the order of sorting (sorts ascending is fale, descending if true)
 */

export function sortData<T>(
  tableData: T[],
  sortKey: keyof T,
  reverse: boolean
): T[] {
  const sortedData = tableData.sort((a, b) => {
    return a[sortKey] > b[sortKey] ? 1 : -1;
  });
  if (reverse) {
    return sortedData.reverse();
  }
  return sortedData;
}
