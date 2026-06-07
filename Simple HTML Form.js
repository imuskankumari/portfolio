 
    function validateForm()
    {
        var name = document.forms["RegForm"] ["Name"];
        var email = document.forms["RegForm"] ["E-mail"]
        var phone = document.forms["RegForm"] ["TelePhone"]
        var what = document.forms["RegForm"] ["Subject"]
        var passward = document.forms["RegForm"] ["Passward"]
        var address = document.forms["RegForm"] ["Address"]
        if (name.value=="")
        {
            window.alert("Please Enter your name.");
            name.focus();
            return false;
        }
        if (address.value=="")
        {
            window.alert("Please Enter Your Address");
            address.focus();
            return false;
        }
        if (email.value=="")
        {
            window.alert("Please enter a valid e-mail address.");
            email.focus();
            return false;
        }
        if (phone.value=="")
        {
            window.alert("Please enter a valid telephone number.");
            phone.focus();
            return false;
        }
        if (Passward.value=="")
        {
            window.alert("Please enter your passward");
            passward.focus;
            return false;
        }
        if (what.selectedIndex < 1)
        {
            alert("Please enter your course.");
            what.focus();
            return false;
        }
        
    }
 