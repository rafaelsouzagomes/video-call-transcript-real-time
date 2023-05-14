export function loadData(key: string) {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : null;
}