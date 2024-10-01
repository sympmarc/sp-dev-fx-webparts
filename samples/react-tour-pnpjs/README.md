# Tour Sample

## Summary

A SPFx web part using [PnP/PnPjs](https://pnp.github.io/pnpjs/), [@pnp/spfx-property-controls](https://sharepoint.github.io/sp-dev-fx-property-controls/controls/PropertyFieldCollectionData/) and [ReactTourJS](https://reactour.js.org/).
It allows to create a configurable tutorial/tour of a SharePoint modern page for adoption scope.
When you start the tour, a modal will be displayed, with a description of the highlighted area, and you can go to the next step or go back, thus navigating inside the page. The user will see the descriptions and will have the opportunity to preview the advice that the publisher thought for him.
The property pane shows dynamically all web parts in the current page, using [PnP/PnPjs](https://pnp.github.io/pnpjs/) to make easy page tour configuration.

![WebPartInAction](./assets/react-tour-pnpjs-webpart-animated.gif)

![WebPartInAction](./assets/react-tour-pnpjs-webpart-animated-details.png)

![WebPartInAction](./assets/react-tour-pnpjs-webpart-configuration.gif)

## Compatibility

| :warning: Important          |
|:---------------------------|
| Every SPFx version is only compatible with specific version(s) of Node.js. In order to be able to build this sample, please ensure that the version of Node on your workstation matches one of the versions listed in this section. This sample will not work on a different version of Node.|
|Refer to <https://aka.ms/spfx-matrix> for more information on SPFx compatibility.   |

![SPFx 1.18.2](https://img.shields.io/badge/SPFx-1.18.2-green.svg)
![Node.js v16 | v18](https://img.shields.io/badge/Node.js-v16%20%7C%20v18-green.svg)
![Compatible with SharePoint Online](https://img.shields.io/badge/SharePoint%20Online-Compatible-green.svg)
![Does not work with SharePoint 2019](https://img.shields.io/badge/SharePoint%20Server%202019-Incompatible-red.svg)
![Does not work with SharePoint 2016 (Feature Pack 2)](https://img.shields.io/badge/SharePoint%20Server%202016%20(Feature%20Pack%202)-Incompatible-red.svg "SharePoint Server 2016 Feature Pack 2 requires SPFx 1.1")
![Local Workbench Compatible](https://img.shields.io/badge/Local%20Workbench-Compatible-green.svg)
![Hosted Workbench Compatible](https://img.shields.io/badge/Hosted%20Workbench-Compatible-green.svg)
![Compatible with Remote Containers](https://img.shields.io/badge/Remote%20Containers-Compatible-green.svg)

## Applies to

* [SharePoint Framework](https://learn.microsoft.com/sharepoint/dev/spfx/sharepoint-framework-overview)
* [Microsoft 365 tenant](https://learn.microsoft.com/sharepoint/dev/spfx/set-up-your-development-environment)

## Contributors

* [Federico Porceddu](https://github.com/fredupstair)
* [Alberto Gutierrez](https://github.com/albegut)

## Version history

Version|Date|Comments
-------|----|--------
1.0|November 23, 2019|Initial release
1.1|March 20, 2024|Upgrade SPFx version

## Minimal Path to Awesome

* Clone this repository
* in the command line run:
  * restore dependencies: `npm install`
  * build solution `gulp build --ship`
  * bundle solution: `gulp bundle --ship`
  * package solution: `gulp package-solution --ship`
  * locate solution at `.\sharepoint\solution\react-tour-pnpjs.sppkg`
  * upload it to your tenant app catalog
  * add `react-tour-pnpjs` app to your site
  * add `react-tour-pnpjs` web part to your page to see it in action

> This sample can also be opened with [VS Code Remote Development](https://code.visualstudio.com/docs/remote/remote-overview). Visit <https://aka.ms/spfx-devcontainer> for further instructions.

## Features

This Web Part illustrates the following concepts on top of the SharePoint Framework:

* How to use [@pnp/spfx-property-controls - PropertyFieldCollectionData](https://sharepoint.github.io/sp-dev-fx-property-controls/controls/PropertyFieldCollectionData/).
* How to extend with custom render [@pnp/spfx-property-controls - PropertyFieldCollectionData](https://sharepoint.github.io/sp-dev-fx-property-controls/controls/PropertyFieldCollectionData/).
* How to retrieve all SPFx web part in the current page using [PnP/PnPjs](https://pnp.github.io/pnpjs/)
* How to include external React Component [ReactTourJS](https://reactour.js.org/)

## Disclaimer

**THIS CODE IS PROVIDED *AS IS* WITHOUT WARRANTY OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING ANY IMPLIED WARRANTIES OF FITNESS FOR A PARTICULAR PURPOSE, MERCHANTABILITY, OR NON-INFRINGEMENT.**

<img src="https://m365-visitor-stats.azurewebsites.net/sp-dev-fx-webparts/react-tour-pnpjs" />
