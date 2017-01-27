export function SatellizerConfig($authProvider, $windowProvider) {
	'ngInject';

	$authProvider.httpInterceptor = function() {
		return true;
	}

	$authProvider.baseUrl = $windowProvider.$get().baseAPIUrl;
	$authProvider.loginUrl = '/auth/login';
	$authProvider.signupUrl = '/auth/register';
	$authProvider.tokenRoot = 'data';//compensates success response macro

}
