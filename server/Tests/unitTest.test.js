import  {resetDatabase} from 'meteor/xolvio:cleaner';

describe('AdminCreation', function () {
    it('method creates admin',function () {
        beforeEach(function () {
            resetDatabase();
        });
    });

    let emailVar = "test@gmail.com";
    let passwordVar = "test123";
    let firstNameVar = "Test";
    let lastNameVar = "Admin";
    let addressVar = "Galle, Sri Lanka";

    Meteor.apply('createAdmin', emailVar, passwordVar, firstNameVar, lastNameVar, addressVar);
});

describe('DoctorCreation', function () {
    it('method creates doctor',function () {
        beforeEach(function () {
            resetDatabase();
        });
    });

    let emailVar = "test@gmail.com";
    let passwordVar = "test123";
    let initials = "A.B.C.";
    let familyNameVar = "Admin";
    let telNoVar = "0112345673";
    let regNoVar = "234566";
    let nicVar = "9330404789V";

    Meteor.apply('createDoctor', emailVar, passwordVar,initials,familyNameVar,telNoVar,regNoVar,nicVar);
});