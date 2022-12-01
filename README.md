# Currency Exchange

#### a short code review project for API calls

#### By Alex Johnson

## Technologies Used

* HTML
* CSS
* JavaScript
* Node.js
* bootstrap

## Description/Objectives
 
* A user should be able to enter an amount (in U.S. dollars), then specify another currency (such as the South Korean won), and submit a form. The user should then see the total amount they entered in converted currency. 
* Users should be able to convert U.S. currency into at least 5 other types of currency.
* If the API call results in an error (any message not a 200 OK), the application should return a notification to the user that states what the error is. (That means the error should show up in the DOM, not in the console.)
*If the query response doesn't include that particular currency, the application should return a notification that states the currency in question doesn't exist. (Note: Even if you use a dropdown menu to specify currencies instead of a form field, you'll still need to add this functionality to your code.)


## Setup/Installation Requirements

* Clone this repo & navigate to the root directory
* visit [Exchangerate-Api](https://www.exchangerate-api.com/) and sign up for a free API key.
* Open the .env file and replace the placeholder with your key, including the brackets. Do not modify any other text in that file. Save & close.the .env file.
* ensure the .env file is added to your .gitignore before continuing
* open a command line prompt & navigate to the root directory
* install all packages with $npm install
* build the project using $npm run build
* start a live server with $npm run start

## Known Bugs

* If you find additional bugs not listed here, please email me at alex.johnson293@gmail.com with the subject **[_Repo Name_] Bug** and include:
  * BUG: _A brief description of the bug_
  * FIX: _Suggestion for solution (if you have one!)_
  * If you'd like to be credited, please also include your **_github user profile link_**

## Additional Thanks

* img.freepik for backround image

## Future implementations


## License
MIT License

Copyright (c) 2022 Alex Johnson

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, 
INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR 
PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS 
BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE
OR OTHER DEALINGS IN THE SOFTWARE.