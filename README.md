# Introduction

We will track crypto based on this app. Users are able to visualize the current price and the change in price in % for the last 24 hours.

## Main Features of the app

### 1) List of cryptocurrencies

Users are able to visualize the list of cryptocurrencies they add on the app

### 2) Current price and percentage change in the last 24h

Users are able to visualize:

- Change in percentage in USD in the last 24h

### 3) API to get pricing and percentage change

We are using [Messari](https://messari.io/api/docs) for pricing and percentage change. find sample bellow:
https://data.messari.io/api/v1/assets/btc/metrics

## **Tests**

### **End-to-End Tests**

#### **Note**

- [documentation](https://docs.expo.dev/build-reference/e2e-tests/) to configure e2e testing with react native expo via Detox

- For this project e2e testing is just configured to run on android emulator.

#### **Pre Steps**

We are using `detox` framework along with `jest` as test-runner.  
We added `@config-plugins/detox` plugin to automatically configure the Android native code to support Detox. So we nee to
Run `npx expo prebuild` to generate the android folder.

#### **Run e2e test locally**

- Run `yarn e2e:build` to generate the `apk` release for our test

- Update with your emulator name under .detoxrc.js file :

```json
{
  /...../
  emulator: {
   type: 'android.emulator',
   device: {
    avdName: 'YOUR_AVD_NAME',
          },
  },
}
```

- Run `"e2e:build": "npx detox test -c  android.emu.release"` will run any test under e2e folder that end with `.test.js`

- Test screenshots available under the artifacts folder

#### **Run e2e test in EAS**

- Run `yarn eas:build:test` to trigger `eas build` with `test` profile and `android` platform
- `eas-build-pre-install` eas hooks script will prepare the environment
- `eas-build-on-success` the eas hooks script will run the test
- Notes that YOUR_AVD_NAME should be the same one as .detoxrc.js  
  `ANDROID_EMULATOR=YOUR_AVD_NAME`  
  `avdmanager --verbose create avd --force --name "YOUR_AVD_NAME" --device "pixel_4" --package "system-images;android-32;google_apis;x86_64"`
