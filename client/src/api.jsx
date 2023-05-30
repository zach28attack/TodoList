export async function deleteAll() {
  try {
    const response = await fetch("http://localhost:3000/collections/delete-all");
    const data = await response.json();
    console.log("successful MSG:", data.message);
  } catch (error) {
    console.error("error caught:", error);
  }
}

export async function fetchAll() {
  try {
    const response = await fetch("http://localhost:3000/collections");
    const data = await response.json();
    console.log("successful MSG:", data.message);
    return data;
  } catch (error) {
    console.error("error caught:", error);
  }
}

export async function deleteAll() {
  try {
    const response = await fetch("http://localhost:3000/collections/delete-all");
    const data = await response.json();
    console.log("successful MSG:", data.message);
  } catch (error) {
    console.error("error caught:", error);
  }
}
export async function deleteById(id) {
  try {
    const response = await fetch(`http://localhost:3000/collections/delete${id}`);
    const data = await response.json();
    console.log("successful MSG:", data.message);
  } catch (error) {
    console.error("error caught:", error);
  }
}
