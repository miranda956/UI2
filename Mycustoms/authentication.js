"use strict";

// Class Definition
var KTLogin = function() {
    var _login;

    var _showForm = function(form) {
        var cls = 'login-' + form + '-on';
        // @ts-ignore
        var form = 'kt_login_' + form + '_form';

        _login.removeClass('login-forgot-on');
        _login.removeClass('login-signin-on');
        _login.removeClass('login-signup-on');

        _login.addClass(cls);

        // @ts-ignore
        KTUtil.animateClass(KTUtil.getById(form), 'animate__animated animate__backInUp');
    }

    var _handleSignInForm = function() {
        var validation;

        // Init form validation rules. For more info check the FormValidation plugin's official documentation:https://formvalidation.io/
        // @ts-ignore
        validation = FormValidation.formValidation(
			// @ts-ignore
			KTUtil.getById('kt_login_signin_form'),
			{
				fields: {
					mobile: {
						validators: {
							notEmpty: {
								message: 'mobile is required'
							}
						}
					},
					password: {
						validators: {
							notEmpty: {
								message: 'Password is required'
							}
						}
					}
				},
				plugins: {
                    // @ts-ignore
                    trigger: new FormValidation.plugins.Trigger(),
                    // @ts-ignore
                    submitButton: new FormValidation.plugins.SubmitButton(),
                    //defaultSubmit: new FormValidation.plugins.DefaultSubmit(), // Uncomment this line to enable normal button submit after form validation
					// @ts-ignore
					bootstrap: new FormValidation.plugins.Bootstrap()
				}
			}
		);

        // @ts-ignore
        $('#kt_login_signin_submit').on('click', function (e) {
			e.preventDefault();
			console.log("your button has been clicked");

            validation.validate().then(function(status) {
				if (status == 'Valid') {
					// @ts-ignore
					var phone = $("input[name='phone']").val();
					// @ts-ignore
					var password = $("input[name='password']").val();
					var url = "http://172.105.167.182:8081/login";
					console.log(`${phone} ${password}`)
					
					fetch(url,{
						method:'post',
						headers: {
							'Content-Type': 'application/json'
						  },
						body:JSON.stringify({phone:phone,password:password})
					})
					.then(res=>{	
						return res.json();
						//if(res.ok){
							//return res.json();
					//	}else{
						//	throw new Error('Login error');
							
						//}
					})
					// @ts-ignore
					.then(res=>{
						//window.sessionStorage.setItem("phone",phone)
						//console.log("just any text");
							
							//window.sessionStorage.setItem('token',res.authenticationToken);
							//window.sessionStorage.setItem('firstname',res.firstName);
							//console.log(res.headers.get("Authorisation"));
							window.location.href="login-1.html"
						
					})
					// @ts-ignore
					.catch((error) => {
						window.sessionStorage.clear();
							// @ts-ignore
							swal.fire({
								text:'Invalid Login credentials',
								icon: "error",
								buttonsStyling: false,
								confirmButtonText: "Retry",
								customClass: {
								confirmButton: "btn font-weight-bold btn-light-primary"
								}
							})
					  });
				} else {
					// @ts-ignore
					swal.fire({
		                text: "Sorry, looks like there are some errors detected, please try again.",
		                icon: "error",
		                buttonsStyling: false,
		                confirmButtonText: "Ok",
                        customClass: {
    						confirmButton: "btn font-weight-bold btn-light-primary"
    					}
		            }).then(function() {
						// @ts-ignore
						KTUtil.scrollTop();
					});
				}
		    });
                   /* swal.fire({
		                text: "All is cool! Now you submit this form",
		                icon: "success",
		                buttonsStyling: false,
		                confirmButtonText: "Ok, got it!",
                        customClass: {
    						confirmButton: "btn font-weight-bold btn-light-primary"
    					}
		            }).then(function() {
						KTUtil.scrollTop();
					});
				} else {
					swal.fire({
		                text: "Sorry, looks like there are some errors detected, please try again.",
		                icon: "error",
		                buttonsStyling: false,
		                confirmButtonText: "Ok, got it!",
                        customClass: {
    						confirmButton: "btn font-weight-bold btn-light-primary"
    					}
		            }).then(function() {
						KTUtil.scrollTop();
					});*/
				
		    });
        

        // Handle forgot button
        // @ts-ignore
        $('#kt_login_forgot').on('click', function (e) {
            e.preventDefault();
            _showForm('forgot');
        });

        // Handle signup
        // @ts-ignore
        $('#kt_login_signup').on('click', function (e) {
            e.preventDefault();
            _showForm('signup');
        });
    }

    // @ts-ignore
    var _handleSignUpForm = function(e) {
        var validation;
        // @ts-ignore
        var form = KTUtil.getById('kt_login_signup_form');

        // Init form validation rules. For more info check the FormValidation plugin's official documentation:https://formvalidation.io/
        // @ts-ignore
        validation = FormValidation.formValidation(
			form,
			{
				fields: {
					fullname: {
						validators: {
							notEmpty: {
								message: 'Username is required'
							}
						}
					},
					email: {
                        validators: {
							notEmpty: {
								message: 'Email address is required'
							},
                            emailAddress: {
								message: 'The value is not a valid email address'
							}
						}
					},
                    password: {
                        validators: {
                            notEmpty: {
                                message: 'The password is required'
                            }
                        }
                    },
                    cpassword: {
                        validators: {
                            notEmpty: {
                                message: 'The password confirmation is required'
                            },
                            identical: {
                                compare: function() {
                                    return form.querySelector('[name="password"]').value;
                                },
                                message: 'The password and its confirm are not the same'
                            }
                        }
                    },
                    agree: {
                        validators: {
                            notEmpty: {
                                message: 'You must accept the terms and conditions'
                            }
                        }
                    },
				},
				plugins: {
					// @ts-ignore
					trigger: new FormValidation.plugins.Trigger(),
					// @ts-ignore
					bootstrap: new FormValidation.plugins.Bootstrap()
				}
			}
		);

        // @ts-ignore
        $('#kt_login_signup_submit').on('click', function (e) {
            e.preventDefault();

            validation.validate().then(function(status) {
		        if (status == 'Valid') {
                    // @ts-ignore
                    swal.fire({
		                text: "All is cool! Now you submit this form",
		                icon: "success",
		                buttonsStyling: false,
		                confirmButtonText: "Ok, got it!",
                        customClass: {
    						confirmButton: "btn font-weight-bold btn-light-primary"
    					}
		            }).then(function() {
						// @ts-ignore
						KTUtil.scrollTop();
					});
				} else {
					// @ts-ignore
					swal.fire({
		                text: "Sorry, looks like there are some errors detected, please try again.",
		                icon: "error",
		                buttonsStyling: false,
		                confirmButtonText: "Ok, got it!",
                        customClass: {
    						confirmButton: "btn font-weight-bold btn-light-primary"
    					}
		            }).then(function() {
						// @ts-ignore
						KTUtil.scrollTop();
					});
				}
		    });
        });

        // Handle cancel button
        // @ts-ignore
        $('#kt_login_signup_cancel').on('click', function (e) {
            e.preventDefault();

            _showForm('signin');
        });
    }

    // @ts-ignore
    var _handleForgotForm = function(e) {
        var validation;

        // Init form validation rules. For more info check the FormValidation plugin's official documentation:https://formvalidation.io/
        // @ts-ignore
        validation = FormValidation.formValidation(
			// @ts-ignore
			KTUtil.getById('kt_login_forgot_form'),
			{
				fields: {
					email: {
						validators: {
							notEmpty: {
								message: 'Email address is required'
							},
                            emailAddress: {
								message: 'The value is not a valid email address'
							}
						}
					}
				},
				plugins: {
					// @ts-ignore
					trigger: new FormValidation.plugins.Trigger(),
					// @ts-ignore
					bootstrap: new FormValidation.plugins.Bootstrap()
				}
			}
		);

        // Handle submit button
        // @ts-ignore
        $('#kt_login_forgot_submit').on('click', function (e) {
            e.preventDefault();

            validation.validate().then(function(status) {
		        if (status == 'Valid') {
                    // Submit form
                    // @ts-ignore
                    KTUtil.scrollTop();
				} else {
					// @ts-ignore
					swal.fire({
		                text: "Sorry, looks like there are some errors detected, please try again.",
		                icon: "error",
		                buttonsStyling: false,
		                confirmButtonText: "Ok, got it!",
                        customClass: {
    						confirmButton: "btn font-weight-bold btn-light-primary"
    					}
		            }).then(function() {
						// @ts-ignore
						KTUtil.scrollTop();
					});
				}
		    });
        });

        // Handle cancel button
        // @ts-ignore
        $('#kt_login_forgot_cancel').on('click', function (e) {
            e.preventDefault();

            _showForm('signin');
        });
    }

    // Public Functions
    return {
        // public functions
        init: function() {
            // @ts-ignore
            _login = $('#kt_login');

            _handleSignInForm();
            _handleSignUpForm();
            _handleForgotForm();
        }
    };
}();

// Class Initialization
// @ts-ignore
jQuery(document).ready(function() {
    KTLogin.init();
});
