let showStatusEmoji = true;

window.onload = function() {
    let bucketListDiv = document.getElementById("bucketList");
    for(let i = 0; i < bucketList.length; i++) {
        let itemDiv = document.createElement("div");
        itemDiv.className = "bucketItem";
        let status = bucketList[i].status;
        let emoji = "";
        switch(status) {
            case 0:
                itemDiv.className += " notDone";
                emoji = "❌";
                break;
            case 1:
                itemDiv.className += " inProgress";
                emoji = "⏳";

		let progress = bucketList[i].progress;
                let goal = bucketList[i].goal;
		let pct = bucketList[i].pct;
                var percentage = 0;

                if (typeof progress === 'number' && typeof goal === 'number' && progress >= 0 && goal > 0) {
                    percentage = Math.floor((progress / goal) * 100);
                }

		if (typeof pct === 'number' && pct > 0) {
                    percentage = pct;
                }

		itemDiv.setAttribute("data-progress", percentage);
		itemDiv.style.background = `linear-gradient(to right,
                                        #eddf61 0%,
                                        #eddf61 ${percentage}%,
                                        #ffffcc ${percentage}%,
                                        #ffffcc 100%)`;

                break;
            case 2:
                itemDiv.className += " done";
                emoji = "✅";
                break;
        }

	if(!showStatusEmoji) emoji = "";

        itemDiv.innerText = bucketList[i].item + " " + emoji;
        bucketListDiv.appendChild(itemDiv);
    }
}
