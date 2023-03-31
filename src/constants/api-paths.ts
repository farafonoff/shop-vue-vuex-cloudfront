const API_PREFIX = 'https://rpu7553ssd.execute-api.us-east-2.amazonaws.com';
export const API_PATHS = {
	product: `${API_PREFIX}/products`,
	productAvailable: `${API_PREFIX}/products/available`,
	postProduct: `${API_PREFIX}/products`,
	import: 'https://5m5sjb494d.execute-api.us-east-2.amazonaws.com/import',

	order:
		'https://tfamxg6rwiiphnvkv36k6go4sq0erlnl.lambda-url.us-east-2.on.aws/api',
	bff: 'https://.execute-api.eu-west-1.amazonaws.com/dev',
	cart:
		'https://tfamxg6rwiiphnvkv36k6go4sq0erlnl.lambda-url.us-east-2.on.aws/api',
};
