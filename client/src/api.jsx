import Cookies from "js-cookie";

export async function fetchAll() {
  try {
    const response = await fetch("http://localhost:3000/collections", {
      method: "GET",
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
  console.log("Cookies:", Cookies.get());
  try {
    const response = await fetch(`http://localhost:3000/collection/${collectionId}/item`, {
      method: "POST",
      credentials: "include",
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
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({email: email, password: password, passwordConfirmation: passwordConfirmation}),
    });
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

export async function loginUser(email, password, token) {
  try {
    const response = await fetch("http://localhost:3000/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({email: email, password: password}),
    });
    const data = await response.json();
    console.log("message", data.message);
    Cookies.set("token", data.token, {expires: 1}); // expires after one day
    Cookies.set("userId", data.id, {expires: 1});
    Cookies.set("CookiesSet", true, {expires: 1});
    console.log("Cookies:", Cookies.get());
    return data.id;
  } catch (error) {
    throw error;
    console.error(error);
  }
}

export async function testAuth() {
  console.log("Cookies:", Cookies.get());

  try {
    fetch("http://localhost:3000/user/logout", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${Cookies.get("token")}`,
      },
    });
  } catch (error) {
    console.error(error);
  }
}
