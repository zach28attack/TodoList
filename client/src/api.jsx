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
export async function deleteCollectionById(id) {
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

export async function saveItem(itemName, collectionId) {
  try {
    const response = await fetch(`http://localhost:3000/collection/${collectionId}/item`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({itemName: itemName}),
    });
    const data = await response.json();
    console.log("message:", data);
  } catch (error) {
    console.error("Failed to save item:", error);
  }
}
export async function deleteItemByIndex(index, collectionId) {
  try {
    const response = await fetch(`http://localhost:3000/collection/${collectionId}/item/${index}`, {
      method: "DELETE",
    });
    const data = await response.json();
    console.log("message:", data.message);
  } catch (error) {
    console.error("error caught:", error);
  }
}

export async function saveNewUser(email, password, passwordConfirmation) {
  try {
    const response = await fetch(`http://localhost:3000/user`, {
      method: "POST",
      body: JSON.stringify({email: email, password: password, passwordConfirmation: passwordConfirmation}),
    });
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}
