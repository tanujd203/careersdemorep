  $(document).ready(function() {
    $('#msform').bootstrapValidator({
        // To use feedback icons, ensure that you use Bootstrap v3.1.0 or later
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            fname: {
                validators: {
                        stringLength: {
                        min: 2,
                    },
                        notEmpty: {
                        message: 'Please provide your first name'
                    }
                }
            },
             lname: {
                validators: {
                     stringLength: {
                        min: 2,
                    },
                    notEmpty: {
                        message: 'Please provide your last name'
                    }
                }
            },
            emailid: {
                validators: {
                    notEmpty: {
                        message: 'Please provide your email address'
                    },
                    emailAddress: {
                        message: 'Please write a valid email address'
                    }
                }
            },
            mobilenumber: {
                validators: {
                    notEmpty: {
                        message: 'Please provide your phone number'
                    },
                    phone: {
                        country: 'US',
                        message: 'Please enter a vaild phone number with area code'
                    }
                }
            },
            addr1: {
                validators: {
                     stringLength: {
                        min: 8,
                    },
                    notEmpty: {
                        message: 'Please supply your street address'
                    }
                }
            },
/*            city: {
                validators: {
                     stringLength: {
                        min: 4,
                    },
                    notEmpty: {
                        message: 'Please supply your city'
                    }
                }
            },*/
            workexyears: {
                validators: {
                    notEmpty: {
                        message: 'Please select your work experience in years'
                    }
                }
            },
            workexmonths: {
                validators: {
                    notEmpty: {
                        message: 'Please select your work experience in years'
                    }
                }
            },
            bgrad: {
                validators: {
                    notEmpty: {
                        message: 'Please select your graduation'
                      
                    }
                }
            },
            industry: {
                validators: {
                    notEmpty: {
                        message: 'Please select your industry'
                    }
                }
            },
            function: {
                validators: {
                    notEmpty: {
                        message: 'Please select your functional area'
                    }
                }
            },
            current: {
                validators: {
                     stringLength: {
                        min: 8,
                    },
                    notEmpty: {
                        message: 'Please supply your surrent/last company name'
                    }
                }
            },
/*            zip: {
                validators: {
                    notEmpty: {
                        message: 'Please supply your zip code'
                    },
                    zipCode: {
                        country: 'US',
                        message: 'Please supply a vaild zip code'
                    }
                }
            },
            comment: {
                validators: {
                      stringLength: {
                        min: 10,
                        max: 200,
                        message:'Please enter at least 10 characters and no more than 200'
                    },
                    notEmpty: {
                        message: 'Please supply a description of your project'
                    }
                    }
                }*/
            }
        })
        .on('success.form.bv', function(e) {
            $('#success_message').slideDown({ opacity: "show" }, "slow") // Do something ...
                $('#msform').data('bootstrapValidator').resetForm();

            // Prevent form submission
            e.preventDefault();

            // Get the form instance
            var $form = $(e.target);

            // Get the BootstrapValidator instance
            var bv = $form.data('bootstrapValidator');

            // Use Ajax to submit form data
            $.post($form.attr('action'), $form.serialize(), function(result) {
                console.log(result);
            }, 'json');
        });
});