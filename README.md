### Deploy on GitHub Pages

###### Install base requirements
Navigate to https://nodejs.org/en/ and install Node.JS

###### Checkout git repository
Run `git clone https://github.com/DeBitcoinShow/debitcoinshow.github.io.git`

###### Change into correct folder
Run `cd ./debitcoinshow.github.io/frontend`

###### Install/check all required dependencies
Run `npm install`

###### Build project (update Github username placeholder)
Run `ng build --prod --base-href "https://{GithubUserName}.github.io/debitcoinshow.github.io/"`

###### Deploy to GitHub Pages
Run `npx ngh angular-cli-ghpages`
