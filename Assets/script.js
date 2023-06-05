// validaciones.js



$(document).ready(function () {
    $("#nombre").blur(function () {
        var nombre = $(this).val();
        if (nombre.length <= 6 || !nombre.includes(" ")) {
            $(this).addClass("is-invalid");
        } else {
            $(this).removeClass("is-invalid");
        }
    });

    $("#email").blur(function () {
        var email = $(this).val();
        var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
        if (!emailReg.test(email)) {
            $(this).addClass("is-invalid");
        } else {
            $(this).removeClass("is-invalid");
        }
    });

    $("#password").blur(function () {
        var password = $(this).val();
        var passwordReg = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
        if (!passwordReg.test(password)) {
            $(this).addClass("is-invalid");
        } else {
            $(this).removeClass("is-invalid");
        }
    });

    $("#password-repeat").blur(function () {
        var password = $("#password").val();
        var passwordRepeat = $(this).val();
        if (password !== passwordRepeat) {
            $(this).addClass("is-invalid");
        } else {
            $(this).removeClass("is-invalid");
        }
    });

    $("#edad").blur(function () {
        var edad = $(this).val();
        if (edad < 18) {
            $(this).addClass("is-invalid");
        } else {
            $(this).removeClass("is-invalid");
        }
    });

    $("#telefono").blur(function () {
        var telefono = $(this).val();
        var telefonoReg = /^\d{7,}$/;
        if (!telefonoReg.test(telefono)) {
            $(this).addClass("is-invalid");
        } else {
            $(this).removeClass("is-invalid");
        }
    });

    $("#direccion").blur(function () {
        var direccion = $(this).val();
        if (direccion.length < 5 || !direccion.includes(" ")) {
            $(this).addClass("is-invalid");
        } else {
            $(this).removeClass("is-invalid");
        }
    });

    $("#ciudad").blur(function () {
        var ciudad = $(this).val();
        if (ciudad.length < 3) {
            $(this).addClass("is-invalid");
        } else {
            $(this).removeClass("is-invalid");
        }
    });

    $("#postal").blur(function () {
        var postal = $(this).val();
        if (postal.length < 3) {
            $(this).addClass("is-invalid");
        } else {
            $(this).removeClass("is-invalid");
        }
    });

    $("#dni").blur(function () {
        var dni = $(this).val();
        var dniReg = /^\d{7,8}$/;
        if (!dniReg.test(dni)) {
            $(this).addClass("is-invalid");
        } else {
            $(this).removeClass("is-invalid");
        }
    });

    // Elimina el mensaje de error cuando el usuario intenta corregir el error
    $("input").focus(function () {
        $(this).removeClass("is-invalid");
    });

    // Validación en la presentación del formulario
    $("#myForm").submit(function (event) {
        event.preventDefault();
        if ($(".is-invalid").length) {
            alert("Por favor, corrija los errores en el formulario.");
        } else {
            alert("Formulario enviado correctamente.");
        }
    });
});
``

// Repite un bloque de código similar para cada campo, ajustando las condiciones de validación como sea necesario.

// Elimina el mensaje de error cuando el usuario intenta corregir el error
$("input").focus(function () {
    $(this).removeClass("is-invalid");
});

// Validación en la presentación del formulario
$("#myForm").submit(function (event) {
    event.preventDefault();
    if ($(".is-invalid").length) {
        alert("Por favor, corrija los errores en el formulario.");
    } else {
        alert("Formulario enviado correctamente.");
    }
});
