module.exports = {
    url: 'https://admin.saleshub.io/users/login',
    elements: {
        //login
            canvassApp: 'a[class="enabled app-canvass"]',
            canvass: 'div[class="current-app"]',
            companyURL: 'input[placeHolder="Company URL"]',
            loginButton: 'button[type="submit"]', 
            password: 'input[placeHolder="Password"]',
            salesHub: 'div[class="current-app"]',
            username: 'input[placeHolder="Username"]',

        //custom fields
            active: 'input[type="checkbox"]',
            cancel: 'a[class="cancel-button"]',
            customFieldsTab: 'a[href="/customFields"]',
            customFieldsTitle: 'h1',
            newField: 'a[href="/customFields/add"]',
            newFieldName: 'input[name="name"]',
            save: 'button',
            type4: 'option[value="checkbox"]',

            //xpath
                testing: {
                    selector: '//a[.="Testing"]',
                    locateStrategy: 'xpath'
                },

        //edit custom field
            editFieldName:'input[name="name"]',
            type2: 'option[value="textarea"]',
        
            //xpath
                testingName: {
                    selector: '//a[.="DVLOP"]',
                    locateStrategy: 'xpath'
                 },

    }
}