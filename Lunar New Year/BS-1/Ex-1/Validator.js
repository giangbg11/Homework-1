//ham validator
function Validator(options){
    date='';
        gender='';
        firstName = $("#js-first-name").val();
        lastName = $("#js-last-name").val();
        gender =$( "input:checked" ).val()
        date = $("#js-date").val();
        if(firstName && lastName){
            $('#result').html(firstName+'<br>'+lastName+'<br>'+date+'<br>'+gender);
        }else {
            $('#result').html('');
        }

        return false;
    }

//định nghĩa rules

$("#reg-form").validate({
        rules: {
            "first-name": "required",
            "last-name": "required",
        },
        messages: {
            "first-name": "<div class='text-danger'>Trường này bắt buộc nhập</div>",
            "last-name": "<div class='text-danger'>Trường này bắt buộc nhập</div>",
        }
    });
