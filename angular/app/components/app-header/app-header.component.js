class AppHeaderController{
    constructor($auth){
        'ngInject';

        this.$auth = $auth;
    }

    $onInit(){
        //defer iframe loading
        this.isLogin = this.$auth.isAuthenticated()
    }
}

export const AppHeaderComponent = {
    templateUrl: './views/app/components/app-header/app-header.component.html',
    controller: AppHeaderController,
    controllerAs: 'vm',
    bindings: {}
}
