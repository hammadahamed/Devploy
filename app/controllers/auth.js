import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject } from '@ember/service';

export default class AuthController extends Controller {
    @inject toggleMenu;
}
