const convertToLSlug = (title) => {
  const lslug = title
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
  return lslug;
};
export default convertToLSlug;
