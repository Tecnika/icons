function func_start() {
    var body = document.querySelector('body');
    var svg_list = body.querySelector('.all_icon');
    var icons = svg_list.querySelectorAll('.icon_card');
    var names_svg = icons.querySelectorAll(".name_card");
    var packs_svg = icons.querySelectorAll(".pack");
    var metas_svg = icons.querySelectorAll(".meta");
    var tags_svg = icons.querySelectorAll(".tag");
    console.log(icons);
    console.log(names_svg);
    console.log(packs_svg);
    console.log(metas_svg);
    console.log(tags_svg);
}

function changeSVG() {
    let name_svg = document.querySelector('.name_card');
    localStorage.setItem("name_svg", name_svg);
    console.log(name_svg);
    // name_svg.forEach(svg => svg.onclick = function(event) {
    //     event.target.style.backgroundColor = 'yellow';
    //     console.log("chto - to est");

    // });
}