**Introduction**

This is the test plan markdown file for the Sprint 1 in CS684 Team Coding Donut. In the sprint 1, we developed a web based application which provides the basic authentication system which includes login, register functions. The application is developed with React for the front-end and Node Express for the backend. MySQL database is utilized to store the user information and will be connected by the Node Express. Middle Tier RESTful APIs are implemented to transmit the data. In the sprint 2, we are going to develop the news feed functions with modifications made to the sprint 1, unit testing will be used to improve the efficiency of testing. At least 10 unit tests will be added for the frontend/backend. Part of the development will follow the test-driven development process.In sprint 3, we are going to develop the custom home page and pagination. Unit test and Integration tests will be used to improve the efficiency of testing.Atleast 10 unit tests will be added for the frontend/backend.Test-driven development process will be used for better development.We go to the integration testing only after the functional testing is completed on each module of the application.

**Test Items**

Frontend UI features Backend Database Middle Tier APIs Features to be Tested

Newsfeed Function Landing Page UI Setting dialog UI Database Table Component API Components Rendering Database Connection

New features added to the homepage and the settings page are to be tested.

Integration testing to check if all the components are working together.

**Approach**

Apply manual tests with various test cases and document them properly. Ensure that the application is error free and it is working in conformance to the specified functional requirements.

Apply unit tests to the basic components such as buttons, dialogs to make sure they work properly.

Apply unit tests for the homepage landing and the pagination.Unit tests only tests the set of data and its functionality.It will not catch any errors in integration.We use integration testing for that.


**UNIT TEST STRATEGY:**

We have a test-driven development approach. So each functionality would be unit tested by the test cases written during the development. Developers must write the test before any production code and then write the code to make the test pass. Framework Junit will be used for unit testing.

**INTEGRATION TEST STRATEGY:**
•	Apply integration tests to check the unit tested modules one by one and test the behaviour as a combined unit and document them properly. Ascertain that the program is free of errors and that it meets the required functional requirements.

•	The project will use top-down integration testing. High level modules are tested first in isolation.

•	Later, low level modules or subordinate modules replace the high level modules one by one at a time and are tested. We use methods like depth-first or breadth-first search.

•	Process is repeated until each module is tested and integrated.

•	Functionalities built in Sprint 1 and Sprint 2 are also tested along with sprint 3.

**Pass/Fail Criteria**

Compare the test results to the requirement file abd check if it meets the specification. Run the unit tests and read the outcomes.

**Testing Tasks**

Ten test cases for UX requirements

Five test cases for API response code requirement

Five unit tests for test-driven-development purpose

One test case for database query

Five integration test cases for well designed testing.

**Responsibilities**

**Zhaoyuan Miao**

Implement the presistent Setting Function (Sprint 2 Fix)

Implement backend API ebdpoint [GET /category/{category}]

**Nana**

Add Pagnition function

Front end: Implement the 3 categories tab displaying articles of categories by fetching the API implemented by Zhaoyuan

**Precious**

Front end: Implement the tabs for users to choose the desired articles. (No articles displaying required at this time)

Front end: Implement the home tab displaying articles of user preference by fetching the API implemented by Varshith

**Varshith**

Update test plan and add more information about the unit test and Integration test Strategy/INFO
Implement backend API ebdpoint [GET /news/{user}]

**Schedule**

March 22 - April 14
Prepare the unit tests needed for the test driven development and develop the code March 22 - April 14 Apply manual/unit tesing and debug according to the test results.
