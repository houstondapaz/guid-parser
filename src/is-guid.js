
const GUIDRegEx = /^(\{{0,1}([0-9a-fA-F]){8}-([0-9a-fA-F]){4}-([0-9a-fA-F]){4}-([0-9a-fA-F]){4}-([0-9a-fA-F]){12}\}{0,1})$/

const isGuid = expression => expression ? GUIDRegEx.test(expression.toString()) : false

module.exports = isGuid
