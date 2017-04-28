  function mostrarAlerta(icono, texto, tipo) {
            $.notify({
                // options
                icon: icono,
                message: texto,
            }, {
                    // settings
                    element: 'body',
                    position: null,
                    type: tipo,
                    allow_dismiss: true,
                    newest_on_top: false,
                    showProgressbar: false,
                    placement: {
                        from: "top",
                        align: "center"
                    },
                    offset: 20,
                    spacing: 10,
                    z_index: 1031,
                    delay: 1000,
                    timer: 1000,
                    url_target: '_blank',
                    mouse_over: null,
                    animate: {
                        enter: 'animated fadeInDown',
                        exit: 'animated fadeOutUp'
                    },
                    onShow: null,
                    onShown: null,
                    onClose: null,
                    onClosed: null,
                    icon_type: 'class'
                });

            $(".btn").removeClass("disabled");
        }