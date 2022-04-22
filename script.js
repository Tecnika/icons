$(() => {
    document.getElementById("filepicker").addEventListener(
        "change",
        function(event) {
            let files = event.target.files;

            for (let i = 0; i < files.length; i++) {
                let src = files[i].webkitRelativePath;
                $('.all_icon').append(
                    `
					<div class="ïcon_card vertical">
						<img class="img_card "src="${src}">
  						<p id="name_${src.split('/')[1]}" class="name_card">${src.split('/')[1]}</p>
  						<p id="pack_${src.split('/')[1]}" class="pack"> mt</p>
						<p id="meta_${src.split('/')[1]}" class="meta"> mt</p>
    					<p id="tag_${src.split('/')[1]}" class="tag"> mt</p>
					</div>
                    `
                );
            }
        },
        false
    );

})
var btn_analysis = document.querySelector('btn_analysis');
btn_analysis.onclick = func_start;