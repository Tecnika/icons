$(() => {
	document.getElementById("filepicker").addEventListener(
		"change",
		function (event) {
			let files = event.target.files;

			for (let i = 0; i < files.length; i++) {
				let src = files[i].webkitRelativePath;
				$('.container_list').append(
					`
                    <div class="search_block container">
                        <div class="icon_visible horisontal">
                            <img src="${src}">
                        </div>
                        <div class="tag_table vertical">
                            <div class="packs group"> 1</div>
                            <div class="metatags group">2 </div>
                            <div class="tags group"> 3</div>
                        </div>
                    </div>
                    `
				);
			}
		},
		false
	);
});
