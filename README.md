## I. Core Knowledge:

    1. What is React Native:

        - Special React Components collection that can be translated to native code.

        - Allow developer to code in javascript and access Native API.

        - More about React Native here:
            https://drive.google.com/file/d/1MUiQ_yv5gk15TtM_daZNFhOqfXvktCE8/view?usp=sharing

    2. How Does React Native Work:

        - For Views, Instead of using HTML components, predefined React Native Components is used. Views are complied to Native Code so we have the performance of Native app

        - Predefined react native components looks like html tag with <> and a word (First word is Capitalized)

        - Javascript logic is not compiled to Native code.          +, There will be small virtual machine that will be     able to communicate with Native API.
            +, Views oftenly are more intensive loading part so able to convert Views to native app boost great performance

        - Behind the Scene:
            https://drive.google.com/file/d/1m-_TI6-HNWSK1RplBYRxhKB_SMDg0XzL/view?usp=sharing

        - More Details:
            https://drive.google.com/file/d/1drXoXE2OOUZxsnzTT-JsW9LZ3I8jJEAq/view?usp=sharing

    3. 2 ways of Creating React Native Projects:

        - There are 2 ways to get started on a React Native App:
            +, Expo CLI / Tool
            +, React Native CLI

        - Expo CLI:
            +, Is a third party service that offers managed native app development.
            +, You are limited to the Expo Ecosystem (which contains a lot of Utilities).
            => Less flexibility but also less headache of managing App development

        - How Expo CLI works:
            https://drive.google.com/file/d/1_K-ncoIWpdoHeVljxw9V5FUOQbtzbCvg/view?usp=sharing

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
