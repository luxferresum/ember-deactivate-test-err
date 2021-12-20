import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class NewAddressRoute extends Route {
  @service store;

  model() {
    return this.store.createRecord('address');
  }

  deactivate() {
    if (this.controller.model.isNew) {
      this.controller.model.destroyRecord();
    }
  }
}
