export default async function fetcher(path) {
  const res = await fetch(path);
  const data = await res.json();
  return data;
}
