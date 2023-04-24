const express = require("express");
const {
  getAll,
  getById,
  deleteContact,
  postContact,
  putContact,
} = require("../../controllers/contacts");
const { bodyValidation } = require("../../middlewares/bodyValidation");
const { addSchema, updateSchema } = require("../../schemas/contacts");


const router = express.Router();

router.get("/", getAll);

router.get("/:contactId", getById);

router.post("/", bodyValidation(addSchema), postContact);

router.delete("/:contactId", deleteContact);

router.put("/:contactId", bodyValidation(updateSchema), putContact);

module.exports = router;
