## I. Core Knowledge:

    1. What is React Native:

        - Special React Components collection that can be translated to native code.

        - Allow developer to code in javascript and access Native API.

        - More about React Native here:
            https://drive.google.com/file/d/1LRnM597UJuZkAl3fHH1Cb3-yMaYopHeQ/view?usp=sharing

    2. How Does React Native Work:

        - For Views, Instead of using HTML components, predefined React Native Components is used. Views are complied to Native Code so we have the performance of Native app

        - Predefined react native components looks like html tag with <> and a word (First word is Capitalized)

        - Javascript logic is not compiled to Native code.
            +, There will be small virtual machine that will be able to communicate with Native API.
            +, Views oftenly are more intensive loading part so able to convert Views to native app boost great performance

        - Behind the Scene:
            https://drive.google.com/file/d/1MMoCFIHmhOQe30I1SuWloeCxVwKJC4AX/view?usp=sharing

            +, UI get compiled while javascript logics are not:
            https://drive.google.com/file/d/1o0SMqRokp-143cLc6PmMq3rQZlpJi_AO/view?usp=sharing

        - More Details:
            https://drive.google.com/file/d/1eMO2Nt6ZaSlMasXBZpI0uuO4Yn3ruPSa/view?usp=sharing

    3. 2 ways of Creating React Native Projects:

        - There are 2 ways to get started on a React Native App:
            +, Expo CLI / Tool
            +, React Native CLI

        - Expo CLI:
            +, Is a third party service that offers managed native app development.
            +, You are limited to the Expo Ecosystem (which contains a lot of Utilities).
            => Less flexibility but also less headache of managing App development

        - How Expo CLI works:
            https://drive.google.com/file/d/1eW-E6Q06jg_kD6d09iiB2qqmHJOGQo0D/view?usp=sharing

        - React Native CLI:
            +, Is bare-bone development set up which is created by React Native Team.
            +, Has almost no Utility Feature but full flexibility (allow you to Integraet with any Native Code).
            +, Can always swich from Expo CLI to React Native CLI

        - Create React Native Project:
            https://docs.expo.io/
            $ expo init project-name

## II. Module Notes:

1.  3rd Commit:
    (Video 1 - 25)

        - Content:
          +, Components and Styling in React Native
          +, Flexbox in React Native

        a. Component and Styling in React Native:

             - React Native has its own core component that looks
                 like HTML but it's not HTML

             - Look for 'How Does React Native Work' above

             - See App.js to see styling convention:
                 +, CSS is not understood by React Native
                 +, So React Native has its own convention for Styling that looks similiar to CSS

        b. Flexbox in React Native:

            - Recommend reviewing Flexbox in Web Development
                to easier understand Flexbox in React Native

            - Flexbox is the default styling / layout behavior of a <View> component

            - See App.js, notice the following fields:
                +, flexDirection
                +, justifyContent
                +, alignItems
                +, flex

            - See video 25 or the link down below for further info:
            https://reactnative.dev/docs/flexbox

2.  4th Commit: StyleSheet Objects

        - StyleSheet Objects currently is no different than
        JavaScript Object. But in the future, this may
        bring more optimized performance to the application.

        => Doesn't hurt to use and good practice

        - See App.js, Video 26

3.  5th Commit: State and Events Management

    - See App.js, Video 27
    - Notice the following:
      +, console.log() > will log content to VSCode terminal
      +, Events: onChangeText, onPress
    - Managing State

4.  6th Commit: Rendering List

        - See App.js, Video 28 - 30
        - Notice how to render list just like React.js
        (Key and Content with different Components)
        - Notice ScrollView: this allow the list to be scrollable

5.  7th Commit: FlatList

        - Other way of rendering list
        - Better performance than ScrollView when it comes
        to a really long list
        - Things to notice:
        +, Data array has to have a key item and value item in any child
        +, keyExtractor extract the key data to automatically
        assign keys to children
        - See App.js, Video 31

6.  8th Commit:
    Splitting Code into Components and working with Touchable Components

        - Splitting Code into Components:
        +, See ./components/GoalItem.js and ./components/GoalInput.js:
        +, See how to pass and manipulate data between components

        - Working with Touchable Components:
        +, onPress event doesn't works on every components
        +, We oftenly use Touchable components
        wrap around the View to handle the press event
        +, See ./components/GoalItem.js
        +, With TouchableOpacity, we are able to set activeOpacity
        which is the opacity when item is clicked

7.  9th Commit:
    Delete Item in List and Adding A Modal

        - Delete Item in List:
        +, App.js: See removeGoalHandler()
        +, ./components/GoalItem.js: See onPress and onDelete

        - Show Modal:
        +, App.js: see how isAddMode state is managed
        +, ./components/GoalInput.js: see the Modal component

8.  10th Commit:
    Add more stylings to modal

        - Recommend re-learn Flexbox
        - Course Goals app completion

## III. Useful Resources and Links:

        - Official Docs: https://facebook.github.io/react-native/docs/getting-started

        - Overview of available Components & APIs: https://facebook.github.io/react-native/docs/components-and-apis

        - Expo Docs: https://docs.expo.io/versions/latest/

---

## SECTION 3: DEBUGGING:

## I. CORE CONCEPTS:

1.  What to Debugs:

        - Error Message / App Crashes:
            +, Syntax Errors
            +, Bugs in code (undefined values, wrong types, etc.)
            +, Unavoidable errors (e.g: Network failing error)

        - Logical Errors:
            +, Undesired or unexpected app behavior
            +, Unexpected / Unhandled user behavior
            +, Sequence of steps lead to errors

        - Styling, Layout & UX:
            +, Wrong styling, layout
            +, Inconsistent result on different devices
            +, Layout doesn't work on certain devices or
                orientation

2.  How to Debug:

        - Read error messages
        - Use console.log() to get a feeling for
            the flow of your code
        - Chrome Debugger (+ Breakpoints)

3.  Debugger Tools:

        Opening Native Debugger Menu:
        IOS Emulator: cmd + D
        Android: cmd or ctrl + m
        We will see the menu with the options down below

        - Remote Debugger & Breakpoints: see this tools in video 47
        - Device DevTools Overlay: Video 48
        - Debugging the UI & Using React Native Debugger:
            +, cmd + D
            > 'show element inspector'
            > now able to inspect UI like in browser
        - React Native Debugger:
            +, Bring the same debug experience as chrome dev tool
            +, open "React Native Debugger"
            +, Press cmd + T > Confirm the port
            +, Should be able to see the debugger tool now

## II. USEFUL RESOURCES:

        - Expo Debugging Docs: https://docs.expo.io/versions/v34.0.0/workflow/debugging/

        - Chrome Dev Tools Docs: https://developers.google.com/web/tools/chrome-devtools/
