<p align="center"><br><img src="https://user-images.githubusercontent.com/236501/85893648-1c92e880-b7a8-11ea-926d-95355b8175c7.png" width="128" height="128" /></p>
<h3 align="center">MDM Managed User Defaults</h3>
<p align="center"><strong><code>@capacitor-community/managed-defaults</code></strong></p>
<p align="center">
  Provides iOS functionality for getting individual keys within the com.apple.configuration.managed Dictionary, as passed to an app by an MDM.
</p>

<p align="center">
  <img src="https://img.shields.io/maintenance/yes/2021" />
  <a href="https://github.com/danleedham/capacitor-managed-defaults/actions?query=workflow%3A%22Build%20Plugin%22"><img src="https://img.shields.io/github/workflow/status/danleedham/capacitor-managed-defaults/Build%20Plugin" /></a>
  <img src="https://img.shields.io/github/package-json/v/danleedham/capacitor-managed-defaults" />
  <img src="https://img.shields.io/github/v/release/danleedham/capacitor-managed-defaults" />
  <img src="https://img.shields.io/github/languages/count/danleedham/capacitor-managed-defaults" />
  <img src="https://img.shields.io/github/languages/top/danleedham/capacitor-managed-defaults" />
</p>
                                                                                         

## Maintainers

| Maintainer | GitHub | Social |
| -----------| -------| -------|
| danleedham | [danleedham](https://github.com/danleedham) | [@danleedham](https://twitter.com/danleedham) |

## Installation

```
npm install https://github.com/danleedham/capacitor-managed-defaults
```

## Configuration

None

## Usage

```js
import { ManagedStorage } from 'managed-defaults';

async storageGetManagedObject(key: string) {
  const ret = await ManagedStorage.getManaged({ key });
  return JSON.parse(ret.value);
}
```


