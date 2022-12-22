Team RH Engineer Technical Test
==================================

Welcome to the Team RH Technical Test!

We hope that you find this exercise fun and interesting. There are no trick questions; we want to see your solution to a simple problem with well thought-out and well structured code.

## Coding Test

You should use the public WGER API [https://wger.de/en/software/api](https://wger.de/en/software/api) to get exercise information. We'd specifically like you to use the `exercise` endpoint that is documented at [https://wger.de/api/v2/exercise/](https://wger.de/api/v2/exercise/) and filter by the muscles that the exercise trains.

As an example, [https://wger.de/api/v2/exercise?muscles=1](https://wger.de/api/v2/exercise?muscles=1) returns a list of exercises that train biceps.

The task is to create an application that accepts a muscle as a parameter. The application should then display the following information about each exercise that trains that muscle by querying the API:

- Name
- Description
- Other muscles the exercise trains (if any)

The specific muscle IDs can be retrieved from [https://wger.de/api/v2/muscle](https://wger.de/api/v2/muscle)

### Platform Choice

You can create the application as either a command line application, web application or mobile application in any of the following platforms

- JavaScript/TypeScript with React for web applications.
- JavaScript/TypeScript for command line applications
- iOS or Android for mobile applications

Think about the type of role you are applying for and **choose an appropriate application type and platform**.

### Task requirements

Feel free to spend as much or as little time on this as you like as long as the following requirements have been met. However, we understand people have busy lives and would guide you to spend no more than 2-3 hours on a submission.

Please include a readme that details some of your choices and what you would like to have added if you had more time. You should look at this as the complete solution, it's much quicker to explain what you would like to have done than code it.

- Please complete the user story below.
- Feel free to use whatever libraries / packages you like in the context of the technologies detailed above.
- You **must** include tests.

### User Story

Given I am a **user running the application**

When I **submit a muscle (e.g. biceps)**

Then I want to see a **list of exercises**

And I only want to see **exercises that train that muscle**

#### Acceptance criteria

- For the known muscle `biceps`, results are returned
- For each exercise, the name, description and other muscles trained are displayed

# The deliverable
Please submit a git repository (Github/Bitbucket etc.) that includes your code, along with a README that contains:
- A covering note explaining the choices you have made and what you would like to have added if you had more time.
- Any instructions required to run your solution and tests in a unix environment.

#### Thanks for your time, we look forward to hearing from you!
