// CommonJS package manager support
if (typeof module !== 'undefined' && typeof exports !== 'undefined' &&
  module.exports === exports) {
  // Export the *name* of this Angular module
  // Sample usage:
  //
  //   import lbServices from './lb-services';
  //   angular.module('app', [lbServices]);
  //
  module.exports = "lbServices";
}

(function(window, angular, undefined) {
  'use strict';

  var urlBase = "/api";
  var authHeader = 'authorization';

  function getHost(url) {
    var m = url.match(/^(?:https?:)?\/\/([^\/]+)/);
    return m ? m[1] : null;
  }

  var urlBaseHost = getHost(urlBase) || location.host;

/**
 * @ngdoc overview
 * @name lbServices
 * @module
 * @description
 *
 * The `lbServices` module provides services for interacting with
 * the models exposed by the LoopBack server via the REST API.
 *
 */
  var module = angular.module("lbServices", ['ngResource']);

/**
 * @ngdoc object
 * @name lbServices.ConferenceRoomUser
 * @header lbServices.ConferenceRoomUser
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `ConferenceRoomUser` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "ConferenceRoomUser",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector',
      function(Resource, LoopBackAuth, $injector) {
        var R = Resource(
        urlBase + "/ConferenceRoomUsers/:id",
          { 'id': '@id' },
          {

            /**
             * @ngdoc method
             * @name lbServices.ConferenceRoomUser#prototype$__findById__accessTokens
             * @methodOf lbServices.ConferenceRoomUser
             *
             * @description
             *
             * Find a related item by id for accessTokens.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `fk` – `{*}` - Foreign key for accessTokens
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ConferenceRoomUser` object.)
             * </em>
             */
            "prototype$__findById__accessTokens": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/ConferenceRoomUsers/:id/accessTokens/:fk",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.ConferenceRoomUser#prototype$__destroyById__accessTokens
             * @methodOf lbServices.ConferenceRoomUser
             *
             * @description
             *
             * Delete a related item by id for accessTokens.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `fk` – `{*}` - Foreign key for accessTokens
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "prototype$__destroyById__accessTokens": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/ConferenceRoomUsers/:id/accessTokens/:fk",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.ConferenceRoomUser#prototype$__updateById__accessTokens
             * @methodOf lbServices.ConferenceRoomUser
             *
             * @description
             *
             * Update a related item by id for accessTokens.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `fk` – `{*}` - Foreign key for accessTokens
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ConferenceRoomUser` object.)
             * </em>
             */
            "prototype$__updateById__accessTokens": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/ConferenceRoomUsers/:id/accessTokens/:fk",
              method: "PUT",
            },

            // INTERNAL. Use ConferenceRoomUser.rooms.findById() instead.
            "prototype$__findById__rooms": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/ConferenceRoomUsers/:id/rooms/:fk",
              method: "GET",
            },

            // INTERNAL. Use ConferenceRoomUser.rooms.destroyById() instead.
            "prototype$__destroyById__rooms": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/ConferenceRoomUsers/:id/rooms/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use ConferenceRoomUser.rooms.updateById() instead.
            "prototype$__updateById__rooms": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/ConferenceRoomUsers/:id/rooms/:fk",
              method: "PUT",
            },

            // INTERNAL. Use ConferenceRoomUser.rooms.link() instead.
            "prototype$__link__rooms": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/ConferenceRoomUsers/:id/rooms/rel/:fk",
              method: "PUT",
            },

            // INTERNAL. Use ConferenceRoomUser.rooms.unlink() instead.
            "prototype$__unlink__rooms": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/ConferenceRoomUsers/:id/rooms/rel/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use ConferenceRoomUser.rooms.exists() instead.
            "prototype$__exists__rooms": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/ConferenceRoomUsers/:id/rooms/rel/:fk",
              method: "HEAD",
            },

            /**
             * @ngdoc method
             * @name lbServices.ConferenceRoomUser#prototype$__get__accessTokens
             * @methodOf lbServices.ConferenceRoomUser
             *
             * @description
             *
             * Queries accessTokens of ConferenceRoomUser.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `filter` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ConferenceRoomUser` object.)
             * </em>
             */
            "prototype$__get__accessTokens": {
              isArray: true,
              url: urlBase + "/ConferenceRoomUsers/:id/accessTokens",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.ConferenceRoomUser#prototype$__create__accessTokens
             * @methodOf lbServices.ConferenceRoomUser
             *
             * @description
             *
             * Creates a new instance in accessTokens of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ConferenceRoomUser` object.)
             * </em>
             */
            "prototype$__create__accessTokens": {
              url: urlBase + "/ConferenceRoomUsers/:id/accessTokens",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.ConferenceRoomUser#prototype$__delete__accessTokens
             * @methodOf lbServices.ConferenceRoomUser
             *
             * @description
             *
             * Deletes all accessTokens of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "prototype$__delete__accessTokens": {
              url: urlBase + "/ConferenceRoomUsers/:id/accessTokens",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.ConferenceRoomUser#prototype$__count__accessTokens
             * @methodOf lbServices.ConferenceRoomUser
             *
             * @description
             *
             * Counts accessTokens of ConferenceRoomUser.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "prototype$__count__accessTokens": {
              url: urlBase + "/ConferenceRoomUsers/:id/accessTokens/count",
              method: "GET",
            },

            // INTERNAL. Use ConferenceRoomUser.rooms() instead.
            "prototype$__get__rooms": {
              isArray: true,
              url: urlBase + "/ConferenceRoomUsers/:id/rooms",
              method: "GET",
            },

            // INTERNAL. Use ConferenceRoomUser.rooms.create() instead.
            "prototype$__create__rooms": {
              url: urlBase + "/ConferenceRoomUsers/:id/rooms",
              method: "POST",
            },

            // INTERNAL. Use ConferenceRoomUser.rooms.destroyAll() instead.
            "prototype$__delete__rooms": {
              url: urlBase + "/ConferenceRoomUsers/:id/rooms",
              method: "DELETE",
            },

            // INTERNAL. Use ConferenceRoomUser.rooms.count() instead.
            "prototype$__count__rooms": {
              url: urlBase + "/ConferenceRoomUsers/:id/rooms/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.ConferenceRoomUser#create
             * @methodOf lbServices.ConferenceRoomUser
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ConferenceRoomUser` object.)
             * </em>
             */
            "create": {
              url: urlBase + "/ConferenceRoomUsers",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.ConferenceRoomUser#createMany
             * @methodOf lbServices.ConferenceRoomUser
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ConferenceRoomUser` object.)
             * </em>
             */
            "createMany": {
              isArray: true,
              url: urlBase + "/ConferenceRoomUsers",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.ConferenceRoomUser#upsert
             * @methodOf lbServices.ConferenceRoomUser
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ConferenceRoomUser` object.)
             * </em>
             */
            "upsert": {
              url: urlBase + "/ConferenceRoomUsers",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name lbServices.ConferenceRoomUser#replaceOrCreate
             * @methodOf lbServices.ConferenceRoomUser
             *
             * @description
             *
             * Replace an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ConferenceRoomUser` object.)
             * </em>
             */
            "replaceOrCreate": {
              url: urlBase + "/ConferenceRoomUsers/replaceOrCreate",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.ConferenceRoomUser#exists
             * @methodOf lbServices.ConferenceRoomUser
             *
             * @description
             *
             * Check whether a model instance exists in the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `exists` – `{boolean=}` -
             */
            "exists": {
              url: urlBase + "/ConferenceRoomUsers/:id/exists",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.ConferenceRoomUser#findById
             * @methodOf lbServices.ConferenceRoomUser
             *
             * @description
             *
             * Find a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `filter` – `{object=}` - Filter defining fields and include
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ConferenceRoomUser` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/ConferenceRoomUsers/:id",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.ConferenceRoomUser#replaceById
             * @methodOf lbServices.ConferenceRoomUser
             *
             * @description
             *
             * Replace attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ConferenceRoomUser` object.)
             * </em>
             */
            "replaceById": {
              url: urlBase + "/ConferenceRoomUsers/:id/replace",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.ConferenceRoomUser#find
             * @methodOf lbServices.ConferenceRoomUser
             *
             * @description
             *
             * Find all instances of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ConferenceRoomUser` object.)
             * </em>
             */
            "find": {
              isArray: true,
              url: urlBase + "/ConferenceRoomUsers",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.ConferenceRoomUser#findOne
             * @methodOf lbServices.ConferenceRoomUser
             *
             * @description
             *
             * Find first instance of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ConferenceRoomUser` object.)
             * </em>
             */
            "findOne": {
              url: urlBase + "/ConferenceRoomUsers/findOne",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.ConferenceRoomUser#updateAll
             * @methodOf lbServices.ConferenceRoomUser
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * The number of instances updated
             */
            "updateAll": {
              url: urlBase + "/ConferenceRoomUsers/update",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.ConferenceRoomUser#deleteById
             * @methodOf lbServices.ConferenceRoomUser
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ConferenceRoomUser` object.)
             * </em>
             */
            "deleteById": {
              url: urlBase + "/ConferenceRoomUsers/:id",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.ConferenceRoomUser#count
             * @methodOf lbServices.ConferenceRoomUser
             *
             * @description
             *
             * Count instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "count": {
              url: urlBase + "/ConferenceRoomUsers/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.ConferenceRoomUser#prototype$updateAttributes
             * @methodOf lbServices.ConferenceRoomUser
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ConferenceRoomUser` object.)
             * </em>
             */
            "prototype$updateAttributes": {
              url: urlBase + "/ConferenceRoomUsers/:id",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name lbServices.ConferenceRoomUser#createChangeStream
             * @methodOf lbServices.ConferenceRoomUser
             *
             * @description
             *
             * Create a change stream.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `changes` – `{ReadableStream=}` -
             */
            "createChangeStream": {
              url: urlBase + "/ConferenceRoomUsers/change-stream",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.ConferenceRoomUser#login
             * @methodOf lbServices.ConferenceRoomUser
             *
             * @description
             *
             * Login a user with username/email and password.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `include` – `{string=}` - Related objects to include in the response. See the description of return value for more details.
             *   Default value: `user`.
             *
             *  - `rememberMe` - `boolean` - Whether the authentication credentials
             *     should be remembered in localStorage across app/browser restarts.
             *     Default: `true`.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * The response body contains properties of the AccessToken created on login.
             * Depending on the value of `include` parameter, the body may contain additional properties:
             *   - `user` - `U+007BUserU+007D` - Data of the currently logged in user. (`include=user`)
             *
             */
            "login": {
              params: {
                include: 'user',
              },
              interceptor: {
                response: function(response) {
                  var accessToken = response.data;
                  LoopBackAuth.setUser(
                    accessToken.id, accessToken.userId, accessToken.user);
                  LoopBackAuth.rememberMe =
                    response.config.params.rememberMe !== false;
                  LoopBackAuth.save();
                  return response.resource;
                },
              },
              url: urlBase + "/ConferenceRoomUsers/login",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.ConferenceRoomUser#logout
             * @methodOf lbServices.ConferenceRoomUser
             *
             * @description
             *
             * Logout a user with access token.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `access_token` – `{string}` - Do not supply this argument, it is automatically extracted from request headers.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "logout": {
              interceptor: {
                response: function(response) {
                  LoopBackAuth.clearUser();
                  LoopBackAuth.clearStorage();
                  return response.resource;
                },
                responseError: function(responseError) {
                  LoopBackAuth.clearUser();
                  LoopBackAuth.clearStorage();
                  return responseError.resource;
                },
              },
              url: urlBase + "/ConferenceRoomUsers/logout",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.ConferenceRoomUser#confirm
             * @methodOf lbServices.ConferenceRoomUser
             *
             * @description
             *
             * Confirm a user registration with email verification token.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `uid` – `{string}` -
             *
             *  - `token` – `{string}` -
             *
             *  - `redirect` – `{string=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "confirm": {
              url: urlBase + "/ConferenceRoomUsers/confirm",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.ConferenceRoomUser#resetPassword
             * @methodOf lbServices.ConferenceRoomUser
             *
             * @description
             *
             * Reset password for a user with email.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "resetPassword": {
              url: urlBase + "/ConferenceRoomUsers/reset",
              method: "POST",
            },

            // INTERNAL. Use Reservation.conferenceRoomUser() instead.
            "::get::Reservation::conferenceRoomUser": {
              url: urlBase + "/Reservations/:id/conferenceRoomUser",
              method: "GET",
            },

            // INTERNAL. Use Room.conferenceRoomUsers.findById() instead.
            "::findById::Room::conferenceRoomUsers": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Rooms/:id/conferenceRoomUsers/:fk",
              method: "GET",
            },

            // INTERNAL. Use Room.conferenceRoomUsers.destroyById() instead.
            "::destroyById::Room::conferenceRoomUsers": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Rooms/:id/conferenceRoomUsers/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Room.conferenceRoomUsers.updateById() instead.
            "::updateById::Room::conferenceRoomUsers": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Rooms/:id/conferenceRoomUsers/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Room.conferenceRoomUsers.link() instead.
            "::link::Room::conferenceRoomUsers": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Rooms/:id/conferenceRoomUsers/rel/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Room.conferenceRoomUsers.unlink() instead.
            "::unlink::Room::conferenceRoomUsers": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Rooms/:id/conferenceRoomUsers/rel/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Room.conferenceRoomUsers.exists() instead.
            "::exists::Room::conferenceRoomUsers": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Rooms/:id/conferenceRoomUsers/rel/:fk",
              method: "HEAD",
            },

            // INTERNAL. Use Room.conferenceRoomUsers() instead.
            "::get::Room::conferenceRoomUsers": {
              isArray: true,
              url: urlBase + "/Rooms/:id/conferenceRoomUsers",
              method: "GET",
            },

            // INTERNAL. Use Room.conferenceRoomUsers.create() instead.
            "::create::Room::conferenceRoomUsers": {
              url: urlBase + "/Rooms/:id/conferenceRoomUsers",
              method: "POST",
            },

            // INTERNAL. Use Room.conferenceRoomUsers.createMany() instead.
            "::createMany::Room::conferenceRoomUsers": {
              isArray: true,
              url: urlBase + "/Rooms/:id/conferenceRoomUsers",
              method: "POST",
            },

            // INTERNAL. Use Room.conferenceRoomUsers.destroyAll() instead.
            "::delete::Room::conferenceRoomUsers": {
              url: urlBase + "/Rooms/:id/conferenceRoomUsers",
              method: "DELETE",
            },

            // INTERNAL. Use Room.conferenceRoomUsers.count() instead.
            "::count::Room::conferenceRoomUsers": {
              url: urlBase + "/Rooms/:id/conferenceRoomUsers/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.ConferenceRoomUser#getCurrent
             * @methodOf lbServices.ConferenceRoomUser
             *
             * @description
             *
             * Get data of the currently logged user. Fail with HTTP result 401
             * when there is no user logged in.
             *
             * @param {function(Object,Object)=} successCb
             *    Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *    `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             */
            'getCurrent': {
              url: urlBase + "/ConferenceRoomUsers" + '/:id',
              method: 'GET',
              params: {
                id: function() {
                  var id = LoopBackAuth.currentUserId;
                  if (id == null) id = '__anonymous__';
                  return id;
                },
              },
              interceptor: {
                response: function(response) {
                  LoopBackAuth.currentUserData = response.data;
                  return response.resource;
                },
              },
              __isGetCurrentUser__: true,
            },
          }
        );



            /**
             * @ngdoc method
             * @name lbServices.ConferenceRoomUser#patchOrCreate
             * @methodOf lbServices.ConferenceRoomUser
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ConferenceRoomUser` object.)
             * </em>
             */
        R["patchOrCreate"] = R["upsert"];

            /**
             * @ngdoc method
             * @name lbServices.ConferenceRoomUser#updateOrCreate
             * @methodOf lbServices.ConferenceRoomUser
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ConferenceRoomUser` object.)
             * </em>
             */
        R["updateOrCreate"] = R["upsert"];

            /**
             * @ngdoc method
             * @name lbServices.ConferenceRoomUser#update
             * @methodOf lbServices.ConferenceRoomUser
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * The number of instances updated
             */
        R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name lbServices.ConferenceRoomUser#destroyById
             * @methodOf lbServices.ConferenceRoomUser
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ConferenceRoomUser` object.)
             * </em>
             */
        R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.ConferenceRoomUser#removeById
             * @methodOf lbServices.ConferenceRoomUser
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ConferenceRoomUser` object.)
             * </em>
             */
        R["removeById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.ConferenceRoomUser#patchAttributes
             * @methodOf lbServices.ConferenceRoomUser
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ConferenceRoomUser` object.)
             * </em>
             */
        R["patchAttributes"] = R["prototype$updateAttributes"];

        /**
         * @ngdoc method
         * @name lbServices.ConferenceRoomUser#getCachedCurrent
         * @methodOf lbServices.ConferenceRoomUser
         *
         * @description
         *
         * Get data of the currently logged user that was returned by the last
         * call to {@link lbServices.ConferenceRoomUser#login} or
         * {@link lbServices.ConferenceRoomUser#getCurrent}. Return null when there
         * is no user logged in or the data of the current user were not fetched
         * yet.
         *
         * @returns {Object} A ConferenceRoomUser instance.
         */
        R.getCachedCurrent = function() {
          var data = LoopBackAuth.currentUserData;
          return data ? new R(data) : null;
        };

        /**
         * @ngdoc method
         * @name lbServices.ConferenceRoomUser#isAuthenticated
         * @methodOf lbServices.ConferenceRoomUser
         *
         * @returns {boolean} True if the current user is authenticated (logged in).
         */
        R.isAuthenticated = function() {
          return this.getCurrentId() != null;
        };

        /**
         * @ngdoc method
         * @name lbServices.ConferenceRoomUser#getCurrentId
         * @methodOf lbServices.ConferenceRoomUser
         *
         * @returns {Object} Id of the currently logged-in user or null.
         */
        R.getCurrentId = function() {
          return LoopBackAuth.currentUserId;
        };

        /**
        * @ngdoc property
        * @name lbServices.ConferenceRoomUser#modelName
        * @propertyOf lbServices.ConferenceRoomUser
        * @description
        * The name of the model represented by this $resource,
        * i.e. `ConferenceRoomUser`.
        */
        R.modelName = "ConferenceRoomUser";

    /**
     * @ngdoc object
     * @name lbServices.ConferenceRoomUser.rooms
     * @header lbServices.ConferenceRoomUser.rooms
     * @object
     * @description
     *
     * The object `ConferenceRoomUser.rooms` groups methods
     * manipulating `Room` instances related to `ConferenceRoomUser`.
     *
     * Call {@link lbServices.ConferenceRoomUser#rooms ConferenceRoomUser.rooms()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.ConferenceRoomUser#rooms
             * @methodOf lbServices.ConferenceRoomUser
             *
             * @description
             *
             * Queries rooms of ConferenceRoomUser.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `filter` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Room` object.)
             * </em>
             */
        R.rooms = function() {
          var TargetResource = $injector.get("Room");
          var action = TargetResource["::get::ConferenceRoomUser::rooms"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.ConferenceRoomUser.rooms#count
             * @methodOf lbServices.ConferenceRoomUser.rooms
             *
             * @description
             *
             * Counts rooms of ConferenceRoomUser.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
        R.rooms.count = function() {
          var TargetResource = $injector.get("Room");
          var action = TargetResource["::count::ConferenceRoomUser::rooms"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.ConferenceRoomUser.rooms#create
             * @methodOf lbServices.ConferenceRoomUser.rooms
             *
             * @description
             *
             * Creates a new instance in rooms of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Room` object.)
             * </em>
             */
        R.rooms.create = function() {
          var TargetResource = $injector.get("Room");
          var action = TargetResource["::create::ConferenceRoomUser::rooms"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.ConferenceRoomUser.rooms#createMany
             * @methodOf lbServices.ConferenceRoomUser.rooms
             *
             * @description
             *
             * Creates a new instance in rooms of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Room` object.)
             * </em>
             */
        R.rooms.createMany = function() {
          var TargetResource = $injector.get("Room");
          var action = TargetResource["::createMany::ConferenceRoomUser::rooms"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.ConferenceRoomUser.rooms#destroyAll
             * @methodOf lbServices.ConferenceRoomUser.rooms
             *
             * @description
             *
             * Deletes all rooms of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.rooms.destroyAll = function() {
          var TargetResource = $injector.get("Room");
          var action = TargetResource["::delete::ConferenceRoomUser::rooms"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.ConferenceRoomUser.rooms#destroyById
             * @methodOf lbServices.ConferenceRoomUser.rooms
             *
             * @description
             *
             * Delete a related item by id for rooms.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `fk` – `{*}` - Foreign key for rooms
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.rooms.destroyById = function() {
          var TargetResource = $injector.get("Room");
          var action = TargetResource["::destroyById::ConferenceRoomUser::rooms"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.ConferenceRoomUser.rooms#exists
             * @methodOf lbServices.ConferenceRoomUser.rooms
             *
             * @description
             *
             * Check the existence of rooms relation to an item by id.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `fk` – `{*}` - Foreign key for rooms
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Room` object.)
             * </em>
             */
        R.rooms.exists = function() {
          var TargetResource = $injector.get("Room");
          var action = TargetResource["::exists::ConferenceRoomUser::rooms"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.ConferenceRoomUser.rooms#findById
             * @methodOf lbServices.ConferenceRoomUser.rooms
             *
             * @description
             *
             * Find a related item by id for rooms.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `fk` – `{*}` - Foreign key for rooms
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Room` object.)
             * </em>
             */
        R.rooms.findById = function() {
          var TargetResource = $injector.get("Room");
          var action = TargetResource["::findById::ConferenceRoomUser::rooms"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.ConferenceRoomUser.rooms#link
             * @methodOf lbServices.ConferenceRoomUser.rooms
             *
             * @description
             *
             * Add a related item by id for rooms.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `fk` – `{*}` - Foreign key for rooms
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Room` object.)
             * </em>
             */
        R.rooms.link = function() {
          var TargetResource = $injector.get("Room");
          var action = TargetResource["::link::ConferenceRoomUser::rooms"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.ConferenceRoomUser.rooms#unlink
             * @methodOf lbServices.ConferenceRoomUser.rooms
             *
             * @description
             *
             * Remove the rooms relation to an item by id.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `fk` – `{*}` - Foreign key for rooms
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.rooms.unlink = function() {
          var TargetResource = $injector.get("Room");
          var action = TargetResource["::unlink::ConferenceRoomUser::rooms"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.ConferenceRoomUser.rooms#updateById
             * @methodOf lbServices.ConferenceRoomUser.rooms
             *
             * @description
             *
             * Update a related item by id for rooms.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `fk` – `{*}` - Foreign key for rooms
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Room` object.)
             * </em>
             */
        R.rooms.updateById = function() {
          var TargetResource = $injector.get("Room");
          var action = TargetResource["::updateById::ConferenceRoomUser::rooms"];
          return action.apply(R, arguments);
        };


        return R;
      }]);

/**
 * @ngdoc object
 * @name lbServices.Reservation
 * @header lbServices.Reservation
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Reservation` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "Reservation",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector',
      function(Resource, LoopBackAuth, $injector) {
        var R = Resource(
        urlBase + "/Reservations/:id",
          { 'id': '@id' },
          {

            // INTERNAL. Use Reservation.conferenceRoomUser() instead.
            "prototype$__get__conferenceRoomUser": {
              url: urlBase + "/Reservations/:id/conferenceRoomUser",
              method: "GET",
            },

            // INTERNAL. Use Reservation.timeslot() instead.
            "prototype$__get__timeslot": {
              url: urlBase + "/Reservations/:id/timeslot",
              method: "GET",
            },

            // INTERNAL. Use Reservation.room() instead.
            "prototype$__get__room": {
              url: urlBase + "/Reservations/:id/room",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Reservation#create
             * @methodOf lbServices.Reservation
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Reservation` object.)
             * </em>
             */
            "create": {
              url: urlBase + "/Reservations",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Reservation#createMany
             * @methodOf lbServices.Reservation
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Reservation` object.)
             * </em>
             */
            "createMany": {
              isArray: true,
              url: urlBase + "/Reservations",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Reservation#upsert
             * @methodOf lbServices.Reservation
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Reservation` object.)
             * </em>
             */
            "upsert": {
              url: urlBase + "/Reservations",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name lbServices.Reservation#replaceOrCreate
             * @methodOf lbServices.Reservation
             *
             * @description
             *
             * Replace an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Reservation` object.)
             * </em>
             */
            "replaceOrCreate": {
              url: urlBase + "/Reservations/replaceOrCreate",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Reservation#exists
             * @methodOf lbServices.Reservation
             *
             * @description
             *
             * Check whether a model instance exists in the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `exists` – `{boolean=}` -
             */
            "exists": {
              url: urlBase + "/Reservations/:id/exists",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Reservation#findById
             * @methodOf lbServices.Reservation
             *
             * @description
             *
             * Find a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `filter` – `{object=}` - Filter defining fields and include
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Reservation` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/Reservations/:id",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Reservation#replaceById
             * @methodOf lbServices.Reservation
             *
             * @description
             *
             * Replace attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Reservation` object.)
             * </em>
             */
            "replaceById": {
              url: urlBase + "/Reservations/:id/replace",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Reservation#find
             * @methodOf lbServices.Reservation
             *
             * @description
             *
             * Find all instances of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Reservation` object.)
             * </em>
             */
            "find": {
              isArray: true,
              url: urlBase + "/Reservations",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Reservation#findOne
             * @methodOf lbServices.Reservation
             *
             * @description
             *
             * Find first instance of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Reservation` object.)
             * </em>
             */
            "findOne": {
              url: urlBase + "/Reservations/findOne",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Reservation#updateAll
             * @methodOf lbServices.Reservation
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * The number of instances updated
             */
            "updateAll": {
              url: urlBase + "/Reservations/update",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Reservation#deleteById
             * @methodOf lbServices.Reservation
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Reservation` object.)
             * </em>
             */
            "deleteById": {
              url: urlBase + "/Reservations/:id",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.Reservation#count
             * @methodOf lbServices.Reservation
             *
             * @description
             *
             * Count instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "count": {
              url: urlBase + "/Reservations/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Reservation#prototype$updateAttributes
             * @methodOf lbServices.Reservation
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Reservation` object.)
             * </em>
             */
            "prototype$updateAttributes": {
              url: urlBase + "/Reservations/:id",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name lbServices.Reservation#createChangeStream
             * @methodOf lbServices.Reservation
             *
             * @description
             *
             * Create a change stream.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `changes` – `{ReadableStream=}` -
             */
            "createChangeStream": {
              url: urlBase + "/Reservations/change-stream",
              method: "POST",
            },

            // INTERNAL. Use Timeslot.bookings.findById() instead.
            "::findById::Timeslot::bookings": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Timeslots/:id/bookings/:fk",
              method: "GET",
            },

            // INTERNAL. Use Timeslot.bookings.destroyById() instead.
            "::destroyById::Timeslot::bookings": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Timeslots/:id/bookings/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Timeslot.bookings.updateById() instead.
            "::updateById::Timeslot::bookings": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Timeslots/:id/bookings/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Timeslot.bookings() instead.
            "::get::Timeslot::bookings": {
              isArray: true,
              url: urlBase + "/Timeslots/:id/bookings",
              method: "GET",
            },

            // INTERNAL. Use Timeslot.bookings.create() instead.
            "::create::Timeslot::bookings": {
              url: urlBase + "/Timeslots/:id/bookings",
              method: "POST",
            },

            // INTERNAL. Use Timeslot.bookings.createMany() instead.
            "::createMany::Timeslot::bookings": {
              isArray: true,
              url: urlBase + "/Timeslots/:id/bookings",
              method: "POST",
            },

            // INTERNAL. Use Timeslot.bookings.destroyAll() instead.
            "::delete::Timeslot::bookings": {
              url: urlBase + "/Timeslots/:id/bookings",
              method: "DELETE",
            },

            // INTERNAL. Use Timeslot.bookings.count() instead.
            "::count::Timeslot::bookings": {
              url: urlBase + "/Timeslots/:id/bookings/count",
              method: "GET",
            },
          }
        );



            /**
             * @ngdoc method
             * @name lbServices.Reservation#patchOrCreate
             * @methodOf lbServices.Reservation
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Reservation` object.)
             * </em>
             */
        R["patchOrCreate"] = R["upsert"];

            /**
             * @ngdoc method
             * @name lbServices.Reservation#updateOrCreate
             * @methodOf lbServices.Reservation
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Reservation` object.)
             * </em>
             */
        R["updateOrCreate"] = R["upsert"];

            /**
             * @ngdoc method
             * @name lbServices.Reservation#update
             * @methodOf lbServices.Reservation
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * The number of instances updated
             */
        R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name lbServices.Reservation#destroyById
             * @methodOf lbServices.Reservation
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Reservation` object.)
             * </em>
             */
        R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.Reservation#removeById
             * @methodOf lbServices.Reservation
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Reservation` object.)
             * </em>
             */
        R["removeById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.Reservation#patchAttributes
             * @methodOf lbServices.Reservation
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Reservation` object.)
             * </em>
             */
        R["patchAttributes"] = R["prototype$updateAttributes"];


        /**
        * @ngdoc property
        * @name lbServices.Reservation#modelName
        * @propertyOf lbServices.Reservation
        * @description
        * The name of the model represented by this $resource,
        * i.e. `Reservation`.
        */
        R.modelName = "Reservation";


            /**
             * @ngdoc method
             * @name lbServices.Reservation#conferenceRoomUser
             * @methodOf lbServices.Reservation
             *
             * @description
             *
             * Fetches belongsTo relation conferenceRoomUser.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `refresh` – `{boolean=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ConferenceRoomUser` object.)
             * </em>
             */
        R.conferenceRoomUser = function() {
          var TargetResource = $injector.get("ConferenceRoomUser");
          var action = TargetResource["::get::Reservation::conferenceRoomUser"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Reservation#timeslot
             * @methodOf lbServices.Reservation
             *
             * @description
             *
             * Fetches belongsTo relation timeslot.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `refresh` – `{boolean=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Timeslot` object.)
             * </em>
             */
        R.timeslot = function() {
          var TargetResource = $injector.get("Timeslot");
          var action = TargetResource["::get::Reservation::timeslot"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Reservation#room
             * @methodOf lbServices.Reservation
             *
             * @description
             *
             * Fetches belongsTo relation room.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `refresh` – `{boolean=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Room` object.)
             * </em>
             */
        R.room = function() {
          var TargetResource = $injector.get("Room");
          var action = TargetResource["::get::Reservation::room"];
          return action.apply(R, arguments);
        };


        return R;
      }]);

/**
 * @ngdoc object
 * @name lbServices.Timeslot
 * @header lbServices.Timeslot
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Timeslot` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "Timeslot",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector',
      function(Resource, LoopBackAuth, $injector) {
        var R = Resource(
        urlBase + "/Timeslots/:id",
          { 'id': '@id' },
          {

            // INTERNAL. Use Timeslot.bookings.findById() instead.
            "prototype$__findById__bookings": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Timeslots/:id/bookings/:fk",
              method: "GET",
            },

            // INTERNAL. Use Timeslot.bookings.destroyById() instead.
            "prototype$__destroyById__bookings": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Timeslots/:id/bookings/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Timeslot.bookings.updateById() instead.
            "prototype$__updateById__bookings": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Timeslots/:id/bookings/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Timeslot.bookings() instead.
            "prototype$__get__bookings": {
              isArray: true,
              url: urlBase + "/Timeslots/:id/bookings",
              method: "GET",
            },

            // INTERNAL. Use Timeslot.bookings.create() instead.
            "prototype$__create__bookings": {
              url: urlBase + "/Timeslots/:id/bookings",
              method: "POST",
            },

            // INTERNAL. Use Timeslot.bookings.destroyAll() instead.
            "prototype$__delete__bookings": {
              url: urlBase + "/Timeslots/:id/bookings",
              method: "DELETE",
            },

            // INTERNAL. Use Timeslot.bookings.count() instead.
            "prototype$__count__bookings": {
              url: urlBase + "/Timeslots/:id/bookings/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Timeslot#create
             * @methodOf lbServices.Timeslot
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Timeslot` object.)
             * </em>
             */
            "create": {
              url: urlBase + "/Timeslots",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Timeslot#createMany
             * @methodOf lbServices.Timeslot
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Timeslot` object.)
             * </em>
             */
            "createMany": {
              isArray: true,
              url: urlBase + "/Timeslots",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Timeslot#upsert
             * @methodOf lbServices.Timeslot
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Timeslot` object.)
             * </em>
             */
            "upsert": {
              url: urlBase + "/Timeslots",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name lbServices.Timeslot#replaceOrCreate
             * @methodOf lbServices.Timeslot
             *
             * @description
             *
             * Replace an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Timeslot` object.)
             * </em>
             */
            "replaceOrCreate": {
              url: urlBase + "/Timeslots/replaceOrCreate",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Timeslot#exists
             * @methodOf lbServices.Timeslot
             *
             * @description
             *
             * Check whether a model instance exists in the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `exists` – `{boolean=}` -
             */
            "exists": {
              url: urlBase + "/Timeslots/:id/exists",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Timeslot#findById
             * @methodOf lbServices.Timeslot
             *
             * @description
             *
             * Find a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `filter` – `{object=}` - Filter defining fields and include
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Timeslot` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/Timeslots/:id",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Timeslot#replaceById
             * @methodOf lbServices.Timeslot
             *
             * @description
             *
             * Replace attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Timeslot` object.)
             * </em>
             */
            "replaceById": {
              url: urlBase + "/Timeslots/:id/replace",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Timeslot#find
             * @methodOf lbServices.Timeslot
             *
             * @description
             *
             * Find all instances of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Timeslot` object.)
             * </em>
             */
            "find": {
              isArray: true,
              url: urlBase + "/Timeslots",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Timeslot#findOne
             * @methodOf lbServices.Timeslot
             *
             * @description
             *
             * Find first instance of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Timeslot` object.)
             * </em>
             */
            "findOne": {
              url: urlBase + "/Timeslots/findOne",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Timeslot#updateAll
             * @methodOf lbServices.Timeslot
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * The number of instances updated
             */
            "updateAll": {
              url: urlBase + "/Timeslots/update",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Timeslot#deleteById
             * @methodOf lbServices.Timeslot
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Timeslot` object.)
             * </em>
             */
            "deleteById": {
              url: urlBase + "/Timeslots/:id",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.Timeslot#count
             * @methodOf lbServices.Timeslot
             *
             * @description
             *
             * Count instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "count": {
              url: urlBase + "/Timeslots/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Timeslot#prototype$updateAttributes
             * @methodOf lbServices.Timeslot
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Timeslot` object.)
             * </em>
             */
            "prototype$updateAttributes": {
              url: urlBase + "/Timeslots/:id",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name lbServices.Timeslot#createChangeStream
             * @methodOf lbServices.Timeslot
             *
             * @description
             *
             * Create a change stream.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `changes` – `{ReadableStream=}` -
             */
            "createChangeStream": {
              url: urlBase + "/Timeslots/change-stream",
              method: "POST",
            },

            // INTERNAL. Use Reservation.timeslot() instead.
            "::get::Reservation::timeslot": {
              url: urlBase + "/Reservations/:id/timeslot",
              method: "GET",
            },
          }
        );



            /**
             * @ngdoc method
             * @name lbServices.Timeslot#patchOrCreate
             * @methodOf lbServices.Timeslot
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Timeslot` object.)
             * </em>
             */
        R["patchOrCreate"] = R["upsert"];

            /**
             * @ngdoc method
             * @name lbServices.Timeslot#updateOrCreate
             * @methodOf lbServices.Timeslot
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Timeslot` object.)
             * </em>
             */
        R["updateOrCreate"] = R["upsert"];

            /**
             * @ngdoc method
             * @name lbServices.Timeslot#update
             * @methodOf lbServices.Timeslot
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * The number of instances updated
             */
        R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name lbServices.Timeslot#destroyById
             * @methodOf lbServices.Timeslot
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Timeslot` object.)
             * </em>
             */
        R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.Timeslot#removeById
             * @methodOf lbServices.Timeslot
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Timeslot` object.)
             * </em>
             */
        R["removeById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.Timeslot#patchAttributes
             * @methodOf lbServices.Timeslot
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Timeslot` object.)
             * </em>
             */
        R["patchAttributes"] = R["prototype$updateAttributes"];


        /**
        * @ngdoc property
        * @name lbServices.Timeslot#modelName
        * @propertyOf lbServices.Timeslot
        * @description
        * The name of the model represented by this $resource,
        * i.e. `Timeslot`.
        */
        R.modelName = "Timeslot";

    /**
     * @ngdoc object
     * @name lbServices.Timeslot.bookings
     * @header lbServices.Timeslot.bookings
     * @object
     * @description
     *
     * The object `Timeslot.bookings` groups methods
     * manipulating `Reservation` instances related to `Timeslot`.
     *
     * Call {@link lbServices.Timeslot#bookings Timeslot.bookings()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.Timeslot#bookings
             * @methodOf lbServices.Timeslot
             *
             * @description
             *
             * Queries bookings of Timeslot.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `filter` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Reservation` object.)
             * </em>
             */
        R.bookings = function() {
          var TargetResource = $injector.get("Reservation");
          var action = TargetResource["::get::Timeslot::bookings"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Timeslot.bookings#count
             * @methodOf lbServices.Timeslot.bookings
             *
             * @description
             *
             * Counts bookings of Timeslot.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
        R.bookings.count = function() {
          var TargetResource = $injector.get("Reservation");
          var action = TargetResource["::count::Timeslot::bookings"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Timeslot.bookings#create
             * @methodOf lbServices.Timeslot.bookings
             *
             * @description
             *
             * Creates a new instance in bookings of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Reservation` object.)
             * </em>
             */
        R.bookings.create = function() {
          var TargetResource = $injector.get("Reservation");
          var action = TargetResource["::create::Timeslot::bookings"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Timeslot.bookings#createMany
             * @methodOf lbServices.Timeslot.bookings
             *
             * @description
             *
             * Creates a new instance in bookings of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Reservation` object.)
             * </em>
             */
        R.bookings.createMany = function() {
          var TargetResource = $injector.get("Reservation");
          var action = TargetResource["::createMany::Timeslot::bookings"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Timeslot.bookings#destroyAll
             * @methodOf lbServices.Timeslot.bookings
             *
             * @description
             *
             * Deletes all bookings of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.bookings.destroyAll = function() {
          var TargetResource = $injector.get("Reservation");
          var action = TargetResource["::delete::Timeslot::bookings"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Timeslot.bookings#destroyById
             * @methodOf lbServices.Timeslot.bookings
             *
             * @description
             *
             * Delete a related item by id for bookings.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for bookings
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.bookings.destroyById = function() {
          var TargetResource = $injector.get("Reservation");
          var action = TargetResource["::destroyById::Timeslot::bookings"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Timeslot.bookings#findById
             * @methodOf lbServices.Timeslot.bookings
             *
             * @description
             *
             * Find a related item by id for bookings.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for bookings
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Reservation` object.)
             * </em>
             */
        R.bookings.findById = function() {
          var TargetResource = $injector.get("Reservation");
          var action = TargetResource["::findById::Timeslot::bookings"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Timeslot.bookings#updateById
             * @methodOf lbServices.Timeslot.bookings
             *
             * @description
             *
             * Update a related item by id for bookings.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for bookings
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Reservation` object.)
             * </em>
             */
        R.bookings.updateById = function() {
          var TargetResource = $injector.get("Reservation");
          var action = TargetResource["::updateById::Timeslot::bookings"];
          return action.apply(R, arguments);
        };


        return R;
      }]);

/**
 * @ngdoc object
 * @name lbServices.Room
 * @header lbServices.Room
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Room` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "Room",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector',
      function(Resource, LoopBackAuth, $injector) {
        var R = Resource(
        urlBase + "/Rooms/:id",
          { 'id': '@id' },
          {

            // INTERNAL. Use Room.conferenceRoomUsers.findById() instead.
            "prototype$__findById__conferenceRoomUsers": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Rooms/:id/conferenceRoomUsers/:fk",
              method: "GET",
            },

            // INTERNAL. Use Room.conferenceRoomUsers.destroyById() instead.
            "prototype$__destroyById__conferenceRoomUsers": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Rooms/:id/conferenceRoomUsers/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Room.conferenceRoomUsers.updateById() instead.
            "prototype$__updateById__conferenceRoomUsers": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Rooms/:id/conferenceRoomUsers/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Room.conferenceRoomUsers.link() instead.
            "prototype$__link__conferenceRoomUsers": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Rooms/:id/conferenceRoomUsers/rel/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Room.conferenceRoomUsers.unlink() instead.
            "prototype$__unlink__conferenceRoomUsers": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Rooms/:id/conferenceRoomUsers/rel/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Room.conferenceRoomUsers.exists() instead.
            "prototype$__exists__conferenceRoomUsers": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Rooms/:id/conferenceRoomUsers/rel/:fk",
              method: "HEAD",
            },

            // INTERNAL. Use Room.conferenceRoomUsers() instead.
            "prototype$__get__conferenceRoomUsers": {
              isArray: true,
              url: urlBase + "/Rooms/:id/conferenceRoomUsers",
              method: "GET",
            },

            // INTERNAL. Use Room.conferenceRoomUsers.create() instead.
            "prototype$__create__conferenceRoomUsers": {
              url: urlBase + "/Rooms/:id/conferenceRoomUsers",
              method: "POST",
            },

            // INTERNAL. Use Room.conferenceRoomUsers.destroyAll() instead.
            "prototype$__delete__conferenceRoomUsers": {
              url: urlBase + "/Rooms/:id/conferenceRoomUsers",
              method: "DELETE",
            },

            // INTERNAL. Use Room.conferenceRoomUsers.count() instead.
            "prototype$__count__conferenceRoomUsers": {
              url: urlBase + "/Rooms/:id/conferenceRoomUsers/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Room#create
             * @methodOf lbServices.Room
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Room` object.)
             * </em>
             */
            "create": {
              url: urlBase + "/Rooms",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Room#createMany
             * @methodOf lbServices.Room
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Room` object.)
             * </em>
             */
            "createMany": {
              isArray: true,
              url: urlBase + "/Rooms",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Room#upsert
             * @methodOf lbServices.Room
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Room` object.)
             * </em>
             */
            "upsert": {
              url: urlBase + "/Rooms",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name lbServices.Room#replaceOrCreate
             * @methodOf lbServices.Room
             *
             * @description
             *
             * Replace an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Room` object.)
             * </em>
             */
            "replaceOrCreate": {
              url: urlBase + "/Rooms/replaceOrCreate",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Room#exists
             * @methodOf lbServices.Room
             *
             * @description
             *
             * Check whether a model instance exists in the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `exists` – `{boolean=}` -
             */
            "exists": {
              url: urlBase + "/Rooms/:id/exists",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Room#findById
             * @methodOf lbServices.Room
             *
             * @description
             *
             * Find a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `filter` – `{object=}` - Filter defining fields and include
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Room` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/Rooms/:id",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Room#replaceById
             * @methodOf lbServices.Room
             *
             * @description
             *
             * Replace attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Room` object.)
             * </em>
             */
            "replaceById": {
              url: urlBase + "/Rooms/:id/replace",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Room#find
             * @methodOf lbServices.Room
             *
             * @description
             *
             * Find all instances of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Room` object.)
             * </em>
             */
            "find": {
              isArray: true,
              url: urlBase + "/Rooms",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Room#findOne
             * @methodOf lbServices.Room
             *
             * @description
             *
             * Find first instance of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Room` object.)
             * </em>
             */
            "findOne": {
              url: urlBase + "/Rooms/findOne",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Room#updateAll
             * @methodOf lbServices.Room
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * The number of instances updated
             */
            "updateAll": {
              url: urlBase + "/Rooms/update",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Room#deleteById
             * @methodOf lbServices.Room
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Room` object.)
             * </em>
             */
            "deleteById": {
              url: urlBase + "/Rooms/:id",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.Room#count
             * @methodOf lbServices.Room
             *
             * @description
             *
             * Count instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "count": {
              url: urlBase + "/Rooms/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Room#prototype$updateAttributes
             * @methodOf lbServices.Room
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Room` object.)
             * </em>
             */
            "prototype$updateAttributes": {
              url: urlBase + "/Rooms/:id",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name lbServices.Room#createChangeStream
             * @methodOf lbServices.Room
             *
             * @description
             *
             * Create a change stream.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `changes` – `{ReadableStream=}` -
             */
            "createChangeStream": {
              url: urlBase + "/Rooms/change-stream",
              method: "POST",
            },

            // INTERNAL. Use ConferenceRoomUser.rooms.findById() instead.
            "::findById::ConferenceRoomUser::rooms": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/ConferenceRoomUsers/:id/rooms/:fk",
              method: "GET",
            },

            // INTERNAL. Use ConferenceRoomUser.rooms.destroyById() instead.
            "::destroyById::ConferenceRoomUser::rooms": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/ConferenceRoomUsers/:id/rooms/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use ConferenceRoomUser.rooms.updateById() instead.
            "::updateById::ConferenceRoomUser::rooms": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/ConferenceRoomUsers/:id/rooms/:fk",
              method: "PUT",
            },

            // INTERNAL. Use ConferenceRoomUser.rooms.link() instead.
            "::link::ConferenceRoomUser::rooms": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/ConferenceRoomUsers/:id/rooms/rel/:fk",
              method: "PUT",
            },

            // INTERNAL. Use ConferenceRoomUser.rooms.unlink() instead.
            "::unlink::ConferenceRoomUser::rooms": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/ConferenceRoomUsers/:id/rooms/rel/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use ConferenceRoomUser.rooms.exists() instead.
            "::exists::ConferenceRoomUser::rooms": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/ConferenceRoomUsers/:id/rooms/rel/:fk",
              method: "HEAD",
            },

            // INTERNAL. Use ConferenceRoomUser.rooms() instead.
            "::get::ConferenceRoomUser::rooms": {
              isArray: true,
              url: urlBase + "/ConferenceRoomUsers/:id/rooms",
              method: "GET",
            },

            // INTERNAL. Use ConferenceRoomUser.rooms.create() instead.
            "::create::ConferenceRoomUser::rooms": {
              url: urlBase + "/ConferenceRoomUsers/:id/rooms",
              method: "POST",
            },

            // INTERNAL. Use ConferenceRoomUser.rooms.createMany() instead.
            "::createMany::ConferenceRoomUser::rooms": {
              isArray: true,
              url: urlBase + "/ConferenceRoomUsers/:id/rooms",
              method: "POST",
            },

            // INTERNAL. Use ConferenceRoomUser.rooms.destroyAll() instead.
            "::delete::ConferenceRoomUser::rooms": {
              url: urlBase + "/ConferenceRoomUsers/:id/rooms",
              method: "DELETE",
            },

            // INTERNAL. Use ConferenceRoomUser.rooms.count() instead.
            "::count::ConferenceRoomUser::rooms": {
              url: urlBase + "/ConferenceRoomUsers/:id/rooms/count",
              method: "GET",
            },

            // INTERNAL. Use Reservation.room() instead.
            "::get::Reservation::room": {
              url: urlBase + "/Reservations/:id/room",
              method: "GET",
            },
          }
        );



            /**
             * @ngdoc method
             * @name lbServices.Room#patchOrCreate
             * @methodOf lbServices.Room
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Room` object.)
             * </em>
             */
        R["patchOrCreate"] = R["upsert"];

            /**
             * @ngdoc method
             * @name lbServices.Room#updateOrCreate
             * @methodOf lbServices.Room
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Room` object.)
             * </em>
             */
        R["updateOrCreate"] = R["upsert"];

            /**
             * @ngdoc method
             * @name lbServices.Room#update
             * @methodOf lbServices.Room
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * The number of instances updated
             */
        R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name lbServices.Room#destroyById
             * @methodOf lbServices.Room
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Room` object.)
             * </em>
             */
        R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.Room#removeById
             * @methodOf lbServices.Room
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Room` object.)
             * </em>
             */
        R["removeById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.Room#patchAttributes
             * @methodOf lbServices.Room
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Room` object.)
             * </em>
             */
        R["patchAttributes"] = R["prototype$updateAttributes"];


        /**
        * @ngdoc property
        * @name lbServices.Room#modelName
        * @propertyOf lbServices.Room
        * @description
        * The name of the model represented by this $resource,
        * i.e. `Room`.
        */
        R.modelName = "Room";

    /**
     * @ngdoc object
     * @name lbServices.Room.conferenceRoomUsers
     * @header lbServices.Room.conferenceRoomUsers
     * @object
     * @description
     *
     * The object `Room.conferenceRoomUsers` groups methods
     * manipulating `ConferenceRoomUser` instances related to `Room`.
     *
     * Call {@link lbServices.Room#conferenceRoomUsers Room.conferenceRoomUsers()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.Room#conferenceRoomUsers
             * @methodOf lbServices.Room
             *
             * @description
             *
             * Queries conferenceRoomUsers of Room.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `filter` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ConferenceRoomUser` object.)
             * </em>
             */
        R.conferenceRoomUsers = function() {
          var TargetResource = $injector.get("ConferenceRoomUser");
          var action = TargetResource["::get::Room::conferenceRoomUsers"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Room.conferenceRoomUsers#count
             * @methodOf lbServices.Room.conferenceRoomUsers
             *
             * @description
             *
             * Counts conferenceRoomUsers of Room.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
        R.conferenceRoomUsers.count = function() {
          var TargetResource = $injector.get("ConferenceRoomUser");
          var action = TargetResource["::count::Room::conferenceRoomUsers"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Room.conferenceRoomUsers#create
             * @methodOf lbServices.Room.conferenceRoomUsers
             *
             * @description
             *
             * Creates a new instance in conferenceRoomUsers of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ConferenceRoomUser` object.)
             * </em>
             */
        R.conferenceRoomUsers.create = function() {
          var TargetResource = $injector.get("ConferenceRoomUser");
          var action = TargetResource["::create::Room::conferenceRoomUsers"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Room.conferenceRoomUsers#createMany
             * @methodOf lbServices.Room.conferenceRoomUsers
             *
             * @description
             *
             * Creates a new instance in conferenceRoomUsers of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ConferenceRoomUser` object.)
             * </em>
             */
        R.conferenceRoomUsers.createMany = function() {
          var TargetResource = $injector.get("ConferenceRoomUser");
          var action = TargetResource["::createMany::Room::conferenceRoomUsers"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Room.conferenceRoomUsers#destroyAll
             * @methodOf lbServices.Room.conferenceRoomUsers
             *
             * @description
             *
             * Deletes all conferenceRoomUsers of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.conferenceRoomUsers.destroyAll = function() {
          var TargetResource = $injector.get("ConferenceRoomUser");
          var action = TargetResource["::delete::Room::conferenceRoomUsers"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Room.conferenceRoomUsers#destroyById
             * @methodOf lbServices.Room.conferenceRoomUsers
             *
             * @description
             *
             * Delete a related item by id for conferenceRoomUsers.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for conferenceRoomUsers
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.conferenceRoomUsers.destroyById = function() {
          var TargetResource = $injector.get("ConferenceRoomUser");
          var action = TargetResource["::destroyById::Room::conferenceRoomUsers"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Room.conferenceRoomUsers#exists
             * @methodOf lbServices.Room.conferenceRoomUsers
             *
             * @description
             *
             * Check the existence of conferenceRoomUsers relation to an item by id.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for conferenceRoomUsers
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ConferenceRoomUser` object.)
             * </em>
             */
        R.conferenceRoomUsers.exists = function() {
          var TargetResource = $injector.get("ConferenceRoomUser");
          var action = TargetResource["::exists::Room::conferenceRoomUsers"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Room.conferenceRoomUsers#findById
             * @methodOf lbServices.Room.conferenceRoomUsers
             *
             * @description
             *
             * Find a related item by id for conferenceRoomUsers.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for conferenceRoomUsers
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ConferenceRoomUser` object.)
             * </em>
             */
        R.conferenceRoomUsers.findById = function() {
          var TargetResource = $injector.get("ConferenceRoomUser");
          var action = TargetResource["::findById::Room::conferenceRoomUsers"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Room.conferenceRoomUsers#link
             * @methodOf lbServices.Room.conferenceRoomUsers
             *
             * @description
             *
             * Add a related item by id for conferenceRoomUsers.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for conferenceRoomUsers
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ConferenceRoomUser` object.)
             * </em>
             */
        R.conferenceRoomUsers.link = function() {
          var TargetResource = $injector.get("ConferenceRoomUser");
          var action = TargetResource["::link::Room::conferenceRoomUsers"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Room.conferenceRoomUsers#unlink
             * @methodOf lbServices.Room.conferenceRoomUsers
             *
             * @description
             *
             * Remove the conferenceRoomUsers relation to an item by id.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for conferenceRoomUsers
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.conferenceRoomUsers.unlink = function() {
          var TargetResource = $injector.get("ConferenceRoomUser");
          var action = TargetResource["::unlink::Room::conferenceRoomUsers"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Room.conferenceRoomUsers#updateById
             * @methodOf lbServices.Room.conferenceRoomUsers
             *
             * @description
             *
             * Update a related item by id for conferenceRoomUsers.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for conferenceRoomUsers
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ConferenceRoomUser` object.)
             * </em>
             */
        R.conferenceRoomUsers.updateById = function() {
          var TargetResource = $injector.get("ConferenceRoomUser");
          var action = TargetResource["::updateById::Room::conferenceRoomUsers"];
          return action.apply(R, arguments);
        };


        return R;
      }]);


  module
  .factory('LoopBackAuth', function() {
    var props = ['accessTokenId', 'currentUserId', 'rememberMe'];
    var propsPrefix = '$LoopBack$';

    function LoopBackAuth() {
      var self = this;
      props.forEach(function(name) {
        self[name] = load(name);
      });
      this.currentUserData = null;
    }

    LoopBackAuth.prototype.save = function() {
      var self = this;
      var storage = this.rememberMe ? localStorage : sessionStorage;
      props.forEach(function(name) {
        save(storage, name, self[name]);
      });
    };

    LoopBackAuth.prototype.setUser = function(accessTokenId, userId, userData) {
      this.accessTokenId = accessTokenId;
      this.currentUserId = userId;
      this.currentUserData = userData;
    };

    LoopBackAuth.prototype.clearUser = function() {
      this.accessTokenId = null;
      this.currentUserId = null;
      this.currentUserData = null;
    };

    LoopBackAuth.prototype.clearStorage = function() {
      props.forEach(function(name) {
        save(sessionStorage, name, null);
        save(localStorage, name, null);
      });
    };

    return new LoopBackAuth();

    // Note: LocalStorage converts the value to string
    // We are using empty string as a marker for null/undefined values.
    function save(storage, name, value) {
      try {
        var key = propsPrefix + name;
        if (value == null) value = '';
        storage[key] = value;
      } catch (err) {
        console.log('Cannot access local/session storage:', err);
      }
    }

    function load(name) {
      var key = propsPrefix + name;
      return localStorage[key] || sessionStorage[key] || null;
    }
  })
  .config(['$httpProvider', function($httpProvider) {
    $httpProvider.interceptors.push('LoopBackAuthRequestInterceptor');
  }])
  .factory('LoopBackAuthRequestInterceptor', ['$q', 'LoopBackAuth',
    function($q, LoopBackAuth) {
      return {
        'request': function(config) {
          // filter out external requests
          var host = getHost(config.url);
          if (host && host !== urlBaseHost) {
            return config;
          }

          if (LoopBackAuth.accessTokenId) {
            config.headers[authHeader] = LoopBackAuth.accessTokenId;
          } else if (config.__isGetCurrentUser__) {
            // Return a stub 401 error for User.getCurrent() when
            // there is no user logged in
            var res = {
              body: { error: { status: 401 }},
              status: 401,
              config: config,
              headers: function() { return undefined; },
            };
            return $q.reject(res);
          }
          return config || $q.when(config);
        },
      };
    }])

  /**
   * @ngdoc object
   * @name lbServices.LoopBackResourceProvider
   * @header lbServices.LoopBackResourceProvider
   * @description
   * Use `LoopBackResourceProvider` to change the global configuration
   * settings used by all models. Note that the provider is available
   * to Configuration Blocks only, see
   * {@link https://docs.angularjs.org/guide/module#module-loading-dependencies Module Loading & Dependencies}
   * for more details.
   *
   * ## Example
   *
   * ```js
   * angular.module('app')
   *  .config(function(LoopBackResourceProvider) {
   *     LoopBackResourceProvider.setAuthHeader('X-Access-Token');
   *  });
   * ```
   */
  .provider('LoopBackResource', function LoopBackResourceProvider() {
    /**
     * @ngdoc method
     * @name lbServices.LoopBackResourceProvider#setAuthHeader
     * @methodOf lbServices.LoopBackResourceProvider
     * @param {string} header The header name to use, e.g. `X-Access-Token`
     * @description
     * Configure the REST transport to use a different header for sending
     * the authentication token. It is sent in the `Authorization` header
     * by default.
     */
    this.setAuthHeader = function(header) {
      authHeader = header;
    };

    /**
     * @ngdoc method
     * @name lbServices.LoopBackResourceProvider#getAuthHeader
     * @methodOf lbServices.LoopBackResourceProvider
     * @description
     * Get the header name that is used for sending the authentication token.
     */
    this.getAuthHeader = function() {
      return authHeader;
    };

    /**
     * @ngdoc method
     * @name lbServices.LoopBackResourceProvider#setUrlBase
     * @methodOf lbServices.LoopBackResourceProvider
     * @param {string} url The URL to use, e.g. `/api` or `//example.com/api`.
     * @description
     * Change the URL of the REST API server. By default, the URL provided
     * to the code generator (`lb-ng` or `grunt-loopback-sdk-angular`) is used.
     */
    this.setUrlBase = function(url) {
      urlBase = url;
      urlBaseHost = getHost(urlBase) || location.host;
    };

    /**
     * @ngdoc method
     * @name lbServices.LoopBackResourceProvider#getUrlBase
     * @methodOf lbServices.LoopBackResourceProvider
     * @description
     * Get the URL of the REST API server. The URL provided
     * to the code generator (`lb-ng` or `grunt-loopback-sdk-angular`) is used.
     */
    this.getUrlBase = function() {
      return urlBase;
    };

    this.$get = ['$resource', function($resource) {
      var LoopBackResource = function(url, params, actions) {
        var resource = $resource(url, params, actions);

        // Angular always calls POST on $save()
        // This hack is based on
        // http://kirkbushell.me/angular-js-using-ng-resource-in-a-more-restful-manner/
        resource.prototype.$save = function(success, error) {
          // Fortunately, LoopBack provides a convenient `upsert` method
          // that exactly fits our needs.
          var result = resource.upsert.call(this, {}, this, success, error);
          return result.$promise || result;
        };
        return resource;
      };

      LoopBackResource.getUrlBase = function() {
        return urlBase;
      };

      LoopBackResource.getAuthHeader = function() {
        return authHeader;
      };

      return LoopBackResource;
    }];
  });
})(window, window.angular);
