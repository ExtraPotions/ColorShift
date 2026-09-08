// ==UserScript==
// @name           ManaPool Theme Picker
// @namespace      https://github.com/ExtraPotions/super-octo-parakeet
// @version        3.0.6
// @description    Theme palettes, accessible settings and site enhancements.
// @author         ExtraPotions
// @license        CC-BY-NC-4.0
// @icon           https://raw.githubusercontent.com/ExtraPotions/super-octo-parakeet/theme-picker-3.0.6/assets/manapool-favicon.svg
// @match          *://manapool.com/*
// @match          *://www.manapool.com/*
// @run-at         document-start
// @downloadURL    https://github.com/ExtraPotions/super-octo-parakeet/releases/latest/download/manapool-theme-picker.user.js
// @updateURL      https://github.com/ExtraPotions/super-octo-parakeet/releases/latest/download/manapool-theme-picker.user.js
// @require        https://raw.githubusercontent.com/ExtraPotions/super-octo-parakeet/theme-picker-3.0.6/theme-picker-common.js
// @grant          GM_getValue
// @grant          GM_setValue
// @grant          GM_registerMenuCommand
// ==/UserScript==
if(typeof ThemePicker==='undefined'||typeof ThemePicker.start!=='function'){
    const warn=()=>{const box=document.createElement('div');box.setAttribute('role','alert');box.textContent='Theme Picker could not load its shared helper. Reinstall the latest release in your userscript manager.';box.style.cssText='position:fixed;bottom:16px;right:16px;padding:16px;background:#421;color:white;z-index:2147483647';document.body.append(box);};
    if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',warn,{once:true});else warn();
  }else{
/* Site adapters: theme surfaces and features are separate from the shared menu. */
(() => {
  'use strict';
  const siteId = 'manapool';
  const icons = {"manapool":"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIGlkPSJMYXllcl8yIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgMTE1IDExNSI+PGRlZnM+PHN0eWxlPi5jbHMtMXtmaWxsOnVybCgjbGluZWFyLWdyYWRpZW50KTt9LmNscy0ye2ZpbGw6IzE1MTUxYzt9LmNscy0ze2ZpbGw6dXJsKCNsaW5lYXItZ3JhZGllbnQtOCk7fS5jbHMtNHtmaWxsOnVybCgjbGluZWFyLWdyYWRpZW50LTkpO30uY2xzLTV7ZmlsbDp1cmwoI2xpbmVhci1ncmFkaWVudC0zKTt9LmNscy02e2ZpbGw6dXJsKCNsaW5lYXItZ3JhZGllbnQtNCk7fS5jbHMtN3tmaWxsOnVybCgjbGluZWFyLWdyYWRpZW50LTIpO30uY2xzLTh7ZmlsbDp1cmwoI2xpbmVhci1ncmFkaWVudC02KTt9LmNscy05e2ZpbGw6dXJsKCNsaW5lYXItZ3JhZGllbnQtNyk7fS5jbHMtMTB7ZmlsbDp1cmwoI2xpbmVhci1ncmFkaWVudC01KTt9LmNscy0xMXtmaWxsOiNmZmY7c3Ryb2tlOiMwMDA7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO3N0cm9rZS13aWR0aDoycHg7fS5jbHMtMTJ7ZmlsbDp1cmwoI2xpbmVhci1ncmFkaWVudC0xNCk7fS5jbHMtMTN7ZmlsbDp1cmwoI2xpbmVhci1ncmFkaWVudC0xNSk7fS5jbHMtMTR7ZmlsbDp1cmwoI2xpbmVhci1ncmFkaWVudC0xNik7fS5jbHMtMTV7ZmlsbDp1cmwoI2xpbmVhci1ncmFkaWVudC0xNyk7fS5jbHMtMTZ7ZmlsbDp1cmwoI2xpbmVhci1ncmFkaWVudC0xMyk7fS5jbHMtMTd7ZmlsbDp1cmwoI2xpbmVhci1ncmFkaWVudC0xMik7fS5jbHMtMTh7ZmlsbDp1cmwoI2xpbmVhci1ncmFkaWVudC0xMCk7fS5jbHMtMTl7ZmlsbDp1cmwoI2xpbmVhci1ncmFkaWVudC0xMSk7fTwvc3R5bGU+PGxpbmVhckdyYWRpZW50IGlkPSJsaW5lYXItZ3JhZGllbnQiIHgxPSIyNC4yMTYxOSIgeTE9IjUzLjg4OTM5IiB4Mj0iNzUuNTg3NjYiIHkyPSI1My44ODkzOSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iI2JmZWZmZiIvPjxzdG9wIG9mZnNldD0iLjM1NjE5IiBzdG9wLWNvbG9yPSIjYmZlN2ZmIi8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjYmZkZmZmIi8+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgaWQ9ImxpbmVhci1ncmFkaWVudC0yIiB4MT0iMzIuOTEwMjgiIHkxPSI1OC4zMzA5OSIgeDI9Ijg0LjI4MTc1IiB5Mj0iNTguMzMwOTkiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiM4MGRmZmYiLz48c3RvcCBvZmZzZXQ9Ii42MDMwOSIgc3RvcC1jb2xvcj0iIzgwYzhmZiIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzgwYzBmZiIvPjwvbGluZWFyR3JhZGllbnQ+PGxpbmVhckdyYWRpZW50IGlkPSJsaW5lYXItZ3JhZGllbnQtMyIgeDE9IjQxLjYwNDM4IiB5MT0iNjIuNzcyNTkiIHgyPSI5Mi45NzU4NSIgeTI9IjYyLjc3MjU5IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjNDBjZmZmIi8+PHN0b3Agb2Zmc2V0PSIuMjM1MTMiIHN0b3AtY29sb3I9IiM0MGMwZmYiLz48c3RvcCBvZmZzZXQ9Ii43MDczMSIgc3RvcC1jb2xvcj0iIzQwYThmZiIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzQwYTBmZiIvPjwvbGluZWFyR3JhZGllbnQ+PGxpbmVhckdyYWRpZW50IGlkPSJsaW5lYXItZ3JhZGllbnQtNCIgeDE9IjUwLjI5ODQ3IiB5MT0iNjcuMjE0MTkiIHgyPSIxMDEuNjY5OTQiIHkyPSI2Ny4yMTQxOSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iIzAwYmZmZiIvPjxzdG9wIG9mZnNldD0iLjM4MTk3IiBzdG9wLWNvbG9yPSIjMDBhMGZmIi8+PHN0b3Agb2Zmc2V0PSIuNzYzODIiIHN0b3AtY29sb3I9IiMwOGYiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiMwMDgwZmYiLz48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCBpZD0ibGluZWFyLWdyYWRpZW50LTUiIHgxPSI5LjU2ODk4IiB5MT0iNTQuNjI3ODUiIHgyPSI0NS4xOTc5MSIgeTI9IjEwOS4xNDcyOCIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPjxzdG9wIG9mZnNldD0iLjA3NzY5IiBzdG9wLWNvbG9yPSIjM2IzODRkIi8+PHN0b3Agb2Zmc2V0PSIuNTk0OTMiIHN0b3AtY29sb3I9IiMyODI3M2IiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiMyMDIwMzMiLz48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCBpZD0ibGluZWFyLWdyYWRpZW50LTYiIHgxPSI5LjU2ODk4IiB5MT0iNTQuNjI3ODUiIHgyPSI0NS4xOTc5MSIgeTI9IjEwOS4xNDcyOCIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iIzU5NTU4MCIvPjxzdG9wIG9mZnNldD0iLjMyOTE5IiBzdG9wLWNvbG9yPSIjM2QzYjU5Ii8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjMDAwIi8+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgaWQ9ImxpbmVhci1ncmFkaWVudC03IiB4MT0iNDkuMzkwMSIgeTE9IjY4LjE0OTQ1IiB4Mj0iMTA1LjgyMjQ5IiB5Mj0iOTguMDM5NDkiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiM0ZTRjNjYiLz48c3RvcCBvZmZzZXQ9Ii4xMDYxMyIgc3RvcC1jb2xvcj0iIzQ4NDY2MCIvPjxzdG9wIG9mZnNldD0iLjY1ODAzIiBzdG9wLWNvbG9yPSIjMzAzMDQ4Ii8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjMjgyODQwIi8+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgaWQ9ImxpbmVhci1ncmFkaWVudC04IiB4MT0iNjkuNTg3NzMiIHkxPSI2NS4yNjk2OCIgeDI9Ijg2LjE2MTMxIiB5Mj0iMTA1LjM2ODI0IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjMTcxNjIxIi8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjMDAwIi8+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgaWQ9ImxpbmVhci1ncmFkaWVudC05IiB4MT0iOS4wMzM4NCIgeTE9IjE4LjU3MzM5IiB4Mj0iNTguMDEyMjEiIHkyPSI4MS42NzE2NiIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iIzU5NTQ3MyIvPjxzdG9wIG9mZnNldD0iLjAyNTUzIiBzdG9wLWNvbG9yPSIjNTY1MTcwIi8+PHN0b3Agb2Zmc2V0PSIuNDUwNDkiIHN0b3AtY29sb3I9IiMzNTMzNDkiLz48c3RvcCBvZmZzZXQ9Ii43OTAxIiBzdG9wLWNvbG9yPSIjMjEyMDMxIi8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjMWExYTI5Ii8+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgaWQ9ImxpbmVhci1ncmFkaWVudC0xMCIgeDE9IjI5Ljg1MTg2IiB5MT0iMTAuMzM2NzEiIHgyPSIxNjguODQ0NTQiIHkyPSI1MC40OTAxNSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iIzVlNWI3YSIvPjxzdG9wIG9mZnNldD0iLjA1OTQ2IiBzdG9wLWNvbG9yPSIjNTU1MzcwIi8+PHN0b3Agb2Zmc2V0PSIuMzI4NTciIHN0b3AtY29sb3I9IiMzNTM0NDkiLz48c3RvcCBvZmZzZXQ9Ii41NDM3MiIgc3RvcC1jb2xvcj0iIzIxMjEzMSIvPjxzdG9wIG9mZnNldD0iLjY3NjY3IiBzdG9wLWNvbG9yPSIjMWExYTI5Ii8+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgaWQ9ImxpbmVhci1ncmFkaWVudC0xMSIgeDE9IjYyLjUxMzY0IiB5MT0iMTkuNzcyMzQiIHgyPSIxMzkuODcxOTIiIHkyPSI0Mi4xMjAyOCIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iIzU2NTM3MCIvPjxzdG9wIG9mZnNldD0iLjI5MzQxIiBzdG9wLWNvbG9yPSIjMzUzNDQ5Ii8+PHN0b3Agb2Zmc2V0PSIuNTMwMjciIHN0b3AtY29sb3I9IiMyMTIxMzEiLz48c3RvcCBvZmZzZXQ9Ii42NzY2NyIgc3RvcC1jb2xvcj0iIzFhMWEyOSIvPjwvbGluZWFyR3JhZGllbnQ+PGxpbmVhckdyYWRpZW50IGlkPSJsaW5lYXItZ3JhZGllbnQtMTIiIHgxPSI0OC40MTY1NCIgeTE9IjMyLjc3OTg1IiB4Mj0iMTAwLjMwNTY1IiB5Mj0iNTEuNjcwMzUiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj48c3RvcCBvZmZzZXQ9Ii4wOTMwMyIgc3RvcC1jb2xvcj0iIzRlNGM2NiIvPjxzdG9wIG9mZnNldD0iLjEwMDk5IiBzdG9wLWNvbG9yPSIjNGQ0YjY1Ii8+PHN0b3Agb2Zmc2V0PSIuNjU2MDkiIHN0b3AtY29sb3I9IiMzNTM1NGYiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiMyZDJkNDciLz48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCBpZD0ibGluZWFyLWdyYWRpZW50LTEzIiB4MT0iNDYuNjU0OTkiIHkxPSI2NC44ODI0NSIgeDI9IjU4LjE5MDIiIHkyPSI2NC41NTI4NyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iIzIzMjIzMyIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzI0MjQzNiIvPjwvbGluZWFyR3JhZGllbnQ+PGxpbmVhckdyYWRpZW50IGlkPSJsaW5lYXItZ3JhZGllbnQtMTQiIHgxPSI5OS43OTkxIiB5MT0iMjQuNzg0NzkiIHgyPSIxMDMuMDYxMjgiIHkyPSI1My4xOTczMyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iIzE3MTYyMSIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzEzMTMxYyIvPjwvbGluZWFyR3JhZGllbnQ+PGxpbmVhckdyYWRpZW50IGlkPSJsaW5lYXItZ3JhZGllbnQtMTUiIHgxPSI3MC42ODEzNyIgeTE9IjY2LjA5OTg0IiB4Mj0iODYuNjI4NzUiIHkyPSI3NS44MzA0NSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPjxzdG9wIG9mZnNldD0iLjA4OTExIiBzdG9wLWNvbG9yPSIjNDQ0MjU5Ii8+PHN0b3Agb2Zmc2V0PSIuNjEwNDgiIHN0b3AtY29sb3I9IiMzMDMwNDciLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiMyODI4NDAiLz48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCBpZD0ibGluZWFyLWdyYWRpZW50LTE2IiB4MT0iLjY2Njg0IiB5MT0iMjIuODE4NDQiIHgyPSIyMC4yMjQ5MiIgeTI9IjQ4LjAxNDg4IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHN0b3Agb2Zmc2V0PSIuMDE4NDEiIHN0b3AtY29sb3I9IiM4YTg0YjMiLz48c3RvcCBvZmZzZXQ9Ii4yODQ1NyIgc3RvcC1jb2xvcj0iIzY5NjU4YyIvPjxzdG9wIG9mZnNldD0iLjU5NjM3IiBzdG9wLWNvbG9yPSIjNDc0NjY1Ii8+PHN0b3Agb2Zmc2V0PSIuODQ1ODYiIHN0b3AtY29sb3I9IiMzMzMzNGQiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiMyYzJjNDUiLz48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCBpZD0ibGluZWFyLWdyYWRpZW50LTE3IiB4MT0iMTAuMjU0NTIiIHkxPSI0LjgwMDI3IiB4Mj0iNTkuNjA1MTciIHkyPSIxOC45MjMzOCIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iIzhhODRiMyIvPjxzdG9wIG9mZnNldD0iLjI4OTc5IiBzdG9wLWNvbG9yPSIjNzY3MjlmIi8+PHN0b3Agb2Zmc2V0PSIuNzI4MjQiIHN0b3AtY29sb3I9IiM1ZTVkODgiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiM1NjU2ODAiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cG9seWdvbiBjbGFzcz0iY2xzLTIiIHBvaW50cz0iNjcuODIzNzMgMzAuNjE4NDMgNy4yNSA0Ny4xOTcyMyA3LjI1IDk1LjMxMjY3IDY3LjgyMzczIDc4LjgwMDI5IDY3LjgyMzczIDMwLjYxODQzIi8+PHBvbHlnb24gY2xhc3M9ImNscy0yIiBwb2ludHM9IjEwNy4wNTk0NSA1MC4zMDU3NiA2Ny44MjM3MyAzMC42MTg0MyA2Ny44MjM3MyA2MS4yNDQ4NSAxMDcuMDU5NDUgNTAuMzA1NzYiLz48cG9seWdvbiBjbGFzcz0iY2xzLTExIiBwb2ludHM9IjY2Ljg5MzU2IDc5LjY4NTY2IDY2Ljg5MzU2IDUuMTQ5NzUgMTUuNTIyMDkgMTkuMjA5OTMgMTUuNTIyMDkgOTMuNzQ1ODMgNjYuODkzNTYgNzkuNjg1NjYiLz48cG9seWdvbiBjbGFzcz0iY2xzLTEiIHBvaW50cz0iMjQuMjE2MTkgOTguMTg3NDMgNzUuNTg3NjYgODQuMTI3MjYgNzUuNTg3NjYgOS41OTEzNSAyNC4yMTYxOSAyMy42NTE1MyAyNC4yMTYxOSA5OC4xODc0MyIvPjxwb2x5Z29uIGNsYXNzPSJjbHMtNyIgcG9pbnRzPSIzMi45MTAyOCAxMDIuNjI5MDMgODQuMjgxNzUgODguNTY4ODUgODQuMjgxNzUgMTQuMDMyOTUgMzIuOTEwMjggMjguMDkzMTMgMzIuOTEwMjggMTAyLjYyOTAzIi8+PHBvbHlnb24gY2xhc3M9ImNscy01IiBwb2ludHM9IjQxLjYwNDM4IDEwNy4wNzA2MyA5Mi45NzU4NSA5My4wMTA0NSA5Mi45NzU4NSAxOC40NzQ1NSA0MS42MDQzOCAzMi41MzQ3MyA0MS42MDQzOCAxMDcuMDcwNjMiLz48cG9seWdvbiBjbGFzcz0iY2xzLTYiIHBvaW50cz0iMTAxLjY2OTk0IDk3LjQ1MjA1IDEwMS42Njk5NCAyMi45MTYxNSA1MC4yOTg0NyAzNi45NzYzMiA1MC4yOTg0NyAxMTEuNTEyMjMgMTAxLjY2OTk0IDk3LjQ1MjA1Ii8+PHBvbHlnb24gY2xhc3M9ImNscy0xMCIgcG9pbnRzPSI0Ni40ODU3MSAxMTUgNy4yNSA5NS4zMTI2NyA3LjI1IDQ3LjE5NzIzIDQ2LjQ4NTcxIDY2Ljg4NDU2IDQ2LjQ4NTcxIDExNSIvPjxwb2x5Z29uIGNsYXNzPSJjbHMtOCIgcG9pbnRzPSI0Ni40ODU3MSAxMTUgNy4yNSA5NS4zMTI2NyA3LjI1IDQ3LjE5NzIzIDQ2LjQ4NTcxIDY2Ljg4NDU2IDQ2LjQ4NTcxIDY4LjEwODIyIDguMzYzMDYgNDguOTg5NTIgOC42ODExNCA5NC40NDIxIDQ2LjQ4NTcxIDExMy42NDQxMyA0Ni40ODU3MSAxMTUiLz48cG9seWdvbiBjbGFzcz0iY2xzLTkiIHBvaW50cz0iNTcuODExMzkgNjMuNzg0NzcgNDYuNDg1NzEgNjYuODg0NTYgNDYuNDg1NzEgMTE1IDEwNy4wNTk0NSA5OC40MjEyIDEwNy4wNTk0NSA1MC4zMDU3NiA5NS4yMTM5MiA1My41NDc4NCA5NS4yMTM5MiA4MC41MDgyOCA3MC4zMjk5OCA4Ny40NzE5IDcwLjMyOTk4IDk3LjMwMTIgNTcuODExNDEgMTAwLjU3NDUgNTcuODExNDEgNzMuNTczOTkgNTcuODExMzkgNjMuNzg0NzciLz48cG9seWdvbiBjbGFzcz0iY2xzLTMiIHBvaW50cz0iNDYuNDg1NzEgMTEzLjY0NDEzIDQ2LjQ4NTcxIDExNSAxMDcuMDU5NDUgOTguNDIxMiAxMDcuMDU5NDUgNTAuMzA1NzYgMTA2LjEyMDA2IDUwLjU2NzU3IDEwNi4xOTMzNyA5Ny40NjE3NCA0Ni40ODU3MSAxMTMuNjQ0MTMiLz48cG9seWdvbiBjbGFzcz0iY2xzLTQiIHBvaW50cz0iNDYuNDg1NzEgNjYuODg0NTYgNy4yNSA0Ny4xOTcyMyA3LjI1IDE2LjIxMjk0IDQ2LjQ4NTcxIDM1LjkwMDI3IDQ2LjQ4NTcxIDY2Ljg4NDU2Ii8+PHBvbHlnb24gY2xhc3M9ImNscy0xOCIgcG9pbnRzPSIxMDcuMDU5NDUgMTkuMzIxNDcgNjYuMjgwMzkgLjEwMjI4IDcuMjUgMTYuMjEyOTQgNDYuNDg1NzEgMzUuOTAwMjcgMTA3LjA1OTQ1IDE5LjMyMTQ3Ii8+PHBvbHlnb24gY2xhc3M9ImNscy0xOSIgcG9pbnRzPSIxMDcuMDU5NDUgMTkuMzIxNDcgNjYuMjgwMzkgLjEwMjI4IDY2LjI5MjExIC43MTc3IDEwNC43NjM2MSAxOS4wODY0MiA0Ni40ODU3IDM0Ljk4MDE3IDQ2LjQ4NTcxIDM1LjkwMDI3IDEwNy4wNTk0NSAxOS4zMjE0NyIvPjxwb2x5Z29uIGNsYXNzPSJjbHMtMTciIHBvaW50cz0iOTUuMjEzOTMgNTMuNTQ3ODMgMTA3LjA1OTQ1IDUwLjMwNTc2IDEwNy4wNTk0NSAxOS4zMjE0NyA0Ni40ODU3MSAzNS45MDAyNyA0Ni40ODU3MSA2Ni44ODQ1NiA1Ny44MTE0MSA2My43ODQ3NiA1Ny44MTE0MSA0NC4wNDExNyA3Ni41MTI2NiA1MC45NzkxIDk1LjIxMzkyIDMzLjgwNDI1IDk1LjIxMzkzIDUzLjU0NzgzIi8+PHBvbHlnb24gY2xhc3M9ImNscy0xNiIgcG9pbnRzPSI0Ni40ODU3MSA2NS42NTU3NSA0Ni40ODU3MSA2Ni44ODQ1NiA1Ny44MTE0MSA2My43ODQ3NiA1Ny44MTE0MSA2Mi41NjY0MiA0Ni40ODU3MSA2NS42NTU3NSIvPjxwb2x5Z29uIGNsYXNzPSJjbHMtMTIiIHBvaW50cz0iOTUuMjEzOTIgNTMuNTQ3ODQgMTA3LjA1OTQ1IDUwLjMwNTc2IDEwNy4wNTk0NSAxOS4zMjE0NyAxMDYuMDMwOTYgMTkuNjAyOTYgMTA2LjEwMDI5IDQ5LjQ0Nzc5IDk1LjIxMzkzIDUyLjU2MTY2IDk1LjIxMzkyIDUzLjU0Nzg0Ii8+PHBvbHlnb24gY2xhc3M9ImNscy0xMyIgcG9pbnRzPSI4NS4wMTE3OCA3MS44MTc5OSA2OC41MzMzNyA3Ni4zMjgwNyA2OC41MzMzNyA2Ny44MTUwMyA4NS4wMTE3OCA2My4zMDQ5NSA4NS4wMTE3OCA3MS44MTc5OSIvPjxwb2x5Z29uIGNsYXNzPSJjbHMtMTQiIHBvaW50cz0iOC4zNTQ0NyA0Ny43NTE0MiA3LjI1IDQ3LjE5NzIzIDcuMjUgMTYuMjEyOTQgOC4yODE0OSAxNi43MzA1MSA4LjM1NDQ3IDQ3Ljc1MTQyIi8+PHBvbHlnb24gY2xhc3M9ImNscy0xNSIgcG9pbnRzPSI5LjE0NTU5IDE2LjM4NjUyIDY2LjI5MjExIC43MTc3IDY2LjI4MDM5IC4xMDIyOCA3LjI1IDE2LjIxMjk0IDQ2LjQ4NTcxIDM1LjkwMDI3IDQ2LjQ4NTcgMzQuOTgwMTcgOS4xNDU1OSAxNi4zODY1MiIvPjwvc3ZnPg=="};
  function theme(state,colors,accent,surfaces,extras='') {
    if(state.palette==='original')return '';
    const [,body,surface,header]=colors;
    return `html{color-scheme:dark}html,body{background:${body}!important;color:#d0d0cc!important}
      ${surfaces}{background:${surface}!important;color:#d0d0cc!important;border-color:#ffffff20!important}
      header,footer,.header,.footer,.nav__outer-wrap,.nav__inner-wrap,.nav__button-container{background:${header}!important;color:#ddd!important}
      a{color:${accent}!important}a:hover{filter:brightness(1.15)}
      input:not([type=checkbox]):not([type=radio]),textarea,select{background:${surface}!important;color:#eee!important;border-color:#777!important}
      h1,h2,h3,h4,h5,h6{color:#bfcbd8!important}
      button:not([role=switch]),.button-n,.btn,.form__submit-button{background:${header}!important;color:#ddd!important;border-color:#777!important}
      ${extras}`;
  }
  function shared(state) {
    return (state.brighterLinks?'a,a:visited{color:#9ad8f8!important}':'')+
      (state.hideAds?'.hpsgck,.fanatical_container,[id*="google_ads"],.adsbygoogle,[data-ad],.promo-banner,.sponsored,.bot-marketing-panel{display:none!important}':'');
  }
  const sections=new Map();
  function siteControls(state,colors,accent,selectors) {
    if(state.palette==='original')return '';
    return `:is(${selectors}){background:${colors[3]}!important;color:#eee!important;border-color:#858580!important;text-shadow:none!important;box-shadow:none!important}
      :is(${selectors}):hover{background:${colors[2]}!important;color:#fff!important}
      :is(${selectors}):focus-visible{outline:2px solid ${accent}!important;outline-offset:2px}
      input::placeholder,textarea::placeholder{color:#c0c0bc!important;opacity:1!important}`;
  }
  function steamControls(state,colors,accent) {
    if(state.palette==='original')return '';
    const surface=colors[2],control=colors[3];
    return `
      .nav__button,.page__heading__breadcrumbs,.pagination__navigation,.esgst-heading-button,
      .esgst-gf-button,.giveaway__columns>div,.esgst-gwc,.esgst-gwr{
        background:${control}!important;color:#d0d0cc!important;border-color:#ffffff30!important;text-shadow:none!important;box-shadow:none!important}
      .esgst-gf-container,.esgst-gf-box,.esgst-panel,.esgst-popup,.esgst-menu-layer,
      .fanatical_container,.fanatical_description,.sidebar__search-container{
        background:${surface}!important;color:#d0d0cc!important;border-color:#ffffff30!important;text-shadow:none!important}
      .esgst-heading-button:hover,.esgst-gf-button:hover,.nav__button:hover{
        background:${surface}!important;color:#fff!important}
      .esgst-heading-button:focus-visible,.esgst-gf-button:focus-visible,.nav__button:focus-visible{
        outline:2px solid ${accent}!important;outline-offset:2px}
      .giveaway__columns>div a,.esgst-heading-button a,.pagination__navigation a{color:${accent}!important;text-shadow:none!important}
      .esgst-gc{background:${control}!important;color:#d0d0cc!important;border:1px solid #ffffff30!important;text-shadow:none!important}
      .giveaway__column--contributor-level--positive,.fanatical_pricing{background:#254521!important;color:#d8ffc5!important;text-shadow:none!important}
      .giveaway__column--contributor-level--negative{background:#662626!important;color:#ffdbdb!important;text-shadow:none!important}
    `;
  }
  function collapse(api,record,value) {
    record.collapsed=value;
    const map=api.read('sections',{});map[record.title]=value;api.write('sections',map);
    record.button.setAttribute('aria-expanded',String(!value));record.button.textContent=value?'▸':'▾';
    for(const child of record.content)child.classList.toggle('tp-section-hidden',value);
    if(value){record.scroll=scrollY;const positions=api.read('sectionScroll',{});positions[record.title]=scrollY;api.write('sectionScroll',positions);}
    else if(Number.isFinite(record.scroll)&&Math.abs(scrollY-record.scroll)<120)scrollTo(0,record.scroll);
  }
  const adapters={
    manapool:{name:'ManaPool',accent:'#5eb0ef',options:[['dense','Denser card grid'],['hideSoldOut','Hide sold out'],['compactPrices','Compact prices'],['alwaysChips','Always show chips']],
      actions:[['Collapse all',api=>{for(const record of sections.values())collapse(api,record,true);} ],['Expand all',api=>{for(const record of sections.values())collapse(api,record,false);}]],
      css(state,colors,accent){return shared(state)+theme(state,colors,accent,
        'main,#app,.app,article,.bg-white,.bg-gray-50,.bg-gray-100,.bg-popover,[data-popover-content],[role=dialog],[role=menu]',
        `:root{--background:60 3% 14%;--foreground:60 3% 80%;--card:60 3% 16%;--popover:60 3% 16%;--border:60 3% 28%}
        .text-green-700,.text-xl.font-bold.text-green-700{color:#22c55e!important}
        .bg-blue-100{background:#5eb0ef!important;color:#061018!important}.bg-green-100{background:#7ddea0!important;color:#062012!important}
        .bg-yellow-100,.bg-amber-100{background:#f0d35a!important;color:#1a1400!important}.bg-purple-100{background:#c9a0ef!important;color:#1a0828!important}
        .bg-orange-100{background:#f0a06a!important;color:#1a0c00!important}.bg-pink-100{background:#f5b0c8!important;color:#1a0610!important}
        .gradient-wrapper{height:15px!important;max-height:15px!important;overflow:hidden}.gradient-rare{background:linear-gradient(90deg,#d4af37,#fc0)!important}
        .gradient-mythic{background:linear-gradient(90deg,#b98747,#ffca89)!important}.gradient-uncommon{background:linear-gradient(90deg,#909497,#c0c0c0)!important}
        header a[href="/"]{color:${accent}!important}`)+
        siteControls(state,colors,accent,'button:not([role=switch]),a[role=button],a.bg-blue-700,a.bg-blue-600,select,input:not([type=checkbox]):not([type=radio]),textarea')+
        (state.palette==='original'?'':'.text-gray-500,.text-gray-600,.text-gray-700,.text-gray-800,.text-gray-900{color:#d0d0cc!important}')+
        '.tp-section-hidden{display:none!important}.tp-section-heading{display:block!important;visibility:visible!important}.tp-section-button{border-radius:6px;padding:4px 8px;margin-right:8px;cursor:pointer}'+
        (state.dense?'ul.grid,.grid{gap:.5rem!important}article{margin:0!important}':'')+
        (state.hideSoldOut?'[data-tp-sold=true]{display:none!important}':'')+
        (state.compactPrices?'.text-green-700,.text-xl.font-bold{font-size:.95rem!important;line-height:1.2!important}':'')+
        (state.alwaysChips?'.rounded-b-lg.bg-gray-50,.inline-flex.items-center.border{opacity:1!important;visibility:visible!important}':'');},
      update(api){
        for(const card of document.querySelectorAll('article,li.group,.group.bg-white')) {
          const sold=/sold\s*out|out\s*of\s*stock/i.test(card.textContent)||!!card.querySelector('[data-stock="0"],[class*="out-of-stock"]');
          if(card.dataset.tpSold!==String(sold))card.dataset.tpSold=String(sold);
        }
        for(const [node] of sections)if(!node.isConnected)sections.delete(node);
        if(location.pathname.replace(/\/+$/,'')!=='')return;
        for(const heading of document.querySelectorAll('h2')) {
          if(heading.querySelector('.tp-section-button'))continue;
          let container=heading.parentElement;
          while(container&&container!==document.body&&!container.querySelector('ul,.grid,[class*=grid-cols]'))container=container.parentElement;
          if(!container||container===document.body||sections.has(container)||container.querySelectorAll('h2').length!==1)continue;
          const title=heading.textContent.trim();
          const content=[...container.children].filter(el=>el!==heading&&!el.contains(heading));if(!content.length)continue;
          const button=api.element('button',{type:'button',class:'tp-section-button','aria-label':'Toggle '+title});heading.prepend(button);
          heading.classList.add('tp-section-heading');
          const record={title,button,content,collapsed:false,scroll:api.read('sectionScroll',{})[title]};sections.set(container,record);
          let legacy={};try{legacy=JSON.parse(localStorage.getItem('mpge-collapsed-sections-v1')||'{}');}catch{}
          collapse(api,record,api.read('sections',legacy)[title]===true);
          button.addEventListener('click',()=>collapse(api,record,!record.collapsed));
        }
      }
    },
    scryfall:{name:'Scryfall',accent:'#7ec8f0',options:[['dimWarnings','Dim content warnings']],
      css(state,colors,accent){return shared(state)+theme(state,colors,accent,
        '#main,.main,.homepage,.card-profile,.card-text,.card-grid,.print-gallery,.prints,.prints-table,.set-details,.reference-block,.rulings,.sidebar,.toolbox,.buybox,.search-info,.search-controls,.autocomplete,.select2-dropdown,.modal,.popover,table,td,th',
        '.card-image,img.card,picture{background:transparent!important}')+
        siteControls(state,colors,accent,'.button-n,.select-n,button:not([role=switch]),select,input:not([type=checkbox]):not([type=radio]),textarea')+
        (state.dimWarnings?'.card-content-warning{opacity:.4;filter:grayscale(.55);max-height:3.5rem;overflow:hidden}.card-content-warning:hover,.card-content-warning:focus-within{opacity:1;filter:none;max-height:none}':'');},
      update(api){const toolbox=document.querySelector('.toolbox-links');if(toolbox&&!toolbox.querySelector('[data-tp-launch]')){
        const item=api.element('li'),button=api.element('button',{type:'button',class:'button-n','data-tp-launch':'true'},'Theme Picker settings');
        button.addEventListener('click',api.open);item.append(button);toolbox.append(item);
      }}
    },
    steamgifts:{name:'SteamGifts',accent:'#7ec8f0',options:[['hideEntered','Hide entered'],['hideEnded','Hide ended'],['softHideFeatured','Soft-hide featured / pinned'],['highContrastEnter','High-contrast Enter']],
      css(state,colors,accent){return shared(state)+theme(state,colors,accent,
        '.page__outer-wrap,.page__inner-wrap,.page__heading,.sidebar,.sidebar__heading,.table,.table__row-outer-wrap,.table__row-inner-wrap,.giveaway__row-inner-wrap,.featured__container,.comment__summary,.comment__description,.comment__entity,.form__row,.form__input-description,.pagination,.popup,.popup__heading,.popup__description,.markdown,.nav__absolute-dropdown,.nav__row,.widget-container,.esgst-popup,.esgst-menu-layer,.esgst-panel,.esgst-gv-popout,#dlg-box,#dlg-body,.ui-dialog,.ui-widget-content',
        '.sidebar__entry-insert,.form__submit-button{background:#315b27!important;color:#d8ffc5!important}.sidebar__entry-delete{background:#7f2828!important;color:#ffdbdb!important}.giveaway__heading__name{color:#c1d8ec!important}.giveaway__columns,.comment__username{color:#bbb!important}.is-faded{opacity:.55}.giveaway__image,.giveaway__image-outer-wrap{background-color:transparent!important}')+
        steamControls(state,colors,accent)+
        (state.hideEntered?'.giveaway__row-outer-wrap:has(.is-faded),.giveaway__row-outer-wrap:has(.esgst-faded),.giveaway-gridview .faded{display:none!important}':'')+
        (state.hideEnded?'[data-tp-ended=true]{display:none!important}':'')+
        (state.softHideFeatured?'.featured__container,.pinned-giveaways{opacity:.32;max-height:52px;overflow:hidden}.featured__container:hover,.featured__container:focus-within,.pinned-giveaways:hover,.pinned-giveaways:focus-within{opacity:1;max-height:none}':'')+
        (state.highContrastEnter?'.sidebar__entry-insert,.form__submit-button{background:#125c14!important;color:#fff!important;border:2px solid #fff!important;font-weight:bold!important}':'');},
      update(){for(const row of document.querySelectorAll('.giveaway__row-outer-wrap')){
        const ended=!!row.querySelector('.fa-times-circle')||[...row.querySelectorAll('[title]')].some(el=>/ended/i.test(el.title));
        if(row.dataset.tpEnded!==String(ended))row.dataset.tpEnded=String(ended);
      }}
    }
  };
  const site=adapters[siteId];site.icon=icons[siteId];
  ThemePicker.start(site);
})();

}
