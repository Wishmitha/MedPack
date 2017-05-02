import  {resetDatabase} from 'meteor/xolvio:cleaner';

describe('AdminCreation', function () {
    it('method creates an admin',function () {
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
    it('method creates a doctor',function () {
        beforeEach(function () {
            resetDatabase();
        });
    });

    let emailVar = "test@gmail.com";
    let passwordVar = "test123";
    let initialsVar = "A.B.C.";
    let familyNameVar = "Doctor";
    let telNoVar = "0112345673";
    let regNoVar = "234566";
    let nicVar = "9330404789V";

    Meteor.apply('createDoctor', emailVar, passwordVar,initialsVar,familyNameVar,telNoVar,regNoVar,nicVar);
});

describe('MedicalCenterCreation', function () {
    it('method creates a medical center',function () {
        beforeEach(function () {
            resetDatabase();
        });
    });

    let nameVar = "MedicalCenterTest";
    let addressVar = "Galle, Sri Lanka";
    let telNoVar = "0912232667";
    let morningOpenVar = "Admin";
    let morningCloseVar = "0112345673";
    let eveningOpenVar = "234566";
    let eveningCloseVar = "9330404789V";

    Meteor.apply('createDoctor', nameVar,addressVar,telNoVar,morningOpenVar,morningCloseVar,eveningOpenVar,eveningCloseVar);
});

describe('PatientCreation', function () {
    it('method creates a patient',function () {
        beforeEach(function () {
            resetDatabase();
        });
    });

    let emailVar = "test@gmail.com";
    let passwordVar = "test123";
    let firstNameVar = "Test";
    let lastNameVar = "Patient";
    let genderVar = "Male";
    let ageVar = "29";
    let weightVar = "77";
    let telNoVar = "0112345673";

    Meteor.apply('createDoctor', emailVar,passwordVar,firstNameVar,lastNameVar,genderVar,ageVar,weightVar,telNoVar);
});