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

export async function fetchAll() {
  try {
    const response = await fetch("http://localhost:3000/collections", {
      method: "GET",
    });
    const data = await response.json();
    console.log("successful MSG:", data.message);
    return data;
  } catch (error) {
    console.error("error caught:", error);
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
