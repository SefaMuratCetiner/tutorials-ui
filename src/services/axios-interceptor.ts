import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

const schema: string = "https";
const serviceHost: string = "localhost";
const servicePort: string = "7154";

const baseUrl: string = `${schema}://${serviceHost}:${servicePort}`;

const client: AxiosInstance = axios.create({ baseURL: baseUrl });

export const request = async ({ ...options }: AxiosRequestConfig) => {
	const onSuccess = (response: any) => response;
	const onError = (error: any) => error;

	try {
		const response = await client(options);
		return onSuccess(response);
	} catch (error) {
		return onError(error);
	}
};
