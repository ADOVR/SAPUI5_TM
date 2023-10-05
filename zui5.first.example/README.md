## Application Details
|               |
| ------------- |
|**Generation Date and Time**<br>Mon May 16 2022 18:14:00 GMT+0200 (Mitteleuropäische Sommerzeit)|
|**App Generator**<br>@sap/generator-fiori|
|**App Generator Version**<br>1.3.6|
|**Generation Platform**<br>Visual Studio Code|
|**Floorplan Used**<br>simple|
|**Service Type**<br>None|
|**Service URL**<br>N/A
|**Module Name**<br>zui5.first.example|
|**Application Title**<br>Dies ist der Titel|
|**Namespace**<br>|
|**UI5 Theme**<br>sap_fiori_3|
|**UI5 Version**<br>Latest|
|**Enable Code Assist Libraries**<br>True|
|**Add Eslint configuration**<br>False|
|**Enable Telemetry**<br>True|

## zui5.first.example

Dies ist die Beschreibung

### Starting the generated app

-   This app has been generated using the SAP Fiori tools - App Generator, as part of the SAP Fiori tools suite.  In order to launch the generated app, simply run the following from the generated app root folder:
-   Change User/Password in .env-File
-   Adjust hostname, port and client in the customTasks section of ui5-deploy.yaml file:
  customTasks:
    - name: deploy-to-abap
      afterTask: generateCachebusterInfo
      configuration:
        target:
          url: https://**<host>**:**<port>**
          client: "**<client>**"
          auth: basic

```
To run this App execute two commands in Terminal:
    npm install
    npm start
```

#### Pre-requisites:

1. Active NodeJS LTS (Long Term Support) version and associated supported NPM version.  (See https://nodejs.org)




Test1234567

