/*
In NativeScript, the app.ts file is the entry point to your application.
You can use this file to perform app-level initialization, but the primary
purpose of the file is to pass control to the app’s first page.
*/

import { svelteNativeNoFrame } from 'svelte-native';
import { registerNativeViewElement } from 'svelte-native/dom';
import App from './App.svelte';

import { installMixins } from '@nativescript-community/ui-material-core';
import { TabContentItem, TabStrip, TabStripItem, Tabs } from '@nativescript-community/ui-material-tabs';

registerNativeViewElement('tabs', () => Tabs);
registerNativeViewElement('tabStrip', () => TabStrip);
registerNativeViewElement('tabStripItem', () => TabStripItem);
registerNativeViewElement('tabContentItem', () => TabContentItem);

installMixins();

svelteNativeNoFrame(App, {})
