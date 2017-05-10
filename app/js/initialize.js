import rotateTitle from "rotateTitle";
import "../../node_modules/sweetalert/dist/sweetalert.min.js";

const initialize = ()=>{
    //Initialize all tooltips
    $('[data-toggle="tooltip"]').tooltip();

    rotateTitle();

    // Temporary code -- Removed after blog and project sections are up.
    const btns = document.querySelectorAll('.btn-custom');
    btns.forEach(btn=>{
        btn.addEventListener('click', (e)=>{
            e.preventDefault();
            swal({
                title: "Under Construction",
                text: "This section is under construction! Will be up soon!",
                type: "info",
                showCancelButton: true,
                closeOnConfirm: false,
                showLoaderOnConfirm: true,
                allowEscapeKey: true
            })
        });
    });
}

export default initialize;