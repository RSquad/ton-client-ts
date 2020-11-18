export declare type OrderBy = {
    path: string;
    direction: SortDirection;
};
export declare type SortDirection = "ASC" | "DESC";
export declare type ParamsOfQueryCollection = {
    /**
     * collection - Collection name (accounts, blocks, transactions, messages, block_signatures)
     */
    collection: string;
    /**
     * filter - Collection filter
     */
    filter?: any;
    /**
     * result - Projection (result) string
     */
    result: string;
    /**
     * order - Sorting order
     */
    order?: OrderBy[];
    /**
     * limit - Number of documents to return
     */
    limit?: number;
};
export declare type ResultOfQueryCollection = {
    /**
     * result - Objects that match the provided criteria
     */
    result: any[];
};
export declare type ParamsOfWaitForCollection = {
    /**
     * collection - Collection name (accounts, blocks, transactions, messages, block_signatures)
     */
    collection: string;
    /**
     * filter - Collection filter
     */
    filter?: any;
    /**
     * result - Projection (result) string
     */
    result: string;
    /**
     * timeout - Query timeout
     */
    timeout?: number;
};
export declare type ResultOfWaitForCollection = {
    result: any;
};
export declare type ResultOfSubscribeCollection = {
    /**
     * handle - Subscription handle. Must be closed with `unsubscribe`
     */
    handle: number;
};
export declare type unit = void;
export declare type ParamsOfSubscribeCollection = {
    /**
     * collection - Collection name (accounts, blocks, transactions, messages, block_signatures)
     */
    collection: string;
    /**
     * filter - Collection filter
     */
    filter?: any;
    /**
     * result - Projection (result) string
     */
    result: string;
};