
import { LitElement } from 'lit-element';

interface Constructor<T> {
  new(...args: any[]): T;
}

/**
 * Cached page data refresh helper functionality
 */
declare function EtoolsPageRefreshMixinLit<T extends Constructor<LitElement>>(base: T): {
  new (...args: any[]): {
    dexieDbsNumber: number|null|undefined;
    dbsAttemptedToDelete: any[]|null|undefined;
    refreshInProgress: boolean|null|undefined;
    connectedCallback(): void;
    refresh(): void;
    clearLocalStorage(): void;
    clearDexieDbs(): void;
    deleteDexieDb(dbName: any): void;
    _refreshPage(): void;
  }
} & T & Constructor<LitElement>;


export default EtoolsPageRefreshMixinLit;
