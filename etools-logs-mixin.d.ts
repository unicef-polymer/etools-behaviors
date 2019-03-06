/**
 * DO NOT EDIT
 *
 * This file was automatically generated by
 *   https://github.com/Polymer/tools/tree/master/packages/gen-typescript-declarations
 *
 * To modify these typings, edit the source file(s):
 *   etools-logs-mixin.js
 */


// tslint:disable:variable-name Describing an API that's defined elsewhere.
// tslint:disable:no-any describes the API as best we are able today

import {dedupingMixin} from '@polymer/polymer/lib/utils/mixin.js';


/**
 * Can be used to log errors, warnings and other info like this.
 *
 * Each method can have 3 args:
 * - the message you want to log
 * - a prefix for log message
 * - additional data, anything
 *
 * ## Available logging levels (the levels are cumulative)
 * - OFF (default)
 * - ERROR - only errors will be displayed
 * - WARN - errors and warning will be displayed
 * - INFO - errors, warning and info logs displayed
 *
 * To configure the logging level in your app config do this:
 * window.EtoolsLogsLevel = window.EtoolsLogsLevel || 'INFO';
 */
declare function EtoolsLogsMixin<T extends new (...args: any[]) => {}>(base: T): T & EtoolsLogsMixinConstructor;

interface EtoolsLogsMixinConstructor {
  new(...args: any[]): EtoolsLogsMixin;
}

export {EtoolsLogsMixinConstructor};

interface EtoolsLogsMixin {

  /**
   * Available log levels:
   *    OFF
   *    ERROR
   *    WARN
   *    INFO
   */
  etoolsLogsLevel: string|null|undefined;
  _getLogLevel(): any;
  _initAndGetLogLevel(forceLevelInit: any): any;
  _getEtoolsLogMessages(logPrefix: any, message: any, messagePrefix: any): any;
  _canLog(levels: any, forceLevelInit: any): any;
  logError(message: any, messagePrefix: any, other: any, forceLevelInit: any): void;
  logWarn(message: any, messagePrefix: any, other: any, forceLevelInit: any): void;
  logInfo(message: any, messagePrefix: any, other: any, forceLevelInit: any): void;
}
