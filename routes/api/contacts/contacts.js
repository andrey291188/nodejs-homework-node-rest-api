const express = require('express')
const router = express.Router()

const {contactsCtrl: ctrl} = require("../../../controllers")

const { validateBody, isValidId, authenticate } = require("../../../middlewares")
const { contactsSchema, addSchemaFavorite } = require("../../../schemas")

router.get('/', authenticate, ctrl.getAllCtrl)

router.get('/:contactId', authenticate, isValidId, ctrl.getContactIdCtrl)

router.post('/', authenticate, validateBody(contactsSchema), ctrl.postContactCtrl)

router.put('/:contactId', authenticate, isValidId, validateBody(contactsSchema), ctrl.updateContactCtrl)

router.patch('/:contactId/favorite', authenticate, isValidId, validateBody(addSchemaFavorite), ctrl.updateFavoriteCtrl)

router.delete('/:contactId', authenticate, isValidId, ctrl.deleteContactCtrl)

module.exports = router
