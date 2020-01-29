const addContact = value => {
  console.log("valuefsdfdsfdsfsd", value);
  return {
    type: "ADD_CONTACT",
    payload: value
  };
};

const deleteContact = id => {
  return {
    type: "DELETE_CONTACT",
    payload: id
  };
};

const searchContact = value => {
  return {
    type: "SEARCH_CONTACT",
    payload: value
  };
};
export { addContact, deleteContact, searchContact };
