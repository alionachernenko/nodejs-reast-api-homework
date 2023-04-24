const HttpError = require("../helpers/HttpError");
const contacts = require("../models/contacts");
const ctrlWrapper = require("../helpers/ctrlWrapper");

const getAll = async (req, res, next) => {
  const result = await contacts.listContacts();
  res.status(200).json(result);
};

const getById = async (req, res, next) => {
  const { contactId } = req.params;
  const result = await contacts.getContactById(contactId);

  if (!result) {
    throw HttpError(404, "Not Found");
  }

  res.status(200).json(result);
};

const postContact = async (req, res, next) => {
  const result = contacts.addContact(req.body);
  res.status(201).json(result);
};

const deleteContact = async (req, res, next) => {
  const { contactId } = req.params;

  const result = await contacts.removeContact(contactId);
  if (!result) {
    throw HttpError(404, "Not Found");
  }
  res.status(200).json({ message: "contact deleted" });
};

const putContact = async (req, res, next) => {
  const { contactId } = req.params;

  const result = contacts.updateContact(contactId, req.body);
  if (!result) {
    throw HttpError(404, "Not Found");
  }
  res.status(200).json(result);
};

module.exports = {
  getAll: ctrlWrapper(getAll),
  getById: ctrlWrapper(getById),
  postContact: ctrlWrapper(postContact),
  putContact: ctrlWrapper(putContact),
  deleteContact: ctrlWrapper(deleteContact),
};
