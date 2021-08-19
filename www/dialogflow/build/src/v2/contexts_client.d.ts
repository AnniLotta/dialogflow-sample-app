/// <reference types="node" />
import * as gax from 'google-gax';
import { Callback, CallOptions, Descriptors, ClientOptions, PaginationCallback } from 'google-gax';
import { Transform } from 'stream';
import * as protos from '../../protos/protos';
/**
 *  Service for managing {@link google.cloud.dialogflow.v2.Context|Contexts}.
 * @class
 * @memberof v2
 */
export declare class ContextsClient {
    private _terminated;
    private _opts;
    private _providedCustomServicePath;
    private _gaxModule;
    private _gaxGrpc;
    private _protos;
    private _defaults;
    auth: gax.GoogleAuth;
    descriptors: Descriptors;
    warn: (code: string, message: string, warnType?: string) => void;
    innerApiCalls: {
        [name: string]: Function;
    };
    pathTemplates: {
        [name: string]: gax.PathTemplate;
    };
    contextsStub?: Promise<{
        [name: string]: Function;
    }>;
    /**
     * Construct an instance of ContextsClient.
     *
     * @param {object} [options] - The configuration object.
     * The options accepted by the constructor are described in detail
     * in [this document](https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#creating-the-client-instance).
     * The common options are:
     * @param {object} [options.credentials] - Credentials object.
     * @param {string} [options.credentials.client_email]
     * @param {string} [options.credentials.private_key]
     * @param {string} [options.email] - Account email address. Required when
     *     using a .pem or .p12 keyFilename.
     * @param {string} [options.keyFilename] - Full path to the a .json, .pem, or
     *     .p12 key downloaded from the Google Developers Console. If you provide
     *     a path to a JSON file, the projectId option below is not necessary.
     *     NOTE: .pem and .p12 require you to specify options.email as well.
     * @param {number} [options.port] - The port on which to connect to
     *     the remote host.
     * @param {string} [options.projectId] - The project ID from the Google
     *     Developer's Console, e.g. 'grape-spaceship-123'. We will also check
     *     the environment variable GCLOUD_PROJECT for your project ID. If your
     *     app is running in an environment which supports
     *     {@link https://developers.google.com/identity/protocols/application-default-credentials Application Default Credentials},
     *     your project ID will be detected automatically.
     * @param {string} [options.apiEndpoint] - The domain name of the
     *     API remote host.
     * @param {gax.ClientConfig} [options.clientConfig] - Client configuration override.
     *     Follows the structure of {@link gapicConfig}.
     * @param {boolean} [options.fallback] - Use HTTP fallback mode.
     *     In fallback mode, a special browser-compatible transport implementation is used
     *     instead of gRPC transport. In browser context (if the `window` object is defined)
     *     the fallback mode is enabled automatically; set `options.fallback` to `false`
     *     if you need to override this behavior.
     */
    constructor(opts?: ClientOptions);
    /**
     * Initialize the client.
     * Performs asynchronous operations (such as authentication) and prepares the client.
     * This function will be called automatically when any class method is called for the
     * first time, but if you need to initialize it before calling an actual method,
     * feel free to call initialize() directly.
     *
     * You can await on this method if you want to make sure the client is initialized.
     *
     * @returns {Promise} A promise that resolves to an authenticated service stub.
     */
    initialize(): Promise<{
        [name: string]: Function;
    }>;
    /**
     * The DNS address for this API service.
     * @returns {string} The DNS address for this service.
     */
    static get servicePath(): string;
    /**
     * The DNS address for this API service - same as servicePath(),
     * exists for compatibility reasons.
     * @returns {string} The DNS address for this service.
     */
    static get apiEndpoint(): string;
    /**
     * The port for this API service.
     * @returns {number} The default port for this service.
     */
    static get port(): number;
    /**
     * The scopes needed to make gRPC calls for every method defined
     * in this service.
     * @returns {string[]} List of default scopes.
     */
    static get scopes(): string[];
    getProjectId(): Promise<string>;
    getProjectId(callback: Callback<string, undefined, undefined>): void;
    getContext(request?: protos.google.cloud.dialogflow.v2.IGetContextRequest, options?: CallOptions): Promise<[protos.google.cloud.dialogflow.v2.IContext, protos.google.cloud.dialogflow.v2.IGetContextRequest | undefined, {} | undefined]>;
    getContext(request: protos.google.cloud.dialogflow.v2.IGetContextRequest, options: CallOptions, callback: Callback<protos.google.cloud.dialogflow.v2.IContext, protos.google.cloud.dialogflow.v2.IGetContextRequest | null | undefined, {} | null | undefined>): void;
    getContext(request: protos.google.cloud.dialogflow.v2.IGetContextRequest, callback: Callback<protos.google.cloud.dialogflow.v2.IContext, protos.google.cloud.dialogflow.v2.IGetContextRequest | null | undefined, {} | null | undefined>): void;
    createContext(request?: protos.google.cloud.dialogflow.v2.ICreateContextRequest, options?: CallOptions): Promise<[protos.google.cloud.dialogflow.v2.IContext, protos.google.cloud.dialogflow.v2.ICreateContextRequest | undefined, {} | undefined]>;
    createContext(request: protos.google.cloud.dialogflow.v2.ICreateContextRequest, options: CallOptions, callback: Callback<protos.google.cloud.dialogflow.v2.IContext, protos.google.cloud.dialogflow.v2.ICreateContextRequest | null | undefined, {} | null | undefined>): void;
    createContext(request: protos.google.cloud.dialogflow.v2.ICreateContextRequest, callback: Callback<protos.google.cloud.dialogflow.v2.IContext, protos.google.cloud.dialogflow.v2.ICreateContextRequest | null | undefined, {} | null | undefined>): void;
    updateContext(request?: protos.google.cloud.dialogflow.v2.IUpdateContextRequest, options?: CallOptions): Promise<[protos.google.cloud.dialogflow.v2.IContext, protos.google.cloud.dialogflow.v2.IUpdateContextRequest | undefined, {} | undefined]>;
    updateContext(request: protos.google.cloud.dialogflow.v2.IUpdateContextRequest, options: CallOptions, callback: Callback<protos.google.cloud.dialogflow.v2.IContext, protos.google.cloud.dialogflow.v2.IUpdateContextRequest | null | undefined, {} | null | undefined>): void;
    updateContext(request: protos.google.cloud.dialogflow.v2.IUpdateContextRequest, callback: Callback<protos.google.cloud.dialogflow.v2.IContext, protos.google.cloud.dialogflow.v2.IUpdateContextRequest | null | undefined, {} | null | undefined>): void;
    deleteContext(request?: protos.google.cloud.dialogflow.v2.IDeleteContextRequest, options?: CallOptions): Promise<[protos.google.protobuf.IEmpty, protos.google.cloud.dialogflow.v2.IDeleteContextRequest | undefined, {} | undefined]>;
    deleteContext(request: protos.google.cloud.dialogflow.v2.IDeleteContextRequest, options: CallOptions, callback: Callback<protos.google.protobuf.IEmpty, protos.google.cloud.dialogflow.v2.IDeleteContextRequest | null | undefined, {} | null | undefined>): void;
    deleteContext(request: protos.google.cloud.dialogflow.v2.IDeleteContextRequest, callback: Callback<protos.google.protobuf.IEmpty, protos.google.cloud.dialogflow.v2.IDeleteContextRequest | null | undefined, {} | null | undefined>): void;
    deleteAllContexts(request?: protos.google.cloud.dialogflow.v2.IDeleteAllContextsRequest, options?: CallOptions): Promise<[protos.google.protobuf.IEmpty, protos.google.cloud.dialogflow.v2.IDeleteAllContextsRequest | undefined, {} | undefined]>;
    deleteAllContexts(request: protos.google.cloud.dialogflow.v2.IDeleteAllContextsRequest, options: CallOptions, callback: Callback<protos.google.protobuf.IEmpty, protos.google.cloud.dialogflow.v2.IDeleteAllContextsRequest | null | undefined, {} | null | undefined>): void;
    deleteAllContexts(request: protos.google.cloud.dialogflow.v2.IDeleteAllContextsRequest, callback: Callback<protos.google.protobuf.IEmpty, protos.google.cloud.dialogflow.v2.IDeleteAllContextsRequest | null | undefined, {} | null | undefined>): void;
    listContexts(request?: protos.google.cloud.dialogflow.v2.IListContextsRequest, options?: CallOptions): Promise<[protos.google.cloud.dialogflow.v2.IContext[], protos.google.cloud.dialogflow.v2.IListContextsRequest | null, protos.google.cloud.dialogflow.v2.IListContextsResponse]>;
    listContexts(request: protos.google.cloud.dialogflow.v2.IListContextsRequest, options: CallOptions, callback: PaginationCallback<protos.google.cloud.dialogflow.v2.IListContextsRequest, protos.google.cloud.dialogflow.v2.IListContextsResponse | null | undefined, protos.google.cloud.dialogflow.v2.IContext>): void;
    listContexts(request: protos.google.cloud.dialogflow.v2.IListContextsRequest, callback: PaginationCallback<protos.google.cloud.dialogflow.v2.IListContextsRequest, protos.google.cloud.dialogflow.v2.IListContextsResponse | null | undefined, protos.google.cloud.dialogflow.v2.IContext>): void;
    /**
     * Equivalent to `method.name.toCamelCase()`, but returns a NodeJS Stream object.
     * @param {Object} request
     *   The request object that will be sent.
     * @param {string} request.parent
     *   Required. The session to list all contexts from.
     *   Format: `projects/<Project ID>/agent/sessions/<Session ID>` or
     *   `projects/<Project ID>/agent/environments/<Environment ID>/users/<User
     *   ID>/sessions/<Session ID>`.
     *   If `Environment ID` is not specified, we assume default 'draft'
     *   environment. If `User ID` is not specified, we assume default '-' user.
     * @param {number} [request.pageSize]
     *   Optional. The maximum number of items to return in a single page. By
     *   default 100 and at most 1000.
     * @param {string} [request.pageToken]
     *   Optional. The next_page_token value returned from a previous list request.
     * @param {object} [options]
     *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
     * @returns {Stream}
     *   An object stream which emits an object representing [Context]{@link google.cloud.dialogflow.v2.Context} on 'data' event.
     *   The client library will perform auto-pagination by default: it will call the API as many
     *   times as needed. Note that it can affect your quota.
     *   We recommend using `listContextsAsync()`
     *   method described below for async iteration which you can stop as needed.
     *   Please see the
     *   [documentation](https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#auto-pagination)
     *   for more details and examples.
     */
    listContextsStream(request?: protos.google.cloud.dialogflow.v2.IListContextsRequest, options?: CallOptions): Transform;
    /**
     * Equivalent to `listContexts`, but returns an iterable object.
     *
     * `for`-`await`-`of` syntax is used with the iterable to get response elements on-demand.
     * @param {Object} request
     *   The request object that will be sent.
     * @param {string} request.parent
     *   Required. The session to list all contexts from.
     *   Format: `projects/<Project ID>/agent/sessions/<Session ID>` or
     *   `projects/<Project ID>/agent/environments/<Environment ID>/users/<User
     *   ID>/sessions/<Session ID>`.
     *   If `Environment ID` is not specified, we assume default 'draft'
     *   environment. If `User ID` is not specified, we assume default '-' user.
     * @param {number} [request.pageSize]
     *   Optional. The maximum number of items to return in a single page. By
     *   default 100 and at most 1000.
     * @param {string} [request.pageToken]
     *   Optional. The next_page_token value returned from a previous list request.
     * @param {object} [options]
     *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
     * @returns {Object}
     *   An iterable Object that allows [async iteration](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols).
     *   When you iterate the returned iterable, each element will be an object representing
     *   [Context]{@link google.cloud.dialogflow.v2.Context}. The API will be called under the hood as needed, once per the page,
     *   so you can stop the iteration when you don't need more results.
     *   Please see the
     *   [documentation](https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#auto-pagination)
     *   for more details and examples.
     * @example
     * const iterable = client.listContextsAsync(request);
     * for await (const response of iterable) {
     *   // process response
     * }
     */
    listContextsAsync(request?: protos.google.cloud.dialogflow.v2.IListContextsRequest, options?: CallOptions): AsyncIterable<protos.google.cloud.dialogflow.v2.IContext>;
    /**
     * Return a fully-qualified project resource name string.
     *
     * @param {string} project
     * @returns {string} Resource name string.
     */
    projectPath(project: string): string;
    /**
     * Parse the project from Project resource.
     *
     * @param {string} projectName
     *   A fully-qualified path representing Project resource.
     * @returns {string} A string representing the project.
     */
    matchProjectFromProjectName(projectName: string): string | number;
    /**
     * Return a fully-qualified projectAgent resource name string.
     *
     * @param {string} project
     * @returns {string} Resource name string.
     */
    projectAgentPath(project: string): string;
    /**
     * Parse the project from ProjectAgent resource.
     *
     * @param {string} projectAgentName
     *   A fully-qualified path representing project_agent resource.
     * @returns {string} A string representing the project.
     */
    matchProjectFromProjectAgentName(projectAgentName: string): string | number;
    /**
     * Return a fully-qualified projectAgentEntityType resource name string.
     *
     * @param {string} project
     * @param {string} entity_type
     * @returns {string} Resource name string.
     */
    projectAgentEntityTypePath(project: string, entityType: string): string;
    /**
     * Parse the project from ProjectAgentEntityType resource.
     *
     * @param {string} projectAgentEntityTypeName
     *   A fully-qualified path representing project_agent_entity_type resource.
     * @returns {string} A string representing the project.
     */
    matchProjectFromProjectAgentEntityTypeName(projectAgentEntityTypeName: string): string | number;
    /**
     * Parse the entity_type from ProjectAgentEntityType resource.
     *
     * @param {string} projectAgentEntityTypeName
     *   A fully-qualified path representing project_agent_entity_type resource.
     * @returns {string} A string representing the entity_type.
     */
    matchEntityTypeFromProjectAgentEntityTypeName(projectAgentEntityTypeName: string): string | number;
    /**
     * Return a fully-qualified projectAgentEnvironment resource name string.
     *
     * @param {string} project
     * @param {string} environment
     * @returns {string} Resource name string.
     */
    projectAgentEnvironmentPath(project: string, environment: string): string;
    /**
     * Parse the project from ProjectAgentEnvironment resource.
     *
     * @param {string} projectAgentEnvironmentName
     *   A fully-qualified path representing project_agent_environment resource.
     * @returns {string} A string representing the project.
     */
    matchProjectFromProjectAgentEnvironmentName(projectAgentEnvironmentName: string): string | number;
    /**
     * Parse the environment from ProjectAgentEnvironment resource.
     *
     * @param {string} projectAgentEnvironmentName
     *   A fully-qualified path representing project_agent_environment resource.
     * @returns {string} A string representing the environment.
     */
    matchEnvironmentFromProjectAgentEnvironmentName(projectAgentEnvironmentName: string): string | number;
    /**
     * Return a fully-qualified projectAgentEnvironmentUserSessionContext resource name string.
     *
     * @param {string} project
     * @param {string} environment
     * @param {string} user
     * @param {string} session
     * @param {string} context
     * @returns {string} Resource name string.
     */
    projectAgentEnvironmentUserSessionContextPath(project: string, environment: string, user: string, session: string, context: string): string;
    /**
     * Parse the project from ProjectAgentEnvironmentUserSessionContext resource.
     *
     * @param {string} projectAgentEnvironmentUserSessionContextName
     *   A fully-qualified path representing project_agent_environment_user_session_context resource.
     * @returns {string} A string representing the project.
     */
    matchProjectFromProjectAgentEnvironmentUserSessionContextName(projectAgentEnvironmentUserSessionContextName: string): string | number;
    /**
     * Parse the environment from ProjectAgentEnvironmentUserSessionContext resource.
     *
     * @param {string} projectAgentEnvironmentUserSessionContextName
     *   A fully-qualified path representing project_agent_environment_user_session_context resource.
     * @returns {string} A string representing the environment.
     */
    matchEnvironmentFromProjectAgentEnvironmentUserSessionContextName(projectAgentEnvironmentUserSessionContextName: string): string | number;
    /**
     * Parse the user from ProjectAgentEnvironmentUserSessionContext resource.
     *
     * @param {string} projectAgentEnvironmentUserSessionContextName
     *   A fully-qualified path representing project_agent_environment_user_session_context resource.
     * @returns {string} A string representing the user.
     */
    matchUserFromProjectAgentEnvironmentUserSessionContextName(projectAgentEnvironmentUserSessionContextName: string): string | number;
    /**
     * Parse the session from ProjectAgentEnvironmentUserSessionContext resource.
     *
     * @param {string} projectAgentEnvironmentUserSessionContextName
     *   A fully-qualified path representing project_agent_environment_user_session_context resource.
     * @returns {string} A string representing the session.
     */
    matchSessionFromProjectAgentEnvironmentUserSessionContextName(projectAgentEnvironmentUserSessionContextName: string): string | number;
    /**
     * Parse the context from ProjectAgentEnvironmentUserSessionContext resource.
     *
     * @param {string} projectAgentEnvironmentUserSessionContextName
     *   A fully-qualified path representing project_agent_environment_user_session_context resource.
     * @returns {string} A string representing the context.
     */
    matchContextFromProjectAgentEnvironmentUserSessionContextName(projectAgentEnvironmentUserSessionContextName: string): string | number;
    /**
     * Return a fully-qualified projectAgentEnvironmentUserSessionEntityType resource name string.
     *
     * @param {string} project
     * @param {string} environment
     * @param {string} user
     * @param {string} session
     * @param {string} entity_type
     * @returns {string} Resource name string.
     */
    projectAgentEnvironmentUserSessionEntityTypePath(project: string, environment: string, user: string, session: string, entityType: string): string;
    /**
     * Parse the project from ProjectAgentEnvironmentUserSessionEntityType resource.
     *
     * @param {string} projectAgentEnvironmentUserSessionEntityTypeName
     *   A fully-qualified path representing project_agent_environment_user_session_entity_type resource.
     * @returns {string} A string representing the project.
     */
    matchProjectFromProjectAgentEnvironmentUserSessionEntityTypeName(projectAgentEnvironmentUserSessionEntityTypeName: string): string | number;
    /**
     * Parse the environment from ProjectAgentEnvironmentUserSessionEntityType resource.
     *
     * @param {string} projectAgentEnvironmentUserSessionEntityTypeName
     *   A fully-qualified path representing project_agent_environment_user_session_entity_type resource.
     * @returns {string} A string representing the environment.
     */
    matchEnvironmentFromProjectAgentEnvironmentUserSessionEntityTypeName(projectAgentEnvironmentUserSessionEntityTypeName: string): string | number;
    /**
     * Parse the user from ProjectAgentEnvironmentUserSessionEntityType resource.
     *
     * @param {string} projectAgentEnvironmentUserSessionEntityTypeName
     *   A fully-qualified path representing project_agent_environment_user_session_entity_type resource.
     * @returns {string} A string representing the user.
     */
    matchUserFromProjectAgentEnvironmentUserSessionEntityTypeName(projectAgentEnvironmentUserSessionEntityTypeName: string): string | number;
    /**
     * Parse the session from ProjectAgentEnvironmentUserSessionEntityType resource.
     *
     * @param {string} projectAgentEnvironmentUserSessionEntityTypeName
     *   A fully-qualified path representing project_agent_environment_user_session_entity_type resource.
     * @returns {string} A string representing the session.
     */
    matchSessionFromProjectAgentEnvironmentUserSessionEntityTypeName(projectAgentEnvironmentUserSessionEntityTypeName: string): string | number;
    /**
     * Parse the entity_type from ProjectAgentEnvironmentUserSessionEntityType resource.
     *
     * @param {string} projectAgentEnvironmentUserSessionEntityTypeName
     *   A fully-qualified path representing project_agent_environment_user_session_entity_type resource.
     * @returns {string} A string representing the entity_type.
     */
    matchEntityTypeFromProjectAgentEnvironmentUserSessionEntityTypeName(projectAgentEnvironmentUserSessionEntityTypeName: string): string | number;
    /**
     * Return a fully-qualified projectAgentFulfillment resource name string.
     *
     * @param {string} project
     * @returns {string} Resource name string.
     */
    projectAgentFulfillmentPath(project: string): string;
    /**
     * Parse the project from ProjectAgentFulfillment resource.
     *
     * @param {string} projectAgentFulfillmentName
     *   A fully-qualified path representing project_agent_fulfillment resource.
     * @returns {string} A string representing the project.
     */
    matchProjectFromProjectAgentFulfillmentName(projectAgentFulfillmentName: string): string | number;
    /**
     * Return a fully-qualified projectAgentIntent resource name string.
     *
     * @param {string} project
     * @param {string} intent
     * @returns {string} Resource name string.
     */
    projectAgentIntentPath(project: string, intent: string): string;
    /**
     * Parse the project from ProjectAgentIntent resource.
     *
     * @param {string} projectAgentIntentName
     *   A fully-qualified path representing project_agent_intent resource.
     * @returns {string} A string representing the project.
     */
    matchProjectFromProjectAgentIntentName(projectAgentIntentName: string): string | number;
    /**
     * Parse the intent from ProjectAgentIntent resource.
     *
     * @param {string} projectAgentIntentName
     *   A fully-qualified path representing project_agent_intent resource.
     * @returns {string} A string representing the intent.
     */
    matchIntentFromProjectAgentIntentName(projectAgentIntentName: string): string | number;
    /**
     * Return a fully-qualified projectAgentSession resource name string.
     *
     * @param {string} project
     * @param {string} session
     * @returns {string} Resource name string.
     */
    projectAgentSessionPath(project: string, session: string): string;
    /**
     * Parse the project from ProjectAgentSession resource.
     *
     * @param {string} projectAgentSessionName
     *   A fully-qualified path representing project_agent_session resource.
     * @returns {string} A string representing the project.
     */
    matchProjectFromProjectAgentSessionName(projectAgentSessionName: string): string | number;
    /**
     * Parse the session from ProjectAgentSession resource.
     *
     * @param {string} projectAgentSessionName
     *   A fully-qualified path representing project_agent_session resource.
     * @returns {string} A string representing the session.
     */
    matchSessionFromProjectAgentSessionName(projectAgentSessionName: string): string | number;
    /**
     * Return a fully-qualified projectAgentSessionContext resource name string.
     *
     * @param {string} project
     * @param {string} session
     * @param {string} context
     * @returns {string} Resource name string.
     */
    projectAgentSessionContextPath(project: string, session: string, context: string): string;
    /**
     * Parse the project from ProjectAgentSessionContext resource.
     *
     * @param {string} projectAgentSessionContextName
     *   A fully-qualified path representing project_agent_session_context resource.
     * @returns {string} A string representing the project.
     */
    matchProjectFromProjectAgentSessionContextName(projectAgentSessionContextName: string): string | number;
    /**
     * Parse the session from ProjectAgentSessionContext resource.
     *
     * @param {string} projectAgentSessionContextName
     *   A fully-qualified path representing project_agent_session_context resource.
     * @returns {string} A string representing the session.
     */
    matchSessionFromProjectAgentSessionContextName(projectAgentSessionContextName: string): string | number;
    /**
     * Parse the context from ProjectAgentSessionContext resource.
     *
     * @param {string} projectAgentSessionContextName
     *   A fully-qualified path representing project_agent_session_context resource.
     * @returns {string} A string representing the context.
     */
    matchContextFromProjectAgentSessionContextName(projectAgentSessionContextName: string): string | number;
    /**
     * Return a fully-qualified projectAgentSessionEntityType resource name string.
     *
     * @param {string} project
     * @param {string} session
     * @param {string} entity_type
     * @returns {string} Resource name string.
     */
    projectAgentSessionEntityTypePath(project: string, session: string, entityType: string): string;
    /**
     * Parse the project from ProjectAgentSessionEntityType resource.
     *
     * @param {string} projectAgentSessionEntityTypeName
     *   A fully-qualified path representing project_agent_session_entity_type resource.
     * @returns {string} A string representing the project.
     */
    matchProjectFromProjectAgentSessionEntityTypeName(projectAgentSessionEntityTypeName: string): string | number;
    /**
     * Parse the session from ProjectAgentSessionEntityType resource.
     *
     * @param {string} projectAgentSessionEntityTypeName
     *   A fully-qualified path representing project_agent_session_entity_type resource.
     * @returns {string} A string representing the session.
     */
    matchSessionFromProjectAgentSessionEntityTypeName(projectAgentSessionEntityTypeName: string): string | number;
    /**
     * Parse the entity_type from ProjectAgentSessionEntityType resource.
     *
     * @param {string} projectAgentSessionEntityTypeName
     *   A fully-qualified path representing project_agent_session_entity_type resource.
     * @returns {string} A string representing the entity_type.
     */
    matchEntityTypeFromProjectAgentSessionEntityTypeName(projectAgentSessionEntityTypeName: string): string | number;
    /**
     * Return a fully-qualified projectAgentVersion resource name string.
     *
     * @param {string} project
     * @param {string} version
     * @returns {string} Resource name string.
     */
    projectAgentVersionPath(project: string, version: string): string;
    /**
     * Parse the project from ProjectAgentVersion resource.
     *
     * @param {string} projectAgentVersionName
     *   A fully-qualified path representing project_agent_version resource.
     * @returns {string} A string representing the project.
     */
    matchProjectFromProjectAgentVersionName(projectAgentVersionName: string): string | number;
    /**
     * Parse the version from ProjectAgentVersion resource.
     *
     * @param {string} projectAgentVersionName
     *   A fully-qualified path representing project_agent_version resource.
     * @returns {string} A string representing the version.
     */
    matchVersionFromProjectAgentVersionName(projectAgentVersionName: string): string | number;
    /**
     * Return a fully-qualified projectAnswerRecord resource name string.
     *
     * @param {string} project
     * @param {string} answer_record
     * @returns {string} Resource name string.
     */
    projectAnswerRecordPath(project: string, answerRecord: string): string;
    /**
     * Parse the project from ProjectAnswerRecord resource.
     *
     * @param {string} projectAnswerRecordName
     *   A fully-qualified path representing project_answer_record resource.
     * @returns {string} A string representing the project.
     */
    matchProjectFromProjectAnswerRecordName(projectAnswerRecordName: string): string | number;
    /**
     * Parse the answer_record from ProjectAnswerRecord resource.
     *
     * @param {string} projectAnswerRecordName
     *   A fully-qualified path representing project_answer_record resource.
     * @returns {string} A string representing the answer_record.
     */
    matchAnswerRecordFromProjectAnswerRecordName(projectAnswerRecordName: string): string | number;
    /**
     * Return a fully-qualified projectConversation resource name string.
     *
     * @param {string} project
     * @param {string} conversation
     * @returns {string} Resource name string.
     */
    projectConversationPath(project: string, conversation: string): string;
    /**
     * Parse the project from ProjectConversation resource.
     *
     * @param {string} projectConversationName
     *   A fully-qualified path representing project_conversation resource.
     * @returns {string} A string representing the project.
     */
    matchProjectFromProjectConversationName(projectConversationName: string): string | number;
    /**
     * Parse the conversation from ProjectConversation resource.
     *
     * @param {string} projectConversationName
     *   A fully-qualified path representing project_conversation resource.
     * @returns {string} A string representing the conversation.
     */
    matchConversationFromProjectConversationName(projectConversationName: string): string | number;
    /**
     * Return a fully-qualified projectConversationMessage resource name string.
     *
     * @param {string} project
     * @param {string} conversation
     * @param {string} message
     * @returns {string} Resource name string.
     */
    projectConversationMessagePath(project: string, conversation: string, message: string): string;
    /**
     * Parse the project from ProjectConversationMessage resource.
     *
     * @param {string} projectConversationMessageName
     *   A fully-qualified path representing project_conversation_message resource.
     * @returns {string} A string representing the project.
     */
    matchProjectFromProjectConversationMessageName(projectConversationMessageName: string): string | number;
    /**
     * Parse the conversation from ProjectConversationMessage resource.
     *
     * @param {string} projectConversationMessageName
     *   A fully-qualified path representing project_conversation_message resource.
     * @returns {string} A string representing the conversation.
     */
    matchConversationFromProjectConversationMessageName(projectConversationMessageName: string): string | number;
    /**
     * Parse the message from ProjectConversationMessage resource.
     *
     * @param {string} projectConversationMessageName
     *   A fully-qualified path representing project_conversation_message resource.
     * @returns {string} A string representing the message.
     */
    matchMessageFromProjectConversationMessageName(projectConversationMessageName: string): string | number;
    /**
     * Return a fully-qualified projectConversationParticipant resource name string.
     *
     * @param {string} project
     * @param {string} conversation
     * @param {string} participant
     * @returns {string} Resource name string.
     */
    projectConversationParticipantPath(project: string, conversation: string, participant: string): string;
    /**
     * Parse the project from ProjectConversationParticipant resource.
     *
     * @param {string} projectConversationParticipantName
     *   A fully-qualified path representing project_conversation_participant resource.
     * @returns {string} A string representing the project.
     */
    matchProjectFromProjectConversationParticipantName(projectConversationParticipantName: string): string | number;
    /**
     * Parse the conversation from ProjectConversationParticipant resource.
     *
     * @param {string} projectConversationParticipantName
     *   A fully-qualified path representing project_conversation_participant resource.
     * @returns {string} A string representing the conversation.
     */
    matchConversationFromProjectConversationParticipantName(projectConversationParticipantName: string): string | number;
    /**
     * Parse the participant from ProjectConversationParticipant resource.
     *
     * @param {string} projectConversationParticipantName
     *   A fully-qualified path representing project_conversation_participant resource.
     * @returns {string} A string representing the participant.
     */
    matchParticipantFromProjectConversationParticipantName(projectConversationParticipantName: string): string | number;
    /**
     * Return a fully-qualified projectConversationProfile resource name string.
     *
     * @param {string} project
     * @param {string} conversation_profile
     * @returns {string} Resource name string.
     */
    projectConversationProfilePath(project: string, conversationProfile: string): string;
    /**
     * Parse the project from ProjectConversationProfile resource.
     *
     * @param {string} projectConversationProfileName
     *   A fully-qualified path representing project_conversation_profile resource.
     * @returns {string} A string representing the project.
     */
    matchProjectFromProjectConversationProfileName(projectConversationProfileName: string): string | number;
    /**
     * Parse the conversation_profile from ProjectConversationProfile resource.
     *
     * @param {string} projectConversationProfileName
     *   A fully-qualified path representing project_conversation_profile resource.
     * @returns {string} A string representing the conversation_profile.
     */
    matchConversationProfileFromProjectConversationProfileName(projectConversationProfileName: string): string | number;
    /**
     * Return a fully-qualified projectKnowledgeBase resource name string.
     *
     * @param {string} project
     * @param {string} knowledge_base
     * @returns {string} Resource name string.
     */
    projectKnowledgeBasePath(project: string, knowledgeBase: string): string;
    /**
     * Parse the project from ProjectKnowledgeBase resource.
     *
     * @param {string} projectKnowledgeBaseName
     *   A fully-qualified path representing project_knowledge_base resource.
     * @returns {string} A string representing the project.
     */
    matchProjectFromProjectKnowledgeBaseName(projectKnowledgeBaseName: string): string | number;
    /**
     * Parse the knowledge_base from ProjectKnowledgeBase resource.
     *
     * @param {string} projectKnowledgeBaseName
     *   A fully-qualified path representing project_knowledge_base resource.
     * @returns {string} A string representing the knowledge_base.
     */
    matchKnowledgeBaseFromProjectKnowledgeBaseName(projectKnowledgeBaseName: string): string | number;
    /**
     * Return a fully-qualified projectKnowledgeBaseDocument resource name string.
     *
     * @param {string} project
     * @param {string} knowledge_base
     * @param {string} document
     * @returns {string} Resource name string.
     */
    projectKnowledgeBaseDocumentPath(project: string, knowledgeBase: string, document: string): string;
    /**
     * Parse the project from ProjectKnowledgeBaseDocument resource.
     *
     * @param {string} projectKnowledgeBaseDocumentName
     *   A fully-qualified path representing project_knowledge_base_document resource.
     * @returns {string} A string representing the project.
     */
    matchProjectFromProjectKnowledgeBaseDocumentName(projectKnowledgeBaseDocumentName: string): string | number;
    /**
     * Parse the knowledge_base from ProjectKnowledgeBaseDocument resource.
     *
     * @param {string} projectKnowledgeBaseDocumentName
     *   A fully-qualified path representing project_knowledge_base_document resource.
     * @returns {string} A string representing the knowledge_base.
     */
    matchKnowledgeBaseFromProjectKnowledgeBaseDocumentName(projectKnowledgeBaseDocumentName: string): string | number;
    /**
     * Parse the document from ProjectKnowledgeBaseDocument resource.
     *
     * @param {string} projectKnowledgeBaseDocumentName
     *   A fully-qualified path representing project_knowledge_base_document resource.
     * @returns {string} A string representing the document.
     */
    matchDocumentFromProjectKnowledgeBaseDocumentName(projectKnowledgeBaseDocumentName: string): string | number;
    /**
     * Return a fully-qualified projectLocationAgent resource name string.
     *
     * @param {string} project
     * @param {string} location
     * @returns {string} Resource name string.
     */
    projectLocationAgentPath(project: string, location: string): string;
    /**
     * Parse the project from ProjectLocationAgent resource.
     *
     * @param {string} projectLocationAgentName
     *   A fully-qualified path representing project_location_agent resource.
     * @returns {string} A string representing the project.
     */
    matchProjectFromProjectLocationAgentName(projectLocationAgentName: string): string | number;
    /**
     * Parse the location from ProjectLocationAgent resource.
     *
     * @param {string} projectLocationAgentName
     *   A fully-qualified path representing project_location_agent resource.
     * @returns {string} A string representing the location.
     */
    matchLocationFromProjectLocationAgentName(projectLocationAgentName: string): string | number;
    /**
     * Return a fully-qualified projectLocationAgentEntityType resource name string.
     *
     * @param {string} project
     * @param {string} location
     * @param {string} entity_type
     * @returns {string} Resource name string.
     */
    projectLocationAgentEntityTypePath(project: string, location: string, entityType: string): string;
    /**
     * Parse the project from ProjectLocationAgentEntityType resource.
     *
     * @param {string} projectLocationAgentEntityTypeName
     *   A fully-qualified path representing project_location_agent_entity_type resource.
     * @returns {string} A string representing the project.
     */
    matchProjectFromProjectLocationAgentEntityTypeName(projectLocationAgentEntityTypeName: string): string | number;
    /**
     * Parse the location from ProjectLocationAgentEntityType resource.
     *
     * @param {string} projectLocationAgentEntityTypeName
     *   A fully-qualified path representing project_location_agent_entity_type resource.
     * @returns {string} A string representing the location.
     */
    matchLocationFromProjectLocationAgentEntityTypeName(projectLocationAgentEntityTypeName: string): string | number;
    /**
     * Parse the entity_type from ProjectLocationAgentEntityType resource.
     *
     * @param {string} projectLocationAgentEntityTypeName
     *   A fully-qualified path representing project_location_agent_entity_type resource.
     * @returns {string} A string representing the entity_type.
     */
    matchEntityTypeFromProjectLocationAgentEntityTypeName(projectLocationAgentEntityTypeName: string): string | number;
    /**
     * Return a fully-qualified projectLocationAgentEnvironment resource name string.
     *
     * @param {string} project
     * @param {string} location
     * @param {string} environment
     * @returns {string} Resource name string.
     */
    projectLocationAgentEnvironmentPath(project: string, location: string, environment: string): string;
    /**
     * Parse the project from ProjectLocationAgentEnvironment resource.
     *
     * @param {string} projectLocationAgentEnvironmentName
     *   A fully-qualified path representing project_location_agent_environment resource.
     * @returns {string} A string representing the project.
     */
    matchProjectFromProjectLocationAgentEnvironmentName(projectLocationAgentEnvironmentName: string): string | number;
    /**
     * Parse the location from ProjectLocationAgentEnvironment resource.
     *
     * @param {string} projectLocationAgentEnvironmentName
     *   A fully-qualified path representing project_location_agent_environment resource.
     * @returns {string} A string representing the location.
     */
    matchLocationFromProjectLocationAgentEnvironmentName(projectLocationAgentEnvironmentName: string): string | number;
    /**
     * Parse the environment from ProjectLocationAgentEnvironment resource.
     *
     * @param {string} projectLocationAgentEnvironmentName
     *   A fully-qualified path representing project_location_agent_environment resource.
     * @returns {string} A string representing the environment.
     */
    matchEnvironmentFromProjectLocationAgentEnvironmentName(projectLocationAgentEnvironmentName: string): string | number;
    /**
     * Return a fully-qualified projectLocationAgentEnvironmentUserSessionContext resource name string.
     *
     * @param {string} project
     * @param {string} location
     * @param {string} environment
     * @param {string} user
     * @param {string} session
     * @param {string} context
     * @returns {string} Resource name string.
     */
    projectLocationAgentEnvironmentUserSessionContextPath(project: string, location: string, environment: string, user: string, session: string, context: string): string;
    /**
     * Parse the project from ProjectLocationAgentEnvironmentUserSessionContext resource.
     *
     * @param {string} projectLocationAgentEnvironmentUserSessionContextName
     *   A fully-qualified path representing project_location_agent_environment_user_session_context resource.
     * @returns {string} A string representing the project.
     */
    matchProjectFromProjectLocationAgentEnvironmentUserSessionContextName(projectLocationAgentEnvironmentUserSessionContextName: string): string | number;
    /**
     * Parse the location from ProjectLocationAgentEnvironmentUserSessionContext resource.
     *
     * @param {string} projectLocationAgentEnvironmentUserSessionContextName
     *   A fully-qualified path representing project_location_agent_environment_user_session_context resource.
     * @returns {string} A string representing the location.
     */
    matchLocationFromProjectLocationAgentEnvironmentUserSessionContextName(projectLocationAgentEnvironmentUserSessionContextName: string): string | number;
    /**
     * Parse the environment from ProjectLocationAgentEnvironmentUserSessionContext resource.
     *
     * @param {string} projectLocationAgentEnvironmentUserSessionContextName
     *   A fully-qualified path representing project_location_agent_environment_user_session_context resource.
     * @returns {string} A string representing the environment.
     */
    matchEnvironmentFromProjectLocationAgentEnvironmentUserSessionContextName(projectLocationAgentEnvironmentUserSessionContextName: string): string | number;
    /**
     * Parse the user from ProjectLocationAgentEnvironmentUserSessionContext resource.
     *
     * @param {string} projectLocationAgentEnvironmentUserSessionContextName
     *   A fully-qualified path representing project_location_agent_environment_user_session_context resource.
     * @returns {string} A string representing the user.
     */
    matchUserFromProjectLocationAgentEnvironmentUserSessionContextName(projectLocationAgentEnvironmentUserSessionContextName: string): string | number;
    /**
     * Parse the session from ProjectLocationAgentEnvironmentUserSessionContext resource.
     *
     * @param {string} projectLocationAgentEnvironmentUserSessionContextName
     *   A fully-qualified path representing project_location_agent_environment_user_session_context resource.
     * @returns {string} A string representing the session.
     */
    matchSessionFromProjectLocationAgentEnvironmentUserSessionContextName(projectLocationAgentEnvironmentUserSessionContextName: string): string | number;
    /**
     * Parse the context from ProjectLocationAgentEnvironmentUserSessionContext resource.
     *
     * @param {string} projectLocationAgentEnvironmentUserSessionContextName
     *   A fully-qualified path representing project_location_agent_environment_user_session_context resource.
     * @returns {string} A string representing the context.
     */
    matchContextFromProjectLocationAgentEnvironmentUserSessionContextName(projectLocationAgentEnvironmentUserSessionContextName: string): string | number;
    /**
     * Return a fully-qualified projectLocationAgentEnvironmentUserSessionEntityType resource name string.
     *
     * @param {string} project
     * @param {string} location
     * @param {string} environment
     * @param {string} user
     * @param {string} session
     * @param {string} entity_type
     * @returns {string} Resource name string.
     */
    projectLocationAgentEnvironmentUserSessionEntityTypePath(project: string, location: string, environment: string, user: string, session: string, entityType: string): string;
    /**
     * Parse the project from ProjectLocationAgentEnvironmentUserSessionEntityType resource.
     *
     * @param {string} projectLocationAgentEnvironmentUserSessionEntityTypeName
     *   A fully-qualified path representing project_location_agent_environment_user_session_entity_type resource.
     * @returns {string} A string representing the project.
     */
    matchProjectFromProjectLocationAgentEnvironmentUserSessionEntityTypeName(projectLocationAgentEnvironmentUserSessionEntityTypeName: string): string | number;
    /**
     * Parse the location from ProjectLocationAgentEnvironmentUserSessionEntityType resource.
     *
     * @param {string} projectLocationAgentEnvironmentUserSessionEntityTypeName
     *   A fully-qualified path representing project_location_agent_environment_user_session_entity_type resource.
     * @returns {string} A string representing the location.
     */
    matchLocationFromProjectLocationAgentEnvironmentUserSessionEntityTypeName(projectLocationAgentEnvironmentUserSessionEntityTypeName: string): string | number;
    /**
     * Parse the environment from ProjectLocationAgentEnvironmentUserSessionEntityType resource.
     *
     * @param {string} projectLocationAgentEnvironmentUserSessionEntityTypeName
     *   A fully-qualified path representing project_location_agent_environment_user_session_entity_type resource.
     * @returns {string} A string representing the environment.
     */
    matchEnvironmentFromProjectLocationAgentEnvironmentUserSessionEntityTypeName(projectLocationAgentEnvironmentUserSessionEntityTypeName: string): string | number;
    /**
     * Parse the user from ProjectLocationAgentEnvironmentUserSessionEntityType resource.
     *
     * @param {string} projectLocationAgentEnvironmentUserSessionEntityTypeName
     *   A fully-qualified path representing project_location_agent_environment_user_session_entity_type resource.
     * @returns {string} A string representing the user.
     */
    matchUserFromProjectLocationAgentEnvironmentUserSessionEntityTypeName(projectLocationAgentEnvironmentUserSessionEntityTypeName: string): string | number;
    /**
     * Parse the session from ProjectLocationAgentEnvironmentUserSessionEntityType resource.
     *
     * @param {string} projectLocationAgentEnvironmentUserSessionEntityTypeName
     *   A fully-qualified path representing project_location_agent_environment_user_session_entity_type resource.
     * @returns {string} A string representing the session.
     */
    matchSessionFromProjectLocationAgentEnvironmentUserSessionEntityTypeName(projectLocationAgentEnvironmentUserSessionEntityTypeName: string): string | number;
    /**
     * Parse the entity_type from ProjectLocationAgentEnvironmentUserSessionEntityType resource.
     *
     * @param {string} projectLocationAgentEnvironmentUserSessionEntityTypeName
     *   A fully-qualified path representing project_location_agent_environment_user_session_entity_type resource.
     * @returns {string} A string representing the entity_type.
     */
    matchEntityTypeFromProjectLocationAgentEnvironmentUserSessionEntityTypeName(projectLocationAgentEnvironmentUserSessionEntityTypeName: string): string | number;
    /**
     * Return a fully-qualified projectLocationAgentFulfillment resource name string.
     *
     * @param {string} project
     * @param {string} location
     * @returns {string} Resource name string.
     */
    projectLocationAgentFulfillmentPath(project: string, location: string): string;
    /**
     * Parse the project from ProjectLocationAgentFulfillment resource.
     *
     * @param {string} projectLocationAgentFulfillmentName
     *   A fully-qualified path representing project_location_agent_fulfillment resource.
     * @returns {string} A string representing the project.
     */
    matchProjectFromProjectLocationAgentFulfillmentName(projectLocationAgentFulfillmentName: string): string | number;
    /**
     * Parse the location from ProjectLocationAgentFulfillment resource.
     *
     * @param {string} projectLocationAgentFulfillmentName
     *   A fully-qualified path representing project_location_agent_fulfillment resource.
     * @returns {string} A string representing the location.
     */
    matchLocationFromProjectLocationAgentFulfillmentName(projectLocationAgentFulfillmentName: string): string | number;
    /**
     * Return a fully-qualified projectLocationAgentIntent resource name string.
     *
     * @param {string} project
     * @param {string} location
     * @param {string} intent
     * @returns {string} Resource name string.
     */
    projectLocationAgentIntentPath(project: string, location: string, intent: string): string;
    /**
     * Parse the project from ProjectLocationAgentIntent resource.
     *
     * @param {string} projectLocationAgentIntentName
     *   A fully-qualified path representing project_location_agent_intent resource.
     * @returns {string} A string representing the project.
     */
    matchProjectFromProjectLocationAgentIntentName(projectLocationAgentIntentName: string): string | number;
    /**
     * Parse the location from ProjectLocationAgentIntent resource.
     *
     * @param {string} projectLocationAgentIntentName
     *   A fully-qualified path representing project_location_agent_intent resource.
     * @returns {string} A string representing the location.
     */
    matchLocationFromProjectLocationAgentIntentName(projectLocationAgentIntentName: string): string | number;
    /**
     * Parse the intent from ProjectLocationAgentIntent resource.
     *
     * @param {string} projectLocationAgentIntentName
     *   A fully-qualified path representing project_location_agent_intent resource.
     * @returns {string} A string representing the intent.
     */
    matchIntentFromProjectLocationAgentIntentName(projectLocationAgentIntentName: string): string | number;
    /**
     * Return a fully-qualified projectLocationAgentSessionContext resource name string.
     *
     * @param {string} project
     * @param {string} location
     * @param {string} session
     * @param {string} context
     * @returns {string} Resource name string.
     */
    projectLocationAgentSessionContextPath(project: string, location: string, session: string, context: string): string;
    /**
     * Parse the project from ProjectLocationAgentSessionContext resource.
     *
     * @param {string} projectLocationAgentSessionContextName
     *   A fully-qualified path representing project_location_agent_session_context resource.
     * @returns {string} A string representing the project.
     */
    matchProjectFromProjectLocationAgentSessionContextName(projectLocationAgentSessionContextName: string): string | number;
    /**
     * Parse the location from ProjectLocationAgentSessionContext resource.
     *
     * @param {string} projectLocationAgentSessionContextName
     *   A fully-qualified path representing project_location_agent_session_context resource.
     * @returns {string} A string representing the location.
     */
    matchLocationFromProjectLocationAgentSessionContextName(projectLocationAgentSessionContextName: string): string | number;
    /**
     * Parse the session from ProjectLocationAgentSessionContext resource.
     *
     * @param {string} projectLocationAgentSessionContextName
     *   A fully-qualified path representing project_location_agent_session_context resource.
     * @returns {string} A string representing the session.
     */
    matchSessionFromProjectLocationAgentSessionContextName(projectLocationAgentSessionContextName: string): string | number;
    /**
     * Parse the context from ProjectLocationAgentSessionContext resource.
     *
     * @param {string} projectLocationAgentSessionContextName
     *   A fully-qualified path representing project_location_agent_session_context resource.
     * @returns {string} A string representing the context.
     */
    matchContextFromProjectLocationAgentSessionContextName(projectLocationAgentSessionContextName: string): string | number;
    /**
     * Return a fully-qualified projectLocationAgentSessionEntityType resource name string.
     *
     * @param {string} project
     * @param {string} location
     * @param {string} session
     * @param {string} entity_type
     * @returns {string} Resource name string.
     */
    projectLocationAgentSessionEntityTypePath(project: string, location: string, session: string, entityType: string): string;
    /**
     * Parse the project from ProjectLocationAgentSessionEntityType resource.
     *
     * @param {string} projectLocationAgentSessionEntityTypeName
     *   A fully-qualified path representing project_location_agent_session_entity_type resource.
     * @returns {string} A string representing the project.
     */
    matchProjectFromProjectLocationAgentSessionEntityTypeName(projectLocationAgentSessionEntityTypeName: string): string | number;
    /**
     * Parse the location from ProjectLocationAgentSessionEntityType resource.
     *
     * @param {string} projectLocationAgentSessionEntityTypeName
     *   A fully-qualified path representing project_location_agent_session_entity_type resource.
     * @returns {string} A string representing the location.
     */
    matchLocationFromProjectLocationAgentSessionEntityTypeName(projectLocationAgentSessionEntityTypeName: string): string | number;
    /**
     * Parse the session from ProjectLocationAgentSessionEntityType resource.
     *
     * @param {string} projectLocationAgentSessionEntityTypeName
     *   A fully-qualified path representing project_location_agent_session_entity_type resource.
     * @returns {string} A string representing the session.
     */
    matchSessionFromProjectLocationAgentSessionEntityTypeName(projectLocationAgentSessionEntityTypeName: string): string | number;
    /**
     * Parse the entity_type from ProjectLocationAgentSessionEntityType resource.
     *
     * @param {string} projectLocationAgentSessionEntityTypeName
     *   A fully-qualified path representing project_location_agent_session_entity_type resource.
     * @returns {string} A string representing the entity_type.
     */
    matchEntityTypeFromProjectLocationAgentSessionEntityTypeName(projectLocationAgentSessionEntityTypeName: string): string | number;
    /**
     * Return a fully-qualified projectLocationAgentVersion resource name string.
     *
     * @param {string} project
     * @param {string} location
     * @param {string} version
     * @returns {string} Resource name string.
     */
    projectLocationAgentVersionPath(project: string, location: string, version: string): string;
    /**
     * Parse the project from ProjectLocationAgentVersion resource.
     *
     * @param {string} projectLocationAgentVersionName
     *   A fully-qualified path representing project_location_agent_version resource.
     * @returns {string} A string representing the project.
     */
    matchProjectFromProjectLocationAgentVersionName(projectLocationAgentVersionName: string): string | number;
    /**
     * Parse the location from ProjectLocationAgentVersion resource.
     *
     * @param {string} projectLocationAgentVersionName
     *   A fully-qualified path representing project_location_agent_version resource.
     * @returns {string} A string representing the location.
     */
    matchLocationFromProjectLocationAgentVersionName(projectLocationAgentVersionName: string): string | number;
    /**
     * Parse the version from ProjectLocationAgentVersion resource.
     *
     * @param {string} projectLocationAgentVersionName
     *   A fully-qualified path representing project_location_agent_version resource.
     * @returns {string} A string representing the version.
     */
    matchVersionFromProjectLocationAgentVersionName(projectLocationAgentVersionName: string): string | number;
    /**
     * Return a fully-qualified projectLocationAnswerRecord resource name string.
     *
     * @param {string} project
     * @param {string} location
     * @param {string} answer_record
     * @returns {string} Resource name string.
     */
    projectLocationAnswerRecordPath(project: string, location: string, answerRecord: string): string;
    /**
     * Parse the project from ProjectLocationAnswerRecord resource.
     *
     * @param {string} projectLocationAnswerRecordName
     *   A fully-qualified path representing project_location_answer_record resource.
     * @returns {string} A string representing the project.
     */
    matchProjectFromProjectLocationAnswerRecordName(projectLocationAnswerRecordName: string): string | number;
    /**
     * Parse the location from ProjectLocationAnswerRecord resource.
     *
     * @param {string} projectLocationAnswerRecordName
     *   A fully-qualified path representing project_location_answer_record resource.
     * @returns {string} A string representing the location.
     */
    matchLocationFromProjectLocationAnswerRecordName(projectLocationAnswerRecordName: string): string | number;
    /**
     * Parse the answer_record from ProjectLocationAnswerRecord resource.
     *
     * @param {string} projectLocationAnswerRecordName
     *   A fully-qualified path representing project_location_answer_record resource.
     * @returns {string} A string representing the answer_record.
     */
    matchAnswerRecordFromProjectLocationAnswerRecordName(projectLocationAnswerRecordName: string): string | number;
    /**
     * Return a fully-qualified projectLocationConversation resource name string.
     *
     * @param {string} project
     * @param {string} location
     * @param {string} conversation
     * @returns {string} Resource name string.
     */
    projectLocationConversationPath(project: string, location: string, conversation: string): string;
    /**
     * Parse the project from ProjectLocationConversation resource.
     *
     * @param {string} projectLocationConversationName
     *   A fully-qualified path representing project_location_conversation resource.
     * @returns {string} A string representing the project.
     */
    matchProjectFromProjectLocationConversationName(projectLocationConversationName: string): string | number;
    /**
     * Parse the location from ProjectLocationConversation resource.
     *
     * @param {string} projectLocationConversationName
     *   A fully-qualified path representing project_location_conversation resource.
     * @returns {string} A string representing the location.
     */
    matchLocationFromProjectLocationConversationName(projectLocationConversationName: string): string | number;
    /**
     * Parse the conversation from ProjectLocationConversation resource.
     *
     * @param {string} projectLocationConversationName
     *   A fully-qualified path representing project_location_conversation resource.
     * @returns {string} A string representing the conversation.
     */
    matchConversationFromProjectLocationConversationName(projectLocationConversationName: string): string | number;
    /**
     * Return a fully-qualified projectLocationConversationMessage resource name string.
     *
     * @param {string} project
     * @param {string} location
     * @param {string} conversation
     * @param {string} message
     * @returns {string} Resource name string.
     */
    projectLocationConversationMessagePath(project: string, location: string, conversation: string, message: string): string;
    /**
     * Parse the project from ProjectLocationConversationMessage resource.
     *
     * @param {string} projectLocationConversationMessageName
     *   A fully-qualified path representing project_location_conversation_message resource.
     * @returns {string} A string representing the project.
     */
    matchProjectFromProjectLocationConversationMessageName(projectLocationConversationMessageName: string): string | number;
    /**
     * Parse the location from ProjectLocationConversationMessage resource.
     *
     * @param {string} projectLocationConversationMessageName
     *   A fully-qualified path representing project_location_conversation_message resource.
     * @returns {string} A string representing the location.
     */
    matchLocationFromProjectLocationConversationMessageName(projectLocationConversationMessageName: string): string | number;
    /**
     * Parse the conversation from ProjectLocationConversationMessage resource.
     *
     * @param {string} projectLocationConversationMessageName
     *   A fully-qualified path representing project_location_conversation_message resource.
     * @returns {string} A string representing the conversation.
     */
    matchConversationFromProjectLocationConversationMessageName(projectLocationConversationMessageName: string): string | number;
    /**
     * Parse the message from ProjectLocationConversationMessage resource.
     *
     * @param {string} projectLocationConversationMessageName
     *   A fully-qualified path representing project_location_conversation_message resource.
     * @returns {string} A string representing the message.
     */
    matchMessageFromProjectLocationConversationMessageName(projectLocationConversationMessageName: string): string | number;
    /**
     * Return a fully-qualified projectLocationConversationParticipant resource name string.
     *
     * @param {string} project
     * @param {string} location
     * @param {string} conversation
     * @param {string} participant
     * @returns {string} Resource name string.
     */
    projectLocationConversationParticipantPath(project: string, location: string, conversation: string, participant: string): string;
    /**
     * Parse the project from ProjectLocationConversationParticipant resource.
     *
     * @param {string} projectLocationConversationParticipantName
     *   A fully-qualified path representing project_location_conversation_participant resource.
     * @returns {string} A string representing the project.
     */
    matchProjectFromProjectLocationConversationParticipantName(projectLocationConversationParticipantName: string): string | number;
    /**
     * Parse the location from ProjectLocationConversationParticipant resource.
     *
     * @param {string} projectLocationConversationParticipantName
     *   A fully-qualified path representing project_location_conversation_participant resource.
     * @returns {string} A string representing the location.
     */
    matchLocationFromProjectLocationConversationParticipantName(projectLocationConversationParticipantName: string): string | number;
    /**
     * Parse the conversation from ProjectLocationConversationParticipant resource.
     *
     * @param {string} projectLocationConversationParticipantName
     *   A fully-qualified path representing project_location_conversation_participant resource.
     * @returns {string} A string representing the conversation.
     */
    matchConversationFromProjectLocationConversationParticipantName(projectLocationConversationParticipantName: string): string | number;
    /**
     * Parse the participant from ProjectLocationConversationParticipant resource.
     *
     * @param {string} projectLocationConversationParticipantName
     *   A fully-qualified path representing project_location_conversation_participant resource.
     * @returns {string} A string representing the participant.
     */
    matchParticipantFromProjectLocationConversationParticipantName(projectLocationConversationParticipantName: string): string | number;
    /**
     * Return a fully-qualified projectLocationConversationProfile resource name string.
     *
     * @param {string} project
     * @param {string} location
     * @param {string} conversation_profile
     * @returns {string} Resource name string.
     */
    projectLocationConversationProfilePath(project: string, location: string, conversationProfile: string): string;
    /**
     * Parse the project from ProjectLocationConversationProfile resource.
     *
     * @param {string} projectLocationConversationProfileName
     *   A fully-qualified path representing project_location_conversation_profile resource.
     * @returns {string} A string representing the project.
     */
    matchProjectFromProjectLocationConversationProfileName(projectLocationConversationProfileName: string): string | number;
    /**
     * Parse the location from ProjectLocationConversationProfile resource.
     *
     * @param {string} projectLocationConversationProfileName
     *   A fully-qualified path representing project_location_conversation_profile resource.
     * @returns {string} A string representing the location.
     */
    matchLocationFromProjectLocationConversationProfileName(projectLocationConversationProfileName: string): string | number;
    /**
     * Parse the conversation_profile from ProjectLocationConversationProfile resource.
     *
     * @param {string} projectLocationConversationProfileName
     *   A fully-qualified path representing project_location_conversation_profile resource.
     * @returns {string} A string representing the conversation_profile.
     */
    matchConversationProfileFromProjectLocationConversationProfileName(projectLocationConversationProfileName: string): string | number;
    /**
     * Return a fully-qualified projectLocationKnowledgeBase resource name string.
     *
     * @param {string} project
     * @param {string} location
     * @param {string} knowledge_base
     * @returns {string} Resource name string.
     */
    projectLocationKnowledgeBasePath(project: string, location: string, knowledgeBase: string): string;
    /**
     * Parse the project from ProjectLocationKnowledgeBase resource.
     *
     * @param {string} projectLocationKnowledgeBaseName
     *   A fully-qualified path representing project_location_knowledge_base resource.
     * @returns {string} A string representing the project.
     */
    matchProjectFromProjectLocationKnowledgeBaseName(projectLocationKnowledgeBaseName: string): string | number;
    /**
     * Parse the location from ProjectLocationKnowledgeBase resource.
     *
     * @param {string} projectLocationKnowledgeBaseName
     *   A fully-qualified path representing project_location_knowledge_base resource.
     * @returns {string} A string representing the location.
     */
    matchLocationFromProjectLocationKnowledgeBaseName(projectLocationKnowledgeBaseName: string): string | number;
    /**
     * Parse the knowledge_base from ProjectLocationKnowledgeBase resource.
     *
     * @param {string} projectLocationKnowledgeBaseName
     *   A fully-qualified path representing project_location_knowledge_base resource.
     * @returns {string} A string representing the knowledge_base.
     */
    matchKnowledgeBaseFromProjectLocationKnowledgeBaseName(projectLocationKnowledgeBaseName: string): string | number;
    /**
     * Return a fully-qualified projectLocationKnowledgeBaseDocument resource name string.
     *
     * @param {string} project
     * @param {string} location
     * @param {string} knowledge_base
     * @param {string} document
     * @returns {string} Resource name string.
     */
    projectLocationKnowledgeBaseDocumentPath(project: string, location: string, knowledgeBase: string, document: string): string;
    /**
     * Parse the project from ProjectLocationKnowledgeBaseDocument resource.
     *
     * @param {string} projectLocationKnowledgeBaseDocumentName
     *   A fully-qualified path representing project_location_knowledge_base_document resource.
     * @returns {string} A string representing the project.
     */
    matchProjectFromProjectLocationKnowledgeBaseDocumentName(projectLocationKnowledgeBaseDocumentName: string): string | number;
    /**
     * Parse the location from ProjectLocationKnowledgeBaseDocument resource.
     *
     * @param {string} projectLocationKnowledgeBaseDocumentName
     *   A fully-qualified path representing project_location_knowledge_base_document resource.
     * @returns {string} A string representing the location.
     */
    matchLocationFromProjectLocationKnowledgeBaseDocumentName(projectLocationKnowledgeBaseDocumentName: string): string | number;
    /**
     * Parse the knowledge_base from ProjectLocationKnowledgeBaseDocument resource.
     *
     * @param {string} projectLocationKnowledgeBaseDocumentName
     *   A fully-qualified path representing project_location_knowledge_base_document resource.
     * @returns {string} A string representing the knowledge_base.
     */
    matchKnowledgeBaseFromProjectLocationKnowledgeBaseDocumentName(projectLocationKnowledgeBaseDocumentName: string): string | number;
    /**
     * Parse the document from ProjectLocationKnowledgeBaseDocument resource.
     *
     * @param {string} projectLocationKnowledgeBaseDocumentName
     *   A fully-qualified path representing project_location_knowledge_base_document resource.
     * @returns {string} A string representing the document.
     */
    matchDocumentFromProjectLocationKnowledgeBaseDocumentName(projectLocationKnowledgeBaseDocumentName: string): string | number;
    /**
     * Terminate the gRPC channel and close the client.
     *
     * The client will no longer be usable and all future behavior is undefined.
     * @returns {Promise} A promise that resolves when the client is closed.
     */
    close(): Promise<void>;
}