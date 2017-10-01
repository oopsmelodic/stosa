import Ember from 'ember';

export default Ember.Controller.extend({
    notifications: Ember.inject.service('notification-messages'),
    actions: {
        sendRequest(){

            var host = this.store.adapterFor('application').get('host')

            var app = this;

            $.ajax({url: host+"/applications/createapp",
                dataType: 'json',
                data:{
                    user_name: app.get('name'),
                    phone: app.get('phone'),
                    email: app.get('email'),
                    comment: app.get('comment')
                },
                success: function(){
                    app.set('name','');
                    app.set('phone','');
                    app.set('email','');
                    app.set('comment','');
                    app.get('notifications').success('Ваша заявка принята!', {
                        autoClear: true,
                        clearDuration: 2200
                    });
                },
                error : function (error){
                    console.log(error);
                    app.get('notifications').error('Ошибка при создании заявки! Error['+error.status+']: '+error.statusText, {
                        autoClear: false,
                        clearDuration: 2200
                    });
                }
            });
        }
    }
});
