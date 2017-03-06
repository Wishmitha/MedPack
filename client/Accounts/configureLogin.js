AccountsTemplates.configureRoute('signIn', {
    path: '/login',
    redirect: '/main'
});

AccountsTemplates.addFields([
    {
        _id: 'firstName',
        type: 'text',
        displayName: 'First Name',
        placeholder: 'Your First Name',
        required: true,
    },
    {
        _id: 'lastName',
        type: 'text',
        displayName: 'Last Name',
        placeholder: 'Your Last Name',
        required: true,
    },
    {
        _id: 'address',
        type: 'text',
        displayName: "Address",
        placeholder: "Your Postal Address",
        required: true,
    },
    {
        _id: 'role',
        type: 'select',
        select:[
                {
                    text:'Doctor',
                    value:'doctor'
                },
                {
                    text:'Patient',
                    value:'patient'
                }
        ],
        displayName: "Role",
        placeholder: "Select Your ROle",
        required: true,
    }
]);