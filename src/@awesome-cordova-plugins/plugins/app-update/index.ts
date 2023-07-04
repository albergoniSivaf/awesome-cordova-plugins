/**
 * This is a template for new plugin wrappers
 *
 * TODO:
 * - Add/Change information below
 * - Document usage (importing, executing main functionality)
 * - Remove any imports that you are not using
 * - Remove all the comments included in this template, EXCEPT the @Plugin wrapper docs and any other docs you added
 * - Remove this note
 *
 */
import { Injectable } from '@angular/core';
import {
  Plugin,
  Cordova,
  CordovaProperty,
  CordovaInstance,
  InstanceProperty,
  AwesomeCordovaNativePlugin,
} from '@awesome-cordova-plugins/core';
import { Observable } from 'rxjs';

export interface AppUpdateOptions {
  authType?: string;
  username?: string;
  password?: string;
  skipPromptDialog?: boolean;
  skipProgressDialog?: boolean;
}

/**
 * @name App Update
 * @description
 * This plugin does something
 *
 * @usage
 * ```typescript
 * import { AppUpdate } from '@awesome-cordova-plugins/app-update';
 *
 *
 * constructor(private appUpdate: AppUpdate) { }
 *
 * ...
 *
 *
 * this.appUpdate.functionName('Hello', 123)
 *   .then((res: any) => console.log(res))
 *   .catch((error: any) => console.error(error));
 *
 * ```
 */
@Plugin({
  pluginName: 'AppUpdate',
  plugin: 'cordova-plugin-app-update', // npm package name, example: cordova-plugin-camera
  pluginRef: 'AppUpdate', // the variable reference to call the plugin, example: navigator.geolocation
  repo: 'https://github.com/albergoniSivaf/cordova-plugin-app-update', // the github repository URL for the plugin
  install: '', // OPTIONAL install command, in case the plugin requires variables
  installVariables: [], // OPTIONAL the plugin requires variables
  platforms: ['Android'], // Array of platforms supported, example: ['Android', 'iOS']
})
@Injectable()
export class AppUpdate extends AwesomeCordovaNativePlugin {
  /**
   * Check and update
   * @param {string} updateUrl update api url
   * @param {AppUpdateOptions} [options] options
   * @return {Promise<any>} Returns a promise that resolves when something happens
   */
  @Cordova({
    sync: true,
  })
  checkAppUpdate(updateUrl: string, options?: AppUpdateOptions): Promise<any> {}
}
