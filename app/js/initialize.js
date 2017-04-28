import rotateTitle from "rotateTitle";

const initialize = ()=>{
    //Initialize all tooltips
    $('[data-toggle="tooltip"]').tooltip();

    rotateTitle();
}

export default initialize;