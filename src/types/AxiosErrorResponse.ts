export interface AxiosErrorResponse {
    message: string;
    name: string;
    stack?: string;
    config: {
        transitional: {
            silentJSONParsing: boolean;
            forcedJSONParsing: boolean;
            clarifyTimeoutError: boolean;
        };
        adapter: string[];
        transformRequest: any[];
        transformResponse: any[];
        timeout: number;
        xsrfCookieName: string;
        xsrfHeaderName: string;
        maxContentLength: number;
        maxBodyLength: number;
        env: Record<string, unknown>;
        headers: {
            Accept: string;
            "Content-Type": string;
        };
        method: string;
        url: string;
        data: string;
    };
    code: string;
    status?: number;
    response?: {
        data: {
            error: string;
        };
    };
}
