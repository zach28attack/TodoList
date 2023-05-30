export async function fetchAll() {
  try {
    const response = await fetch("http://localhost:3000/collections", {
      method: "get",
    });

    const data = await response.json();
    console.log("successful MSG:", data);
    return data.data;
  } catch (error) {
    console.error("error caught:", error);
    return;
  }
}

export async function deleteAll() {
  try {
    const response = await fetch("http://localhost:3000/collections/delete-all", {
      method: "DELETE",
    });
    const data = await response.json();
    console.log("successful MSG:", data.message);
  } catch (error) {
    console.error("error caught:", error);
  }
}
export async function deleteById(id) {
  try {
    const response = await fetch(`http://localhost:3000/collections/${id}`, {
      method: "DELETE",
    });
    const data = await response.json();
    console.log("successful MSG:", data.message);
  } catch (error) {
    console.error("error caught:", error);
  }
}
