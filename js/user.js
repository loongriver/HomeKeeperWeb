function validate_email(field, alerttxt) {
    var value = field.value;
    with (field) {
        if (value == null || value == "") {
            alert(alerttxt);
            return false;
        }
        else {
            var apos = value.indexOf("@");
            var dotpos = value.lastIndexOf(".");
            if (apos < 1 || dotpos - apos < 2) {
                alert(alerttxt);
                return false;
            }
            else {
                alert("true");
                return true;
            }
        }
    }
}

function check_email() {
    email = $("#email").value;
    confirm = $("#confirm").value;
    if (email == confirm) {
        alert("yes");
    }

}
function form_submit() {
    $("email_form").submit();
}
