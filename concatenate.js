const fs = require('fs-extra');
const concat = require('concat');

(async function build() {

    const files = [
        './dist/ng-pupload/runtime.js',
        './dist/ng-pupload/polyfills.js',
        './dist/ng-pupload/scripts.js',
        './dist/ng-pupload/main.js',
        ]

    await fs.ensureDir('elements')
    await concat(files, 'elements/ngx-pupload.js');
    await fs.copyFile('./dist/angular-elements/styles.css', 'elements/styles.css')
    await fs.copy('./dist/angular-elements/assets/', 'elements/assets/' )
})()