## Deploy frontend to GitHub Pages
### Install dependencies on your local system.
###### NodeJS & npm
Visit https://www.npmjs.com/get-npm and install

###### JQuery & Bootstrap 
Run `npm install jquery bootstrap`

###### QR Code generator
Run `npm install @techiediaries/ngx-qrcode`

###### Angular  CLI for Github Pages
Run `npm install angular-cli-ghpages`

### Deploy website
###### Checkout repository
Run `git clone https://github.com/DeBitcoinShow/debitcoinshow.github.io.git` 

###### Change folder
Run `cd frontend`

###### Build (replace github username placeholder)
Run `ng build --prod --base-href "https://{GithubUserName}.github.io/debitcoinshow.github.io/"` 

###### Deploy
Run `npx ngh angular-cli-ghpages`

###### Visit site
Your site should now be deployed at `https://{GithubUserName}.github.io/debitcoinshow.github.io/`

### Troubleshooting
###### Verify repository settings
Verify in the repository settings that the GitHub Pages source is `branch: gh-pages` and `/(root)`
