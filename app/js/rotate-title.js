// Rotate titles in the center piece

const $title_rotate = $('#title-rotate');

const rotateTitle = ()=>{
    $title_rotate.Morphext({
        animation: 'flipInX',
        separator: "|",
        speed: 1500,
    });
}

export default rotateTitle;