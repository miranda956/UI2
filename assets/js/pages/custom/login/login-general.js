// @ts-nocheck
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
					var phone = $("input[name='phone']").val();
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
						if (res.ok) {
							window.sessionStorage.setItem("token", res.headers.get('Authorization'))
							window.location.href="dashboard.html"
						}else{
							throw new Error('Login error');
						}
					})
					
					.catch((error) => {
						window.sessionStorage.clear();
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
					swal.fire({
		                text: "Sorry, looks like there are some errors detected, Check if fields are empty.",
		                icon: "error",
		                buttonsStyling: false,
		                confirmButtonText: "Ok",
                        customClass: {
    						confirmButton: "btn font-weight-bold btn-light-primary"
    					}
		            }).then(function() {
						KTUtil.scrollTop();
					});
				}
		    });
				
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
  

	var geolocation= ()=>{
        if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position)=>{
            return [position.coords.latitude,position.coords.longitude]  
        });
        } else {
            return [];
        
        }
    }
  
    // @ts-ignore
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
					firstName: {
						validators: {
							notEmpty: {
								message: ' firstName is required'
							}
						}
					},
					secondName: {
						validators: {
							notEmpty: {
								message: ' secondName is required'
							}
						}
					},
					Email: {
                        validators: {
							notEmpty: {
								message: 'Email address is required'
							},
                            emailAddress: {
								message: 'The value is not a valid email address'
							}
						}
					},
					Phone: {
						validators: {
							notEmpty: {
								message: ' phone is required'
							},regexp: {
								regexp: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
								message: 'The phone can only have  number and underscore'
							}
						}
					},
                    Password: {
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
				alert("To register a provider we need to access your location");
		        if (status == 'Valid') {
					// @ts-ignore
					var firstName = $("input[name='firstName']").val();
					// @ts-ignore
					var secondName = $("input[name='secondName']").val();

					// @ts-ignore
					var email = $("input[name='Email']").val();

					// @ts-ignore
					var phone = $("input[name='Phone']").val();

					// @ts-ignore
					var password= $("input[name='Password']").val();

					// @ts-ignore
					let geoloc=geolocation();

					if(location.length==0){
						geoloc=geolocation();
					}

					console.log(`${firstName} ${secondName} ${email}${phone} ${password}`);
					

					var url = "http://172.105.167.182:8081/admin/provider";
 
					fetch(url,{
						method:'post',
						headers: {
							'Content-Type': 'application/json',

						  },
						body:JSON.stringify({firstName:firstName,secondName:secondName,email:email,phone:phone,password:password ,position:geoloc})
                 
					}).then(res=>{
						if(res.ok){
							window.sessionStorage.setItem("token", res.headers.get('Authorization'))
							window.location.href="dashboard.html"
						}else{
							throw new Error('error occured during regestration');
						}
					}).catch((error)=>{
						window.sessionStorage.clear();
							// @ts-ignore
							swal.fire({
								text:'enter correct details',
								icon: "error",
								buttonsStyling: false,
								confirmButtonText: "Retry",
								customClass: {
								confirmButton: "btn font-weight-bold btn-light-primary"
								}
							})
					})

                    // @ts-ignore

                    
				} else {
					// @ts-ignore
					swal.fire({
		                text: "Sorry, looks like there are some errors detected, Check if fields are empty.",
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
        });

        // Handle cancel button
        // @ts-ignore
        $('#kt_login_signup_cancel').on('click', function (e) {
            e.preventDefault();

            _showForm('signin');
        });
    }

    // @ts-ignore
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
