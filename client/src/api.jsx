export async function fetchAll() {
  try {
    const response = await fetch("http://localhost:3000/collections", {
      method: "get",
    });

    const data = await response.json();
    // console.log("successful MSG:", data);
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
    console.log("message:", data.message);
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
    console.log("message:", data.message);
  } catch (error) {
    console.error("error caught:", error);
  }
}

export async function saveCollection(name) {
  try {
    const response = await fetch(`http://localhost:3000/collection`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({name: name}),
    });

    const data = await response.json();
    console.log("message:", data);
    return data.id;
  } catch (error) {
    console.error("error caught:", error);
  }
}
