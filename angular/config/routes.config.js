export function RoutesConfig($stateProvider, $urlRouterProvider, $locationProvider) {
	'ngInject';
	
	// uncomment below line for pretty urls
	$locationProvider.html5Mode({enabled: true, requireBase: true});

	let getView = (viewName) => {
		return `./views/app/pages/${viewName}/${viewName}.page.html`;
	};
	
	var getLayout = (layout) => {
		return `./views/app/pages/layout/${layout}.page.html`
	}

	$urlRouterProvider.otherwise('/');

    /*
        data: {auth: true} would require JWT auth
        However you can't apply it to the abstract state
        or landing state because you'll enter a redirect loop
    */

	$stateProvider
		.state('app', {
			abstract: true,
            data: {},
			views: {
				'layout': {
					templateUrl: getLayout('layout')
				},
				header: {
					templateUrl: getView('header')
				},
				footer: {
					templateUrl: getView('footer')
				},
				main: {}
			}
		})
		.state('app.home', {
            url: '/',
			data: {auth: true},
            views: {
                'main@': {
                    templateUrl: getView('dashboard')
                }
            }
        })
        .state('app.login', {
			url: '/login',
			views: {
				'main@': {
					templateUrl: getView('login')
				},
				'header@': {},
				'footer@': {}
			}
		})
        .state('app.register', {
            url: '/register',
            views: {
                'main@': {
                    templateUrl: getView('register')
                }
            }
        })
        .state('app.forgot_password', {
            url: '/forgot-password',
            views: {
                'main@': {
                    templateUrl: getView('forgot-password')
                }
            }
        })
        .state('app.reset_password', {
            url: '/reset-password/:email/:token',
            views: {
                'main@': {
                    templateUrl: getView('reset-password')
                }
            }
        })
		.state('app.logout', {
			url: '/logout',
			data: {auth: true},
			controller: function ($rootScope, $auth, $state) {
				$auth.logout().then(function () {
					delete $rootScope.me
					$state.go('app.login')
				})
			}
		})
		.state('app.dashboard', {
			url: '/dashboard',
			data: {auth: true},
			views: {
				'main@': {
					templateUrl: getView('dashboard')
				}
			}
		})
		.state('app.settings', {
			url: '/settings',
			data: {auth: true},
			views: {
				'main@': {
					templateUrl: getView('settings')
				}
			}
		})
		.state('app.billing', {
			url: '/billing',
			data: {auth: true},
			views: {
				'main@': {
					templateUrl: getView('billing')
				}
			}
		})
		.state('app.reports', {
			url: '/reports',
			data: {auth: true},
			views: {
				'main@': {
					templateUrl: getView('reports')
				}
			}
		});
}
