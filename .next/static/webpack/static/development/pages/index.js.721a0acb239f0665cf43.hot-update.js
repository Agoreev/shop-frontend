webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/Pagination.js":
/*!**********************************!*\
  !*** ./components/Pagination.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_PaginationStyles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/PaginationStyles */ "./components/styles/PaginationStyles.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-apollo */ "./node_modules/react-apollo/react-apollo.browser.umd.js");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\projects\\react\\sick-fits\\frontend\\components\\Pagination.js";

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  query PAGINATION_QUERY {\n    itemsConnection {\n      aggregate {\n        count\n      }\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }





var PAGINATION_QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_2___default()(_templateObject());

var Pagination = function Pagination(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_PaginationStyles__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_3__["Query"], {
    query: PAGINATION_QUERY,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, function (_ref) {
    var data = _ref.data,
        loading = _ref.loading,
        error = _ref.error;
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }, "Hi i'm the pagination");
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Pagination);

/***/ }),

/***/ "./node_modules/deprecated-decorator/bld/index.js":
false,

/***/ "./node_modules/graphql-tools/dist/generate/SchemaError.js":
false,

/***/ "./node_modules/graphql-tools/dist/generate/addResolveFunctionsToSchema.js":
false,

/***/ "./node_modules/graphql-tools/dist/generate/addSchemaLevelResolveFunction.js":
false,

/***/ "./node_modules/graphql-tools/dist/generate/assertResolveFunctionsPresent.js":
false,

/***/ "./node_modules/graphql-tools/dist/generate/attachConnectorsToContext.js":
false,

/***/ "./node_modules/graphql-tools/dist/generate/attachDirectiveResolvers.js":
false,

/***/ "./node_modules/graphql-tools/dist/generate/buildSchemaFromTypeDefinitions.js":
false,

/***/ "./node_modules/graphql-tools/dist/generate/chainResolvers.js":
false,

/***/ "./node_modules/graphql-tools/dist/generate/checkForResolveTypeResolver.js":
false,

/***/ "./node_modules/graphql-tools/dist/generate/concatenateTypeDefs.js":
false,

/***/ "./node_modules/graphql-tools/dist/generate/decorateWithLogger.js":
false,

/***/ "./node_modules/graphql-tools/dist/generate/extendResolversFromInterfaces.js":
false,

/***/ "./node_modules/graphql-tools/dist/generate/extractExtensionDefinitions.js":
false,

/***/ "./node_modules/graphql-tools/dist/generate/forEachField.js":
false,

/***/ "./node_modules/graphql-tools/dist/generate/index.js":
false,

/***/ "./node_modules/graphql-tools/dist/implementsAbstractType.js":
false,

/***/ "./node_modules/graphql-tools/dist/index.js":
false,

/***/ "./node_modules/graphql-tools/dist/isEmptyObject.js":
false,

/***/ "./node_modules/graphql-tools/dist/isSpecifiedScalarType.js":
false,

/***/ "./node_modules/graphql-tools/dist/makeExecutableSchema.js":
false,

/***/ "./node_modules/graphql-tools/dist/mergeDeep.js":
false,

/***/ "./node_modules/graphql-tools/dist/mock.js":
false,

/***/ "./node_modules/graphql-tools/dist/schemaVisitor.js":
false,

/***/ "./node_modules/graphql-tools/dist/stitching/defaultMergedResolver.js":
false,

/***/ "./node_modules/graphql-tools/dist/stitching/delegateToSchema.js":
false,

/***/ "./node_modules/graphql-tools/dist/stitching/errors.js":
false,

/***/ "./node_modules/graphql-tools/dist/stitching/getResponseKeyFromInfo.js":
false,

/***/ "./node_modules/graphql-tools/dist/stitching/index.js":
false,

/***/ "./node_modules/graphql-tools/dist/stitching/introspectSchema.js":
false,

/***/ "./node_modules/graphql-tools/dist/stitching/linkToFetcher.js":
false,

/***/ "./node_modules/graphql-tools/dist/stitching/makeRemoteExecutableSchema.js":
false,

/***/ "./node_modules/graphql-tools/dist/stitching/mapAsyncIterator.js":
false,

/***/ "./node_modules/graphql-tools/dist/stitching/mergeSchemas.js":
false,

/***/ "./node_modules/graphql-tools/dist/stitching/observableToAsyncIterable.js":
false,

/***/ "./node_modules/graphql-tools/dist/stitching/resolveFromParentTypename.js":
false,

/***/ "./node_modules/graphql-tools/dist/stitching/resolvers.js":
false,

/***/ "./node_modules/graphql-tools/dist/stitching/schemaRecreation.js":
false,

/***/ "./node_modules/graphql-tools/dist/stitching/typeFromAST.js":
false,

/***/ "./node_modules/graphql-tools/dist/transforms/AddArgumentsAsVariables.js":
false,

/***/ "./node_modules/graphql-tools/dist/transforms/AddTypenameToAbstract.js":
false,

/***/ "./node_modules/graphql-tools/dist/transforms/CheckResultAndHandleErrors.js":
false,

/***/ "./node_modules/graphql-tools/dist/transforms/ConvertEnumValues.js":
false,

/***/ "./node_modules/graphql-tools/dist/transforms/ExpandAbstractTypes.js":
false,

/***/ "./node_modules/graphql-tools/dist/transforms/ExtractField.js":
false,

/***/ "./node_modules/graphql-tools/dist/transforms/FilterRootFields.js":
false,

/***/ "./node_modules/graphql-tools/dist/transforms/FilterToSchema.js":
false,

/***/ "./node_modules/graphql-tools/dist/transforms/FilterTypes.js":
false,

/***/ "./node_modules/graphql-tools/dist/transforms/RenameRootFields.js":
false,

/***/ "./node_modules/graphql-tools/dist/transforms/RenameTypes.js":
false,

/***/ "./node_modules/graphql-tools/dist/transforms/ReplaceFieldWithFragment.js":
false,

/***/ "./node_modules/graphql-tools/dist/transforms/TransformRootFields.js":
false,

/***/ "./node_modules/graphql-tools/dist/transforms/WrapQuery.js":
false,

/***/ "./node_modules/graphql-tools/dist/transforms/index.js":
false,

/***/ "./node_modules/graphql-tools/dist/transforms/transformSchema.js":
false,

/***/ "./node_modules/graphql-tools/dist/transforms/transforms.js":
false,

/***/ "./node_modules/graphql-tools/dist/transforms/visitSchema.js":
false,

/***/ "./node_modules/graphql/execution/execute.mjs":
false,

/***/ "./node_modules/graphql/execution/index.mjs":
false,

/***/ "./node_modules/graphql/execution/values.mjs":
false,

/***/ "./node_modules/graphql/graphql.mjs":
false,

/***/ "./node_modules/graphql/index.mjs":
false,

/***/ "./node_modules/graphql/jsutils/defineToJSON.mjs":
false,

/***/ "./node_modules/graphql/jsutils/find.mjs":
false,

/***/ "./node_modules/graphql/jsutils/instanceOf.mjs":
false,

/***/ "./node_modules/graphql/jsutils/isFinite.mjs":
false,

/***/ "./node_modules/graphql/jsutils/isInteger.mjs":
false,

/***/ "./node_modules/graphql/jsutils/isInvalid.mjs":
false,

/***/ "./node_modules/graphql/jsutils/isNullish.mjs":
false,

/***/ "./node_modules/graphql/jsutils/isPromise.mjs":
false,

/***/ "./node_modules/graphql/jsutils/keyMap.mjs":
false,

/***/ "./node_modules/graphql/jsutils/keyValMap.mjs":
false,

/***/ "./node_modules/graphql/jsutils/memoize3.mjs":
false,

/***/ "./node_modules/graphql/jsutils/objectValues.mjs":
false,

/***/ "./node_modules/graphql/jsutils/orList.mjs":
false,

/***/ "./node_modules/graphql/jsutils/promiseForObject.mjs":
false,

/***/ "./node_modules/graphql/jsutils/promiseReduce.mjs":
false,

/***/ "./node_modules/graphql/jsutils/quotedOrList.mjs":
false,

/***/ "./node_modules/graphql/jsutils/suggestionList.mjs":
false,

/***/ "./node_modules/graphql/language/index.mjs":
false,

/***/ "./node_modules/graphql/language/predicates.mjs":
false,

/***/ "./node_modules/graphql/subscription/index.mjs":
false,

/***/ "./node_modules/graphql/subscription/mapAsyncIterator.mjs":
false,

/***/ "./node_modules/graphql/subscription/subscribe.mjs":
false,

/***/ "./node_modules/graphql/type/definition.mjs":
false,

/***/ "./node_modules/graphql/type/directives.mjs":
false,

/***/ "./node_modules/graphql/type/index.mjs":
false,

/***/ "./node_modules/graphql/type/introspection.mjs":
false,

/***/ "./node_modules/graphql/type/scalars.mjs":
false,

/***/ "./node_modules/graphql/type/schema.mjs":
false,

/***/ "./node_modules/graphql/type/validate.mjs":
false,

/***/ "./node_modules/graphql/utilities/TypeInfo.mjs":
false,

/***/ "./node_modules/graphql/utilities/assertValidName.mjs":
false,

/***/ "./node_modules/graphql/utilities/astFromValue.mjs":
false,

/***/ "./node_modules/graphql/utilities/buildASTSchema.mjs":
false,

/***/ "./node_modules/graphql/utilities/buildClientSchema.mjs":
false,

/***/ "./node_modules/graphql/utilities/coerceValue.mjs":
false,

/***/ "./node_modules/graphql/utilities/concatAST.mjs":
false,

/***/ "./node_modules/graphql/utilities/extendSchema.mjs":
false,

/***/ "./node_modules/graphql/utilities/findBreakingChanges.mjs":
false,

/***/ "./node_modules/graphql/utilities/findDeprecatedUsages.mjs":
false,

/***/ "./node_modules/graphql/utilities/getOperationAST.mjs":
false,

/***/ "./node_modules/graphql/utilities/getOperationRootType.mjs":
false,

/***/ "./node_modules/graphql/utilities/index.mjs":
false,

/***/ "./node_modules/graphql/utilities/introspectionFromSchema.mjs":
false,

/***/ "./node_modules/graphql/utilities/introspectionQuery.mjs":
false,

/***/ "./node_modules/graphql/utilities/isValidJSValue.mjs":
false,

/***/ "./node_modules/graphql/utilities/isValidLiteralValue.mjs":
false,

/***/ "./node_modules/graphql/utilities/lexicographicSortSchema.mjs":
false,

/***/ "./node_modules/graphql/utilities/schemaPrinter.mjs":
false,

/***/ "./node_modules/graphql/utilities/separateOperations.mjs":
false,

/***/ "./node_modules/graphql/utilities/typeComparators.mjs":
false,

/***/ "./node_modules/graphql/utilities/typeFromAST.mjs":
false,

/***/ "./node_modules/graphql/utilities/valueFromAST.mjs":
false,

/***/ "./node_modules/graphql/utilities/valueFromASTUntyped.mjs":
false,

/***/ "./node_modules/graphql/validation/ValidationContext.mjs":
false,

/***/ "./node_modules/graphql/validation/index.mjs":
false,

/***/ "./node_modules/graphql/validation/rules/ExecutableDefinitions.mjs":
false,

/***/ "./node_modules/graphql/validation/rules/FieldsOnCorrectType.mjs":
false,

/***/ "./node_modules/graphql/validation/rules/FragmentsOnCompositeTypes.mjs":
false,

/***/ "./node_modules/graphql/validation/rules/KnownArgumentNames.mjs":
false,

/***/ "./node_modules/graphql/validation/rules/KnownDirectives.mjs":
false,

/***/ "./node_modules/graphql/validation/rules/KnownFragmentNames.mjs":
false,

/***/ "./node_modules/graphql/validation/rules/KnownTypeNames.mjs":
false,

/***/ "./node_modules/graphql/validation/rules/LoneAnonymousOperation.mjs":
false,

/***/ "./node_modules/graphql/validation/rules/LoneSchemaDefinition.mjs":
false,

/***/ "./node_modules/graphql/validation/rules/NoFragmentCycles.mjs":
false,

/***/ "./node_modules/graphql/validation/rules/NoUndefinedVariables.mjs":
false,

/***/ "./node_modules/graphql/validation/rules/NoUnusedFragments.mjs":
false,

/***/ "./node_modules/graphql/validation/rules/NoUnusedVariables.mjs":
false,

/***/ "./node_modules/graphql/validation/rules/OverlappingFieldsCanBeMerged.mjs":
false,

/***/ "./node_modules/graphql/validation/rules/PossibleFragmentSpreads.mjs":
false,

/***/ "./node_modules/graphql/validation/rules/ProvidedRequiredArguments.mjs":
false,

/***/ "./node_modules/graphql/validation/rules/ScalarLeafs.mjs":
false,

/***/ "./node_modules/graphql/validation/rules/SingleFieldSubscriptions.mjs":
false,

/***/ "./node_modules/graphql/validation/rules/UniqueArgumentNames.mjs":
false,

/***/ "./node_modules/graphql/validation/rules/UniqueDirectivesPerLocation.mjs":
false,

/***/ "./node_modules/graphql/validation/rules/UniqueFragmentNames.mjs":
false,

/***/ "./node_modules/graphql/validation/rules/UniqueInputFieldNames.mjs":
false,

/***/ "./node_modules/graphql/validation/rules/UniqueOperationNames.mjs":
false,

/***/ "./node_modules/graphql/validation/rules/UniqueVariableNames.mjs":
false,

/***/ "./node_modules/graphql/validation/rules/ValuesOfCorrectType.mjs":
false,

/***/ "./node_modules/graphql/validation/rules/VariablesAreInputTypes.mjs":
false,

/***/ "./node_modules/graphql/validation/rules/VariablesInAllowedPosition.mjs":
false,

/***/ "./node_modules/graphql/validation/specifiedRules.mjs":
false,

/***/ "./node_modules/graphql/validation/validate.mjs":
false,

/***/ "./node_modules/iterall/index.mjs":
false,

/***/ "./node_modules/uuid/index.js":
false,

/***/ "./node_modules/uuid/lib/bytesToUuid.js":
false,

/***/ "./node_modules/uuid/lib/rng-browser.js":
false,

/***/ "./node_modules/uuid/v1.js":
false,

/***/ "./node_modules/uuid/v4.js":
false

})
//# sourceMappingURL=index.js.721a0acb239f0665cf43.hot-update.js.map