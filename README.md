
# Step to start the Project


- `npm install`

Before start the project - first time we need to run a pods, by enter the below command

- `npm run pod-install`

Then run the app by using - `npm run ios`

For further development process we need debugger tools, for that follow the below step

Download Flipper for Mac from this link: https://fbflipper.com

Then install react navigation dev tools  by using the below command and if you need more info check this link https://reactnavigation.org/docs/devtools/

- `npm install @react-navigation/devtools`

- `npm install --save-dev react-native-flipper`

And then install redux dev tools using below command

- `npm add redux-flipper react-native-flipper`

After installing all dependancies and re-run the below pod command

- `npm run pod-install`

Run the app by using - `npm run ios` and then run, - `npx flipper-server`. Now we can see debugger and we need to install required plugins from more option.

# Folder Structure

 We have src folder, In that

 Components Folder - Use for write custom and common components in it

 Hooks Folder - Use for write the custom hook components(Utils)

 Services Folder - Use for write API calls

 Store Folder - Use for handle the Redux

 Assets Folder - Use for store images and icons

 Screen Folder - Use for screen view controller

