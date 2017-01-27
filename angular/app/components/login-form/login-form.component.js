class LoginFormController {
	constructor($auth, $rootScope, ToastService, $state) {
		'ngInject';

		this.$auth = $auth;
		this.ToastService = ToastService;
		this.$rootScope = $rootScope;
		this.$state = $state;
	}

    $onInit(){
        this.username = '';
        this.password = '';
    }

	login() {
		let user = {
			username: this.username,
			password: this.password
		};

		this.$auth.login(user)
			.then((response) => {
				this.$auth.setToken(response.data);
				this.ToastService.show('Logged in successfully.');
				this.$rootScope.me = response.data;
				this.$state.go('app.dashboard');
			})
			.catch(this.failedLogin.bind(this));
	}

	failedLogin(response) {
		if (response.status === 422) {
			for (let error in response.data.errors) {
				return this.ToastService.error(response.data.errors[error][0]);
			}
		}
		this.ToastService.error(response.statusText);
	}
}

export const LoginFormComponent = {
	templateUrl: './views/app/components/login-form/login-form.component.html',
	controller: LoginFormController,
	controllerAs: 'vm',
	bindings: {}
}
